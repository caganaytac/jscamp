import { users } from "../data/users.js";
import employeeValidator from "../validators/employeeValidator/employeeValidator.js";

export default class EmployeeService {
    constructor() {
        this.employees = [];
        this.invalidEmployees = [];
    }

    load() {
        for (const user of users) {
            if (user.type === "employee") {
                const result = employeeValidator(user);
                if (!result.success) {
                    return this.invalidEmployees.push(result);
                }
                this.employees.push(user);
            }
        }
    }
}