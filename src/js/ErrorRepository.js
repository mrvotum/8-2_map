const errorsArray = new Map([
  [203, 'Non-Authoritative Information'],
  [400, 'Bad Request'],
  [404, 'page does not found'],
  [408, 'Request Timeout'],
  [414, 'Request-URL Too Long'],
  [502, 'Bad Gateway'],
  [504, 'Gateway Timeout'],
]);

export default class ErrorRepository {
  static errorIs(errorCode) {
    if (errorsArray.has(errorCode)) {
      return errorsArray.get(errorCode);
    } else {
      const errorMsg = 'Unknown error';
      return errorMsg; // console.error('Unknown error');
    }
  }
}
