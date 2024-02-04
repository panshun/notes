# GLSL ES 数据类型介绍和使用
## 1.GLSL ES介绍
使用WebGL渲染三维图形的核心市绘制图形的着色器程序，GLSL是专门编写着色器程序的编程语言吗。语言特点如下：
- GLSL是一种**强类型语言**，赋值时等号左右两侧的数据类型必须一致，否则会报错，定义函数时必须指定函数的返回值类型；
-  大小写敏感；
- 语句以英文分号结束；
- 程序自上而下逐行执行
## 2.变量
变量定义遵循的原则：
- 变量智能包含应为字符、数组和下划线
- 变量名首字符不能为数字；
- 不能以**gl_**、**webgl_**、或者**webgl** 开头，因为这些前缀已经被openGL ES 保留
- 不能是GLSL ES内置的关键字或者保留字
```
GLSL ES 关键字
---------------------------------------------------------------------------------
attribute	bool		break		bvec2		bvec3		bvec4	
const 		continue	discard		do		else		false
float		for		highp	        if	        in		inout
int		invariant	ivec2		ivec3		ivec4		lowp
mat2		mat3		mat4		medium		out		precision
return 		sampler2D	samplerCube	struct		true		uniform	
varying		vec2		vec3		vec4		void		while		
---------------------------------------------------------------------------------

```
```
GLSL ES 保留字
---------------------------------------------------------------------------------
asm				cast					class				default
double				dvec2					dvec3				dvec4
enum				extern					external			fixed
flat				fvec2					fvec3				fvec4
goto				half					hvec2				hvec3
hvec4				inline					input				interface
long				namespace				noinline			output
packed				public					sampler1D			sampler1DShadow
sampler2DRect		        sampler2DRectShadow		        sampler2DShadow		        sampler3D
sampler3DRect		        short					sizeof				static
superp				switch					template			this
typedef				union					unsigned			using
volatile
---------------------------------------------------------------------------------

```
## 3.变量类型
### 3.1 基本类型
#### 3.1.1 基本类型介绍
变量类型 | 介绍
------- | ----
bool  | 布尔类型，该类型的变量表示一个布尔值true or false
int  | 整形，该类型的变量表示一个整形
float  | 单精度浮点型，该类型的变量表示一个单精度浮点数
#### 3.1.2 基本类型的赋值和类型转换
GLSL ES是强类型语言赋值时等号两侧必须类型相同，否则报错
```
int i = 6; //正确
float j = 6; //错误，整形不能赋值给浮点数
float j1 = 6.0; //正确
bool b = true; //正确
bool b1 = 1; //错误，整形不能赋值给布尔类型
```
不同类型无法直接赋值，可以通过内置函数**int()**、**float()**、**bool()**来强制转换类型。
```
float j = float(6); //将整形强转成浮点型然后赋值
bool b1 = bool(1); //将整形强转成布尔值然后赋值
int i = int(true); //将布尔类型强转成整形赋值
```
### 3.2矢量类型
#### 3.2.1 矢量类型介绍

变量类型 | 说明
---- | -----
vec2，vec3， vec4 | 具有2，3，4 个浮点数元素的矢量
ivec2,ivec3,ivec4 | 具有2，3，4个整形元素的矢量
bvec2,bvec3,bvec4 | 具有2，3，4，个布尔值元素的矢量

#### 3.2.2 矢量构造和赋值
```
 vec3 v3 = vec3(1.0, 1.5, 1.2); // 三维矢量v3设置为(1.0, 1.5, 1.2)，即v3的三个分量x，y，z分别为1.0, 1.5, 1.2
 vec2 v2 = vec2(v3) // 使用三维矢量v3赋值给二维矢量v2，实际是使用v3的前两个元素赋值给v2
 vec4 v4 = vec4(1.0) // 将四维矢量v4 赋值为(1.0,1.0,1.0,1.0)
```
先把v2的元素填充进来，如果还没有填充满，继续使用第二个参数v4里的元素填充
```
vev4 v4b = vec4(v2,v4); //使用v2和v4赋值v4b，结果为(1.0,1.5,1.0,1.0)
```
==注：如果向构造函数中只传一个参数，构造函数会自动将这个参数赋值所有元素，但是如果给构造函数传了不止一个值，但又比所需的参数个数少，就会报错。例如向vec3中传入两个参数就会报错==

