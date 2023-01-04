const env = require('../.env')
const { password } = require('../.env')

module.exports = {
    client: 'mysql',
    connection:{
        database: "graphql",
        user:"root",
        password
    },
    pool:{
        min: 2,
        max: 10
    },
    migration:{
        tableName: 'knex_migrations'
    }

}