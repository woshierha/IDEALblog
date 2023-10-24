import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.f16e6129.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Earnings/深入理解ES6/map.md","filePath":"pages/Earnings/深入理解ES6/map.md"}'),p={name:"pages/Earnings/深入理解ES6/map.md"},o=l(`<h2 id="map-和-object区别" tabindex="-1">map 和 object区别 <a class="header-anchor" href="#map-和-object区别" aria-label="Permalink to &quot;map 和 object区别&quot;">​</a></h2><p>Map和Object都是JavaScript中的数据结构，但是它们有以下区别： Map中的键可以是任意类型，而Object的键必须是字符串或符号类型。 Map是有序的，而Object是无序的。 Map的键值对数量可以通过size属性获取，而Object的键值对数量需要手动计算。 Map具有内置的迭代器，可以使用for...of循环遍历，而Object需要使用Object.keys()等方法来获取键，再进行遍历。 在频繁地增删键值对的操作中，Map的性能比Object更好。总的来说，如果需要使用任意类型作为键、需要有序的键值对、需要内置迭代器以及需要频繁的增删键值对操作，应该选择Map；如果只需要使用字符串或符号类型的键以及简单的键值对操作，则可以使用Object。</p><h2 id="set-map" tabindex="-1">SEt Map <a class="header-anchor" href="#set-map" aria-label="Permalink to &quot;SEt Map&quot;">​</a></h2><ul><li>Set 是不包含重复值的列表,set中检查某个值是否存在</li><li>Map是键值对的集合，通过指定的键可以读取对应的值，常被用作缓存，可以快速检索。</li></ul><h2 id="set" tabindex="-1">SET <a class="header-anchor" href="#set" aria-label="Permalink to &quot;SET&quot;">​</a></h2><ol><li>创建Set add方法</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> set </span><span style="color:#F97583;">=new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Set</span><span style="color:#E1E4E8;">() set.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">) set.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;5&#39;</span><span style="color:#E1E4E8;">) console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(set) .size</span><span style="color:#6A737D;">//2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> set </span><span style="color:#D73A49;">=new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Set</span><span style="color:#24292E;">() set.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">) set.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;5&#39;</span><span style="color:#24292E;">) console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(set) .size</span><span style="color:#6A737D;">//2</span></span></code></pre></div><ol start="2"><li>查看Set has方法</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">set.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;5&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">set.</span><span style="color:#6F42C1;">has</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;5&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><ol start="3"><li><p>删除值 delete删除某个值 clear 清空整个Set set.delete(&#39;5&#39;s)</p></li><li><p>Set的foreach方法 三个参数(1:SET中下个位置的值，2:与第一个参数相同 3：目标Set本身)(后两个参数可以省略)</p></li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> set </span><span style="color:#F97583;">=new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Set</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">set.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">ownersSet</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(key</span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">value)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(ownerSet</span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;">set)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// let set =new Set([1,2])</span></span>
<span class="line"><span style="color:#6A737D;">// set.forEach(function(key,value,ownerSet){</span></span>
<span class="line"><span style="color:#6A737D;">//     console.log(key+&quot;  &quot;+value)</span></span>
<span class="line"><span style="color:#6A737D;">//     console.log(ownerSet===set)</span></span>
<span class="line"><span style="color:#6A737D;">// })</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> map </span><span style="color:#F97583;">=new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Map</span><span style="color:#E1E4E8;">([[</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;may&#39;</span><span style="color:#E1E4E8;">],[</span><span style="color:#9ECBFF;">&#39;age&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;12&#39;</span><span style="color:#E1E4E8;">]])</span></span>
<span class="line"><span style="color:#E1E4E8;">map.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">onwnermap</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(key</span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;">&quot; &quot;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">value)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(onwnermap)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">//1  1  true</span></span>
<span class="line"><span style="color:#6A737D;">//2  2</span></span>
<span class="line"><span style="color:#6A737D;">//true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> set </span><span style="color:#D73A49;">=new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Set</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">set.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">,</span><span style="color:#E36209;">value</span><span style="color:#24292E;">,</span><span style="color:#E36209;">ownersSet</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(key</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">value)</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(ownerSet</span><span style="color:#D73A49;">===</span><span style="color:#24292E;">set)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// let set =new Set([1,2])</span></span>
<span class="line"><span style="color:#6A737D;">// set.forEach(function(key,value,ownerSet){</span></span>
<span class="line"><span style="color:#6A737D;">//     console.log(key+&quot;  &quot;+value)</span></span>
<span class="line"><span style="color:#6A737D;">//     console.log(ownerSet===set)</span></span>
<span class="line"><span style="color:#6A737D;">// })</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> map </span><span style="color:#D73A49;">=new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Map</span><span style="color:#24292E;">([[</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;may&#39;</span><span style="color:#24292E;">],[</span><span style="color:#032F62;">&#39;age&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;12&#39;</span><span style="color:#24292E;">]])</span></span>
<span class="line"><span style="color:#24292E;">map.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">value</span><span style="color:#24292E;">,</span><span style="color:#E36209;">key</span><span style="color:#24292E;">,</span><span style="color:#E36209;">onwnermap</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(key</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">&quot; &quot;</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">value)</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(onwnermap)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">//1  1  true</span></span>
<span class="line"><span style="color:#6A737D;">//2  2</span></span>
<span class="line"><span style="color:#6A737D;">//true</span></span></code></pre></div><ol start="5"><li>转换为数组</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> sert </span><span style="color:#F97583;">=new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">54</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> array </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">set]</span></span>
<span class="line"><span style="color:#6A737D;">//数组去重</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">elimanationdupi</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">items</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Set</span><span style="color:#E1E4E8;">(items)];</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> sert </span><span style="color:#D73A49;">=new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">54</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> array </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">set]</span></span>
<span class="line"><span style="color:#6A737D;">//数组去重</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">elimanationdupi</span><span style="color:#24292E;">(</span><span style="color:#E36209;">items</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span><span style="color:#D73A49;">...new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Set</span><span style="color:#24292E;">(items)];</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="weakset" tabindex="-1">weakSet <a class="header-anchor" href="#weakset" aria-label="Permalink to &quot;weakSet&quot;">​</a></h2><blockquote><p>内存泄露：例如，当 JS 代码在网页中运行，同时你想保持 与 DOM 元素的联系，在该元素可能被其他脚本移除的情况下，你应当不希望自己的代码保留 对该 DOM 元素的最后一个引用 weakSet 只允许存执对象弱引用，而不能存贮基本类型，所以引用时是唯一引用，不会阻止垃圾回收</p></blockquote><ol><li>创建和使用</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> set </span><span style="color:#F97583;">=new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WeakSet</span><span style="color:#E1E4E8;">()  </span><span style="color:#6A737D;">//包含add has delete三个方法</span></span>
<span class="line"><span style="color:#6A737D;">//不接受基本类型的值</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> set </span><span style="color:#D73A49;">=new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WeakSet</span><span style="color:#24292E;">()  </span><span style="color:#6A737D;">//包含add has delete三个方法</span></span>
<span class="line"><span style="color:#6A737D;">//不接受基本类型的值</span></span></code></pre></div><ol start="2"><li>与Set差异</li></ol><ul><li>对对象的弱引用</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> set </span><span style="color:#F97583;">=new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WeakSet</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">set.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(key)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(set.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(key)) </span><span style="color:#6A737D;">//true</span></span>
<span class="line"><span style="color:#E1E4E8;">key </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//移除之后weakset中key的引用就访问不到了 但是普通set就可以</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> set </span><span style="color:#D73A49;">=new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WeakSet</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">set.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(key)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(set.</span><span style="color:#6F42C1;">has</span><span style="color:#24292E;">(key)) </span><span style="color:#6A737D;">//true</span></span>
<span class="line"><span style="color:#24292E;">key </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">//移除之后weakset中key的引用就访问不到了 但是普通set就可以</span></span></code></pre></div><ul><li>没有forEach和size</li></ul><h2 id="map" tabindex="-1">Map <a class="header-anchor" href="#map" aria-label="Permalink to &quot;Map&quot;">​</a></h2><ol><li>存放键值对的列表，键值的比较使用Object.is()，键可以是数字，字符和对象</li><li>主要方法:has get set clear delete(移除键和对应值) size属性</li><li>Map初始化</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> map </span><span style="color:#F97583;">=new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Map</span><span style="color:#E1E4E8;">([[</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;age&#39;</span><span style="color:#E1E4E8;">],[</span><span style="color:#9ECBFF;">&#39;Tom&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">]])</span></span>
<span class="line"><span style="color:#6A737D;">//数组中的每一项都是数组，数组首项是键 第二项为对应值</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> map </span><span style="color:#D73A49;">=new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Map</span><span style="color:#24292E;">([[</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;age&#39;</span><span style="color:#24292E;">],[</span><span style="color:#032F62;">&#39;Tom&#39;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">25</span><span style="color:#24292E;">]])</span></span>
<span class="line"><span style="color:#6A737D;">//数组中的每一项都是数组，数组首项是键 第二项为对应值</span></span></code></pre></div><ol start="4"><li>forEach方法 三个参数:Map中下个位置的值，该值对应的键，目标map自身</li></ol><h2 id="weakmap" tabindex="-1">weakMap <a class="header-anchor" href="#weakmap" aria-label="Permalink to &quot;weakMap&quot;">​</a></h2><ol><li>所有键都必须是对象，且都是弱引用</li><li>用途:在浏览器中创建一个关联到特定DOM元素的对象，例如某些js库维护一个自定义对象，用于引用该库使用的每一个DOM元素，映射关系会存储在内部对象缓存中。虚拟DOM</li></ol><blockquote><p>使用 Weak Map 来追踪 DOM 元素，依然允许将自定义对象关联到每个 DOM 元素，而 在此对象所关联的 DOM 元素不复存在时，它就会在 Weak Map 中被自动销毁 Vue3.0中weakMap缓存区的作用就是用来防止对象被重复代理。 内存管理方面比较合适，不会屏蔽垃圾回收。</p></blockquote>`,28),e=[o];function t(c,r,y,E,i,d){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{u as __pageData,h as default};
