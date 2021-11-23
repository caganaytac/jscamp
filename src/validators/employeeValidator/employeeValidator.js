import ErrorDataResult from "../../results/errorDataResult.js";
import BusinessRules from "../../utilities/businessRules/businessRules.js";
import TypeValidator from "../typeValidator.js";
import userValidator from "../userValidator/userValidator.js";

export default function employeeValidator(employee) {
    let rules = [TypeValidator.decimal(employee.salary)];

    const result = BusinessRules.run(rules);
    if (result !== null) {
        return new ErrorDataResult(employee, result.message);
    }

    return userValidator(employee, "salary");
}