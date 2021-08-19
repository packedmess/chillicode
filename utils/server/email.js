import {promises as fs} from 'fs';
import path from 'path';
import ejs from 'ejs';
import logger from 'utils/server/logger';

/**
 * Creates attachments array for Nodemailer
 * @see https://nodemailer.com/message/attachments/
 * @param files {Object}
 * @return {Array<Object>}
 */
export const createAttachments = files => {
  const attachments = [];

  if (Object.entries(files).length !== 0) {
    for (const field in files) {
      const file = files[field];
      attachments.push({
        filename: file.name,
        path: file.path,
      });
    }
  }

  return attachments;
};

/**
 * Removes temporary files from tmp dir
 * @param files {Object}
 * @return {Promise<void>}
 */
export const removeTempFiles = async files => {
  try {
    for (const field in files) {
      const file = files[field];
      await fs.unlink(file.path);
    }
  } catch (err) {
    logger.error('Error removing temporary files: ', err);
  }
};

/**
 * Renders markup for email message
 * @param type {'html'|'txt'}
 * @param fieldsObj {Object} - fields from frontend
 * @returns {string} - Markup for email
 */
export const renderTemplate = async (type, fieldsObj) => {
  try {
    // Convert to flat array excluding empty fields and recaptcha code
    const fields = Object.entries(fieldsObj)
      .filter(([value]) => Boolean(value.trim().length))
      .map(([name, value]) => ({
        name: name,
        value: value,
      }));

    const template = await fs.readFile(path.resolve(process.cwd(), `templates/ejs/message.${type}.ejs`));
    return ejs.render(template.toString(), {fields});
  } catch (err) {
    logger.error('Error rendering mail template: ', err);
    return '';
  }
};
