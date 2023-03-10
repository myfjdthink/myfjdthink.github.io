(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{633:function(s,n,a){"use strict";a.r(n);var e=a(2),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"如何-parse-一个-typescript-interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何-parse-一个-typescript-interface"}},[s._v("#")]),s._v(" 如何 parse 一个 typescript interface")]),s._v(" "),n("h2",{attrs:{id:"目标"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目标"}},[s._v("#")]),s._v(" 目标")]),s._v(" "),n("p",[s._v("有如下一个接口定义，我们想把它的结构 parse 出来，知道每个字段的定义和注释，方便我们生成文档")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import {IBanner} from './base/IBanner'\nimport {IProductGroup} from './base/IProductGroup'\n\n/**\n * 投资列表页面\n */\nexport interface IProductList {\n  /**\n   * 产品分组\n   */\n  groupList: Array<IProductGroup>\n  /**\n   * 产品列表\n   */\n  list: Array<{\n    a: string,\n    b: number\n  }>\n  /**\n   * 投资列表页面的banner\n   */\n  banners: Array<IBanner>\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h2",{attrs:{id:"typescript-提供的-ast"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#typescript-提供的-ast"}},[s._v("#")]),s._v(" typescript 提供的 ast")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import * as ts from 'typescript'\n\nconst {options} = ts.convertCompilerOptionsFromJson({}, '.', 'tsconfig.json')\noptions.skipLibCheck = true\noptions.skipDefaultLibCheck = true\nlet program = ts.createProgram([\n  './src/dashboard/interface/IProductService'\n], options)\n\nfor (let sourceFile of program.getSourceFiles()) {\n  if (sourceFile.fileName.includes('IProductService.ts')) {\n    console.log('fileName', sourceFile.fileName)\n    console.log('statements', sourceFile.statements[1].members[])\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("节选一段输出：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("{\n  pos: 38,\n  end: 276,\n  flags: 0,\n  transformFlags: undefined,\n  parent: undefined,\n  kind: 235,\n  jsDoc: \n   [ NodeObject {\n       .....\n       tags: undefined,\n       comment: '投资列表页面' } ],\n  decorators: undefined,\n  modifiers: \n   [ TokenObject { pos: 38, end: 64, flags: 0, parent: undefined, kind: 84 },\n     pos: 38,\n     end: 64 ],\n  name: \n   IdentifierObject {\n     .....\n     escapedText: 'IProductList' },\n  typeParameters: undefined,\n  heritageClauses: undefined,\n  members: \n   [ NodeObject {\n       .....\n       jsDoc: [Array],\n       modifiers: undefined,\n       name: [Object],\n       questionToken: undefined,\n       type: [Object] },\n     ....\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("p",[s._v("原始的 ast ，需要自己写程序遍历完整结构。")]),s._v(" "),n("h2",{attrs:{id:"ts-simple-ast"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ts-simple-ast"}},[s._v("#")]),s._v(" ts-simple-ast")]),s._v(" "),n("p",[s._v("ts-simple-ast 提供了一些元素获取的方法，例如")]),s._v(" "),n("p",[s._v("getInterface")]),s._v(" "),n("p",[s._v("getProperties")]),s._v(" "),n("p",[s._v("可以快速拿到你要的对象。")]),s._v(" "),n("p",[s._v("不足是，无法识别 import 进来的内容，例如")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("interfaceFile.getInterface('IBanner') \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("是无法获取的，因为 IBanner 是引用其他文件的")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import {Project} from 'ts-simple-ast'\n\n// initialize\nconst project = new Project()\nproject.addSourceFilesFromTsConfig('./tsconfig.json')\nconst interfaceFile = project.getSourceFile('src/dashboard/interface/IProductService.ts')\nconsole.log('getProperties', interfaceFile.getInterface('IProductList').getProperties())\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"readts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#readts"}},[s._v("#")]),s._v(" readts")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/charto/readts",target:"_blank",rel:"noopener noreferrer"}},[s._v("readts"),n("OutboundLink")],1),s._v(" 这个开源包虽然很冷门，但它却更符合我们的需求，它可以 parse 出项目里所有的 class 和 interface 等，而且连 import 进来的对象也帮你 ref 好了。")]),s._v(" "),n("p",[s._v("遗憾的是，匿名的对象定义还是无法 parse。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("{\n    a: string,\n    b: number\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("用法：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const readts = require('readts');\nconst lodash = require('lodash');\n\nvar parser = new readts.Parser();\n\n// Read configuration used in the project we want to analyze.\nvar config = parser.parseConfig('tsconfig.json');\n\n// Modify configuration as needed, for example to avoid writing compiler output to disk.\nconfig.options.noEmit = true;\n\n// Parse the project.\nvar tree = parser.parse(config);\n\nvar interfaceList = lodash(tree)\n  .filter(item => item.interfaceList.length > 0)\n  .concat()\n  .map('interfaceList')\n  .map(item => item[0])\n  // .filter(item => item.name && item.name.match(/^I.*/))\n  // .value()\n  .find(item => item.name === 'IProductList');\n\nconsole.log('interfaceList', interfaceList);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("p",[s._v("输出示例：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ClassSpec {\n  name: 'IProductList',\n  pos: \n   { sourcePath: '/Users/nick/nodePro/klg-app/src/dashboard/interface/IProductService.ts',\n     firstLine: 6,\n     lastLine: 22 },\n  symbol: \n   SymbolObject {\n     flags: 64,\n     escapedName: 'IProductList',\n     declarations: [ [Object] ],\n     members: \n      Map {\n        'groupList' => [Object],\n        'list' => [Object],\n        'banners' => [Object] },\n     parent: \n      SymbolObject {\n        flags: 512,\n        escapedName: '\"/Users/nick/nodePro/klg-app/src/dashboard/interface/IProductService\"',\n        declarations: [Array],\n        exports: [Object],\n        valueDeclaration: [Object],\n        id: 8410 },\n     documentationComment: [ [Object] ],\n     id: 8359 },\n  doc: '投资列表页面',\n  propertyList: \n   [ IdentifierSpec {\n       name: 'groupList',\n       type: [Object],\n       optional: false,\n       pos: [Object],\n       doc: '产品分组' },\n     IdentifierSpec {\n       name: 'list',\n       type: [Object],\n       optional: false,\n       pos: [Object],\n       doc: '产品列表' },\n     IdentifierSpec {\n       name: 'banners',\n       type: [Object],\n       optional: false,\n       pos: [Object],\n       doc: '投资列表页面的banner' } ] }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);