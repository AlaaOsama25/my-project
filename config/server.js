module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['3eQCr3ttlKki71cWlAxirQ==','0bdoBJYF5+mfG8wpsyRu8g==']),
  },
});
