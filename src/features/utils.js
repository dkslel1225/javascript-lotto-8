import { Random } from "@woowacourse/mission-utils";
import { TICKET_PRICE, WINNING_INFO } from "../constants/message.js";

export const getTryNum = (money) => {
  return money / TICKET_PRICE;
};

export const getTickets = (tryNum) => {
  const tickets = [];

  for (let i = 0; i < tryNum; i++) {
    const ticket = Random.pickUniqueNumbersInRange(1, 45, 6);
    sortAscending(ticket);
    tickets.push(ticket);
  }

  return tickets;
};

const sortAscending = (numbers) => {
  numbers.sort((a, b) => a - b); // 이게 어떻게 오름차순이 되는거지..? 근데 이 함수도 좀 더 나눠야 하나...흠 controller?ㄱ거로 나눠야 하나
};
