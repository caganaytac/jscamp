import { users } from "../data/users.js";
import customerValidator from "../validators/customerValidator/customerValidator.js";

export default class CustomerService {
    constructor() {
        this.customers = [];
        this.invalidCustomers = [];
    }

    load() {
        for (const user of users) {
            if (user.type === "customer") {
                const result = customerValidator(user);
                if (!result.success) {
                    return this.invalidCustomers.push(result);
                }
                this.customers.push(user);
            }
        }
    }
}