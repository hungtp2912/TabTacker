module.exports = (sequelize, DataTypes) =>
    sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true //Set no duplicate email
        },
        password: DataTypes.STRING
    })
