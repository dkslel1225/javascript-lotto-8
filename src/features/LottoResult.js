import { WINNING_INFO } from "../constants/message";

class LottoResult {
  #winningCount;
  #lottoYield;

  constructor(tickets, winningNumbers, bonusNumber, purchaseMoney) {
    const { matchedCount, bonusMatched } = this.#matchResult(
      tickets,
      winningNumbers,
      bonusNumber
    );

    const { winningCount, totalPrize } = this.#calculateWinningResult(
      matchedCount,
      bonusMatched
    );

    const lottoYield = this.#computeYield(totalPrize, purchaseMoney);
    this.#winningCount = winningCount;
    this.#lottoYield = lottoYield;
  }

  get winningCount() {
    return this.#winningCount;
  }

  get lottoYield() {
    return this.#lottoYield;
  }

  #matchResult(tickets, winningNumbers, bonusNumber) {
    const tCount = tickets.length;
    const matchedCount = Array.from({ length: tCount }, () => 0);
    const bonusMatched = Array.from({ length: tCount }, () => false);

    // 뽑은 티켓 순회하며 각 숫자의 당첨 여부를 체크 및 업데이트
    tickets.forEach((ticket, i) => {
      ticket.forEach((number) => {
        this.#numberMatched(winningNumbers, number, matchedCount, i);
        this.#bonusMatched(bonusNumber, number, bonusMatched, i);
      });
    });

    return { matchedCount, bonusMatched };
  }

  #numberMatched(winningNumbers, number, matchedCount, i) {
    const isMatched = winningNumbers.includes(number);
    if (isMatched) {
      matchedCount[i] += 1;
    }
  }

  #bonusMatched(bonusNumber, number, bonusMatched, i) {
    const isBonusMatched = bonusNumber === number;
    if (isBonusMatched) {
      bonusMatched[i] = true;
    }
  }

  //matchCount 체크해서 등수 추출 / 총상금액 계산
  #calculateWinningResult(matchCount, bonusMatched) {
    const winningCount = {
      FIFTH: 0,
      FOURTH: 0,
      THIRD: 0,
      SECOND: 0,
      FIRST: 0,
    };

    let totalPrize = 0;

    matchCount.forEach((count, i) => {
      const rank = this.#getWinningRank(count, bonusMatched[i]);
      if (rank === null) return;

      winningCount[rank] += 1;
      totalPrize += WINNING_INFO[rank].prize;
    });

    return { winningCount, totalPrize };
  }

  #getWinningRank(count, bonusMatched) {
    switch (count) {
      case WINNING_INFO.FIFTH.matchCount:
        return "FIFTH";
      case WINNING_INFO.FOURTH.matchCount:
        return "FOURTH";
      case WINNING_INFO.THIRD.matchCount:
        if (!bonusMatched) return "THIRD";
        return "SECOND";
      case WINNING_INFO.FIRST.matchCount:
        return "FIRST";
      default:
        return null;
    }
  }

  // 수익률 계산
  #computeYield(winningMoney, purchaseMoney) {
    const lottoYield = (winningMoney / purchaseMoney) * 100;
    return Math.round(lottoYield * 100) / 100;
  }
}

export default LottoResult;
