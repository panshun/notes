import{_ as s,o as n,c as a,R as e}from"./chunks/framework.JvFgJH8G.js";const y=JSON.parse('{"title":"着色器语言的限定词","description":"","frontmatter":{},"headers":[],"relativePath":"webgl/basic/3.md","filePath":"webgl/basic/3.md"}'),t={name:"webgl/basic/3.md"},l=e(`<h1 id="着色器语言的限定词" tabindex="-1">着色器语言的限定词 <a class="header-anchor" href="#着色器语言的限定词" aria-label="Permalink to &quot;着色器语言的限定词&quot;">​</a></h1><p>GLSL ES 中提供了三类限定词(又称限定字或限定符，都是一回事，本文统称为限定词)，<strong>参数限定词</strong>、<strong>存储限定词</strong>和<strong>精度限定词</strong>，通过这些限定词可以控制参数的行为、限定变量的类型以及限定数据的精度来提高运行效率，减少内存开销，首先从参数限定词说起</p><h2 id="_1-参数限定词" tabindex="-1">1. 参数限定词 <a class="header-anchor" href="#_1-参数限定词" aria-label="Permalink to &quot;1. 参数限定词&quot;">​</a></h2><p>参数限定词顾名思义就是用来限制函数参数的，根据参数不同可以将其分为一下几类：</p><ul><li>只向函数中传值</li><li>在函数中被赋值</li><li>既向函数中传值，也在函数中被赋值</li></ul><p>依据这几类不同的行为，GLSL ES提供了一下几种限定词：</p><table><thead><tr><th>类别</th><th>规则</th><th>描述</th></tr></thead><tbody><tr><td>in</td><td>向函数中传入值</td><td>参数传入函数，函数内可以使用参数值，也可以修改参数值，但是内部修改不影像传入前的参数值</td></tr><tr><td>const in</td><td>向函数中传入值</td><td>参数传入函数，函数内可以使用参数值，但是<strong>不呢个修改参数值</strong></td></tr><tr><td>out</td><td>在函数中赋值并被传出</td><td>传入变量的引用，如果在函数内部被修改，会影像到函数外部传入的变量</td></tr><tr><td>inout</td><td>可同时传入传出</td><td>传入变量的引用，函数会用到变量的初始值，然后修改变量的值，会影像到函数外部传入的变量</td></tr><tr><td>无</td><td>将一个值传给函数</td><td>和限定词in一样</td></tr></tbody></table><p>例如，给getBrightness()函数指定一个out参数来接收计算结果，与通过return返回让外部接收是一样的</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">void getBrightness (in vec3 color, out float brightness)  {</span></span>
<span class="line"><span style="color:#e1e4e8;">	brightness = 0.231 * color.r + 0.752 * color.g + 0.032 * color.b</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//调用</span></span>
<span class="line"><span style="color:#e1e4e8;">getBrightness (color, brightness);//计算结果存储在brightness中</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">void getBrightness (in vec3 color, out float brightness)  {</span></span>
<span class="line"><span style="color:#24292e;">	brightness = 0.231 * color.r + 0.752 * color.g + 0.032 * color.b</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//调用</span></span>
<span class="line"><span style="color:#24292e;">getBrightness (color, brightness);//计算结果存储在brightness中</span></span></code></pre></div><h2 id="_2-存储限定词" tabindex="-1">2.存储限定词 <a class="header-anchor" href="#_2-存储限定词" aria-label="Permalink to &quot;2.存储限定词&quot;">​</a></h2><p>存储限定词其实就是我们用来向着色器传值的变量，GLSL ES提供了<strong>attribute</strong>、<strong>uniform</strong>、<strong>varying</strong>三个限定词来声明用途的变量</p><ul><li><p>attribute attribute 限定词声明的变量用来表示<strong>顶点坐标信息，顶点颜色信息，顶点法向信息等，和顶点相关的逐顶点信息</strong>，只适用于顶点着色器，attribete变量的类型只能是：<strong>float,vec2,vec3,vec4,mat2,mat3,mat4</strong>，且要求是全局变量。</p></li><li><p>uniform uniform限定词声明的变量既可以用在顶点着色器也可以用在片元着色器，要声明为全局变量，<strong>它是只读的，不支持数组和结构体类型</strong>，用来表示非逐顶点的各顶点/片元共享的信息，例如变换矩阵就是所有顶点共有的</p></li><li><p>varying varying限定词声明的变量也要求是全局变量，它担任着一个很重要的角色，就是从顶点着色器向片元着色器传值，使用时必须同时在顶点着色器和片元着色器声明同名同类型的varying变量，与attribute变量一样它的类型也只能是float,vec2,vec3,vec4,mat2,mat3,mat4</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//顶点着色器</span></span>
<span class="line"><span style="color:#e1e4e8;">var VSHADER_SOURCE = &#39;&#39; +</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;attribute vec4 a_Position;\\n&#39; + //声明attribute变量a_Position，用来存放顶点位置信息</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;attribute vec4 a_Color;\\n&#39; + //声明attribute变量a_Color，用来存放顶点颜色信息</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;attribute vec4 a_Normal;\\n&#39; + //声明attribute变量a_Normal，用来存放法向量</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;uniform mat4 u_MvpMatrix;\\n&#39; + //声明uniform变量u_MvpMatrix，用来存放模型视图投影组合矩阵</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;uniform vec3 u_LightColor;\\n&#39; + //声明uniform变量u_LightColor，用来存放光线颜色</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;uniform vec3 u_LightDirection;\\n&#39; + //声明uniform变量u_LightDirection，用来存放入射光方向，归一化的世界坐标</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;varying vec4 v_Color;\\n&#39; + //声明varying变量v_Color，用来向片元着色器传值顶点颜色信息</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;void main(){\\n&#39; +</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;  gl_Position = u_MvpMatrix * a_Position;\\n&#39; + //将模型视图投影组合矩阵与顶点坐标相乘赋值给顶点着色器内置变量gl_Position</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;  vec3 normal = normalize(vec3(a_Normal));\\n&#39; + //对法向量归一化处理</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;  float nDotL = max(dot(u_LightDirection, normal), 0.0);\\n&#39; + //计算光线方向和法向量点积</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;  vec3 diffuse = u_LightColor * vec3(a_Color) * nDotL;\\n&#39; + //计算漫反射光的颜色</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;  v_Color = vec4(diffuse, a_Color.a);\\n&#39; + //将顶点颜色信息传给片元着色器，</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;}\\n&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//片元着色器</span></span>
<span class="line"><span style="color:#e1e4e8;">var FSHADER_SOURCE = &#39;&#39; +</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;precision mediump float;\\n&#39; + // 设置精度</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;varying vec4 v_Color;\\n&#39; + //声明varying变量v_Color，用来接收顶点着色器传送的片元颜色信息</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;void main(){\\n&#39; +</span></span>
<span class="line"><span style="color:#e1e4e8;">  //将varying变量v_Color接收的颜色信息赋值给内置变量gl_FragColor</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39; gl_FragColor = v_Color;\\n&#39; +</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;}\\n&#39;;</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;">//顶点着色器</span></span>
<span class="line"><span style="color:#24292e;">var VSHADER_SOURCE = &#39;&#39; +</span></span>
<span class="line"><span style="color:#24292e;">  &#39;attribute vec4 a_Position;\\n&#39; + //声明attribute变量a_Position，用来存放顶点位置信息</span></span>
<span class="line"><span style="color:#24292e;">  &#39;attribute vec4 a_Color;\\n&#39; + //声明attribute变量a_Color，用来存放顶点颜色信息</span></span>
<span class="line"><span style="color:#24292e;">  &#39;attribute vec4 a_Normal;\\n&#39; + //声明attribute变量a_Normal，用来存放法向量</span></span>
<span class="line"><span style="color:#24292e;">  &#39;uniform mat4 u_MvpMatrix;\\n&#39; + //声明uniform变量u_MvpMatrix，用来存放模型视图投影组合矩阵</span></span>
<span class="line"><span style="color:#24292e;">  &#39;uniform vec3 u_LightColor;\\n&#39; + //声明uniform变量u_LightColor，用来存放光线颜色</span></span>
<span class="line"><span style="color:#24292e;">  &#39;uniform vec3 u_LightDirection;\\n&#39; + //声明uniform变量u_LightDirection，用来存放入射光方向，归一化的世界坐标</span></span>
<span class="line"><span style="color:#24292e;">  &#39;varying vec4 v_Color;\\n&#39; + //声明varying变量v_Color，用来向片元着色器传值顶点颜色信息</span></span>
<span class="line"><span style="color:#24292e;">  &#39;void main(){\\n&#39; +</span></span>
<span class="line"><span style="color:#24292e;">  &#39;  gl_Position = u_MvpMatrix * a_Position;\\n&#39; + //将模型视图投影组合矩阵与顶点坐标相乘赋值给顶点着色器内置变量gl_Position</span></span>
<span class="line"><span style="color:#24292e;">  &#39;  vec3 normal = normalize(vec3(a_Normal));\\n&#39; + //对法向量归一化处理</span></span>
<span class="line"><span style="color:#24292e;">  &#39;  float nDotL = max(dot(u_LightDirection, normal), 0.0);\\n&#39; + //计算光线方向和法向量点积</span></span>
<span class="line"><span style="color:#24292e;">  &#39;  vec3 diffuse = u_LightColor * vec3(a_Color) * nDotL;\\n&#39; + //计算漫反射光的颜色</span></span>
<span class="line"><span style="color:#24292e;">  &#39;  v_Color = vec4(diffuse, a_Color.a);\\n&#39; + //将顶点颜色信息传给片元着色器，</span></span>
<span class="line"><span style="color:#24292e;">  &#39;}\\n&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//片元着色器</span></span>
<span class="line"><span style="color:#24292e;">var FSHADER_SOURCE = &#39;&#39; +</span></span>
<span class="line"><span style="color:#24292e;">  &#39;precision mediump float;\\n&#39; + // 设置精度</span></span>
<span class="line"><span style="color:#24292e;">  &#39;varying vec4 v_Color;\\n&#39; + //声明varying变量v_Color，用来接收顶点着色器传送的片元颜色信息</span></span>
<span class="line"><span style="color:#24292e;">  &#39;void main(){\\n&#39; +</span></span>
<span class="line"><span style="color:#24292e;">  //将varying变量v_Color接收的颜色信息赋值给内置变量gl_FragColor</span></span>
<span class="line"><span style="color:#24292e;">  &#39; gl_FragColor = v_Color;\\n&#39; +</span></span>
<span class="line"><span style="color:#24292e;">  &#39;}\\n&#39;;</span></span></code></pre></div><h2 id="_3-精度限定词" tabindex="-1">3.精度限定词 <a class="header-anchor" href="#_3-精度限定词" aria-label="Permalink to &quot;3.精度限定词&quot;">​</a></h2><p>为了提高着色器程序运行效率，减少内存开销，GLSL ES 引入了精度限定词，通常高精度需要更大的开销，低精度需要较少开销，使用精度限定词可以精细的控制程序在效能和开销之间的平衡 WebGL程序支持三种精度，限定词分别是 <strong>highp、mediump和lowp</strong></p><table><thead><tr><th>精度限定词</th><th>描述</th><th>默认数值范围和精度Float</th><th>默认数值范围和精度Int</th></tr></thead><tbody><tr><td>highp</td><td>高精度， 顶点着色器的最低精度</td><td>（-2^62^, 2^62^ ）和精度2^-16^</td><td>（-2^16^, 2^16^）</td></tr><tr><td>mediump</td><td>中精度，介于高精度和低精度之间，片元着色器的最低精度</td><td>（-2^14^, 2^14^）和精度2^-10^</td><td>(-2^10^, 2^10^)</td></tr><tr><td>lowp</td><td>低精度，低于中精度，可以表示所有颜色</td><td>（-2，2）精度2^-8^</td><td>(-2^8^, 2^8^)</td></tr></tbody></table><p>需要注意的是在某些WebGL的环境下，片元着色器可能不支持highp精度，下面是几个声明变量精度的例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">mediump float size;</span></span>
<span class="line"><span style="color:#e1e4e8;">highp vec4 position;</span></span>
<span class="line"><span style="color:#e1e4e8;">lowp vec4 color;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mediump float size;</span></span>
<span class="line"><span style="color:#24292e;">highp vec4 position;</span></span>
<span class="line"><span style="color:#24292e;">lowp vec4 color;</span></span></code></pre></div><p>你会发现每个变量设置精度太繁琐了，通常使用precision 关键字为某一类的变量设置默认精度，这个设置必须放置在程序的顶部</p><p>使用方式如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">precision &lt;精度限定次&gt; &lt;类型名称&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">precision &lt;精度限定次&gt; &lt;类型名称&gt;</span></span></code></pre></div><p>来看一下设置所有浮点数默认精度为中精度的例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 片元着色器</span></span>
<span class="line"><span style="color:#e1e4e8;">var FSHADER_SOURCE = &#39;&#39; + </span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;precision mediump float;\\n&#39; +</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;varying vec4 v_Color;\\n&#39; +</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;void main() { \\n&#39; +</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;gl_FragColor = v_Color;\\n&#39; +</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;}\\n&#39;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 片元着色器</span></span>
<span class="line"><span style="color:#24292e;">var FSHADER_SOURCE = &#39;&#39; + </span></span>
<span class="line"><span style="color:#24292e;">&#39;precision mediump float;\\n&#39; +</span></span>
<span class="line"><span style="color:#24292e;">&#39;varying vec4 v_Color;\\n&#39; +</span></span>
<span class="line"><span style="color:#24292e;">&#39;void main() { \\n&#39; +</span></span>
<span class="line"><span style="color:#24292e;">&#39;gl_FragColor = v_Color;\\n&#39; +</span></span>
<span class="line"><span style="color:#24292e;">&#39;}\\n&#39;;</span></span></code></pre></div><p>如果你发现了在示例中只对片元着色器中float 类型进行了默认精度的设置，并不是其他类型不需要限定精度，是因为其余的都内置了默认精度限定，具体请参照下表：</p><table><thead><tr><th>着色器类型</th><th>数据类型</th><th>默认精度</th></tr></thead><tbody><tr><td>顶点着色器</td><td>int</td><td>highp</td></tr><tr><td>顶点着色器</td><td>float</td><td>highp</td></tr><tr><td>顶点着色器</td><td>sampler2D</td><td>lowp</td></tr><tr><td>顶点着色器</td><td>samplerCube</td><td>lowp</td></tr><tr><td>片元着色器</td><td>int</td><td>mediump</td></tr><tr><td>片元着色器</td><td>float</td><td>无</td></tr><tr><td>片元着色器</td><td>sampler2D</td><td>lowp</td></tr><tr><td>片元着色器</td><td>samplerCube</td><td>lowp</td></tr><tr><td>可以发现片元着色器中的float类型没有设定默认精度，需要手动设定，否则会导致编译错误:</td><td></td><td></td></tr><tr><td>==failed to compile shader:ERROR: 0:1 :No precision specified for (float)==</td><td></td><td></td></tr></tbody></table>`,25),o=[l];function p(r,i,c,d,g,h){return n(),a("div",null,o)}const u=s(t,[["render",p]]);export{y as __pageData,u as default};
