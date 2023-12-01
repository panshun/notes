## C#概述



### 一、概述

C#（读作“C sharp”）是一种新式编程语言，不仅面向对象还类型安全。开发人员利用C#可以生成在.NET中运行的多种安全可靠的应用程序。C#源于C语言系列，C、C++、Java和Javas开发人员可以很快的上手使用。

C#是面向对象的，面向组件的开发语言，C#提供了语言构造来直接支持这些概念,让C#成为一种非常自然的语言、可以用于创建和使用软件组件、自诞生之日起，C#就添加了支持新工作负载和新兴软件设计实践功能，C#本质上是面向对象的语言，你需要定义类型及其行为。



### .NET体系结构

C#运行在.NET上，而.NET是名为公共语言运行时（CLR）的虚拟执行系统和一组类库，CLR是微软对公共语言基础结构（CLI）国际标准的实现。CLI是创建执行和开发环境的基础、语言和库可以在其中无缝地协同工作。

用C#编写的源代码被编译成符合CLI规范的中间语言（IL），IL代码和资源（如位图和字符串）存储在扩展名位.dll的程序集中，程序集包含了一个介绍程序集类型、版本和区域性的清单。

执行C#程序时，程序集将加载到CLR，CLR会直接执行（JIT）编译，将IL代码转换成本机指令，CLR可提供其他与自动垃圾回收、异常处理和资源管理相关的服务。CLR执行的代码有时称为“托管代码“。而”非托管代码“被编译成面向特定平台的本机语言。

语言互操作性是.NET的一项重要功能。C#编译器生成的IL代码符合公共类型规范（CTS）。通过C#生成的IL代码可以与通过.NET版本的F#、Visual Basic\C++生成的代码进行交互。还有20多种与CTS兼容的语言。单个程序集可包含多个用不同.net语言编写的模块。这些类型可以互相引用，就像他们是用同一种语言编写的一样。

除了运行时服务之外，.NET还包含大量库。这些库支持多种不同的工作负载，他们已经整理到命名空间中，这些命名空间提供各种实用功能，这些功能包括文件输入输出、字符串控制、XML分析、web应用程序框架和window窗体控件。典型的C#应用程序广泛使用.net类库处理常见的”管道“零碎工作。

### .NET 框架（.NET Framework）

.net 框架是一个创新的平台，能帮助编写出来一下类型的应用程序：

- window应用程序
- web应用程序
- web服务

.net 框架应用程序时多平台应用。框架的设计方式使得它适用于下列的各种语言：C#、C++、VB等等。所有的这些语言都可以访问框架，彼此之间也可以相互交互。.net框架由一个巨大的代码库组成，用于C#等客户端语言。下面时一些.net 框架的组件：

- 公共语言运行库（CLR）
- .Net框架类库
- 公共语言规范
- 通用类型系统
- 元数据和组件
- window窗体
- ASP.Net
- ADO.Net
- 等等

### C#程序结构

一个C#程序主要包括以下部分：

- 命名空间声明（Namespace declaration）
- 一个class
- class方法
- calss 属性
- 一个Main方法
- 语句（statement）和表达式（Expression）
- 注释

以“Hellow World” 为例：

```c#
using System;
namespace HelloWorldApplication{
    calss HelloWorld{
        static void Main(string[] args){
            // 我的第一个程序
            Console.WriteLine("Hello World");
            Console.ReadKey();
	}
 }
}
```

程序拆解：

- 第一行using System：using 关键字用于引用在程序中包含System命名空间。一个程序有多个System
- 第二行namespace：声明了一个HelloWorldApplication的命名空间，一个命名空间下包含一系列的类
- 第三行class ：声明一个HellowWorld类，类一般包含多个方法，方法定义了类的行为。
- 第四行 static viod ：声明了一个静态、无返回值的Main 方法，Main方法是所有C#程序的入口点。
- 第五行：程序语句，Console是在System命名空间下的一个类，WriteLine是Console类下面的一个方法

### C#语言特点

- C#大小写敏感
- 所有的语句和表达式必须以分号（；）结尾
- 程序的执行从Main开始
- 与Java不同的是，C#的文件名称和类的名称可以不相同（Java的类和文件名不同则无法通过编译）

### 二、初识C#

### C#类结构解读

C#程序由一个或者多个文件组成，每个文件均包含零个或者多个命名空间，一个命名空间包含类、结构、接口、枚举、委托、等类型或其他命名空间，下面是包含这些元素的C#程序主干，在C#9之前入口是`Main`静态方法。

