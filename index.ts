import { HydycoServer } from "@hydyco/core";
import { getConfig, middleware } from "@hydyco/core/ioc";
HydycoServer.start();

console.log(middleware("authMiddleware"));
