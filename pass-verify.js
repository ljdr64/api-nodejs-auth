const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$aGZdUS5PjvIa0J7dS1wwQeh5bG0UbSsnPUuhArn0Pz.m2A6Nb8HBa';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