```C#
using System;
namespace YourNamespace
{
	// 类
	class YourClass
	{
	
	}
    // 结构
	struct YourStruct
	{
	
	}
    // 接口
    interface IYourInterface
    {
        
    }
    // 委托
    delegate int YourDelegate()
    // 枚举
    enum YourEnum
    {
        
    }
    // 其他命名空间
    namespace OtherNamespace
    {
        ...
    }
    class Program
    {
        // 静态main方法
        static void Main(string[] args)
        {
            Console.WriteLine('this program starts here')
        }
    }
}
```

C#9之后加入了顶级语法的写法：

```c#
using System;
// your program starts here
Console.WriteLine('your program starts here')
namespace YourNamespace
{
	// 类
	class YourClass
	{
	
	}
    // 结构
	struct YourStruct
	{
	
	}
    // 接口
    interface IYourInterface
    {
        
    }
    // 委托
    delegate int YourDelegate()
    // 枚举
    enum YourEnum
    {
        
    }
    // 其他命名空间
    namespace OtherNamespace
    {
        ...
    }
}
```

### C#基本语法

C#是面向对象的编程语言，在面向对象的程序设计中程序由各种互相交互的对象组成，相同种类的对象通常具有相同的类型，或者说，是在相同的calss中。

以Rectangle 为例，它具有length 和width属性，根据设计需要接受这些属性来计算面积或者其他值：

#### 语句

```c#
// 创建一个矩形对象
using System;
namespace RectangleAPP{
    // 创建一个矩形类
    calss Rectangle{
        // 成员变量
        double lenght;
        double width;
        public void AcceptDetail(){
            length = 4.5;
            width = 3.5; 
        }
        public double CalcArea() {
            return length * width;
		}
        public void Display(){
            Console.WriteLine("Length: {0}", length)
                 Console.WriteLine("Width: {0}", width)
                 Console.WriteLine("Area: {0}", CalcArea())
		}
        
    }
    class ExecuteRec{
        // 入口函数
        static void Main (string[],args){
            // 
            Rectangle r = new Rectangle();
            r.AcceptDetail();
            r.Displau();
            Console.ReadLine();
                
		}
	}
}
```

#### C#中的注释

- 单行注释

```C#
// 这是单行注释
```

- 多行注释

```c#
/*
	这是多行注释
*/
```

- 文本注释

```C#
///<summary>
///
///<summary>
```

#### 关键字

关键字是 C# 编译器预定义的保留字。这些关键字不能用作标识符，但是，如果您想使用这些关键字作为标识符，可以在关键字前面加上 **@ **字符作为前缀。

在 C# 中，有些标识符在代码的上下文中有特殊的意义，如 **get** 和 **set**，这些被称为上下文关键字（contextual keywords）。

下表列出了 C# 中的保留关键字（Reserved Keywords）和上下文关键字（Contextual Keywords）：

| **保留关键字** |           |          |            |                        |                       |         |
| -------------- | --------- | -------- | ---------- | ---------------------- | --------------------- | ------- |
| abstract       | as        | base     | bool       | break                  | byte                  | case    |
| catch          | char      | checked  | class      | const                  | continue              | decimal |
| default        | delegate  | do       | double     | else                   | enum                  | event   |
| explicit       | extern    | false    | finally    | fixed                  | float                 | for     |
| foreach        | goto      | if       | implicit   | in                     | in (generic modifier) | int     |
| interface      | internal  | is       | lock       | long                   | namespace             | new     |
| null           | object    | operator | out        | out (generic modifier) | override              | params  |
| private        | protected | public   | readonly   | ref                    | return                | sbyte   |
| sealed         | short     | sizeof   | stackalloc | static                 | string                | struct  |
| switch         | this      | throw    | true       | try                    | typeof                | uint    |
| ulong          | unchecked | unsafe   | ushort     | using                  | virtual               | void    |
| volatile       | while     |          |            |                        |                       |         |

|                  |        |           |            |         |         |                |
| ---------------- | ------ | --------- | ---------- | ------- | ------- | -------------- |
| **上下文关键字** |        |           |            |         |         |                |
| add              | alias  | ascending | descending | dynamic | from    | get            |
| global           | group  | into      | join       | let     | orderby | partial (type) |
| partial (method) | remove | select    | set        |         |         |                |

#### 标识符

标识符是用来识别类、变量、函数或任何其它用户定义的项目。在 C# 中，类的命名必须遵循如下基本规则：

- **标识符必须以字母开头，后面可以跟一系列的字母、数字（ 0 - 9 ）或下划线（ _ ）。标识符中的第一个字符不能是数字。**
- **标识符必须不包含任何嵌入的空格或符号，比如 ? - +! @ # % ^ & * ( ) [ ] { } . ; : " ' / \。但是，可以使用下划线（ _ ）。**
- **标识符不能是 C# 关键字。**

