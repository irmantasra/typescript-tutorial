"use strict";
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
logDetails("5862594125", "daiktas");
var greet = function (user) {
    console.log(user.name + " says hello");
};
greet({ name: "irmantas", uid: 1546821 });
