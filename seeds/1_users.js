
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'bob@gmail.com', password: '1234', name: 'bob'},
        {id: 2, email: 'stacy@aol.com', password: '1234', name: 'stacy'},
        {id: 3, email: 'jeff@yahoo.com', password: '1234', name: 'jeff'}
      ]);
    });
};