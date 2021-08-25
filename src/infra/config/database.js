module.exports = {
  development: {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "postgres",
    database: "postgres",
    // define: {
    //   timestamps: true,
    //   underscored: true,
    //   underscoredAll: true,
    //   createdAt: "created_at",
    //   updatedAt: "updated_at",
    // },
  },
  staging: {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "postgres",
    database: "postgres",
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  production: {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "postgres",
    database: "postgres",
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
};
