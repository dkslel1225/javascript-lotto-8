import {
  ERROR_PREFIX,
  LOTTO_NUMS_COUNT,
  POSITIVE_INTEGER,
  VALIDATION_MESSAGE,
} from "../constants/message.js";

export const newError = (errorMessage) => {
  throw new Error(`${ERROR_PREFIX} ${errorMessage}`);
};

export const validateEmpty = (input) => {
  if (!input.trim()) {
    newError(VALIDATION_MESSAGE.EMPTY);
  }
};

export const validatePositiveInt = (input) => {
  const isPositiveInteger = POSITIVE_INTEGER.test(input);
  if (!isPositiveInteger) {
    newError(VALIDATION_MESSAGE.POSITIVE_INTEGER);
  }
};

// use in inputMoney
export const validate1000unit = (money) => {
  if (money % 1000 !== 0) {
    newError(VALIDATION_MESSAGE.OUT_OF_1000);
  }
};
