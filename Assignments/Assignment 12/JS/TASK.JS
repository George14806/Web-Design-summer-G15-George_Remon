
var users = [];

var user1 = {
    name: prompt("Enter name:"),
    id: prompt("Enter id:"),
    balance: prompt("Enter balance:")
};

function addUser(user) {
    users.push(user);
}

addUser(user1);

var user2 = {
    name: prompt("Enter name:"),
    id: prompt("Enter id:"),
    balance: prompt("Enter balance:")
};

addUser(user2);


function editUserBalanceById(id, newBalance) {
    var userIndex = users.findIndex(function(user) {
        return user.id == id;
    });

    if (userIndex != -1) {
        users[userIndex].balance = newBalance;
    }
}

editUserBalanceById(1, 7000);
console.table(users);


function transferBalance(fromID, toID, balance) {
    var fromIndex = users.findIndex(function(user) {
        return user.id == fromID;
    });

    var toIndex = users.findIndex(function(user) {
        return user.id == toID;
    });

    if (fromIndex != -1 && toIndex != -1) {
        users[fromIndex].balance -= balance;
        users[toIndex].balance += balance;
    }
}

transferBalance(1, 2, 2000);
console.table(users);


function deleteUserByID(id) {
    var userIndex = users.findIndex(function(user) {
        return user.id == id;
    });

    if (userIndex != -1) {
        users.splice(userIndex, 1);
    }
}

deleteUserByID(2);
console.table(users);

