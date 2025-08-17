
module.exports = ({ env }) => ({
  auth: {
    secret: env('1fd8c1217e3121963b0706b473e67d0b'),
  },
  apiToken: {
    salt: env('02aQqVIif8QV5JVz0NDCCQ=='),
  },
  transferToken: {
    salt: env('tL3pQ8+7D0kZH6zOc6JxfQ=='),
  },
});
