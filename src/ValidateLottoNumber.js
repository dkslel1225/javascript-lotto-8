import { VALIDATION_MESSAGE } from "./constants/message.js";
import { newError, validatePositiveInt } from "./features/validator.js";

class ValidateLottoNumber {
  #number;

  constructor(numbers, number) {
    const validatedNumber = this.#validateLottoNumber(numbers, number);
    this.#number = validatedNumber;
  }

  get number() {
    return this.#number;
  }

  #validateLottoNumber(numbers, number) {
    const int = validatePositiveInt(number); // 1. 양의 정수인가
    this.#validateLottoDuplicated(numbers, int);
    this.#validateLottoRange(int);
    return int;
  }

  // 2. 1~45 사이인가
  #validateLottoRange(number) {
    const range = number >= 1 && number <= 45;
    if (!range) {
      newError(VALIDATION_MESSAGE.NOT_IN_LOTTO_RANGE);
    }
  }

  // 3. 중복되는가
  #validateLottoDuplicated(numbers, number) {
    const duplicated = numbers.includes(number); // 두 비교 대상자의 타입이 같지 않으면 에러 남(includes is not a function)
    if (duplicated) {
      newError(VALIDATION_MESSAGE.DUPLICATE);
    }
  }
}

export default ValidateLottoNumber;
