const {
  GetAllUsersUseCase,
} = require("../../../domain/useCases/get-all-users");
const {
  UserRepository,
} = require("../../../infra/database/repositories/UserRepository");

const getAllUserFactory = () => {
  const userRepository = new UserRepository();
  const getAllUserUseCase = new GetAllUsersUseCase(userRepository);

  return getAllUserUseCase;
};

exports.getAllUserFactory = getAllUserFactory;
