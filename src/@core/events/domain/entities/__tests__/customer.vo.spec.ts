import Cpf from 'src/@core/common/domain/value-objects/cpf.vo';
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

  const customer2 = new Customer({
    id: new CustomerId(customer.id.value),
    name: 'John Doe',
    cpf: new Cpf('03333207940'),
  });

  expect(customer.equals(customer2)).toBeTruthy();
});
