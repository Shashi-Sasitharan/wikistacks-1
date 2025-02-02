const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});


const Page = db.define('page', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
      },
    slug: {
        type: Sequelize.STRING,
        validate: {
            isUrl: true
        }
      },
    content: {
        type: Sequelize.TEXT,
        validate:{
            notEmpty: true
        }
      },
    status:{
        type: Sequelize.ENUM('open', 'closed'),
            defaultValue: 'open'
      }
})

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
      },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    }
})

module.exports = {
  db, Page, User
}