module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', '1fd8c1217e3121963b0706b473e67d0b'),
    },
  },
});
