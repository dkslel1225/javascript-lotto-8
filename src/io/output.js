import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/message.js";

export class output {
  printTryNum(tryNum) {
    Console.print(`\n${tryNum}${OUTPUT_MESSAGE.PURCHASE}`);
  }

  printTickets(tickets) {
    tickets.forEach((ticket) => {
      const ticketStr = ticket.join(", ");
      Console.print(`[${ticketStr}]`);
    });
  }

  printResultTitle() {
    Console.print(OUTPUT_MESSAGE.RESULT_TITILE);
  }

  printResultPrize(winningCount) {
    for (const [rank, count] of Object.entries(winningCount)) {
      const prize = OUTPUT_MESSAGE.RESULT_PRIZE[rank];
      const prizeCount = OUTPUT_MESSAGE.RESULT_PRIZE_SUFFIX(count);
      Console.print(`${prize}${prizeCount}`);
    }
  }

  printResultYield(lottoYield) {
    Console.print(OUTPUT_MESSAGE.RESULT_YIELD(lottoYield));
  }
}
