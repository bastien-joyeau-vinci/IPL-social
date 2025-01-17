const passwordChecker = require('../src/passwordChecker');

describe('Password Checker', () => {

    it('should reject passwords with less than 8 characters', () => {
        expect(passwordChecker('Short7!')).toBe(false);
    });
    
});
