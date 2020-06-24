const server = require('./runfile/server');

const PORT = process.env.PORT || 8226;
server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});
