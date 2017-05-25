
exports.up = function(knex, Promise) {
  return knex.schema
      .createTable('users', table => {
      table.increments('id').primary();
      table.timestamps(true, true);
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.string('name').notNullable();
    })
    .createTable('auths', table => {
      table.increments('id').primary();
      table.timestamps(true, true);
      table.integer('user_id').unsigned().references('id').inTable('users').notNullable();
      table.enum('type', ['facebook', 'slack', 'trello', 'jira']).notNullable();
      table.string('access_token').notNullable();
      table.string('refresh_token');
      table.json('profile');
    });
};

exports.down = function(knex, Promise) {
  knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('auths');
};
