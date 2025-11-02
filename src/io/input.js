import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE, VALIDATION_MESSAGE } from "../constants/message.js";
import { validatePositiveInt } from "../utils/validatePositiveInt.js";
import { newError } from "../utils/newError.js";

export class input {
  async inputMoney() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.MONEY);
    this.#validateEmpty(input);
    validatePositiveInt(input);
    this.#validate1000unit(input);

    return input;
  }

  async inputWinningNumbers() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.WINNING_NUMBERS);
    this.#validateEmpty(input);

    try {
      const numbers = input.split(",").map(Number);
      return numbers;
    } catch (e) {
      newError(VALIDATION_MESSAGE.NAN);
    }
  }

  async inputBonusNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
    this.#validateEmpty(input);

    return input;
  }

  #validateEmpty = (input) => {
    if (!input.trim()) {
      newError(VALIDATION_MESSAGE.EMPTY);
    }
  };

  #validate1000unit = (money) => {
    if (money % 1000 !== 0) {
      newError(VALIDATION_MESSAGE.OUT_OF_1000);
    }
  };
}
