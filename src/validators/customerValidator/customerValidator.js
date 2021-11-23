import ErrorDataResult from "../../results/errorDataResult.js";
import BusinessRules from "../../utilities/businessRules/businessRules.js";
import TypeValidator from "../typeValidator.js";
import userValidator from "../userValidator/userValidator.js";

export default function customerValidator(customer) {
    let rules = [
        TypeValidator.numericalString(
            customer.creditCardNumber,
            "Customer credit card number"
        )
    ];

    const result = BusinessRules.run(rules);
    if (result !== null) {
        return new ErrorDataResult(customer, result.message);
    }

    return userValidator(customer, "creditCardNumber");
}