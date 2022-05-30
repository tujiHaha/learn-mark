import { Controller } from "egg";

export default class TestController extends Controller{

  async index(){
    // ctx app service config

    // const {ctx}=this

    this.ctx.response.body = '123'

    this.ctx.response.status =200
  }
}