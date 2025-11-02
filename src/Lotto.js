import { VALIDATION_MESSAGE } from "./constants/message.js";
import ValidateLottoNumber from "./features/ValidateLottoNumber.js";
import { newError } from "./utils/newError.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validateLottoCount(numbers);
    this.#validateLottoNumbers(numbers);
  }

  get numbers() {
    return this.#numbers;
  }

  #validateLottoCount(numbers) {
    if (numbers.length !== 6) {
      newError(VALIDATION_MESSAGE.NOT_SIX_NUMBERS);
    }
  }

  #validateLottoNumbers(numbers) {
    const seen = [];
    numbers.forEach((number, i) => {
      const validatedNum = new ValidateLottoNumber(seen, number);
      this.#numbers[i] = validatedNum.number;
      seen.push(number);
    });
  }
}

export default Lotto;
