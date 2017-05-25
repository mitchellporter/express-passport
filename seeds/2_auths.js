
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('auths').del()
    .then(function () {
      // Inserts seed entries
      return knex('auths').insert([
        {id: 1, user_id: 1, type: 'facebook', access_token: '1234'},
        {id: 2, user_id: 1, type: 'slack', access_token: '1234'},
        {id: 3, user_id: 1, type: 'trello', access_token: '1234'},
        {id: 4, user_id: 1, type: 'jira', access_token: '1234'}
      ]);
    });
};