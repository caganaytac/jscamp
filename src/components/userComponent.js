import UserService from "../services/userService.js"

let userService = new UserService();
userService.load();

console.log("Users")
console.log(userService.users)

console.log("InvalidUsers")
console.log(userService.invalidUsers)