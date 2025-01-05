import { Customer, CustomerId } from '../customer.entity';

test('deve criar um cliente', () => {
  const customer = Customer.create({
    name: 'John Doe',
    cpf: '03333207940',
  });
  expect(customer).toBeInstanceOf(Customer);
  expect(customer.id).toBeDefined();
  expect(customer.id).toBeInstanceOf(CustomerId);
  expect(customer.name).toBe('John Doe');
  expect(customer.cpf.value).toBe('03333207940');
});
