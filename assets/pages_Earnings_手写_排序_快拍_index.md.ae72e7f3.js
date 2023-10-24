import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.f16e6129.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Earnings/手写/排序/快拍/index.md","filePath":"pages/Earnings/手写/排序/快拍/index.md"}'),p={name:"pages/Earnings/手写/排序/快拍/index.md"},o=l(`<p>快速排序是一种基于分治思想的比较排序算法，它的基本步骤如下：¹²</p><ul><li>从数组中选择一个元素作为<strong>基准</strong>（pivot），一般选择第一个或最后一个元素。</li><li>将数组分为两个子数组，使得<strong>左边</strong>的子数组中的元素都<strong>小于等于</strong>基准，而<strong>右边</strong>的子数组中的元素都<strong>大于等于</strong>基准。</li><li>对两个子数组递归地重复上述过程，直到每个子数组只有一个或零个元素为止。</li></ul><p>快速排序的时间复杂度取决于基准的选择和划分的平衡性，它有以下三种情况：¹²</p><ul><li><strong>最好情况</strong>：如果每次划分都能将数组分为长度相等或近似相等的两个子数组，那么快速排序的时间复杂度为 $$O(n\\log n)$$。这是因为递归树的深度为 $$\\log n$$，每层需要 $$O(n)$$ 的时间进行划分。</li><li><strong>最坏情况</strong>：如果每次划分都将数组分为一个空数组和一个长度为 $$n-1$$ 的数组，那么快速排序的时间复杂度为 $$O(n^2)$$。这是因为递归树的深度为 $$n$$，每层需要 $$O(n)$$ 的时间进行划分。这种情况发生在数组已经有序或逆序时。</li><li><strong>平均情况</strong>：如果每次划分都能将数组分为长度接近一半的两个子数组，那么快速排序的时间复杂度期望为 $$O(n\\log n)$$。这是因为递归树的深度期望为 $$\\log n$$，每层需要 $$O(n)$$ 的时间进行划分。这种情况发生在数组随机排列时。</li></ul><p>快速排序的空间复杂度主要取决于递归栈的深度，它也有以下三种情况：¹²</p><ul><li><strong>最好情况</strong>：如果每次划分都能将数组分为长度相等或近似相等的两个子数组，那么快速排序的空间复杂度为 $$O(\\log n)$$。这是因为递归栈的深度为 $$\\log n$$。</li><li><strong>最坏情况</strong>：如果每次划分都将数组分为一个空数组和一个长度为 $$n-1$$ 的数组，那么快速排序的空间复杂度为 $$O(n)$$。这是因为递归栈的深度为 $$n$$。</li><li><strong>平均情况</strong>：如果每次划分都能将数组分为长度接近一半的两个子数组，那么快速排序的空间复杂度期望为 $$O(\\log n)$$。这是因为递归栈的深度期望为 $$\\log n$$。</li></ul><p>下面给出一个用 Python 实现的快速排序算法示例：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 定义一个函数来交换列表中两个元素的位置</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">swap</span><span style="color:#E1E4E8;">(lst, i, j):</span></span>
<span class="line"><span style="color:#E1E4E8;">    lst[i], lst[j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> lst[j], lst[i]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 定义一个函数来对列表中指定区间进行划分</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">partition</span><span style="color:#E1E4E8;">(lst, low, high):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 选择最后一个元素作为基准</span></span>
<span class="line"><span style="color:#E1E4E8;">    pivot </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> lst[high]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 初始化左右指针</span></span>
<span class="line"><span style="color:#E1E4E8;">    i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> low</span></span>
<span class="line"><span style="color:#E1E4E8;">    j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> high </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 循环进行划分</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> j:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 如果左边元素小于等于基准，左指针右移</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> lst[i] </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> pivot:</span></span>
<span class="line"><span style="color:#E1E4E8;">            i </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 如果右边元素大于等于基准，右指针左移</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">elif</span><span style="color:#E1E4E8;"> lst[j] </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> pivot:</span></span>
<span class="line"><span style="color:#E1E4E8;">            j </span><span style="color:#F97583;">-=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 否则交换左右元素</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            swap(lst, i, j)</span></span>
<span class="line"><span style="color:#E1E4E8;">            i </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">            j </span><span style="color:#F97583;">-=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 将基准放到正确位置上</span></span>
<span class="line"><span style="color:#E1E4E8;">    swap(lst, i, high)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 返回基准位置</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> i</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 定义一个函数来对列表中指定区间进行快速排序</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">quick_sort</span><span style="color:#E1E4E8;">(lst, low, high):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 如果区间长度大于1，才需要排序</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> low </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> high:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 对区间进行划分，并得到基准位置</span></span>
<span class="line"><span style="color:#E1E4E8;">        p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> partition(lst, low, high)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 对左边子区间进行快速排序</span></span>
<span class="line"><span style="color:#E1E4E8;">        quick_sort(lst, low, p </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 对右边子区间进行快速排序</span></span>
<span class="line"><span style="color:#E1E4E8;">        quick_sort(lst, p </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, high)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 测试代码</span></span>
<span class="line"><span style="color:#E1E4E8;">lst </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">quick_sort(lst, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(lst) </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(lst)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 定义一个函数来交换列表中两个元素的位置</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">swap</span><span style="color:#24292E;">(lst, i, j):</span></span>
<span class="line"><span style="color:#24292E;">    lst[i], lst[j] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> lst[j], lst[i]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 定义一个函数来对列表中指定区间进行划分</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">partition</span><span style="color:#24292E;">(lst, low, high):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 选择最后一个元素作为基准</span></span>
<span class="line"><span style="color:#24292E;">    pivot </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> lst[high]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 初始化左右指针</span></span>
<span class="line"><span style="color:#24292E;">    i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> low</span></span>
<span class="line"><span style="color:#24292E;">    j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> high </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 循环进行划分</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> j:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 如果左边元素小于等于基准，左指针右移</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> lst[i] </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> pivot:</span></span>
<span class="line"><span style="color:#24292E;">            i </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 如果右边元素大于等于基准，右指针左移</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">elif</span><span style="color:#24292E;"> lst[j] </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> pivot:</span></span>
<span class="line"><span style="color:#24292E;">            j </span><span style="color:#D73A49;">-=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 否则交换左右元素</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">else</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            swap(lst, i, j)</span></span>
<span class="line"><span style="color:#24292E;">            i </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">            j </span><span style="color:#D73A49;">-=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 将基准放到正确位置上</span></span>
<span class="line"><span style="color:#24292E;">    swap(lst, i, high)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 返回基准位置</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> i</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 定义一个函数来对列表中指定区间进行快速排序</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">quick_sort</span><span style="color:#24292E;">(lst, low, high):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 如果区间长度大于1，才需要排序</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> low </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> high:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 对区间进行划分，并得到基准位置</span></span>
<span class="line"><span style="color:#24292E;">        p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> partition(lst, low, high)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 对左边子区间进行快速排序</span></span>
<span class="line"><span style="color:#24292E;">        quick_sort(lst, low, p </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 对右边子区间进行快速排序</span></span>
<span class="line"><span style="color:#24292E;">        quick_sort(lst, p </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, high)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 测试代码</span></span>
<span class="line"><span style="color:#24292E;">lst </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">9</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">quick_sort(lst, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(lst) </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(lst)</span></span></code></pre></div><p>源: 与必应的对话， 2023/5/28 (1) 快速排序时间复杂度分析 - 知乎. <a href="https://zhuanlan.zhihu.com/p/341201904" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/341201904</a>. (2) 快速排序(Quick Sort)详解 - 知乎. <a href="https://zhuanlan.zhihu.com/p/22150349" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/22150349</a>. (3) 快速排序 及其时间复杂度和空间复杂度_人鱼线的博客-CSDN博客. <a href="https://blog.csdn.net/qfikh/article/details/52870875" target="_blank" rel="noreferrer">https://blog.csdn.net/qfikh/article/details/52870875</a>. (4) 快速排序的期望复杂度O(nlogn)证明。 - LzyRapx - 博客园. <a href="https://www.cnblogs.com/LzyRapx/p/9565827.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/LzyRapx/p/9565827.html</a>.</p>`,9),e=[o];function t(c,r,E,y,i,h){return n(),a("div",null,e)}const F=s(p,[["render",t]]);export{g as __pageData,F as default};
