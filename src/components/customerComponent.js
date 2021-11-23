import CustomerService from "../services/customerService.js"

let customerService = new CustomerService();
customerService.load();

console.log("Customers")
console.log(customerService.customers)

console.log("InvalidCustomers")
console.log(customerService.invalidCustomers)