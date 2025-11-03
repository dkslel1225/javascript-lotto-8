import ValidateLottoNumber from "../src/features/ValidateLottoNumber";

describe("로또 번호 유효성 검증 테스트", () => {
  test("정상 기능 동작 테스트.", () => {
    const validatedNumber = new ValidateLottoNumber([1, 2, 3, 4, 5], 6);
    expect(validatedNumber.number).toBe(6);
  });

  test("앞 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new ValidateLottoNumber([1, 2, 3, 4, 5], 5);
    }).toThrow("[ERROR]");
  });

  test("1~45를 벗어나는 수가 있으면 에러가 발생한다.(46, -1)", () => {
    expect(() => {
      new ValidateLottoNumber([1, 2, 3, 4, 5], 46);
    }).toThrow("[ERROR]");
    expect(() => {
      new ValidateLottoNumber([1, 2, 3, 4, 5], -1);
    }).toThrow("[ERROR]");
  });
});
