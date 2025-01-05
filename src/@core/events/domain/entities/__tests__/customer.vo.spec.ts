import { Customer } from '../customer.entity';

test('deve criar um cliente', () => {
  Customer.create({
    name: 'John Doe',
    cpf: '03333207940',
  });
});
