export const ERROR_PREFIX = "[ERROR]";
export const VALIDATION_MESSAGE = {
  EMPTY: "입력값이 없습니다.",
  DUPLICATE: "중복된 값이 존재합니다.",
  POSITIVE_INTEGER: "양의 정수여야 합니다.",
  OUT_OF_1000: "1000원 단위로 받아야 합니다.",
  NAN: "숫자가 아닌 문자가 입력되었습니다.",
  NOT_IN_LOTTO_RANGE: "당첨 숫자는 1~45 사이여야 합니다.",
  NOT_SIX_NUMBERS: "로또 번호는 6개여야 합니다.",
};

export const INPUT_MESSAGE = {
  MONEY: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
};

export const OUTPUT_MESSAGE = {
  PURCHASE: "개를 구매했습니다.",
  RESULT_TITILE: `\n당첨 통계\n---`,
  RESULT_PRIZE: {
    FIRST: "6개 일치 (2,000,000,000원)",
    SECOND: "5개 일치, 보너스 볼 일치 (30,000,000원)",
    THIRD: "5개 일치 (1,500,000원)",
    FOURTH: "4개 일치 (50,000원)",
    FIFTH: "3개 일치 (5,000원)",
  },
  RESULT_PRIZE_SUFFIX: (n) => ` - ${n}개`,
  RESULT_YIELD: (rate) => `총 수익률은 ${rate}%입니다.`,
};

export const WINNING_INFO = {
  FIRST: {
    matchCount: 6,
    prize: 2000000000,
  },
  SECOND: {
    matchCount: 5,
    prize: 30000000,
  },
  THIRD: {
    matchCount: 5,
    prize: 1500000,
  },
  FOURTH: {
    matchCount: 4,
    prize: 50000,
  },
  FIFTH: {
    matchCount: 3,
    prize: 5000,
  },
};

export const TICKET_PRICE = 1000;
export const LOTTO_NUMS_COUNT = 6;
export const POSITIVE_INTEGER = /^[1-9]\d*$/;
