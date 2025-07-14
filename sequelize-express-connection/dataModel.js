import { DataTypes } from 'sequelize';
import {sequelize} from './db.js';

export const UserActivity = sequelize.define('UserActivity', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    activity: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
tablename: "UserActivity"
})
