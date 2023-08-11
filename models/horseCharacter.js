const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class horseCharacter extends Model {}

horseCharacter.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },

        horse_name : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true
            }
        },
        
        horse_breed :{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true
            }
        },

        horse_power : {
            type: DataTypes.INTEGER,
            allowNull: false, 
            validate: {
                isNumeric: true
            }
        },

        horse_speed: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },

        horse_smarts: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        horse_weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        likeCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,  // Set default value to 0
          }
        },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'horseCharacter',
    }
);    

module.exports = horseCharacter;