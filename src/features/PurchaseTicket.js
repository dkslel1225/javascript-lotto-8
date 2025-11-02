import { Random } from "@woowacourse/mission-utils";
import { TICKET_PRICE } from "../constants/message.js";

class PusrchaseTicket {
  #tryNum;
  #tickets;

  constructor(money) {
    const tryNum = this.#getTryNum(money);
    const tickets = this.#getTickets(tryNum);
    this.#tryNum = tryNum;
    this.#tickets = tickets;
  }

  get tryNum() {
    return this.#tryNum;
  }

  get tickets() {
    return this.#tickets;
  }

  #getTryNum(money) {
    return money / TICKET_PRICE;
  }

  #getTickets(tryNum) {
    const tickets = [];

    for (let i = 0; i < tryNum; i++) {
      const ticket = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#sortAscending(ticket);
      tickets.push(ticket);
    }

    return tickets;
  }

  #sortAscending(numbers) {
    numbers.sort((a, b) => a - b);
  }
}

export default PusrchaseTicket;