#### 成员变量

变量是类的属性或数据成员，用于存储数据。在上面的程序中，**Rectangle** 类有两个成员变量，名为 **length** 和 **width**。

#### 成员函数

函数是一系列执行指定任务的语句。类的成员函数是在类内声明的。我们举例的类 **Rectangle** 包含了三个成员函数： `AcceptDetails`、`CalcArea `和 `Display`。



#### 类的实例化

在上面的程序中，类 **ExecuteRectangle** 是一个包含 `Main() ` 方法和实例化 **Rectangle** 类的类。

**C# 类的实例化**：通过已有的类（class）创建出该类的一个对象（object），这一过程就叫做类的实例化。

**举个例子：**你设计了一个汽车模型，交给工人师傅去加工制作，生产出一辆（一批）汽车。汽车模型就相当于程序中的类，生产出来的汽车就是对象，生产汽车这一过程就叫做类的实例化。



### C#数据类型

在 C# 中，变量分为以下几种类型：

- 值类型（Value types）
- 引用类型（Reference types）
- 指针类型（Pointer types）

#### 值类型（Value types）

值类型变量可以直接分配给一个值。它们是从类 **System.ValueType** 中派生的。

值类型直接包含数据。比如 **int、char、float**，它们分别存储数字、字母、浮点数。当您声明一个 **int** 类型时，系统分配内存来存储值。

下表列出了 C# 2010 中可用的值类型：

| 类型    | 描述                                 | 范围                                                  | 默认值 |
| :------ | :----------------------------------- | :---------------------------------------------------- | :----- |
| bool    | 布尔值                               | True 或 False                                         | False  |
| byte    | 8 位无符号整数                       | 0 到 255                                              | 0      |
| char    | 16 位 Unicode 字符                   | U +0000 到 U +ffff                                    | ''     |
| decimal | 128 位精确的十进制值，28-29 有效位数 | (-7.9 x 1028 到 7.9 x 1028) / 100 到 28               | 0.0M   |
| double  | 64 位双精度浮点型                    | (+/-)5.0 x 10-324 到 (+/-)1.7 x 10308                 | 0.0D   |
| float   | 32 位单精度浮点型                    | -3.4 x 1038 到 + 3.4 x 1038                           | 0.0F   |
| int     | 32 位有符号整数类型                  | -2,147,483,648 到 2,147,483,647                       | 0      |
| long    | 64 位有符号整数类型                  | -923,372,036,854,775,808 到 9,223,372,036,854,775,807 | 0L     |
| sbyte   | 8 位有符号整数类型                   | -128 到 127                                           | 0      |
| short   | 16 位有符号整数类型                  | -32,768 到 32,767                                     | 0      |
| uint    | 32 位无符号整数类型                  | 0 到 4,294,967,295                                    | 0      |
| ulong   | 64 位无符号整数类型                  | 0 到 18,446,744,073,709,551,615                       | 0      |
| ushort  | 16 位无符号整数类型                  | 0 到 65,535                                           | 0      |

#### 引用类型（Reference types）

引用类型不包含存储在变量中的实际数据，但它们包含对变量的引用。

换句话说，它们指的是一个内存位置。使用多个变量时，引用类型可以指向一个内存位置。如果内存位置的数据是由一个变量改变的，其他变量会自动反映这种值的变化。**内置的** 引用类型有：**object**、**dynamic** 和 **string**。

#### 对象（Object）类型

**对象（Object）类型** 是 C# 通用类型系统（Common Type System - CTS）中所有数据类型的终极基类。Object 是 **System.Object** 类的别名。所以对象（Object）类型可以被分配任何其他类型（值类型、引用类型、预定义类型或用户自定义类型）的值。但是，在分配值之前，需要先进行类型转换。

当一个值类型转换为对象类型时，则被称为 **装箱**；另一方面，当一个对象类型转换为值类型时，则被称为 **拆箱**。

```
object obj;
obj = 100; // 这是装箱
```

#### 知识点补充：关于装箱和拆箱

装箱：值类型转换为对象类型，示例：

```
int val = 8;
object obj = val;//整型数据转换为了对象类型（装箱）
```

拆箱：之前由值类型转换而来的对象类型再转回值类型，例子：

```
int val = 8;
object obj = val;//先装箱
int nval = （int）obj;//再拆箱
```

注意：只有装过箱的数据才能拆箱。

#### 动态（Dynamic）类型

您可以存储任何类型的值在动态数据类型变量中。这些变量的类型检查是在运行时发生的。

声明动态类型的语法：

```
dynamic <variable_name> = value;
```

