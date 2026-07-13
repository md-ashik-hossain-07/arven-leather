import app from "./app";
import { env } from "./config/env";
import connectDB from "./database/connection";

const PORT = Number(env.PORT);

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 ARVEN Backend running on port ${PORT}`);
  });
};

startServer();