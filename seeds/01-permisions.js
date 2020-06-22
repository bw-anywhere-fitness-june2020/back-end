

exports.seed = function(knex) {

  const userpermisions = [
    {
      name: "admin",
    },
    {
      name: "user",
    },
  ];

  return knex('userpermisions').insert(userpermisions)
      .then(() => console.log("\n== Seed data for roles table added. ==\n"));
};
