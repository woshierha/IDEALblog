import{_ as t,o as r,c as i,k as e,a}from"./chunks/framework.f16e6129.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Earnings/实习总结/birdge.md","filePath":"pages/Earnings/实习总结/birdge.md"}'),n={name:"pages/Earnings/实习总结/birdge.md"},o=e("h2",{id:"bridge的实现方法",tabindex:"-1"},[a("bridge的实现方法 "),e("a",{class:"header-anchor",href:"#bridge的实现方法","aria-label":'Permalink to "bridge的实现方法"'},"​")],-1),s=e("ol",null,[e("li",null,"iframe (fusion 和 dbridge 用的是这一种)"),e("li",null,"jscore context"),e("li",null,"wbkit 的 postmessage")],-1),l=e("h2",{id:"weex的实现原理",tabindex:"-1"},[a("weex的实现原理 "),e("a",{class:"header-anchor",href:"#weex的实现原理","aria-label":'Permalink to "weex的实现原理"'},"​")],-1),d=e("ol",null,[e("li",null,"首先编写weex文件，通过weex- toolkit将其转换为JS bundle，然后通过服务器发送给内置在native的JS - Framework, JS - Framework接收到文件并执行JS- bundle，并且执行数据绑定模板编译最后输出JSON格式的Vdom给native，同时提供call Native和call JS接口，方便JS Framework 和 Native 的通信。同样的一份 json 数据，在不同平台的渲染引擎中能够渲染成不同版本的 UI，这也是 Weex 可以实现动态化的原因。")],-1),c=[o,s,l,d];function _(g,h,m,b,p,u){return r(),i("div",null,c)}const k=t(n,[["render",_]]);export{f as __pageData,k as default};
