import ErrorRepository from '../src/js/ErrorRepository';

test('Error from repository', () => {
  const input = ErrorRepository.errorIs(404);

  const expected = 'page does not found'; // ожидает
  const received = input; // получает
  expect(received).toBe(expected); // сравнивает
});

test('Unknown error', () => {
  const input = ErrorRepository.errorIs(190);

  const expected = 'Unknown error'; // ожидает
  const received = input; // получает
  expect(received).toBe(expected); // сравнивает
});
