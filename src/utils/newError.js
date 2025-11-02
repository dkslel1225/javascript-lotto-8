import { ERROR_PREFIX } from "../constants/message";

export const newError = (errorMessage) => {
  throw new Error(`${ERROR_PREFIX} ${errorMessage}`);
};
