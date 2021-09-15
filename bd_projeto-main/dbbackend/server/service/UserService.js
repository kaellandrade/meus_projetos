const UserData = require('../data/UserData');

exports.getUsers = function (){
    return UserData.getUsers();
}