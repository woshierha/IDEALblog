import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.f16e6129.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Earnings/深入理解ES6/promise.md","filePath":"pages/Earnings/深入理解ES6/promise.md"}'),p={name:"pages/Earnings/深入理解ES6/promise.md"},o=l(`<h2 id="resolve" tabindex="-1">resolve <a class="header-anchor" href="#resolve" aria-label="Permalink to &quot;resolve&quot;">​</a></h2><p>Promise.resolve()</p><ol><li>接受单个参数法，返回一个出于完成状态的promise</li></ol><h2 id="promise-all" tabindex="-1">promise.all <a class="header-anchor" href="#promise-all" aria-label="Permalink to &quot;promise.all&quot;">​</a></h2><ol><li>接受单个可以迭代对象(数组)，返回一个Promise，所有的Promise对象都完成之后，返回的Promise才会完成</li><li>拒绝处理函数会接受到单个值，所以该值就是被拒绝的Promise返回的拒绝值</li></ol><h2 id="回调函数" tabindex="-1">回调函数 <a class="header-anchor" href="#回调函数" aria-label="Permalink to &quot;回调函数&quot;">​</a></h2><ol><li>回调函数的嵌套：代码复用性不强，可阅读性差，可维护性差，扩展性差</li><li>promise本质 不是控制 异步代码的执行顺序（无法控制） ， 而是控制异步代码结果处理的顺序</li><li>Promise 链式回调</li><li>async await 同步方式</li></ol><h2 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-label="Permalink to &quot;例子&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">arr</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> res </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resovle</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (arr.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">resovle</span><span style="color:#E1E4E8;">(res)</span></span>
<span class="line"><span style="color:#E1E4E8;">       arr.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">           </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resovle</span><span style="color:#E1E4E8;">(i).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resp</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">               res[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> resp</span></span>
<span class="line"><span style="color:#E1E4E8;">               </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (arr.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> res.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">resovle</span><span style="color:#E1E4E8;">(res)</span></span>
<span class="line"><span style="color:#E1E4E8;">           }).</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">               </span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(err)</span></span>
<span class="line"><span style="color:#E1E4E8;">           })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">       });</span></span>
<span class="line"><span style="color:#E1E4E8;">   })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">       console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">   })</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Promise</span><span style="color:#24292E;">(</span><span style="color:#E36209;">arr</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">((</span><span style="color:#E36209;">resovle</span><span style="color:#24292E;">, </span><span style="color:#E36209;">reject</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (arr.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">resovle</span><span style="color:#24292E;">(res)</span></span>
<span class="line"><span style="color:#24292E;">       arr.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">i</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">           </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resovle</span><span style="color:#24292E;">(i).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">resp</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">               res[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> resp</span></span>
<span class="line"><span style="color:#24292E;">               </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (arr.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> res.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">resovle</span><span style="color:#24292E;">(res)</span></span>
<span class="line"><span style="color:#24292E;">           }).</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">((</span><span style="color:#E36209;">err</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">               </span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(err)</span></span>
<span class="line"><span style="color:#24292E;">           })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">       });</span></span>
<span class="line"><span style="color:#24292E;">   })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">((</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">       console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">   })</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,9),e=[o];function r(c,t,E,y,i,F){return n(),a("div",null,e)}const d=s(p,[["render",r]]);export{m as __pageData,d as default};
