import ValidateLottoNumber from "./features/ValidateLottoNumber";

class LottoBonus {
  #number;

  constructor(numbers, number) {
    const validated = new ValidateLottoNumber(numbers, number);
    this.#number = validated.number;
  }

  get number() {
    return this.#number;
  }
}

export default LottoBonus;
