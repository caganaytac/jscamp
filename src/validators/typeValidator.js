import ErrorResult from "../results/errorResult.js";
import SuccessResult from "../results/successResult.js";

export default class TypeValidator {
    static name(input, message) {
        const result = new RegExp("[a-zA-Z ]+").test(input);
        if (result === false) {
            return new ErrorResult(`${message} must consist of alphabet letters.`);
        }
        return new SuccessResult();
    }

    static integer(input, message) {
        if (!Number.isInteger(input)) {
            return new ErrorResult(`${message} must be integer.`);
        }
        return new SuccessResult();
    }

    static decimal(input, message) {
        const result = new RegExp("^(\d)(\.\d{1,2})$").test(input);
        if (result === false) {
            return new ErrorResult(`${message} must be decimal.`);
        }
        return new SuccessResult();
    }

    static numericalString(input, message) {
        const result = new RegExp("\d+").test(input);
        if (result === false) {
            return new ErrorResult(`${message} must consist of numbers.`);
        }
        return new SuccessResult();
    }
}