import { Context, Application } from "egg";
import { appendFileSync } from "fs";

export default (options: any, app: Application) => {
  console.log(options, app);
  return async (ctx: Context, next: () => Promise<any>) => {
    const startTime = Date.now();

    const requestTime = new Date();

    await next();

    const ms = Date.now() - startTime;

    const logTime = `${requestTime} -- ${ctx.method} -- ${ctx.url} -- ${ms}ms/\n`;

    appendFileSync("./log.txt", logTime);
  };
};
