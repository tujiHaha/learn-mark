import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;
  router.get("/test/:id", controller.test.index);
  // router.get("/test", controller.test.index);
  router.post("/test", controller.test.index);
  // router.get("/dog", controller.test.getDog);
};
