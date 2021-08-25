const { Models } = require("../models");

class UserRepository {
  getAll() {
    return Models.UserModel.findAll();
  }

  create(data) {
    return Models.UserModel.create(data);
  }
}

exports.UserRepository = UserRepository;
