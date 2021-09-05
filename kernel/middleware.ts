/**
 * Register your middleware here
 * global middleware - runs at global level, even before plugins
 * namedMiddleware - registers named middleware
 */

import { authMiddleware } from "@hydyco/auth";

export default {
  globalMiddleware: [errorHandler],
  namedMiddleware: { authMiddleware },
};

function errorHandler(err, req, res, next) {
  console.log(err);
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
}
