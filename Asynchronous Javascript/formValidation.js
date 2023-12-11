const validateEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = password => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
};

const emailInput = 'test@example.com';
const passwordInput = 'Passw0rd';

console.log(`Email validation result: ${validateEmail(emailInput)}`);
console.log(`Password validation result: ${validatePassword(passwordInput)}`);
