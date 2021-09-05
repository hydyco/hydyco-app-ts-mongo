import { RestApi } from "@hydyco/rest-plugin";
import UserRoutes from "../routes/userRoutes";

export default {
  baseUrl: "/api/v1",
  restModule: RestApi,
  overrides: {
    user: UserRoutes,
  },
  customRoutes: [],
};
