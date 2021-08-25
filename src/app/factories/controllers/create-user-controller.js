const { CreateUserController } = require("../../controllers/create-user");
const { createUserFactory } = require("../useCases/get-all-users");

const createUserControllerFactory = () => {
  return new CreateUserController(createUserFactory());
};

exports.createUserControllerFactory = createUserControllerFactory;
