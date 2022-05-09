import { Service } from "egg";

interface TDogRes{
  message:string;
  status:string
}

export default class DogService extends Service {
  async show() {
    const resp = await this.ctx.curl<TDogRes>(
      "https://dog.ceo/api/breeds/image/random",
      {
        dataType: "json",
      }
    );

    return resp.data
  }
}
