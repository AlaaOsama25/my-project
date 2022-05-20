// path: ./config/plugins.js

module.exports = ({ env }) => ({
    // enable a plugin that doesn't require any configuration
    i18n: true,
    'users-permissions': {
        config: {
          jwt: {
            expiresIn: '7d',
          },
          jwtsecret: '9mlygbGZbaiTCH4BjsgmMw=='
        },
      },
  
    
  
    
  });
