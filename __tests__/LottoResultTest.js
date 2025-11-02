import LottoResult from "../src/features/LottoResult";

describe("LottoResult 클래스 정상 동작 테스트", () => {
  test("로또 결과가 정상적으로 계산된다", () => {
    // given
    const tickets = [
      [1, 2, 3, 4, 5, 6], // 1등 (6개 일치)
      [1, 2, 3, 4, 5, 8], // 2등 (5개 + 보너스)
      [1, 2, 3, 4, 5, 10], // 3등 (5개 일치)
      [1, 2, 3, 4, 11, 12], // 4등 (4개 일치)
      [1, 2, 3, 13, 14, 15], // 5등 (3개 일치)
      [10, 20, 30, 40, 41, 42], // 꽝
    ];

    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 8;
    const purchaseMoney = 6000;

    // when
    const lottoResult = new LottoResult(
      tickets,
      winningNumbers,
      bonusNumber,
      purchaseMoney
    );

    // then
    const winningCount = lottoResult.winningCount;
    const lottoYield = lottoResult.lottoYield;

    expect(winningCount).toEqual({
      FIFTH: 1,
      FOURTH: 1,
      THIRD: 1,
      SECOND: 1,
      FIRST: 1,
    });

    expect(lottoYield).toEqual(33859250);
  });
});
