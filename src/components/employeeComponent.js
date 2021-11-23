import EmployeeService from "../services/employeeService.js";

let employeeService = new EmployeeService();
employeeService.load();

console.log("Employees")
console.log(employeeService.employees)

console.log("InvalidEmployees")
console.log(employeeService.invalidEmployees)