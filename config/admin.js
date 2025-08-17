module.exports = ({ env }) => ({
  auth: {
    secret: env('1fd8c1217e3121963b0706b473e67d0b'),
  },
  apiToken: {
    salt: env('02aQqVIif8QV5JVz0NDCCQ=='),
  },
  transfer: {
    token: {
      salt: env('tL3pQ8+7D0kZH6zOc6JxfQ=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
