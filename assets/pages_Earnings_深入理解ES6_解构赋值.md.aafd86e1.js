import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.39f71bcb.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Earnings/深入理解ES6/解构赋值.md","filePath":"pages/Earnings/深入理解ES6/解构赋值.md"}'),p={name:"pages/Earnings/深入理解ES6/解构赋值.md"},o=l(`<h2 id="对象解构-基于名称" tabindex="-1">对象解构 （基于名称） <a class="header-anchor" href="#对象解构-基于名称" aria-label="Permalink to &quot;对象解构 （基于名称）&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> node</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    type:</span><span style="color:#9ECBFF;">&#39;Identifier&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name:</span><span style="color:#9ECBFF;">&#39;foo&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;liitle&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;5&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">({type,name}</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">node) </span><span style="color:#6A737D;">//必须用圆括号来包裹，否则会认为是代码块</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> node</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    type:</span><span style="color:#032F62;">&#39;Identifier&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    name:</span><span style="color:#032F62;">&#39;foo&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;liitle&#39;</span></span>
<span class="line"><span style="color:#24292E;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;5&#39;</span></span>
<span class="line"><span style="color:#24292E;">({type,name}</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">node) </span><span style="color:#6A737D;">//必须用圆括号来包裹，否则会认为是代码块</span></span></code></pre></div><h2 id="使用不同名称的解构赋值" tabindex="-1">使用不同名称的解构赋值 <a class="header-anchor" href="#使用不同名称的解构赋值" aria-label="Permalink to &quot;使用不同名称的解构赋值&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> node</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    name:</span><span style="color:#9ECBFF;">&#39;2131&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    type:</span><span style="color:#9ECBFF;">&#39;sda&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> {</span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">:localtype,</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">:localname}</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">node</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(localname)</span><span style="color:#6A737D;">//2131</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//增加默认值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> {</span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">:localtype,</span><span style="color:#FFAB70;">age</span><span style="color:#E1E4E8;">:localage</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;12&quot;</span><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">node </span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(localage) </span><span style="color:#6A737D;">//12</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//对象嵌套解构</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> node</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    type:</span><span style="color:#9ECBFF;">&#39;indetifier&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    loc:{</span></span>
<span class="line"><span style="color:#E1E4E8;">        start:{</span></span>
<span class="line"><span style="color:#E1E4E8;">            line:</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            column:</span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> {</span><span style="color:#FFAB70;">loc</span><span style="color:#E1E4E8;">:{start}}</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> node</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(start.line) </span><span style="color:#6A737D;">//1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> node</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    name:</span><span style="color:#032F62;">&#39;2131&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    type:</span><span style="color:#032F62;">&#39;sda&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> {</span><span style="color:#E36209;">type</span><span style="color:#24292E;">:localtype,</span><span style="color:#E36209;">name</span><span style="color:#24292E;">:localname}</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">node</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(localname)</span><span style="color:#6A737D;">//2131</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//增加默认值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> {</span><span style="color:#E36209;">type</span><span style="color:#24292E;">:localtype,</span><span style="color:#E36209;">age</span><span style="color:#24292E;">:localage</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;12&quot;</span><span style="color:#24292E;">} </span><span style="color:#D73A49;">=</span><span style="color:#24292E;">node </span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(localage) </span><span style="color:#6A737D;">//12</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//对象嵌套解构</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> node</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    type:</span><span style="color:#032F62;">&#39;indetifier&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    loc:{</span></span>
<span class="line"><span style="color:#24292E;">        start:{</span></span>
<span class="line"><span style="color:#24292E;">            line:</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            column:</span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> {</span><span style="color:#E36209;">loc</span><span style="color:#24292E;">:{start}}</span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> node</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(start.line) </span><span style="color:#6A737D;">//1</span></span></code></pre></div><blockquote><p>每当有一个冒号在解构模式中出现，就意味着冒号之前 的标识符代表需要检查的位置，而冒号右侧则是赋值的目标。当冒号右侧存在花括号时，表 示目标被嵌套在对象的更深一层中。</p></blockquote><h2 id="数据解构-基于位置" tabindex="-1">数据解构（基于位置） <a class="header-anchor" href="#数据解构-基于位置" aria-label="Permalink to &quot;数据解构（基于位置）&quot;">​</a></h2><h3 id="交换两个变量值" tabindex="-1">交换两个变量值 <a class="header-anchor" href="#交换两个变量值" aria-label="Permalink to &quot;交换两个变量值&quot;">​</a></h3><blockquote><p>赋值语句左侧（即等号之前）的解构模式正如其他 数组解构的范例，右侧则是为了互换而临时创建的数组字面量</p></blockquote><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,b</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">[a,b]</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">[b,a] </span><span style="color:#6A737D;">//临时数组的第一和第二个位置</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(a,b) </span><span style="color:#6A737D;">//2 1</span></span>
<span class="line"><span style="color:#6A737D;">//默认值</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> color</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">[red]</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> [first,second</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;blue&#39;</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">color</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(first)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(second)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,b</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">[a,b]</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">[b,a] </span><span style="color:#6A737D;">//临时数组的第一和第二个位置</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(a,b) </span><span style="color:#6A737D;">//2 1</span></span>
<span class="line"><span style="color:#6A737D;">//默认值</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> color</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">[red]</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> [first,second</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;blue&#39;</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">color</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(first)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(second)</span></span></code></pre></div><h3 id="嵌套的解构" tabindex="-1">嵌套的解构 <a class="header-anchor" href="#嵌套的解构" aria-label="Permalink to &quot;嵌套的解构&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> colors</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">[[</span><span style="color:#9ECBFF;">&#39;blue&#39;</span><span style="color:#E1E4E8;">],</span><span style="color:#9ECBFF;">&#39;red&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;greeem&#39;</span><span style="color:#E1E4E8;">,[</span><span style="color:#9ECBFF;">&#39;glod&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;gray&#39;</span><span style="color:#E1E4E8;">]]</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> [[first],,,[next,last]]</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">colors</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(first,next,last)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> colors</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">[[</span><span style="color:#032F62;">&#39;blue&#39;</span><span style="color:#24292E;">],</span><span style="color:#032F62;">&#39;red&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;greeem&#39;</span><span style="color:#24292E;">,[</span><span style="color:#032F62;">&#39;glod&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;gray&#39;</span><span style="color:#24292E;">]]</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> [[first],,,[next,last]]</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">colors</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(first,next,last)</span></span></code></pre></div><h3 id="剩余项" tabindex="-1">剩余项 <a class="header-anchor" href="#剩余项" aria-label="Permalink to &quot;剩余项&quot;">​</a></h3><p>...将剩余项目指定给变量</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> color</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&#39;blue&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;red&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;yellow&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> [first,</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">restcolors]</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(restcolors)</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> concat 如果不设定参数就可以克隆该数组,还是浅拷贝</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> color</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">[</span><span style="color:#032F62;">&#39;blue&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;red&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;yellow&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> [first,</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">restcolors]</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(restcolors)</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> concat 如果不设定参数就可以克隆该数组,还是浅拷贝</span></span></code></pre></div><h3 id="参数解构" tabindex="-1">参数解构 <a class="header-anchor" href="#参数解构" aria-label="Permalink to &quot;参数解构&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setCookies</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">,{</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">}){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//dosomething</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">setCookies</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sd&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;js&#39;</span><span style="color:#E1E4E8;">,{</span></span>
<span class="line"><span style="color:#E1E4E8;">    path:</span><span style="color:#9ECBFF;">&#39;/dasd/&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    url:</span><span style="color:#9ECBFF;">&#39;localhost:8800&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setCookies</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">,</span><span style="color:#E36209;">value</span><span style="color:#24292E;">,{</span><span style="color:#E36209;">path</span><span style="color:#24292E;">,</span><span style="color:#E36209;">url</span><span style="color:#24292E;">}){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//dosomething</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">setCookies</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;sd&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;js&#39;</span><span style="color:#24292E;">,{</span></span>
<span class="line"><span style="color:#24292E;">    path:</span><span style="color:#032F62;">&#39;/dasd/&#39;</span></span>
<span class="line"><span style="color:#24292E;">    url:</span><span style="color:#032F62;">&#39;localhost:8800&#39;</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="应用" tabindex="-1">应用 <a class="header-anchor" href="#应用" aria-label="Permalink to &quot;应用&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// let node={</span></span>
<span class="line"><span style="color:#6A737D;">//     name:&#39;2131&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//     type:&#39;sda&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#6A737D;">// let {type:localtype,name:localname}=node</span></span>
<span class="line"><span style="color:#6A737D;">// console.log(localname)</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> node</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    type:</span><span style="color:#9ECBFF;">&#39;indetifier&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    loc:{</span></span>
<span class="line"><span style="color:#E1E4E8;">        start:{</span></span>
<span class="line"><span style="color:#E1E4E8;">            line:</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            column:</span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> {</span><span style="color:#FFAB70;">loc</span><span style="color:#E1E4E8;">:{start}}</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> node</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(start.line) </span><span style="color:#6A737D;">//1</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, b</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> ;</span></span>
<span class="line"><span style="color:#E1E4E8;">[a,b]</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">[b,a]</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(a,b) </span><span style="color:#6A737D;">//2 1</span></span>
<span class="line"><span style="color:#6A737D;">// let colors=[[&#39;blue&#39;],&#39;red&#39;,&#39;greeem&#39;,[&#39;glod&#39;,&#39;gray&#39;]]</span></span>
<span class="line"><span style="color:#6A737D;">// let [[first],,,[next,last]]=colors</span></span>
<span class="line"><span style="color:#6A737D;">// console.log(first,next,last)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> color</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&#39;blue&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;red&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;yellow&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> [first,</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">restcolors]</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">color</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(restcolors)</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> colorobj</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">color.</span><span style="color:#B392F0;">concat</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">colorobj[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;orange&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(colorobj,color);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setcookie</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">,{</span><span style="color:#FFAB70;">scure</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">}){</span></span>
<span class="line"><span style="color:#6A737D;">//    options=options||{}</span></span>
<span class="line"><span style="color:#6A737D;">//    let scure=options.scure,</span></span>
<span class="line"><span style="color:#6A737D;">//        path=options.path;</span></span>
<span class="line"><span style="color:#E1E4E8;">       console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(scure,path)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">setcookie</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;js&#39;</span><span style="color:#E1E4E8;">,{</span></span>
<span class="line"><span style="color:#E1E4E8;">    scure:</span><span style="color:#9ECBFF;">&#39;sda&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    path:</span><span style="color:#9ECBFF;">&#39;/dsad/dad&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// let node={</span></span>
<span class="line"><span style="color:#6A737D;">//     name:&#39;2131&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">//     type:&#39;sda&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#6A737D;">// let {type:localtype,name:localname}=node</span></span>
<span class="line"><span style="color:#6A737D;">// console.log(localname)</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> node</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    type:</span><span style="color:#032F62;">&#39;indetifier&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    loc:{</span></span>
<span class="line"><span style="color:#24292E;">        start:{</span></span>
<span class="line"><span style="color:#24292E;">            line:</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            column:</span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> {</span><span style="color:#E36209;">loc</span><span style="color:#24292E;">:{start}}</span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> node</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(start.line) </span><span style="color:#6A737D;">//1</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, b</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> ;</span></span>
<span class="line"><span style="color:#24292E;">[a,b]</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">[b,a]</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(a,b) </span><span style="color:#6A737D;">//2 1</span></span>
<span class="line"><span style="color:#6A737D;">// let colors=[[&#39;blue&#39;],&#39;red&#39;,&#39;greeem&#39;,[&#39;glod&#39;,&#39;gray&#39;]]</span></span>
<span class="line"><span style="color:#6A737D;">// let [[first],,,[next,last]]=colors</span></span>
<span class="line"><span style="color:#6A737D;">// console.log(first,next,last)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> color</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">[</span><span style="color:#032F62;">&#39;blue&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;red&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;yellow&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> [first,</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">restcolors]</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">color</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(restcolors)</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> colorobj</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">color.</span><span style="color:#6F42C1;">concat</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">colorobj[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;orange&#39;</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(colorobj,color);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setcookie</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">,</span><span style="color:#E36209;">value</span><span style="color:#24292E;">,{</span><span style="color:#E36209;">scure</span><span style="color:#24292E;">,</span><span style="color:#E36209;">path</span><span style="color:#24292E;">}){</span></span>
<span class="line"><span style="color:#6A737D;">//    options=options||{}</span></span>
<span class="line"><span style="color:#6A737D;">//    let scure=options.scure,</span></span>
<span class="line"><span style="color:#6A737D;">//        path=options.path;</span></span>
<span class="line"><span style="color:#24292E;">       console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(scure,path)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">setcookie</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;type&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;js&#39;</span><span style="color:#24292E;">,{</span></span>
<span class="line"><span style="color:#24292E;">    scure:</span><span style="color:#032F62;">&#39;sda&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    path:</span><span style="color:#032F62;">&#39;/dsad/dad&#39;</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,18),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const h=s(p,[["render",c]]);export{A as __pageData,h as default};
