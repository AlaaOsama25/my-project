module.exports = ({ env }) => ({
    proxy: true,
    url: env('MY_HEROKU_URL'),
    app: { 
      keys: env.array('APP_KEYS', ['3eQCr3ttlKki71cWlAxirQ==','0bdoBJYF5+mfG8wpsyRu8g==']),
      
    },
  })