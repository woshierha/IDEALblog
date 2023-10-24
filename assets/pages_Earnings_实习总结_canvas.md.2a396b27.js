import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.f16e6129.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/Earnings/实习总结/canvas.md","filePath":"pages/Earnings/实习总结/canvas.md"}'),p={name:"pages/Earnings/实习总结/canvas.md"},o=l(`<div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> draw </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;draw&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 获取canvas 标签</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> cvs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> draw.</span><span style="color:#B392F0;">getContext</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2d&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 设置绘制环境， 2d 平面图， cvs 就是画板了，可在cvs上操作画图</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// canvas</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// H5 新标签，在页面上绘制图形用的（通常也称画布），canvas只是一个容器，我们用js脚本来控制它</span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// cvs.fillStyle; // 填充的颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// cvs.strokeStyle;  // 线条的颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// cvs.lineWidth; // 线条的宽度</span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// // 绘制图形有两种方式</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// cvs.fill(); // 填充绘制函数，绘制了封闭的图形就可以填充</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// cvs.stroke(); // 线条绘制函数</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 颜色值可以是： 单词，十六进制， 三色值 rgb, 四色值 rgba</span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 坐标</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 以画布的左上角为原点（0，0）参考，向右为x方向，向下为y方向</span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 1. 画线条</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// cvs.moveTo(x,y);  // 画笔移到哪里，参数是起始点坐标， </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// cvs.lineTo(x, y); // 连到， 参数是结束掉的坐标，如果没有moveTo,就把上面的lineTo 作为起始坐标，假如第一个就是lineTo, 那么lineTo 就是起始</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// cvs.beginPath(); // 开始一个新的路径</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// cvs.closePath(); // 关闭当前路径，而且会自动闭合，从结束位置到起始位置连起来</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// css 中有圆角，border-radius, canvas中也可以实现类似效果</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置线条交汇处的样式,cvs.lineJoin 有三个属性： 尖角 miter  斜角 bevel  圆角round</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置一条线段，两个端点的样式， cvs.lineCap 三个属性： butt(默认 平) round 圆角 square 方角</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 划线的时候要开始一个路径，结束一个路径，画矩形的时候就不用，因为是默认有的，框好的</span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#6A737D;">//   function drawa(){</span></span>
<span class="line"><span style="color:#6A737D;">//     cvs.beginPath();</span></span>
<span class="line"><span style="color:#6A737D;">//     cvs.moveTo(50,50);</span></span>
<span class="line"><span style="color:#6A737D;">//     cvs.lineTo(150, 50);</span></span>
<span class="line"><span style="color:#6A737D;">//     cvs.closePath();</span></span>
<span class="line"><span style="color:#6A737D;">//     cvs.strokeStyle = &#39;#000080&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">//     cvs.lineWidth = 20;</span></span>
<span class="line"><span style="color:#6A737D;">//     cvs.stroke();  // 以边框的形式显示</span></span>
<span class="line"><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#6A737D;">//  drawa();</span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#6A737D;">// </span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#6A737D;">// function drawb(){</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.beginPath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineTo(80, 120);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineTo(80, 240);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineTo(200, 240);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.closePath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.stroke();</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#6A737D;">// drawb();</span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#6A737D;">// function drawc(){</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.beginPath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineCap = &#39;round&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineTo(80, 120);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineTo(200, 240);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineWidth = 20;</span></span>
<span class="line"><span style="color:#6A737D;">//   // cvs.closePath(); // 一旦加上关闭路径端点效果就没了</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.stroke();</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#6A737D;">// drawc();</span></span>
<span class="line"><span style="color:#6A737D;">// function drawd(){</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.beginPath();</span></span>
<span class="line"><span style="color:#6A737D;">//   // cvs.lineJoin = &#39;round&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineJoin = &#39;bevel&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineTo(80, 120);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineTo(200, 240);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineTo(300, 600);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineWidth = 20;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.closePath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.stroke();</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#6A737D;">// drawd();</span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#6A737D;">// 2. 画圆</span></span>
<span class="line"><span style="color:#6A737D;">// cvs.arc(x,y,r, start, end, n); </span></span>
<span class="line"><span style="color:#6A737D;">// 圆心坐标x,y，半径r, 起始角start，以弧度算（x轴方向是0度），end结束角,n是否逆时针（默认false，也就是默认顺时针)</span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#6A737D;">// function drawe(){</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.strokStyle = &#39;#effa50&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.beginPath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.arc(150,150, 100, 0, 2*Math.PI, false);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.closePath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.stroke();</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#6A737D;">// drawe();</span></span>
<span class="line"><span style="color:#6A737D;">// function drawe(){</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.fillStyle = &#39;orangered&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.beginPath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.arc(200,200, 40, 0, 2*Math.PI, false);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.closePath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.fill();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.strokeStyle = &#39;yellow&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineWith = 20;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.beginPath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.arc(200,200,60, 0, 2*Math.PI, false);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.closePath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.stroke();</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#6A737D;">// drawe();</span></span>
<span class="line"><span style="color:#6A737D;">// function drawf(){</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.strokeStyle = &#39;red&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.beginPath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineWidth =2;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.arc(40,40, 50, 0, Math.PI/2);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.stroke();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.fillStyle=&quot;yellow&quot;;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.arc(300,300, 80, 0, Math.PI/2);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.closePath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.fill();</span></span>
<span class="line"><span style="color:#6A737D;">//   // 每次调用fill的时候，会把当次路径的起始点和结束点分别连接，填充闭合部分</span></span>
<span class="line"><span style="color:#6A737D;">//   // 如果想要路径不相互干扰，要记得结束路径</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#6A737D;">// drawf();</span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#6A737D;">// 3. 画渐变</span></span>
<span class="line"><span style="color:#6A737D;">// 线性渐变</span></span>
<span class="line"><span style="color:#6A737D;">// var CLG = cvs.createLinearGradient(x0,y0, x1,y1); // x0,y0 渐变开始的坐标，x1,y1 渐变结束的坐标</span></span>
<span class="line"><span style="color:#6A737D;">// CLG.addColorStop(n,m); // n设置颜色的偏移量，m颜色</span></span>
<span class="line"><span style="color:#6A737D;">// function drawi(){</span></span>
<span class="line"><span style="color:#6A737D;">//   var CLG = cvs.createLinearGradient(0,0,200,200);</span></span>
<span class="line"><span style="color:#6A737D;">//   CLG.addColorStop(0.25, &#39;red&#39;);</span></span>
<span class="line"><span style="color:#6A737D;">//   CLG.addColorStop(0.5, &#39;#ccc&#39;);</span></span>
<span class="line"><span style="color:#6A737D;">//   CLG.addColorStop(0.75, &#39;yellow&#39;);</span></span>
<span class="line"><span style="color:#6A737D;">//   CLG.addColorStop(1, &#39;red&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.fillStyle = CLG;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.fillRect(0,0,200,200);</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#6A737D;">// drawi();</span></span>
<span class="line"><span style="color:#6A737D;">// 径向渐变</span></span>
<span class="line"><span style="color:#6A737D;">// var CLG = cvs.cteateRadialGradient(x0,y0,r0, x1,y1,r1) // x0,y0 渐变中心坐标，r0 渐变开始的半径，x1,y1 渐变结束中心的坐标，r1渐变结束的半径</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">drawo</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">CLG</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> cvs.</span><span style="color:#B392F0;">createRadialGradient</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">CLG</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">addColorStop</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;#000&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">CLG</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">addColorStop</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;orange&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">CLG</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">addColorStop</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;red&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  cvs.fillStyle </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">CLG</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  cvs.</span><span style="color:#B392F0;">fillRect</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">drawo</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//4. 画阴影</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// cvs.shadowOffsetX; //表示阴影的横向偏移量（默认为0）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// cvs.shadowOffsetY; // 表示阴影的纵向偏移量</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// cvs.shadowColor; // 阴影的颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// cvs.shadowBlur; // 阴影的模糊范围，值越大越模糊</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// function draw1(){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.shadowColor = &quot;#0000ff&quot;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.shadowOffsetX = 30;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.shadowOffsetY = 20;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.shadowBlur = 20;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.fillStyle = &quot;#449FDB&quot;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.fillRect(50,50, 100, 100); // 矩形，参数表示起始坐标x,y和宽高</span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// draw1();</span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 5. 画文本</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 绘制文本，canvas元素里不能直接写字，得用它提供的api</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置字体样式： cvs.font = &quot;font-size font-family&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 水平对齐方式： cvs.textAlign // 值： start, end, right, center</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 垂直对齐方式： cvs.textBaseLine // 值： top, middle, hanging, bottom, alphabetic, ideographic</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 计算文本宽度(px)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// var text = &#39;2345&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// var length = cvs.measureText(text);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 填充（实心）文字</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// cvs.fillText(text, x, y);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 绘制文字轮廓</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// cvs.strokeText(text, x, y);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// text： 文字内容， x,y 文字起始坐标（左上角）</span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// function draw2(){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   var text = &#39;hello world&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.fillStyle = &#39;#ffe470&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.font = &#39;40px vardana&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.textAlign = &#39;start&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.textBaseline = &#39;top&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.fillText(text, 0, 0);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   var length = cvs.measureText(text); // length是一个对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.fillText(&quot;字体长度为：&quot; + length.width, 0, 50)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// draw2();</span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// function draw3(){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   var CLG = cvs.createLinearGradient(0, 150, 450, 250);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   CLG.addColorStop(0, &#39;red&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   CLG.addColorStop(0.25, &#39;yellow&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   CLG.addColorStop(0.5, &#39;green&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   CLG.addColorStop(0.75, &#39;yellow&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   CLG.addColorStop(1, &#39;red&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   var text = &#39;hello world&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.fillStyle = CLG;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.shadowOffsetX = 5;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.shadowOffsetY = 4;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.shadowColor = &quot;#FFB6C1&quot;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.shadowBlur = 5;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.font = &#39;40px cursive&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.textAlign = &#39;start&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.fillText(text, 20, 40);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// draw3();</span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// function draw4(){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   var CLG = cvs.createLinearGradient(0, 250, 350, 350); // 参数时渐变起始的位置，渐变终止的位置，x0,y0,x1,y1</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   CLG.addColorStop(0, &#39;blue&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   CLG.addColorStop(0.25, &#39;yellow&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   CLG.addColorStop(0.5, &#39;skyblue&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   CLG.addColorStop(0.75, &#39;yellow&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   CLG.addColorStop(1, &#39;blue&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   var text = &#39;hello world&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.strokeStyle = CLG;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.font = &#39;30px simsum&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.textAlign = &#39;start&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.textBaseLine = &#39;top&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.shadowColor = &#39;darkgray&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.shadowBlur = 2;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.strokeText(text, 20 ,230);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// draw4();</span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 6. 绘图</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// cvs.drawImage(Image, x, y, w, h)  // 画图</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Image: 可以放在dom中的图片，可以动态创建，也可获取dom上的</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// x, y  图片左上角的坐标，w,h 图片的宽高</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// cvs.drawImage(Image, sx,sy,sw,sh, dx,dy,dw,dh); // 截图， 前四个参数用来截图，后四个参数画图</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// sx,sy 图片左上角的坐标，sw,sh 矩形区域的宽高， 用来截取图片</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// dx,dy 截图之后放在canvas上的坐标，dw,dh 画在canvas上的宽高</span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 变形  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 平移，缩放，旋转，都是对轴进行的操作</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 平移： cvs.translate(x, y);   x: 坐标原点在x轴平移  y: 坐标原点在y轴平移</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 缩放： cvs.scale(x0, y0);    x0: x轴按照x0 的比例缩放  y0: y轴按照y0的比例缩放</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 旋转： cvs.rotate(angle);   angle: 左边轴旋转的角度, 顺时针旋转</span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// function draw5(){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.fillStyle = &quot;#0000FF&quot;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.fillRect(0,0, 200, 100);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.translate(50, 0);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.fillStyle = &#39;red&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.fillRect(0, 0, 100, 50);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// draw5();</span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// function draw6(){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.scale(0.5, 1);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.fillStyle = &#39;#ef23u8&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.fillRect(400,200,200,100);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// draw6();</span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// function draw7(){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.fillStyle = &#39;red&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.translate(200, 0); // 先平移，再转，因为转完之后轴就变了</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.rotate(Math.PI/4);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.fillRect(0,0, 50, 50);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// draw7();</span></span>
<span class="line"><span style="color:#E1E4E8;">​</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 图形的组合</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// cvs.globalCompositOperation = type;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// type: </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 1. source-over: 默认值，覆盖，在原来的图形上绘制新图</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 2. destination-over: 在原来的图形下面绘制新图, 和默认值相反</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 3. source-in: 显示图形和新图的交集，颜色就是新图的颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 4. source-out: 显示新图非交集部分</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 5. destination-in: 显示图形和新图的交集，颜色是旧图的颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 6. destination-out: 显示旧图非交集部分</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 7. source-atop: 显示旧图和交集部分，交集是新图的颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 8. destination-atop: 显示新图和交集部分，交集是旧图的颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 9. lighter: 全部显示，交集是二者颜色的叠加</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 10. xor: 显示全部非交集部分</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 11. copy: 只显示新图</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// function draw8(){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.fillStyle = &#39;gold&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.fillRect(10,10,100,100);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   // cvs.globalCompositeOperation = &#39;destination-over&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   // cvs.globalCompositeOperation = &#39;source-in&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   // cvs.globalCompositeOperation = &#39;source-out&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.globalCompositeOperation = &#39;destination-in&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.fillStyle = &#39;blue&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   cvs.fillRect(50,50, 100,100);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// draw8();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> draw </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;draw&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 获取canvas 标签</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> cvs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> draw.</span><span style="color:#6F42C1;">getContext</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2d&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 设置绘制环境， 2d 平面图， cvs 就是画板了，可在cvs上操作画图</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// canvas</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// H5 新标签，在页面上绘制图形用的（通常也称画布），canvas只是一个容器，我们用js脚本来控制它</span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// cvs.fillStyle; // 填充的颜色</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// cvs.strokeStyle;  // 线条的颜色</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// cvs.lineWidth; // 线条的宽度</span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// // 绘制图形有两种方式</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// cvs.fill(); // 填充绘制函数，绘制了封闭的图形就可以填充</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// cvs.stroke(); // 线条绘制函数</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 颜色值可以是： 单词，十六进制， 三色值 rgb, 四色值 rgba</span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 坐标</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 以画布的左上角为原点（0，0）参考，向右为x方向，向下为y方向</span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 1. 画线条</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// cvs.moveTo(x,y);  // 画笔移到哪里，参数是起始点坐标， </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// cvs.lineTo(x, y); // 连到， 参数是结束掉的坐标，如果没有moveTo,就把上面的lineTo 作为起始坐标，假如第一个就是lineTo, 那么lineTo 就是起始</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// cvs.beginPath(); // 开始一个新的路径</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// cvs.closePath(); // 关闭当前路径，而且会自动闭合，从结束位置到起始位置连起来</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// css 中有圆角，border-radius, canvas中也可以实现类似效果</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置线条交汇处的样式,cvs.lineJoin 有三个属性： 尖角 miter  斜角 bevel  圆角round</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置一条线段，两个端点的样式， cvs.lineCap 三个属性： butt(默认 平) round 圆角 square 方角</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 划线的时候要开始一个路径，结束一个路径，画矩形的时候就不用，因为是默认有的，框好的</span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#6A737D;">//   function drawa(){</span></span>
<span class="line"><span style="color:#6A737D;">//     cvs.beginPath();</span></span>
<span class="line"><span style="color:#6A737D;">//     cvs.moveTo(50,50);</span></span>
<span class="line"><span style="color:#6A737D;">//     cvs.lineTo(150, 50);</span></span>
<span class="line"><span style="color:#6A737D;">//     cvs.closePath();</span></span>
<span class="line"><span style="color:#6A737D;">//     cvs.strokeStyle = &#39;#000080&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">//     cvs.lineWidth = 20;</span></span>
<span class="line"><span style="color:#6A737D;">//     cvs.stroke();  // 以边框的形式显示</span></span>
<span class="line"><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#6A737D;">//  drawa();</span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#6A737D;">// </span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#6A737D;">// function drawb(){</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.beginPath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineTo(80, 120);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineTo(80, 240);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineTo(200, 240);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.closePath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.stroke();</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#6A737D;">// drawb();</span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#6A737D;">// function drawc(){</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.beginPath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineCap = &#39;round&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineTo(80, 120);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineTo(200, 240);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineWidth = 20;</span></span>
<span class="line"><span style="color:#6A737D;">//   // cvs.closePath(); // 一旦加上关闭路径端点效果就没了</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.stroke();</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#6A737D;">// drawc();</span></span>
<span class="line"><span style="color:#6A737D;">// function drawd(){</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.beginPath();</span></span>
<span class="line"><span style="color:#6A737D;">//   // cvs.lineJoin = &#39;round&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineJoin = &#39;bevel&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineTo(80, 120);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineTo(200, 240);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineTo(300, 600);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineWidth = 20;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.closePath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.stroke();</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#6A737D;">// drawd();</span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#6A737D;">// 2. 画圆</span></span>
<span class="line"><span style="color:#6A737D;">// cvs.arc(x,y,r, start, end, n); </span></span>
<span class="line"><span style="color:#6A737D;">// 圆心坐标x,y，半径r, 起始角start，以弧度算（x轴方向是0度），end结束角,n是否逆时针（默认false，也就是默认顺时针)</span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#6A737D;">// function drawe(){</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.strokStyle = &#39;#effa50&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.beginPath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.arc(150,150, 100, 0, 2*Math.PI, false);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.closePath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.stroke();</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#6A737D;">// drawe();</span></span>
<span class="line"><span style="color:#6A737D;">// function drawe(){</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.fillStyle = &#39;orangered&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.beginPath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.arc(200,200, 40, 0, 2*Math.PI, false);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.closePath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.fill();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.strokeStyle = &#39;yellow&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineWith = 20;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.beginPath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.arc(200,200,60, 0, 2*Math.PI, false);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.closePath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.stroke();</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#6A737D;">// drawe();</span></span>
<span class="line"><span style="color:#6A737D;">// function drawf(){</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.strokeStyle = &#39;red&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.beginPath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.lineWidth =2;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.arc(40,40, 50, 0, Math.PI/2);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.stroke();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.fillStyle=&quot;yellow&quot;;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.arc(300,300, 80, 0, Math.PI/2);</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.closePath();</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.fill();</span></span>
<span class="line"><span style="color:#6A737D;">//   // 每次调用fill的时候，会把当次路径的起始点和结束点分别连接，填充闭合部分</span></span>
<span class="line"><span style="color:#6A737D;">//   // 如果想要路径不相互干扰，要记得结束路径</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#6A737D;">// drawf();</span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#6A737D;">// 3. 画渐变</span></span>
<span class="line"><span style="color:#6A737D;">// 线性渐变</span></span>
<span class="line"><span style="color:#6A737D;">// var CLG = cvs.createLinearGradient(x0,y0, x1,y1); // x0,y0 渐变开始的坐标，x1,y1 渐变结束的坐标</span></span>
<span class="line"><span style="color:#6A737D;">// CLG.addColorStop(n,m); // n设置颜色的偏移量，m颜色</span></span>
<span class="line"><span style="color:#6A737D;">// function drawi(){</span></span>
<span class="line"><span style="color:#6A737D;">//   var CLG = cvs.createLinearGradient(0,0,200,200);</span></span>
<span class="line"><span style="color:#6A737D;">//   CLG.addColorStop(0.25, &#39;red&#39;);</span></span>
<span class="line"><span style="color:#6A737D;">//   CLG.addColorStop(0.5, &#39;#ccc&#39;);</span></span>
<span class="line"><span style="color:#6A737D;">//   CLG.addColorStop(0.75, &#39;yellow&#39;);</span></span>
<span class="line"><span style="color:#6A737D;">//   CLG.addColorStop(1, &#39;red&#39;);</span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.fillStyle = CLG;</span></span>
<span class="line"><span style="color:#6A737D;">//   cvs.fillRect(0,0,200,200);</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#6A737D;">// drawi();</span></span>
<span class="line"><span style="color:#6A737D;">// 径向渐变</span></span>
<span class="line"><span style="color:#6A737D;">// var CLG = cvs.cteateRadialGradient(x0,y0,r0, x1,y1,r1) // x0,y0 渐变中心坐标，r0 渐变开始的半径，x1,y1 渐变结束中心的坐标，r1渐变结束的半径</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">drawo</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">CLG</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cvs.</span><span style="color:#6F42C1;">createRadialGradient</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">CLG</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">addColorStop</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;#000&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">CLG</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">addColorStop</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;orange&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">CLG</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">addColorStop</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;red&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  cvs.fillStyle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">CLG</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  cvs.</span><span style="color:#6F42C1;">fillRect</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">drawo</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//4. 画阴影</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// cvs.shadowOffsetX; //表示阴影的横向偏移量（默认为0）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// cvs.shadowOffsetY; // 表示阴影的纵向偏移量</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// cvs.shadowColor; // 阴影的颜色</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// cvs.shadowBlur; // 阴影的模糊范围，值越大越模糊</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// function draw1(){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.shadowColor = &quot;#0000ff&quot;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.shadowOffsetX = 30;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.shadowOffsetY = 20;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.shadowBlur = 20;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.fillStyle = &quot;#449FDB&quot;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.fillRect(50,50, 100, 100); // 矩形，参数表示起始坐标x,y和宽高</span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// draw1();</span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 5. 画文本</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 绘制文本，canvas元素里不能直接写字，得用它提供的api</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置字体样式： cvs.font = &quot;font-size font-family&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 水平对齐方式： cvs.textAlign // 值： start, end, right, center</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 垂直对齐方式： cvs.textBaseLine // 值： top, middle, hanging, bottom, alphabetic, ideographic</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 计算文本宽度(px)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// var text = &#39;2345&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// var length = cvs.measureText(text);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 填充（实心）文字</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// cvs.fillText(text, x, y);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 绘制文字轮廓</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// cvs.strokeText(text, x, y);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// text： 文字内容， x,y 文字起始坐标（左上角）</span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// function draw2(){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   var text = &#39;hello world&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.fillStyle = &#39;#ffe470&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.font = &#39;40px vardana&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.textAlign = &#39;start&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.textBaseline = &#39;top&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.fillText(text, 0, 0);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   var length = cvs.measureText(text); // length是一个对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.fillText(&quot;字体长度为：&quot; + length.width, 0, 50)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// draw2();</span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// function draw3(){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   var CLG = cvs.createLinearGradient(0, 150, 450, 250);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   CLG.addColorStop(0, &#39;red&#39;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   CLG.addColorStop(0.25, &#39;yellow&#39;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   CLG.addColorStop(0.5, &#39;green&#39;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   CLG.addColorStop(0.75, &#39;yellow&#39;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   CLG.addColorStop(1, &#39;red&#39;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   var text = &#39;hello world&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.fillStyle = CLG;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.shadowOffsetX = 5;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.shadowOffsetY = 4;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.shadowColor = &quot;#FFB6C1&quot;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.shadowBlur = 5;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.font = &#39;40px cursive&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.textAlign = &#39;start&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.fillText(text, 20, 40);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// draw3();</span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// function draw4(){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   var CLG = cvs.createLinearGradient(0, 250, 350, 350); // 参数时渐变起始的位置，渐变终止的位置，x0,y0,x1,y1</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   CLG.addColorStop(0, &#39;blue&#39;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   CLG.addColorStop(0.25, &#39;yellow&#39;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   CLG.addColorStop(0.5, &#39;skyblue&#39;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   CLG.addColorStop(0.75, &#39;yellow&#39;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   CLG.addColorStop(1, &#39;blue&#39;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   var text = &#39;hello world&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.strokeStyle = CLG;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.font = &#39;30px simsum&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.textAlign = &#39;start&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.textBaseLine = &#39;top&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.shadowColor = &#39;darkgray&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.shadowBlur = 2;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.strokeText(text, 20 ,230);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// draw4();</span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 6. 绘图</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// cvs.drawImage(Image, x, y, w, h)  // 画图</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Image: 可以放在dom中的图片，可以动态创建，也可获取dom上的</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// x, y  图片左上角的坐标，w,h 图片的宽高</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// cvs.drawImage(Image, sx,sy,sw,sh, dx,dy,dw,dh); // 截图， 前四个参数用来截图，后四个参数画图</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// sx,sy 图片左上角的坐标，sw,sh 矩形区域的宽高， 用来截取图片</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// dx,dy 截图之后放在canvas上的坐标，dw,dh 画在canvas上的宽高</span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 变形  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 平移，缩放，旋转，都是对轴进行的操作</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 平移： cvs.translate(x, y);   x: 坐标原点在x轴平移  y: 坐标原点在y轴平移</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 缩放： cvs.scale(x0, y0);    x0: x轴按照x0 的比例缩放  y0: y轴按照y0的比例缩放</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 旋转： cvs.rotate(angle);   angle: 左边轴旋转的角度, 顺时针旋转</span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// function draw5(){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.fillStyle = &quot;#0000FF&quot;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.fillRect(0,0, 200, 100);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.translate(50, 0);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.fillStyle = &#39;red&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.fillRect(0, 0, 100, 50);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// draw5();</span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// function draw6(){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.scale(0.5, 1);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.fillStyle = &#39;#ef23u8&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.fillRect(400,200,200,100);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// draw6();</span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// function draw7(){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.fillStyle = &#39;red&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.translate(200, 0); // 先平移，再转，因为转完之后轴就变了</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.rotate(Math.PI/4);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.fillRect(0,0, 50, 50);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// draw7();</span></span>
<span class="line"><span style="color:#24292E;">​</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 图形的组合</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// cvs.globalCompositOperation = type;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// type: </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 1. source-over: 默认值，覆盖，在原来的图形上绘制新图</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 2. destination-over: 在原来的图形下面绘制新图, 和默认值相反</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 3. source-in: 显示图形和新图的交集，颜色就是新图的颜色</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 4. source-out: 显示新图非交集部分</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 5. destination-in: 显示图形和新图的交集，颜色是旧图的颜色</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 6. destination-out: 显示旧图非交集部分</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 7. source-atop: 显示旧图和交集部分，交集是新图的颜色</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 8. destination-atop: 显示新图和交集部分，交集是旧图的颜色</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 9. lighter: 全部显示，交集是二者颜色的叠加</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 10. xor: 显示全部非交集部分</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 11. copy: 只显示新图</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// function draw8(){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.fillStyle = &#39;gold&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.fillRect(10,10,100,100);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   // cvs.globalCompositeOperation = &#39;destination-over&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   // cvs.globalCompositeOperation = &#39;source-in&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   // cvs.globalCompositeOperation = &#39;source-out&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.globalCompositeOperation = &#39;destination-in&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.fillStyle = &#39;blue&#39;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   cvs.fillRect(50,50, 100,100);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// draw8();</span></span></code></pre></div>`,1),e=[o];function c(t,r,y,E,i,A){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{v as __pageData,d as default};
