import { Name } from './name.vo';

test('deve criar um nome válido', () => {
  const name = new Name('Robson');
  expect(name.value).toBe('Robson');
});
