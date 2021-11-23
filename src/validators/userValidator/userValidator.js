import ErrorDataResult from "../../results/errorDataResult.js";
import BusinessRules from "../../utilities/businessRules/businessRules.js";
import fieldValidator from "../fieldValidator.js";
import TypeValidator from "../typeValidator.js";

export default function userValidator(user, fields) {
    let props = [
        TypeValidator.integer(user.id, "User id"),
        TypeValidator.name(user.firstName, "User firstName"),
        TypeValidator.name(user.lastName, "User lastName"),
        TypeValidator.integer(user.age, "User age"),
        TypeValidator.name(user.city, "User city"),
    ];
    const result = BusinessRules.run(props);
    if (result !== null) {
        return new ErrorDataResult(user, result.message);
    }

    let requiredFields = "id,firstName,lastName,age,city";
    if (fields !== null) {
        requiredFields += `,${fields}`;
    }
    return fieldValidator(user, requiredFields);
}