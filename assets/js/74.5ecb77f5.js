(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{636:function(t,a,e){"use strict";e.r(a);var r=e(2),n=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ai-考拉-2018-开源汇总-node-基础架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ai-考拉-2018-开源汇总-node-基础架构"}},[t._v("#")]),t._v(" AI 考拉 2018 开源汇总（Node 基础架构）")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("2018 年，考拉开始对现有项目的常用的工具库进行整理，包含日期处理，数字处理，logger 等常用工具，并打包成 npm module，方便各个项目使用。")]),t._v(" "),a("h2",{attrs:{id:"代码风格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码风格"}},[t._v("#")]),t._v(" 代码风格")]),t._v(" "),a("p",[t._v("在开发工具库之前，我们统一了编码标准")]),t._v(" "),a("h3",{attrs:{id:"javascript-代码规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-代码规范"}},[t._v("#")]),t._v(" JavaScript 代码规范")]),t._v(" "),a("p",[t._v("前端 browser 通用")]),t._v(" "),a("p",[t._v("统一使用 "),a("a",{attrs:{href:"https://github.com/kaolalicai/eslint-config-klg",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-config-klg"),a("OutboundLink")],1),t._v(" ，基于 "),a("a",{attrs:{href:"https://github.com/standard/eslint-config-standard",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-config-standard"),a("OutboundLink")],1),t._v(" 封装")]),t._v(" "),a("p",[t._v("安装说明见文档")]),t._v(" "),a("h3",{attrs:{id:"typescript-代码规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-代码规范"}},[t._v("#")]),t._v(" Typescript 代码规范")]),t._v(" "),a("p",[t._v("统一使用 "),a("a",{attrs:{href:"https://github.com/kaolalicai/tslint-config-klg",target:"_blank",rel:"noopener noreferrer"}},[t._v("tslint-config-klg"),a("OutboundLink")],1),t._v(" ，基于 "),a("a",{attrs:{href:"https://github.com/standard/tslint-config-standard",target:"_blank",rel:"noopener noreferrer"}},[t._v("tslint-config-standard"),a("OutboundLink")],1),t._v(" 封装")]),t._v(" "),a("p",[t._v("安装说明见文档")]),t._v(" "),a("h2",{attrs:{id:"脚手架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚手架"}},[t._v("#")]),t._v(" 脚手架")]),t._v(" "),a("p",[t._v("我们也提供了脚手架 "),a("a",{attrs:{href:"https://github.com/kaolalicai/egg-init",target:"_blank",rel:"noopener noreferrer"}},[t._v("klg-init"),a("OutboundLink")],1),t._v("，来方便大家启动一个新项目。")]),t._v(" "),a("p",[t._v("安装好这个工具后，一键生成项目模板")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ klg-init dest\n[klg-init] fetching npm info of klg-init-config\n? Please select a boilerplate type (Use arrow keys)\n  ──────────────\n❯ module - npm 库项目模板 \n  model - mongoose model 模板 todo \n  project - JavaScript 后端项目模板 todo \n  project-ts - Typescript 后端项目模板 todo \n  admin - 管理后台项目模板 todo \n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("目前支持的模板有：")]),t._v(" "),a("ul",[a("li",[t._v("npm module，模板地址："),a("a",{attrs:{href:"https://github.com/kaolalicai/klg-boilerplate-module",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/kaolalicai/klg-boilerplate-module"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("typescript + koa + mongoose 后端项目，模板地址："),a("a",{attrs:{href:"https://github.com/kaolalicai/klg-koa-starter-kit",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/kaolalicai/klg-koa-starter-kit"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("管理后台项目，模板地址："),a("a",{attrs:{href:"https://github.com/kaolalicai/klg-admin-boilerplate",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/kaolalicai/klg-admin-boilerplate"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"工具库列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具库列表"}},[t._v("#")]),t._v(" 工具库列表")]),t._v(" "),a("p",[t._v("目前已经发布的工具库有：")]),t._v(" "),a("ul",[a("li",[t._v("klg-logger ： logger 工具，基于 tracer")]),t._v(" "),a("li",[t._v("klg-number ： 数字处理，主要解决 node 小数精度问题")]),t._v(" "),a("li",[t._v("klg-request-log ：http 请求 log 记录，方便排查问题")]),t._v(" "),a("li",[t._v("klg-mq ： rabbitmq 连接工具")]),t._v(" "),a("li",[t._v("klg-mq-koa ： 将 mq 和 koa router 无缝结合")]),t._v(" "),a("li",[t._v("klg-redlock ： 基于 redis 的分布式锁")]),t._v(" "),a("li",[t._v("klg-date ： 日期处理，基于 moment")]),t._v(" "),a("li",[t._v("klg-request ： 后端使用的 http 请求工具，基于 superagent")]),t._v(" "),a("li",[t._v("klg-retry ： 重试工具")]),t._v(" "),a("li",[t._v("klg-tracer ： 链路追踪工具，该项目实际不能使用，原因见项目内文档\n上述项目都可以在我们公司的开源账号找到 "),a("a",{attrs:{href:"https://github.com/kaolalicai?utf8=%E2%9C%93&q=&type=&language=typescript",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/kaolalicai?utf8=%E2%9C%93&q=&type=&language=typescript"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);