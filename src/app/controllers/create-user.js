const { UserEntity } = require("../../domain/entities/User");

class CreateUserController {
  constructor(createUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  async handle(request, response) {
    const user = new UserEntity(request.body);

    await this.createUserUseCase(user);

    response.status(201).json(user);
  }
}

exports.CreateUserController = CreateUserController;
