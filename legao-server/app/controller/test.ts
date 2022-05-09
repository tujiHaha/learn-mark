import { Controller } from "egg";

export default class TestController extends Controller {
  async index() {
    const { ctx } = this;
    const { body } = ctx.request;

    const resp = {
      // query,
      body,
    };
    ctx.body = resp;
    ctx.status = 200;
  }

  async getDog() {
    const { ctx, service } = this;

    const resp = await service.dog.show();

    ctx.body = resp.message;
    ctx.status = 200;
  }
}
