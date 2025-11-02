import { newError } from "../src/utils/newError";
import { validatePositiveInt } from "../src/utils/validatePositiveInt";

describe("기타 유틸 함수 테스트", () => {
  test("에러 발생 시 [ERROR] prefix가 붙는다.", () => {
    expect(() => {
      newError("error message content");
    }).toThrow("[ERROR]");
  });

  test("양의 정수가 아니면 에러가 발생한다.: 음수 입력", () => {
    expect(() => {
      validatePositiveInt(-1);
    }).toThrow("[ERROR]");
  });

  test("양의 정수가 아니면 에러가 발생한다.: 문자 입력", () => {
    expect(() => {
      validatePositiveInt("a");
    }).toThrow("[ERROR]");
  });

  test("양의 정수가 아니면 에러가 발생한다.: 소수 입력", () => {
    expect(() => {
      validatePositiveInt(3.14);
    }).toThrow("[ERROR]");
  });
});
