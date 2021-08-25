const { Router } = require("express");
const { NotFoundException } = require("../../shared/errors/NotFoundException");
const {
  getAllUserControllerFactory,
} = require("../factories/controllers/get-all-users-controllers");

const router = Router();

router.get("/", (req, res) => getAllUserControllerFactory().handle(req, res));

exports.UserRouter = router;
