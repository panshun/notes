import{_ as s,o as n,c as a,R as e}from"./chunks/framework.JvFgJH8G.js";const l="/notes/assets/矩阵x矩阵1.MuiBavk2.png",p="/notes/assets/矩阵x矩阵2.UOfek0uc.png",t="/notes/assets/矩阵x矢量1.5fJ-lXXu.png",o="/notes/assets/矩阵x矢量2.PJThBqgt.png",c="/notes/assets/矩阵x矢量3.xYkQvuou.png",r="/notes/assets/矩阵x矢量4.VM7gaOap.png",b=JSON.parse('{"title":"GLSL ES 矢量和矩阵的访问运算","description":"","frontmatter":{},"headers":[],"relativePath":"webgl/basic/2.md","filePath":"webgl/basic/2.md"}'),i={name:"webgl/basic/2.md"},y=e(`<h1 id="glsl-es-矢量和矩阵的访问运算" tabindex="-1">GLSL ES 矢量和矩阵的访问运算 <a class="header-anchor" href="#glsl-es-矢量和矩阵的访问运算" aria-label="Permalink to &quot;GLSL ES 矢量和矩阵的访问运算&quot;">​</a></h1><h2 id="_1-矢量的访问" tabindex="-1">1. 矢量的访问 <a class="header-anchor" href="#_1-矢量的访问" aria-label="Permalink to &quot;1. 矢量的访问&quot;">​</a></h2><p>矢量既可以通过点运算符<code>(.)</code> 来访问也可以通过方括号运算符<code>([])</code>来访问；通常矢量通过点运算符来访问，只需要再矢量变量后接点运算符，然后再接上分量名即可。 <strong>矢量分量名介绍</strong></p><table><thead><tr><th>分量名</th><th>描述</th></tr></thead><tbody><tr><td>x,y,z,w</td><td>用来获取顶点坐标的分量</td></tr><tr><td>r,g,b,a</td><td>用来获取颜色分量</td></tr><tr><td>s, t, p,q</td><td>用来获取纹理坐标分量</td></tr></tbody></table><p>矢量可以用来存储顶点坐标、颜色和纹理坐标。所以GLSL ES 支持以上三种分量名，这样在使用的时候便于理解，实际上，一个矢量的x分量，或r分量还是s分量都会返回这个矢量的第一个分量，一个矢量的y分量或g分量还是t分量都会返回这个矢量的第二个分量</p><h3 id="_1-1-单一分量访问" tabindex="-1">1.1 单一分量访问 <a class="header-anchor" href="#_1-1-单一分量访问" aria-label="Permalink to &quot;1.1 单一分量访问&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">vec4 v4 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">vec4</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2.0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3.0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4.0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1.0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">float f;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">f </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v4.x; </span><span style="color:#6A737D;">//f设为v4的第1个分量2.0</span></span>
<span class="line"><span style="color:#E1E4E8;">f </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v4.y; </span><span style="color:#6A737D;">//f设为v4的第2个分量3.0</span></span>
<span class="line"><span style="color:#E1E4E8;">f </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v4.z; </span><span style="color:#6A737D;">//f设为v4的第3个分量4.0</span></span>
<span class="line"><span style="color:#E1E4E8;">f </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v4.w; </span><span style="color:#6A737D;">//f设为v4的第4个分量1.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">f </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v4.r; </span><span style="color:#6A737D;">//f设为v4的第1个分量2.0</span></span>
<span class="line"><span style="color:#E1E4E8;">f </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v4.g; </span><span style="color:#6A737D;">//f设为v4的第2个分量3.0</span></span>
<span class="line"><span style="color:#E1E4E8;">f </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v4.b; </span><span style="color:#6A737D;">//f设为v4的第3个分量4.0</span></span>
<span class="line"><span style="color:#E1E4E8;">f </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v4.a; </span><span style="color:#6A737D;">//f设为v4的第4个分量1.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">f </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v4.s; </span><span style="color:#6A737D;">//f设为v4的第1个分量2.0</span></span>
<span class="line"><span style="color:#E1E4E8;">f </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v4.t; </span><span style="color:#6A737D;">//f设为v4的第2个分量3.0</span></span>
<span class="line"><span style="color:#E1E4E8;">f </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v4.p; </span><span style="color:#6A737D;">//f设为v4的第3个分量4.0</span></span>
<span class="line"><span style="color:#E1E4E8;">f </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v4.q; </span><span style="color:#6A737D;">//f设为v4的第4个分量1.0</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">f </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v4.x; </span><span style="color:#6A737D;">//f设为v4的第1个分量2.0</span></span>
<span class="line"><span style="color:#E1E4E8;">f </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v4.r; </span><span style="color:#6A737D;">//f设为v4的第1个分量2.0</span></span>
<span class="line"><span style="color:#E1E4E8;">f </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v4.s; </span><span style="color:#6A737D;">//f设为v4的第1个分量2.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">vec4 v4 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">vec4</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2.0</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3.0</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4.0</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1.0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">float f;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v4.x; </span><span style="color:#6A737D;">//f设为v4的第1个分量2.0</span></span>
<span class="line"><span style="color:#24292E;">f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v4.y; </span><span style="color:#6A737D;">//f设为v4的第2个分量3.0</span></span>
<span class="line"><span style="color:#24292E;">f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v4.z; </span><span style="color:#6A737D;">//f设为v4的第3个分量4.0</span></span>
<span class="line"><span style="color:#24292E;">f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v4.w; </span><span style="color:#6A737D;">//f设为v4的第4个分量1.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v4.r; </span><span style="color:#6A737D;">//f设为v4的第1个分量2.0</span></span>
<span class="line"><span style="color:#24292E;">f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v4.g; </span><span style="color:#6A737D;">//f设为v4的第2个分量3.0</span></span>
<span class="line"><span style="color:#24292E;">f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v4.b; </span><span style="color:#6A737D;">//f设为v4的第3个分量4.0</span></span>
<span class="line"><span style="color:#24292E;">f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v4.a; </span><span style="color:#6A737D;">//f设为v4的第4个分量1.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v4.s; </span><span style="color:#6A737D;">//f设为v4的第1个分量2.0</span></span>
<span class="line"><span style="color:#24292E;">f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v4.t; </span><span style="color:#6A737D;">//f设为v4的第2个分量3.0</span></span>
<span class="line"><span style="color:#24292E;">f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v4.p; </span><span style="color:#6A737D;">//f设为v4的第3个分量4.0</span></span>
<span class="line"><span style="color:#24292E;">f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v4.q; </span><span style="color:#6A737D;">//f设为v4的第4个分量1.0</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v4.x; </span><span style="color:#6A737D;">//f设为v4的第1个分量2.0</span></span>
<span class="line"><span style="color:#24292E;">f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v4.r; </span><span style="color:#6A737D;">//f设为v4的第1个分量2.0</span></span>
<span class="line"><span style="color:#24292E;">f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v4.s; </span><span style="color:#6A737D;">//f设为v4的第1个分量2.0</span></span></code></pre></div><h3 id="_1-2-分量组合使用" tabindex="-1">1.2 分量组合使用 <a class="header-anchor" href="#_1-2-分量组合使用" aria-label="Permalink to &quot;1.2 分量组合使用&quot;">​</a></h3><p>通过分量名有更灵活的用法，可以取任意分量组合，可以<strong>逆序</strong>使用，可以<strong>重复</strong>使用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">vec4 v4 = vec4(1.0,2.0,3.0,4.0);</span></span>
<span class="line"><span style="color:#e1e4e8;">vec2 v2,v3;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">v2 = v4.xy; //将v2设置为(1.0,2.0)</span></span>
<span class="line"><span style="color:#e1e4e8;">v2 = v4.yz; //将v2设置为(2.0,3.0)</span></span>
<span class="line"><span style="color:#e1e4e8;">v2 = v4.xz; //将v2设置为(1.0,3.0)</span></span>
<span class="line"><span style="color:#e1e4e8;">v2 = v4.xw; //将v2设置为(1.0,4.0)</span></span>
<span class="line"><span style="color:#e1e4e8;">v2 = v4.xx; //将v2设置为(1.0,1.0)</span></span>
<span class="line"><span style="color:#e1e4e8;">v2 = v4.wx; //将v2设置为(4.0,1.0)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">v3 = v4.xyz;//将v3设置为(1.0,2.0,3.0)</span></span>
<span class="line"><span style="color:#e1e4e8;">v3 = v4.xzw;//将v3设置为(1.0,3.0,4.0)</span></span>
<span class="line"><span style="color:#e1e4e8;">v3 = v4.zzz;//将v3设置为(3.0,3.0,3.0)</span></span>
<span class="line"><span style="color:#e1e4e8;">v3 = v4.wzy;//将v3设置为(4.0,3.0,2.0)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">vec4 v4 = vec4(1.0,2.0,3.0,4.0);</span></span>
<span class="line"><span style="color:#24292e;">vec2 v2,v3;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">v2 = v4.xy; //将v2设置为(1.0,2.0)</span></span>
<span class="line"><span style="color:#24292e;">v2 = v4.yz; //将v2设置为(2.0,3.0)</span></span>
<span class="line"><span style="color:#24292e;">v2 = v4.xz; //将v2设置为(1.0,3.0)</span></span>
<span class="line"><span style="color:#24292e;">v2 = v4.xw; //将v2设置为(1.0,4.0)</span></span>
<span class="line"><span style="color:#24292e;">v2 = v4.xx; //将v2设置为(1.0,1.0)</span></span>
<span class="line"><span style="color:#24292e;">v2 = v4.wx; //将v2设置为(4.0,1.0)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">v3 = v4.xyz;//将v3设置为(1.0,2.0,3.0)</span></span>
<span class="line"><span style="color:#24292e;">v3 = v4.xzw;//将v3设置为(1.0,3.0,4.0)</span></span>
<span class="line"><span style="color:#24292e;">v3 = v4.zzz;//将v3设置为(3.0,3.0,3.0)</span></span>
<span class="line"><span style="color:#24292e;">v3 = v4.wzy;//将v3设置为(4.0,3.0,2.0)</span></span></code></pre></div><p>==注意，多个分量名使用时必须同属于一个集合，例如不能使用v3.was==</p><h3 id="分量聚合作为左值使用" tabindex="-1">分量聚合作为左值使用 <a class="header-anchor" href="#分量聚合作为左值使用" aria-label="Permalink to &quot;分量聚合作为左值使用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">vec4 position = vec4(1.0,2.0,30.,4.0)</span></span>
<span class="line"><span style="color:#e1e4e8;">position.yw = vec2(6.0,9.0)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">vec4 position = vec4(1.0,2.0,30.,4.0)</span></span>
<span class="line"><span style="color:#24292e;">position.yw = vec2(6.0,9.0)</span></span></code></pre></div><h2 id="_2矩阵访问" tabindex="-1">2矩阵访问 <a class="header-anchor" href="#_2矩阵访问" aria-label="Permalink to &quot;2矩阵访问&quot;">​</a></h2><p>矩阵也可以通过点运算符<code>(.)</code>来访问，也可以通过方括号运算符<code>([])</code>来访问 通常矩阵是通过<code>[]</code>运算符来访问，使用<code>[]</code>运算符访问时类似于访问JavaScript的二维数组，由于GLSL语言中矩阵时按照<strong>列主序</strong>的，那么通过[0]可以访问到的是矩阵中的第一列元素，通过[1]访问到的是矩阵中的第二列元素</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">mat4 m4 = mat4(</span></span>
<span class="line"><span style="color:#e1e4e8;">	1.0,  2.0,  3.0,  4.0, </span></span>
<span class="line"><span style="color:#e1e4e8;">	5.0,  6.0,  7.0,  8.0,</span></span>
<span class="line"><span style="color:#e1e4e8;">	9.0, 10.0,  11.0, 12.0,</span></span>
<span class="line"><span style="color:#e1e4e8;">	13.0, 14.0, 15.0, 16.0</span></span>
<span class="line"><span style="color:#e1e4e8;">);</span></span>
<span class="line"><span style="color:#e1e4e8;">·</span></span>
<span class="line"><span style="color:#e1e4e8;">vec4 v4 = m4[0] // 获得矩阵第一列元素，即[1.0, 2.0, 3.0, 4.0]</span></span>
<span class="line"><span style="color:#e1e4e8;">float m23 = m4[1][2];//将m23设置为m4中的第2列中的第3个元素，即7.0</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//同时使用[]运算符和分量名访问矩阵元素</span></span>
<span class="line"><span style="color:#e1e4e8;">float m32 = m4[2].y;//将m32设置为m4中的第3列中的第2个元素，即10.0</span></span>
<span class="line"><span style="color:#e1e4e8;">float m33 = m4[2].z;//将m33设置为m4中的第3列中的第3个元素，即11.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mat4 m4 = mat4(</span></span>
<span class="line"><span style="color:#24292e;">	1.0,  2.0,  3.0,  4.0, </span></span>
<span class="line"><span style="color:#24292e;">	5.0,  6.0,  7.0,  8.0,</span></span>
<span class="line"><span style="color:#24292e;">	9.0, 10.0,  11.0, 12.0,</span></span>
<span class="line"><span style="color:#24292e;">	13.0, 14.0, 15.0, 16.0</span></span>
<span class="line"><span style="color:#24292e;">);</span></span>
<span class="line"><span style="color:#24292e;">·</span></span>
<span class="line"><span style="color:#24292e;">vec4 v4 = m4[0] // 获得矩阵第一列元素，即[1.0, 2.0, 3.0, 4.0]</span></span>
<span class="line"><span style="color:#24292e;">float m23 = m4[1][2];//将m23设置为m4中的第2列中的第3个元素，即7.0</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//同时使用[]运算符和分量名访问矩阵元素</span></span>
<span class="line"><span style="color:#24292e;">float m32 = m4[2].y;//将m32设置为m4中的第3列中的第2个元素，即10.0</span></span>
<span class="line"><span style="color:#24292e;">float m33 = m4[2].z;//将m33设置为m4中的第3列中的第3个元素，即11.0</span></span></code></pre></div><p>==注意==，<strong>使用[ ]运算符访问矩阵元素时，索引值必须是常量</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">int index1 = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">vec 4 v4 =m4[index1] // 错误index1不是常量索引</span></span>
<span class="line"><span style="color:#e1e4e8;">const index2 = 1</span></span>
<span class="line"><span style="color:#e1e4e8;">vec4  v4_2 = m4[index2] // [5.0,6.0,7.0,8.0]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">int index1 = 0;</span></span>
<span class="line"><span style="color:#24292e;">vec 4 v4 =m4[index1] // 错误index1不是常量索引</span></span>
<span class="line"><span style="color:#24292e;">const index2 = 1</span></span>
<span class="line"><span style="color:#24292e;">vec4  v4_2 = m4[index2] // [5.0,6.0,7.0,8.0]</span></span></code></pre></div><h2 id="_3-矢量和矩阵支持的运算符" tabindex="-1">3 矢量和矩阵支持的运算符 <a class="header-anchor" href="#_3-矢量和矩阵支持的运算符" aria-label="Permalink to &quot;3 矢量和矩阵支持的运算符&quot;">​</a></h2><table><thead><tr><th>运算符</th><th>运算</th><th>适用数据类型</th></tr></thead><tbody><tr><td>*, /</td><td>乘法，除法</td><td>vec[234],mat[234]</td></tr><tr><td>+, -</td><td>加法，减法</td><td>运算结果的数据类型与参与运算的类型一致</td></tr><tr><td>++，--</td><td>自增，自减</td><td>适用vec[234]和mat[234]，运算结果的数据类型与参与运算的类型一致</td></tr><tr><td>=</td><td>赋值</td><td>适用vec[234]和mat[234]</td></tr><tr><td>+=，-=，*=, /=</td><td>赋值运算</td><td>适用vec[234]和mat[234]</td></tr><tr><td>==， ！=</td><td>比较运算</td><td>适用vec[234]和mat[234],对于==，如果两边变量的每一个分量都相同返回true，对于!=,两边变量的任何一个分量不同返回true</td></tr><tr><td>以上矢量与矩阵支持的运算符，与基本类型相比，只可以使用==或!=比较运算符，如果确实需要比较矢量或矩阵的大小，可以使用内置函数比较函数</td><td></td><td></td></tr></tbody></table><h2 id="_5-矢量和矩阵的运算" tabindex="-1">5.矢量和矩阵的运算 <a class="header-anchor" href="#_5-矢量和矩阵的运算" aria-label="Permalink to &quot;5.矢量和矩阵的运算&quot;">​</a></h2><h3 id="_5-1-矢量和数字运算符" tabindex="-1">5.1 矢量和数字运算符 <a class="header-anchor" href="#_5-1-矢量和数字运算符" aria-label="Permalink to &quot;5.1 矢量和数字运算符&quot;">​</a></h3><p>矢量和数字的运算，相当于每个分量与该数都做相同的运算，注意矢量分量的类型要与参与运算的数字的类型保持一致。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//矢量与浮点数运算</span></span>
<span class="line"><span style="color:#e1e4e8;">vec3 v3 = vec3(2.0,4.0,6.0);</span></span>
<span class="line"><span style="color:#e1e4e8;">vec3 result;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">result = v3 + 2.0;//result = vec3(4.0,6.0,8.0)</span></span>
<span class="line"><span style="color:#e1e4e8;">result = v3 - 1.0;//result = vec3(1.0,3.0,5.0)</span></span>
<span class="line"><span style="color:#e1e4e8;">result = v3 * 2.0;//result = vec3(4.0,8.0,12.0)</span></span>
<span class="line"><span style="color:#e1e4e8;">result = v3 / 2.0;//result = vec3(1.0,2.0,3.0)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//矢量与整数运算</span></span>
<span class="line"><span style="color:#e1e4e8;">ivec3 iv3 = vec3(2,4,6);</span></span>
<span class="line"><span style="color:#e1e4e8;">ivec3 res;</span></span>
<span class="line"><span style="color:#e1e4e8;">res = iv3 + 2;//res = vec3(4,6,8)</span></span>
<span class="line"><span style="color:#e1e4e8;">res = iv3 - 1;//res = vec3(1,3,5)</span></span>
<span class="line"><span style="color:#e1e4e8;">res = iv3 * 2;//res = vec3(4,8,12)</span></span>
<span class="line"><span style="color:#e1e4e8;">res = iv3 / 2;//res = vec3(1,2,3)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//矢量与浮点数运算</span></span>
<span class="line"><span style="color:#24292e;">vec3 v3 = vec3(2.0,4.0,6.0);</span></span>
<span class="line"><span style="color:#24292e;">vec3 result;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">result = v3 + 2.0;//result = vec3(4.0,6.0,8.0)</span></span>
<span class="line"><span style="color:#24292e;">result = v3 - 1.0;//result = vec3(1.0,3.0,5.0)</span></span>
<span class="line"><span style="color:#24292e;">result = v3 * 2.0;//result = vec3(4.0,8.0,12.0)</span></span>
<span class="line"><span style="color:#24292e;">result = v3 / 2.0;//result = vec3(1.0,2.0,3.0)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//矢量与整数运算</span></span>
<span class="line"><span style="color:#24292e;">ivec3 iv3 = vec3(2,4,6);</span></span>
<span class="line"><span style="color:#24292e;">ivec3 res;</span></span>
<span class="line"><span style="color:#24292e;">res = iv3 + 2;//res = vec3(4,6,8)</span></span>
<span class="line"><span style="color:#24292e;">res = iv3 - 1;//res = vec3(1,3,5)</span></span>
<span class="line"><span style="color:#24292e;">res = iv3 * 2;//res = vec3(4,8,12)</span></span>
<span class="line"><span style="color:#24292e;">res = iv3 / 2;//res = vec3(1,2,3)</span></span></code></pre></div><h3 id="_5-2-矢量和矢量的运算" tabindex="-1">5.2 矢量和矢量的运算 <a class="header-anchor" href="#_5-2-矢量和矢量的运算" aria-label="Permalink to &quot;5.2 矢量和矢量的运算&quot;">​</a></h3><p>矢量和矢量的运算，首先要保证操作<strong>矢量的阶数都相同</strong>.否则不能计算，计算过程是前一个<strong>矢量每个分量与另一个矢量对应的分量做运算</strong>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">vec3 v3_1 = vec3(2.0,4.0,6.0);</span></span>
<span class="line"><span style="color:#e1e4e8;">vec3 v3_2 = vec3(-2.0,-4.0,-6.0);</span></span>
<span class="line"><span style="color:#e1e4e8;">vec3 result;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">result = v3_1 + v3_2;//result = vec3(0.0,0.0,0.0)</span></span>
<span class="line"><span style="color:#e1e4e8;">result = v3_1 - v3_2;//result = vec3(4.0,8.0,12.0)</span></span>
<span class="line"><span style="color:#e1e4e8;">result = v3_1 * v3_2;//result = vec3(-4.0,-16.0,-36.0)</span></span>
<span class="line"><span style="color:#e1e4e8;">result = v3_1 / v3_2;//result = vec3(-1.0,-1.0,-1.0)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">vec3 v3_1 = vec3(2.0,4.0,6.0);</span></span>
<span class="line"><span style="color:#24292e;">vec3 v3_2 = vec3(-2.0,-4.0,-6.0);</span></span>
<span class="line"><span style="color:#24292e;">vec3 result;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">result = v3_1 + v3_2;//result = vec3(0.0,0.0,0.0)</span></span>
<span class="line"><span style="color:#24292e;">result = v3_1 - v3_2;//result = vec3(4.0,8.0,12.0)</span></span>
<span class="line"><span style="color:#24292e;">result = v3_1 * v3_2;//result = vec3(-4.0,-16.0,-36.0)</span></span>
<span class="line"><span style="color:#24292e;">result = v3_1 / v3_2;//result = vec3(-1.0,-1.0,-1.0)</span></span></code></pre></div><h3 id="_5-3-矩阵和浮点数的运算" tabindex="-1">5.3 矩阵和浮点数的运算 <a class="header-anchor" href="#_5-3-矩阵和浮点数的运算" aria-label="Permalink to &quot;5.3 矩阵和浮点数的运算&quot;">​</a></h3><p>矩阵和浮点数运算，相当于矩阵的每个元素都与该浮点数做运算 以加法为例说明一下，减法、乘法、除法与加法雷同，都是逐元素和浮点数运算</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">mat4 m4 = mat4(</span></span>
<span class="line"><span style="color:#e1e4e8;">	1.0,  2.0,  3.0,  4.0, </span></span>
<span class="line"><span style="color:#e1e4e8;">	5.0,  6.0,  7.0,  8.0,</span></span>
<span class="line"><span style="color:#e1e4e8;">	9.0, 10.0,  11.0, 12.0,</span></span>
<span class="line"><span style="color:#e1e4e8;">	13.0, 14.0, 15.0, 16.0</span></span>
<span class="line"><span style="color:#e1e4e8;">);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">mat4 m4_res = m4 + 2.0;//m4_res = mat4(</span></span>
<span class="line"><span style="color:#e1e4e8;">										//3.0,  4.0,  5.0,  6.0, </span></span>
<span class="line"><span style="color:#e1e4e8;">										//7.0,  8.0,  9.0,  10.0,</span></span>
<span class="line"><span style="color:#e1e4e8;">										//11.0, 12.0, 13.0, 14.0,</span></span>
<span class="line"><span style="color:#e1e4e8;">										//15.0, 16.0, 17.0, 18.0</span></span>
<span class="line"><span style="color:#e1e4e8;">									//);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mat4 m4 = mat4(</span></span>
<span class="line"><span style="color:#24292e;">	1.0,  2.0,  3.0,  4.0, </span></span>
<span class="line"><span style="color:#24292e;">	5.0,  6.0,  7.0,  8.0,</span></span>
<span class="line"><span style="color:#24292e;">	9.0, 10.0,  11.0, 12.0,</span></span>
<span class="line"><span style="color:#24292e;">	13.0, 14.0, 15.0, 16.0</span></span>
<span class="line"><span style="color:#24292e;">);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">mat4 m4_res = m4 + 2.0;//m4_res = mat4(</span></span>
<span class="line"><span style="color:#24292e;">										//3.0,  4.0,  5.0,  6.0, </span></span>
<span class="line"><span style="color:#24292e;">										//7.0,  8.0,  9.0,  10.0,</span></span>
<span class="line"><span style="color:#24292e;">										//11.0, 12.0, 13.0, 14.0,</span></span>
<span class="line"><span style="color:#24292e;">										//15.0, 16.0, 17.0, 18.0</span></span>
<span class="line"><span style="color:#24292e;">									//);</span></span></code></pre></div><h3 id="_5-4-矩阵和矩阵运算" tabindex="-1">5.4 矩阵和矩阵运算 <a class="header-anchor" href="#_5-4-矩阵和矩阵运算" aria-label="Permalink to &quot;5.4 矩阵和矩阵运算&quot;">​</a></h3><p>矩阵与矩阵相乘计算过程麻烦一些，以三维矩阵与三维矩阵相乘为例说明一下，2x2矩阵与4x4矩阵运算过程雷同 <img src="`+l+'" alt="Alt"><img src="'+p+`" alt="Alt"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">mat3 m3_1 = mat3(</span></span>
<span class="line"><span style="color:#e1e4e8;">	1.0, 2.0, 3.0, </span></span>
<span class="line"><span style="color:#e1e4e8;">	4.0, 5.0, 6.0, </span></span>
<span class="line"><span style="color:#e1e4e8;">	7.0, 8.0, 9.0</span></span>
<span class="line"><span style="color:#e1e4e8;">);</span></span>
<span class="line"><span style="color:#e1e4e8;">mat3 m3_2 = mat3(</span></span>
<span class="line"><span style="color:#e1e4e8;">	1.0, 2.0, 3.0, </span></span>
<span class="line"><span style="color:#e1e4e8;">	4.0, 5.0, 6.0, </span></span>
<span class="line"><span style="color:#e1e4e8;">	7.0, 8.0, 9.0</span></span>
<span class="line"><span style="color:#e1e4e8;">);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">mat3 m3_res = m3_1 * m3_2;</span></span>
<span class="line"><span style="color:#e1e4e8;">/*</span></span>
<span class="line"><span style="color:#e1e4e8;">mat3 m3_res = mat3(</span></span>
<span class="line"><span style="color:#e1e4e8;">	1.0*1.0+2.0*4.0+3.0*7.0, 1.0*2.0+2.0*5.0+3.0*8.0, 1.0*3.0+2.0*6.0+3.0*9.0,</span></span>
<span class="line"><span style="color:#e1e4e8;">	4.0*1.0+5.0*4.0+6.0*7.0, 4.0*2.0+5.0*5.0+6.0*8.0, 4.0*3.0+5.0*6.0+6.0*9.0,</span></span>
<span class="line"><span style="color:#e1e4e8;">	7.0*1.0+8.0*4.0+9.0*7.0, 7.0*2.0+8.0*5.0+9.0*8.0, 7.0*3.0+8.0*6.0+9.0*9.0,</span></span>
<span class="line"><span style="color:#e1e4e8;">)</span></span>
<span class="line"><span style="color:#e1e4e8;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mat3 m3_1 = mat3(</span></span>
<span class="line"><span style="color:#24292e;">	1.0, 2.0, 3.0, </span></span>
<span class="line"><span style="color:#24292e;">	4.0, 5.0, 6.0, </span></span>
<span class="line"><span style="color:#24292e;">	7.0, 8.0, 9.0</span></span>
<span class="line"><span style="color:#24292e;">);</span></span>
<span class="line"><span style="color:#24292e;">mat3 m3_2 = mat3(</span></span>
<span class="line"><span style="color:#24292e;">	1.0, 2.0, 3.0, </span></span>
<span class="line"><span style="color:#24292e;">	4.0, 5.0, 6.0, </span></span>
<span class="line"><span style="color:#24292e;">	7.0, 8.0, 9.0</span></span>
<span class="line"><span style="color:#24292e;">);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">mat3 m3_res = m3_1 * m3_2;</span></span>
<span class="line"><span style="color:#24292e;">/*</span></span>
<span class="line"><span style="color:#24292e;">mat3 m3_res = mat3(</span></span>
<span class="line"><span style="color:#24292e;">	1.0*1.0+2.0*4.0+3.0*7.0, 1.0*2.0+2.0*5.0+3.0*8.0, 1.0*3.0+2.0*6.0+3.0*9.0,</span></span>
<span class="line"><span style="color:#24292e;">	4.0*1.0+5.0*4.0+6.0*7.0, 4.0*2.0+5.0*5.0+6.0*8.0, 4.0*3.0+5.0*6.0+6.0*9.0,</span></span>
<span class="line"><span style="color:#24292e;">	7.0*1.0+8.0*4.0+9.0*7.0, 7.0*2.0+8.0*5.0+9.0*8.0, 7.0*3.0+8.0*6.0+9.0*9.0,</span></span>
<span class="line"><span style="color:#24292e;">)</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span></code></pre></div><p>==注意，A<em>B 与 B</em>A 结果是不一样，计算时要注意顺序==</p><h3 id="_5-5-矩阵和右乘矢量" tabindex="-1">5.5 矩阵和右乘矢量 <a class="header-anchor" href="#_5-5-矩阵和右乘矢量" aria-label="Permalink to &quot;5.5 矩阵和右乘矢量&quot;">​</a></h3><p>矩阵右乘矢量的结果还是矢量，每个分量都是原矢量中对应的分量，每个分量值为原矢量分量乘上矩阵对应行每个元素然后求和，使用时请参照以下公式 <img src="`+t+'" alt="Alt"><img src="'+o+'" alt="Alt"></p><h3 id="_5-6-矩阵和左乘矢量" tabindex="-1">5.6 矩阵和左乘矢量 <a class="header-anchor" href="#_5-6-矩阵和左乘矢量" aria-label="Permalink to &quot;5.6 矩阵和左乘矢量&quot;">​</a></h3><p>矩阵左乘矢量同样也是返回一个向量，但与右乘矢量结果完全不同，计算时需要先将这个矢量转置，然后用这个转置后的矢量乘以矩阵，具体参数以下说明 <img src="'+c+'" alt="Alt"><img src="'+r+'" alt="Alt"></p>',38),v=[y];function d(E,h,m,u,_,g){return n(),a("div",null,v)}const x=s(i,[["render",d]]);export{b as __pageData,x as default};
