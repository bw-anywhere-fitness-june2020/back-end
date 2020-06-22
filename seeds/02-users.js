
exports.seed = function(knex) {

  return knex('users').truncate()
    .then(function () {

      return knex('users').insert([
        {username:'xgx',password:'strjr',userpermisions:1},
        {username:'xg',password:'trsjtrs',userpermisions:1},
        {username:'xxx',password:'jrstjt',userpermisions:1},
      ]);
    });
};
