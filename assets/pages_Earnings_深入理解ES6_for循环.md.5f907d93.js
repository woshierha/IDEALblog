import{_ as o,o as e,c as r,Q as a}from"./chunks/framework.f16e6129.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Earnings/深入理解ES6/for循环.md","filePath":"pages/Earnings/深入理解ES6/for循环.md"}'),t={name:"pages/Earnings/深入理解ES6/for循环.md"},i=a('<h2 id="for-in-适合对象" tabindex="-1">for in 适合对象 <a class="header-anchor" href="#for-in-适合对象" aria-label="Permalink to &quot;for in 适合对象&quot;">​</a></h2><ul><li>遍历对象的属性名，就是键名（key），数组中每个元素的索引被视作元素的属性名称，所以for in遍历的是每个元素的索引。</li><li>只能迭代出对象的可枚举的属性【js自定义的属性,包括啊原型】 【不可枚举属性【对象的内置属性，如数组的length 就是一个内置属性，所以for…in遍历不出来】)。】</li><li>原理是Object.keys() 返回给定对象的所有可枚举属性的字符串数组</li></ul><h2 id="for-of-适合数组" tabindex="-1">for of 适合数组 <a class="header-anchor" href="#for-of-适合数组" aria-label="Permalink to &quot;for of 适合数组&quot;">​</a></h2><ul><li>遍历对象所有属性对应的值 value，遍历数组的时候得到每个元素的值。 <ul><li>or of不支持普通对象，想遍历对象的属性，可以用for in循环, 或内建的Object.keys()方法：</li></ul><blockquote><p>for…of 语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句 for…of 语句遍历可迭代对象定义要迭代的数据（非自定义属性） for…of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象、Generator 对象，以及字符串。</p></blockquote></li></ul>',4),n=[i];function l(f,s,_,c,d,p){return e(),r("div",null,n)}const m=o(t,[["render",l]]);export{h as __pageData,m as default};
