export default class BusinessRules {
    static run(logics) {
        for (const result of logics) {
            if (!result.success) {
                return result;
            }
        }
        return null;
    }
}