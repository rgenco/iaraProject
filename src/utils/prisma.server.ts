import { PrismaClient } from "../generated/prisma/client";
import type { Prisma} from "../generated/prisma/client";
import { consola } from "consola";

let prisma: PrismaClient;

declare global {
  var prisma: PrismaClient | undefined;
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      log: [
        { level: "query", emit: "event" },
        { level: "warn", emit: "event" },
        { level: "info", emit: "event" },
        { level: "error", emit: "event" },
      ],
      errorFormat: "pretty",
    });
  }
  prisma = global.prisma;
}

// @ts-ignore
prisma.$on("query", (e: Prisma.QueryEvent) => {
    const logMessage = `Query: ${e.query}\nParams: ${e.params}\nDuration: ${e.duration}ms\n\n`;
    // logFile.write(logMessage);
    console.log(logMessage); 
});

// @ts-ignore
prisma.$on("warn", (e: Prisma.LogEvent) => {
  consola.warn(e.message)
});

// @ts-ignore
prisma.$on("info",(e: Prisma.LogEvent) => {
  consola.info(e.message)
});

// @ts-ignore
prisma.$on("error",(e: Prisma.LogEvent) => {
  consola.error(new Error( e.message));
});

export default prisma;
