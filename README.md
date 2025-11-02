# javascript-lotto-precourse

## 구현할 기능 목록

1. input,output 클래스
   - 구매금액 입력: inputMoney, 당첨 번호 입력: inputWinningNumbers, 보너스 번호 입력: inputBonusNumber
   - 시도횟수 출력: printTryNum, 구매 티켓 출력: printTickets, "당첨 통계": printResultTitle, 당첨 결과 출력: printResultPrize, 수익률 출력: printResultYield
2. PurchaseTicket 클래스
   - getTryNum: 구매금액 기반으로 로또 시도 횟수 산출 -> tryNum
   - getTickets: 티켓 여러장 출력 -> tickets
3. Lotto 클래스

   - 유저가 입력한 '당첨번호'를 받아서,
   - validateLottoCount: 로또 번호 6개 입력했는지 확인
   - ValidateLottoNumber: 로또 번호 유효성 검증

- ValidationLottoNumber 클래스
  - numbers(array)과 number를 받아서, number를 검증한다.
  - number가 양의 정수인지,
  - validateLottoDuplicated: numbers의 숫자와 중복되지 않는 number인지
  - validateLottoRange: 1~45 사이인지

4. LottoBonus 클래스
   - numbers(array)과 number를 받아서, number를 검증한다.
   - 검증에는 ValidationLottoNumber클래스를 활용한다.
5. LottoResult 클래스

   - 최종적으로, _winningCount, lottoYield_ 변수를 갖는다.(당첨 통계, 수익률)
   - matchResult: 티켓 여러장,당첨번호,보너스 번호를 검사해서 -> 번호 일치 점수에 대한 정보를 반환한다.{ matchedCount:[Number], bonusMatched:[Boolean] }
   - calculateWinningResult: 위의 matchedCount, bonusMatched 값을 받아서, 당첨 통계, 총당첨금액에 대한 정보를 반환한다. { _winningCount_, totalPrize }
   - ` winningCount = {
  FIFTH: 0,
  FOURTH: 0,
  THIRD: 0,
  SECOND: 0,
  FIRST: 0,
};`
   - computeYield: 총당첨금액, 지불한 금액을 받아서 수익률을 계산한다.(totalPrize, purchaseMoney -> _lottoYield_)

- 기타 유틸 함수
  - newError: 에러 발생 시 `[ERROR]` prefix 붙이는 함수
  - validatePositiveInt: 양의 정수인지 유효성 검사(정규표현식 사용 `/^[1-9]\d*$/`)
- 상수 변수 목록
  - 에러 메시지
  - 입출력 메세지
  - 당첨 등수에 대한 정보(matchCount, prize)
  - 외, 티켓 1장 가격(1000) / 로또 번호 개수(6) / 양의 정수에 대한 정규표현식
