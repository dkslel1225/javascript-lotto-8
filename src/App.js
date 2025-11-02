import LottoResult from "./features/LottoResult.js";
import PusrchaseTicket from "./features/PurchaseTicket.js";
import { input } from "./io/input.js";
import { output } from "./io/output.js";
import Lotto from "./Lotto.js";
import LottoBonus from "./LottoBonus.js";

class App {
  async run() {
    const i = new input();
    const o = new output();

    const userMoney = await i.inputMoney();
    const purchaseInfo = new PusrchaseTicket(userMoney);
    o.printTryNum(purchaseInfo.tryNum);
    o.printTickets(purchaseInfo.tickets);

    const userNumbers = await i.inputWinningNumbers();
    const winningNumbers = new Lotto(userNumbers);

    const userNumber = await i.inputBonusNumber();
    const bonusNumber = new LottoBonus(winningNumbers.numbers, userNumber);

    o.printResultTitle();

    const lottoResult = new LottoResult(
      purchaseInfo.tickets,
      winningNumbers.numbers,
      bonusNumber.number,
      userMoney
    );

    o.printResultPrize(lottoResult.winningCount);
    o.printResultYield(lottoResult.lottoYield);
  }
}

export default App;
