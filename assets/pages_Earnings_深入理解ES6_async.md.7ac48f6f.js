import{_ as n,o as t,c as r,k as e,a}from"./chunks/framework.f16e6129.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Earnings/深入理解ES6/async.md","filePath":"pages/Earnings/深入理解ES6/async.md"}'),l={name:"pages/Earnings/深入理解ES6/async.md"},s=e("h2",{id:"generrator语法糖",tabindex:"-1"},[a("generrator语法糖 "),e("a",{class:"header-anchor",href:"#generrator语法糖","aria-label":'Permalink to "generrator语法糖"'},"​")],-1),i=e("ul",null,[e("li",null,"不触发不执行，调用next方法后才开始执行，执行到yield运行yield后面的的表达式，然后就暂停，yield就是暂停的标志。"),e("li",null,"遇到yield表达式，暂停执行后面 的操作，"),e("li",null,[a("next方法的运行逻辑 "),e("blockquote",null,[e("p",null,"（1）遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。 （2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。 （3）如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。 （4）如果该函数没有return语句，则返回的对象的value属性值为undefined。")])]),e("li",null,"yield本身没有返回值，next方法可以带一个参数作为上一个yield表达式的返回值 内部的异步函数在async中变为了同步，即await后的异步表达式执行完后，才继续向下执行。 对于generator来说，async是自动执行的，而generator返回的是iterator，必须要调用next，才能执行。")],-1),o=[s,i];function d(c,u,_,y,p,g){return t(),r("div",null,o)}const m=n(l,[["render",d]]);export{f as __pageData,m as default};
