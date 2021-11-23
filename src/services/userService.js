import { users } from "../data/users.js";
import userValidator from "../validators/userValidator/userValidator.js";

export default class UserService {
    constructor() {
        this.users = [];
        this.invalidUsers = [];
    }

    load() {
        for (const user of users) {
            if (user.type === "employee" || user.type === "customer") {
                const result = userValidator(user);
                if (!result.success) {
                    return this.invalidUsers.push(result);
                }
                this.users.push(user);
            }
        }
    }
}