// Catch-all API function for Vercel. The original server handler keeps all
// existing /api/* routes in one place. Disable Vercel's automatic body parser
// because server.js reads request bodies directly from the Node stream.
module.exports = require("../server");
module.exports.config = {
  api: {
    bodyParser: false
  }
};
