import { success, failure } from '../libs/response-lib';

export const handler = async () => {
  try {
    return success(`Hello ${process.env.LOG_LEVEL}`);
  } catch (error) {
    return failure(error);
  }
};
