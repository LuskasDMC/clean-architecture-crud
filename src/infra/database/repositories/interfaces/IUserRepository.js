const {
  NotImplementedException,
} = require("../../../../shared/errors/NotImplementedException");

class IUserRepository {
  getAll() {
    throw new NotImplementedException("Method not implemented");
  }
}
