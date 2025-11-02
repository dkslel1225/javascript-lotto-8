import { POSITIVE_INTEGER, VALIDATION_MESSAGE } from "../constants/message.js";
import { newError } from "./newError.js";

export const validatePositiveInt = (input) => {
  const isPositiveInteger = POSITIVE_INTEGER.test(input);
  if (!isPositiveInteger) {
    newError(VALIDATION_MESSAGE.POSITIVE_INTEGER);
  }
  return Number(input);
};
