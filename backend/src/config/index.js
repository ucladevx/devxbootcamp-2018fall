// configuration file for application variables. Can be modified to read in
// JSON, and parse that JSON instead, since it is the same thing
let postgreshostname = process.env.POSTGRES_HOSTNAME;
if (!postgreshostname) {
  postgreshostname = 'localhost';
}
const config = {
  database: {
    user: 'postgres',
    password: 'admin',
    port: 5432,
    host: postgreshostname,
    database: 'growler',
  },
  port: 31337,
  auth: {
    secret: 'growler test secret',
    expirationTime: 86400,
    issuer: 'growler',
  },
};

module.exports = config;
