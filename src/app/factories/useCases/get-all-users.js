const { CreateUserUseCase } = require("../../../domain/useCases/create-user");
const {
  UserRepository,
} = require("../../../infra/database/repositories/UserRepository");

const createUserFactory = () => {
  const userRepository = new UserRepository();
  const createUserUseCase = new CreateUserUseCase(userRepository);

  return createUserUseCase;
};

exports.createUserFactory = createUserFactory;