### 3.3 矩阵类型

#### 3.3.1 矩阵类型介绍

变量类型 | 说明
-----| -----
mat2 | 2x2 浮动数元素的矩阵，有4个元素
mat3 | 3x3 浮点数元素的矩阵，有9个元素
mat4 | 4x4 浮点数元素的矩阵，有16个元素
#### 3.3.2 矩阵构造和赋值
先明白两个概念，矩阵按**行主序**和按**列主序**
- 在矩阵中按照水平一行一行排列的矩阵称为按行主序
    ![Alt](./images/%E8%A1%8C%E4%B8%BB%E5%BA%8F.png#pic_center)
- 在矩阵中按照垂直方向一列一列的排列的矩阵成为列主序
    ![Alt](./images/%E5%88%97%E4%B8%BB%E5%BA%8F.png#pic_center)

在WebGL中使用的矩阵都是按照**列主序**的

下面的例子是利用构造函数创建一个4x4 的矩阵：

```
 mat4 m4 = mat4 (
        1.0,  2.0,  3.0,  4.0, 
	5.0,  6.0,  7.0,  8.0,
	9.0, 10.0,  11.0, 12.0,
	13.0, 14.0, 15.0, 16.0
 )
```
创建矩阵是按照下图顺序排列的：
![Alt](./images/4x4%E7%9F%A9%E9%98%B5.png)

创建矩阵的示例：
```
//使用两个vec2对象创建mat2对象
vec2 v2_1 = vec2(1.0, 3.0);
vec2 v2_2 = vec2(2.0, 4.0);
mat2 m2_1 = mat2(v2_1,v2_2);//1.0 2.0
                            //3.0 4.0
// 使用vec4 创建mat2 对象
vec4 v4 = vec4(1.0, 3.0, 2.0, 4.0);
mat2 m2_2 = mat2(v4);//1.0 2.0
                     //3.0 4.0
//同时传入数值和矢量对象创建mat2对象
vec2 v2_3 = vec2(2.0, 4.0);
mat2 m2_3 = mat2(1.0, 3.0, v2_3);//1.0 2.0
					 			 //3.0 4.0
//向矩阵构造函数中传入单个数值，生成对角线上都是该值，其余元素为0.0的矩阵
mat4 m4 = mat4(3.0);//3.0 0.0 0.0 0.0
                    //0.0 3.0 0.0 0.0
                    //0.0 0.0 3.0 0.0
                    //0.0 0.0 0.0 3.0			 			 
```
==注：与矢量的构造函数类似，如果传入参数数量大于1但又没有达到矩阵要求的数量，就会报错。例如向mat4中传入三个参数就会报错，因为mat4构造函数需要传入16个元素==
### 3.4 结构体
与C语言类似，GLSL ES支持自定义数据类型，这种类型就是**结构体**，定义结构体**struct**
#### 3.4.1 定义结构体
实际开中，有时候需要将很多基本类型的的变量聚合在一开，例如一个光源包括位置、颜色属性，于是可以使用结构体自定义类型,下面以自定义类型Light结构体为例：
```
 // 使用结构体定义Light
 struct Light {
    vec3 position; // 光源位置
    vec4 color; // 光源颜色
 }；
 Light light1， light2； // 声明Light 类型的变量
```
#### 3.4.2 结构体构造和赋值
结构体有自己的构造函数，构造函数的名称和结构体名称一样，构造结构体时需要注意，构造函数的顺序必须与结构体定义成员的顺序一致。
```
// 第一个参数是光源位置，第二个参数是
light = Light(vec3(1.0,1.2,1.5),vec4(0.0,0.5,0.2,1.0))；
```
#### 3.4.3 结构体成员的访问
结构体成员通过**点运行符（.）**来访问，在结构体变量的后面加上点运算符在加上变量名称即可
```
vec4 color = light.color；
vec3 position = light.position；
```
#### 3.4.4 结构体支持的运算符

结构体成员支持自身类型支持的任何运算符，但是结构体本身支持两种运算符，赋值（=）和比较（==或！=）需要注意**含有数组或者纹理类型成员的结构体不适合进行赋值和比较运算**，当结构体进行比较运算时，当且仅当两个结构体变量所对应的所有成员都相等时，`==` 运算符才会返回`true`
### 3.5数组
#### 3.5.1 数组声明
GLSL ES语言同样支持数组类型，数组类型相比结构体类型，声明和访问要容易些
声明数组很简单，只需要在变量名后后面加上`[]`和数组的长度，例如：
```
float floatArr[6]; // 声明含有6个浮点型元素的的数组
int intArr[4]； // 声明含有4个整形元素的数组
vec4 vec4Arr[2]； // 声明含有2个vec4对象的数组
```
**使用变量定义数组长度时，该变量必须使用const 限定字修饰，例如**
```
int size1 = 4；
vec4  vec4Arr[size1]； // 报错，size1没有使用const 修饰

const init size2 = 4；
vec4  vec4Arr[size2]；// 正确
// 初始化vec4Arr 第一个元素和第二个元素
vec4Arr[0] = vec4(1.0, 2.0, 3.0, 4.0)
vec4Arr[1] = vec4(5.0, 6.0, 7.0, 8.0)
```
==注意，与JS和C语言不同，数组不能再声明时一次性完成初始化，必须对每个元素进行初始化==
#### 3.5.2 数组的访问
数组的访问通过索引来访问，索引从0开始。
```
vec4 vec4Array3[2];

vec4Array3[0] = vec4(1.0,5.0,3.0,2.0);
vec4Array3[1] = vec4(2.0,5.0,6.0,2.0);

//通过下标访问数组vec4Array3中的元素并赋值给类型相同的变量
vec4 vec4_1 = vec4Array3[0];
vec4 vec4_2 = vec4Array3[1];

```
#### 3.5.3 数组支持的运算符
数组本身只支持`[]`运算符，但数组元素支持自身类型所支持的任意运算符

### 3.6 取样器
GLSL ES 支持一种特殊的内置类型称为 **取样器(sampler)** ,使用该类型的变量可以访问纹理，常用的取样器类型：**sampler2D和samplerCube** 分别用于2D纹理取样和盒纹理取样。GLSL ES 提供了内置函数**texture2D**，通过**texture2D**函数，可以从纹理中提取纹素，还需要注意一下，取样器变量只能是**uniform**变量。接下来看看使用示例
```
//顶点着色器
var VSHADER_SOURCE = '' +
  'attribute vec4 a_Position;\n' + //声明attribute变量a_Position，用来存放顶点位置信息
  'attribute vec2 a_TexCoord;\n' + //声明attribute变量a_TexCoord，用来存放纹理坐标
  'varying vec2 v_TexCoord;\n' + //声明varying变量v_TexCoord，用来向片元着色器传值纹理坐标
  'void main(){\n' +
  '  gl_Position = a_Position;\n' + //变量a_Position赋值给顶点着色器内置变量gl_Position
  '  v_TexCoord = a_TexCoord;\n' + //将纹理坐标传给片元着色器，
  '}\n';

//片元着色器
var FSHADER_SOURCE = '' +
  'precision mediump float;\n' + // 设置精度
  'uniform sampler2D u_Sampler;\n' + //声明uniform变量u_Sampler，用来存放纹理单元编号
  'varying vec2 v_TexCoord;\n' + //声明varying变量v_TexCoord，用来接收顶点着色器传送的纹理坐标
  'void main(){\n' +
  //使用texture2D函数抽取纹素，并赋值给内置变量gl_FragColor
  ' gl_FragColor = texture2D(u_Sampler,v_TexCoord);\n' +
  '}\n';

```
实例中的片元着色器部分，通过uniform sampler2D u_Sampler; 语句声明了取样器变量u_Sampler,唯一可以传给该取样器的就是纹理单元编号，而且只能使用WebGL中的gl.uniform1i()传值，传值过程如下：
```
//获取片元着色器uniform变量u_Sampler的存储地址
var u_Sampler = gl.getUniformLocation(gl.program, 'u_Sampler');

//纹理单元编号传给片元着色器中uniform变量u_Sampler
gl.uniform1i(u_Sampler, 0);

```