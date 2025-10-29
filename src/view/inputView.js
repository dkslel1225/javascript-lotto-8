import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/message.js";
import {
  validate1000unit,
  validateEmpty,
  validateLottoNumber,
  validateLottoRange,
  validatePositiveInt,
  validateSixWinningNumbers,
} from "../features/validator.js";

export class inputView {
  async inputMoney() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.MONEY);
    validateEmpty(input); // trim + empty
    validatePositiveInt(input); // '3     4' -> error
    validate1000unit(input);
    return input;
  }

  // 여기 유효성 검사를 따로 class로 묶거나.. 해야할것 같은디
  async inputWinningNumbers() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.WINNING_NUMBERS);
    validateEmpty(input); // trim + empty

    const numbers = input.split(",");
    const winningNumbers = validateSixWinningNumbers(numbers); // 숫자형으로, 숫자들어간 배열 반환

    return numbers;
  }

  async inputBonusNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
    return validateLottoNumber(input);
  }
}
