const passwordChecker = require('../src/passwordChecker');

describe('Password Checker', () => {

    it('should reject passwords with less than 8 characters', () => {
        expect(passwordChecker('Short7!')).toBe(false);
    });

    it('should accept valid passwords', () => {
        expect(passwordChecker('Valid123!')).toBe(true);
    });

    it('should reject passwords without special characters', () => {
        expect(passwordChecker('Valid1234')).toBe(false);
    });
    
});
