import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.f16e6129.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Earnings/工程化/rollup.md","filePath":"pages/Earnings/工程化/rollup.md"}'),p={name:"pages/Earnings/工程化/rollup.md"},e=l(`<h2 id="不同" tabindex="-1">不同 <a class="header-anchor" href="#不同" aria-label="Permalink to &quot;不同&quot;">​</a></h2><ol><li>针对js类库打包</li><li>webpack热更新</li><li>组件库可能用到roll up</li></ol><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;"> input: </span><span style="color:#6A737D;">//执行入口文件</span></span>
<span class="line"><span style="color:#E1E4E8;"> output:{</span></span>
<span class="line"><span style="color:#E1E4E8;">   file </span><span style="color:#6A737D;">//输出文件路径名</span></span>
<span class="line"><span style="color:#E1E4E8;">   format: </span><span style="color:#6A737D;">//输出格式 </span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">//     iife: 输出用于浏览器的格式类型</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">//     cjs：用于NodeJs的格式类型</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">//     umd：既可用于浏览器，也可用于NodeJs</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">//     amd：用于像RequireJs模块加载的类型</span></span>
<span class="line"><span style="color:#E1E4E8;"> } </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;"> input: </span><span style="color:#6A737D;">//执行入口文件</span></span>
<span class="line"><span style="color:#24292E;"> output:{</span></span>
<span class="line"><span style="color:#24292E;">   file </span><span style="color:#6A737D;">//输出文件路径名</span></span>
<span class="line"><span style="color:#24292E;">   format: </span><span style="color:#6A737D;">//输出格式 </span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">//     iife: 输出用于浏览器的格式类型</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">//     cjs：用于NodeJs的格式类型</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">//     umd：既可用于浏览器，也可用于NodeJs</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">//     amd：用于像RequireJs模块加载的类型</span></span>
<span class="line"><span style="color:#24292E;"> } </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,4),o=[e];function t(c,r,i,E,y,d){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{_ as __pageData,h as default};
