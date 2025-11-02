import LottoBonus from "../src/LottoBonus";

describe("로또 보너스 번호 테스트", () => {
  const numbers = [1, 2, 3, 4, 5, 6];

  test("정상 기능 동작 테스트.", () => {
    const bonusNumber = new LottoBonus(numbers, 10);
    expect(bonusNumber.number).toBe(10);
  });

  test("보너스 번호와 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new LottoBonus(numbers, 6);
    }).toThrow("[ERROR]");
  });
});
