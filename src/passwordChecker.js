function passwordChecker(password) {
    if (password.length < 8) return false; // Minimum 8 caractères
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false; // Au moins un caractère spécial
    if (!/\d/.test(password)) return false; // Au moins un chiffre
    if (/IPL/i.test(password)) return false; // Pas de "IPL" (insensible à la casse)
    return true;
}

module.exports = passwordChecker;
