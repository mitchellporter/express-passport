const Model = require('objection').Model;

class Auth extends Model {

  static get tableName() {
    return 'auths';
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: `${__dirname}/user`,
        join: {
          from: 'auths.user_id',
          to: 'users.id'
        }
      }
    };
  }

}

module.exports = Auth;