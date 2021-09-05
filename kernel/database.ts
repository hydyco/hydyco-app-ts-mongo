import {
  HydycoModel,
  MongoosePlugin,
  MongooseRoutes,
} from "@hydyco/mongoose-plugin";

export default {
  plugin: MongoosePlugin,
  routesHandler: MongooseRoutes,
  model: HydycoModel,
  config: {
    connectionString:
      "connectionString",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
