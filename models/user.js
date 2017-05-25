
const Model = require('objection').Model;

class User extends Model {

  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    return {
      auths: {
        relation: Model.HasManyRelation,
        modelClass: `${__dirname}/auth`,
        join: {
          from: 'users.id',
          to: 'auths.user_id'
        }
      }
    };
  }
}

module.exports = User;