module.exports = [
  {
    settings: {
      cors: {
        enabled: true,
        origin: ['*'] // Or specify the domain
      },
    }
  },
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
