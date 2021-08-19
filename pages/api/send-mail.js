import nodemailer from 'nodemailer';
import logger from 'utils/server/logger';
import {createApiConfig, createApiHandler} from 'utils/server/api';
import {createAttachments, renderTemplate, removeTempFiles} from 'utils/server/email';

export const config = createApiConfig();

export default createApiHandler(async (req, res) => {
  const {fields, files} = req;
  if (req.method === 'POST') {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER, // generated ethereal user
          pass: process.env.SMTP_PASS, // generated ethereal password
        },
      });

      const text = await renderTemplate('txt', fields);
      const html = await renderTemplate('html', fields);

      const message = {
        from: `"${process.env.SMTP_SEND_FROM_NAME}" <${process.env.SMTP_SEND_FROM_ADDR}>`,
        to: process.env.SMTP_SEND_TO_ADDR,
        subject: 'Новый лид с chillicode.ru',
        attachments: createAttachments(files),
        text,
        html,
      };

      // send mail with defined transport object
      const info = await transporter.sendMail(message);
      await removeTempFiles(files);

      logger.info(`Email message was successfully sent: ${JSON.stringify({info, fields, files})}`);

      return res.status(200).json({
        success: true,
        message: 'Message successfully sent',
      });
    } catch (err) {
      logger.error('Error sending email message: ', err);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  } else {
    return res.status(400).json({
      success: false,
      message: 'Incorrect method',
    });
  }
});
