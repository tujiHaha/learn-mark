# study record mark

后端框架选择 Egg.js + Typescript

数据库选择 MongoDB 到 mongoose

### 技术方案设计 - 接口设计
**技术方案设计的重要性**

**功能拆分**
*用户系统*
  * 注册

  * 登录

* 作品管理

* 模板

* 渠道

* 工具类
  * 上传图片
  * 预览以及展示作品

**要特别留意的问题：权限**

* 第一层级  登录用户
* 第二层级  只能更新或删除自己的资源
* 第三层级  只能更新特定的字段
* 第四层级  管理员

#### 第二步 从需求提取接口 ####
** RESTFUL api 格式**
* 路径 -Endpoint 
> 每个网址代表一种资源 resource 正好可以和我们的需求分类的这几种实体相对应

* 动词 - verb
> 对于资源的具体操作类型 由http 动词表示
* GET (select) 从服务器取资源 一项或多项
* POST(CREATE) 在服务器创建资源
* PUT(UPDATE) 服务器更新资源 客户端提供完整资源
* PATCH(UPDATE) 更新资源  客户端提供改变的属性
* DELETE(DELETE) 删除资源 从服务器删除资源

#### 返回参数 ####
```json
{
  errno:0, // 错误码
  data:{...},
  message:'xxxx'
}
```

## express ##
**快速 无限制**
#### 中间件 ####
*线性*

#### Koa2 ####
* 使用 Promise 代替 callback
* 使用 ctx 上下文封装 req 和 res
*  **完全不同的中间件机制**
* 更轻量

***koa2***
* 洋葱模型
* 太轻量级
* 没有约束 对于统一维护和开发非常不利

**egg.js**

#### 对于后端框架的需求 ####
* 需要统一的约定
* 丰富的扩展性
* 对typescript 支持
* 约定优于配置

三层架构模式

* Router

* Controller 控制器  输入  输出

* Service服务：对复杂业务的封装
* 保持controller简洁
* 保持业务逻辑的独立性
* 将逻辑和展示分离
*使用场景*
查数据库
第三方api

#### next.js ####

* class 装饰器用的比较多

curl -X POST http://localhost:7002/test --data '{"name":"yuex","hobby":"soccer"}' --header 'Content-Type:application/json; charset=UTF-8'

