import 'reflect-metadata';

import { CreateUserUseCase } from './CreateUserUseCase';

import { InMemoryUsersRepository } from '../../repositories/in-memory/InMemoryUsersRepository';

let usersRepositoryInMemory: InMemoryUsersRepository;
let createUserUseCase: CreateUserUseCase;

describe('Create User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new InMemoryUsersRepository();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able create a new user', async () => {
    const user = {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123456',
    };

    const result = await createUserUseCase.execute(user);

    expect(result).toHaveProperty('id');
  });
});
