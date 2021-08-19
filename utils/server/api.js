import path from 'path';
import formidableMiddleware from 'express-formidable';

/**
 * Helper method to wait for a middleware to execute before continuing
 * And to throw an error when an error happens in a middleware
 * @param req {Object}
 * @param res {Object}
 * @param fn {Function}
 * @return {Promise<*>}
 */
export const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
};

/**
 * @see https://nextjs.org/docs/api-routes/api-middlewares#custom-config
 * @return {{api: {bodyParser: boolean, externalResolver: boolean}}}
 */
export const createApiConfig = () => {
  return {
    api: {
      externalResolver: true,
      bodyParser: false,
    },
  };
};

/**
 * @see https://nextjs.org/docs/api-routes/api-middlewares
 * @param handler {function(Object, Object)}
 * @return {function(Object, Object): Promise<*>}
 */
export const createApiHandler = handler => async (req, res) => {
  await runMiddleware(
    req,
    res,
    formidableMiddleware({
      uploadDir: path.resolve(process.cwd(), 'storage/uploads/tmp'),
      encoding: 'utf-8',
      keepExtensions: true,
      multiples: false,
      type: 'multipart',
      maxFileSize: 50 * 1024 * 1024, // 50MB
      maxFields: 100,
    }),
  );

  await handler(req, res);
};
