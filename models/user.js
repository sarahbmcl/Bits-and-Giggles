
module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 1
        }
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          min: 1 
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 1 
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 6 
        }
      },
      comedian: {
        type: DataTypes.BOOLEAN,
        default: 0,
        allowNull: false,
      },
    });

    return User
    }