例如：

```
dynamic d = 20;
```

动态类型与对象类型相似，但是对象类型变量的类型检查是在编译时发生的，而动态类型变量的类型检查是在运行时发生的。

#### 字符串（String）类型

**字符串（String）类型** 允许您给变量分配任何字符串值。字符串（String）类型是 System.String 类的别名。它是从对象（Object）类型派生的。字符串（String）类型的值可以通过两种形式进行分配：引号和 @引号。

例如：

```
String str = "w3cschool.cn";
```

一个 @引号字符串：

```
@"w3cschool.cn";
```

C# string 字符串的前面可以加 @（称作"逐字字符串"）将转义字符（\）当作普通字符对待，比如：

```
string str = @"C:\Windows";
```

等价于：

```
string str = "C:\\Windows";
```

@ 字符串中可以任意换行，换行符及缩进空格都计算在字符串长度之内。

```
string str = @"<script type=""text/javascript"">
    <!--     -->
    </script>";
```

用户自定义引用类型有：**class**、**interface** 或 **delegate**。我们将在以后的章节中讨论这些类型。

#### 指针类型（Pointer types）

指针类型变量存储另一种类型的内存地址。C# 中的指针与 C 或 C++ 中的指针有相同的功能。

声明指针类型的语法：

```
type* identifier;
```

例如：

```
char* cptr;
int* iptr;
```

我们将在章节"[不安全的代码](https://www.w3cschool.cn/csharp/csharp-unsafe-codes.html)"中讨论指针类型。

### C#类型转换

类型转换从根本上说是类型铸造，或者说是吧数据从一种类型转换为另一种类型。在C#中类型转换有两种形式:

- **隐式类型转换**-是C#默认的以安全方式进行转换，例如，从小的整型（**int**）转换为大的整型（**long**），从派生类转换为基类。
- **显式类型转换**-这些转换是通过用户使用预先定义好的函数显式完成，需要强制转换运算符。

C# 提供了下列内置的类型转换方法：

| 序号 | 方法 & 描述                                                  |
| :--- | :----------------------------------------------------------- |
| 1    | **ToBoolean** 把类型转换为布尔型（如果可以转换的话）         |
| 2    | **ToByte** 把类型转换为字节类型。                            |
| 3    | **ToChar** 把类型转换为单个 Unicode 字符类型（如果可以转换的话） |
| 4    | **ToDateTime** 把类型（整数或字符串类型）转换为 日期-时间 结构。 |
| 5    | **ToDecimal** 把浮点型或整数类型转换为十进制类型。           |
| 6    | **ToDouble** 把类型转换为双精度浮点型。                      |
| 7    | **ToInt16** 把类型转换为 16 位整数类型。                     |
| 8    | **ToInt32** 把类型转换为 32 位整数类型。                     |
| 9    | **ToInt64** 把类型转换为 64 位整数类型。                     |
| 10   | **ToSbyte** 把类型转换为有符号字节类型。                     |
| 11   | **ToSingle** 把类型转换为小浮点数类型。                      |
| 12   | **ToString** 把类型转换为字符串类型。                        |
| 13   | **ToType** 把类型转换为指定类型。                            |
| 14   | **ToUInt16** 把类型转换为 16 位无符号整数类型。              |
| 15   | **ToUInt32** 把类型转换为 32 位无符号整数类型。              |
| 16   | **ToUInt64** 把类型转换为 64 位无符号整数类型。              |

类型之间的转换方法 - Convert 和 Parse

```C#
string locstr = 123.ToString();

//如果要将"locstr"转成整型数

//方法一: 用 Convert 
int i = Convert.ToInt16(locstr);

//方法二: 用 Parse
int ii = int.Parse(locstr);
```

### C#中的变量

在C#中，每个变量都有一个特定的类型，类型决定了变量的内存大小和布局，范围内的值可以存储在内存中，C#中提供的基本值类型可以大致分类一下几类：

| 类型       | 举例                                                       |
| :--------- | :--------------------------------------------------------- |
| 整数类型   | sbyte、byte、short、ushort、int、uint、long、ulong 和 char |
| 浮点型     | float 和 double                                            |
| 十进制类型 | decimal                                                    |
| 布尔类型   | true 或 false 值，指定的值                                 |
| 空类型     | 可为空值的数据类型                                         |

#### C#变量的定义

```
C#中变量定义的语法：
<data_type> <variable_list>
```

**data_type**必须是一个有效的C#数据类型，可以是char、int float、double或自定义的数据类型，**variable**可以由一个或者多个用逗号分隔的标识符名称组成。

例如：

```
init i,j,k;
char a, b, c;
float f;
double d;
```

