module.exports = {
  db_host: process.env.DB_HOST,
  db_name: process.env.DB_NAME,
  db_username: process.env.DB_USERNAME,
  db_password: process.env.DB_PASSWORD,
  mail_domain: process.env.MAIL_DOMAIN,
  mail_apikey: process.env.MAIL_APIKEY,
  mail_weekly_alias: process.env.MAIL_WEEKLY_ALIAS,
  mail_daily_alias: process.env.MAIL_DAILY_ALIAS,
  jwt_secret: process.env.JWT_SECRET,
  google_client_id: process.env.GOOGLE_CLIENT_ID,
  google_client_secret: process.env.GOOGLE_CLIENT_SECRET
};