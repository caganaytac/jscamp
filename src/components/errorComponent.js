import ErrorService from "../services/errorService.js";

let errorService = new ErrorService();
errorService.load();

console.log("Errors")
console.log(errorService.errors);