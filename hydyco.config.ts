import { authMiddleware } from "@hydyco/auth";
import Welcome from "./welcome";
import UserRoutes from "./routes/userRoutes";
export const config: any = {
  config: {
    cors: {},
    job: {
      enable: true,
      queueName: "myqueue",
      maxRetriesPerRequest: null,
      enableReadyCheck: false,
      connection: {
        port: 6379, // Redis port
        host: "127.0.0.1", // Redis host
        family: 4, // 4 (IPv4) or 6 (IPv6)
        // auth: "user",
        // password: "auth",
        db: 0,
      },
    },
    plugins: {
      auth: {
        secretOrKey: "random",
        expiresIn: 30000,
      },
      file: { uploadDir: "uploads", uploadUrl: process.env.UPLOAD_URL },
      email: {
        port: 1025,
        tls: {
          rejectUnauthorized: false,
        },
      },
    },
    server: {
      port: process.env.PORT,
      logger: true,
      loggerMode: "dev",
    },
  },
  kernel: {
    database: {
      config: {
        connectionString: process.env.MONGO_CONNECTION,
        options: {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
      },
    },
    middleware: {
      before: [],
      after: [Welcome],
      globalMiddleware: [],
      namedMiddleware: { authMiddleware },
    },
    routes: {
      baseUrl: "/api/v1",
      overrides: {
        user: UserRoutes,
      },
      customRoutes: [],
    },
  },
};
