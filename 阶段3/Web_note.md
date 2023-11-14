# Web 学习笔记

## Html

### Html 简介

HTML（HyperText Markup Language）是一种标记语言,用于创建和呈现网页的结构.HTML允许开发者定义文档的各个部分,如标题,段落,链接,图像等,以及这些部分之间的关系.HTML是构建Web页面的基础,它提供了一种结构化的方式来表示信息并在Web浏览器中呈现.

### Html常见标签及用法

1. **`<!DOCTYPE html>`**

   用途声明 HTML 文档的类型和版本.

2. **`<html>`**

   用途定义 HTML 文档的根元素.

3. **`<head>`**

   用途包含有关文档的元信息,如标题,字符集和引用的样式表等.

4. **`<title>`**

   用途定义网页的标题,显示在浏览器标签栏中.

5. **`<body>`**

   用途包含文档的主体内容,如文本,图像,链接等.

6. **`<h1>` to `<h6>`**

   用途定义标题,<h1> 是最高级别,<h6> 是最低级别.

7. **`<p>`**

   用途定义段落.

8. **`<a>`**

   用途定义超链接,可用于链接到其他页面或资源.

9. **`<img>`**

   用途插入图像.

10. **`<div>`**

    用途定义文档中的分区或节,常用于布局.

11. **`<span>`**

    用途定义文本的行内容器,常用于样式调整.

12. **`<br>`**

    用途在文本中插入换行符.

13. **`<hr>`**

    用途插入水平线,用于分隔内容.

14. **`<strong> <em>`**

    `<strong>` 用途定义强调文本,通常以粗体显示.

    `<em>` 用途定义强调文本,通常以斜体显示.

15. **`<input>`**

    用途创建表单输入字段,如文本框,复选框等.

### 块级元素

#### 块级元素特点

每个块级元素会新起一行并占据父级元素的整个宽度,可以设置其宽度,高度,内边距,外边距等属性

#### 常见的块级元素

1. `<div>` 用于组织页面结构,常用于容器
2. `<p>` 定义段落
3. `<h>` 标题,分级别表示不同的标题大小
4. `<form>` 定义表单
5. `<ul>`,`<ol>`,`<li> `无序列表和有序列表
6. `<table> `定义表格

### 内联元素

#### 内联元素特点

内联元素通常不会导致新的行开始,其宽度只有包含的内容宽度.内联元素不能设置宽度,高度,以及上下外边距

#### 常见的内联元素

1. `<span>` 用于对文本进行分组或设置样式
2. `<a> `定义超链接
3. `<strong>` 定义强调文本,通常以粗体显示
4. `<em> `定义强调文本,通常以斜体显示
5. `<img> `用于插入图像

### Html标签的样式

在 HTML 中,标签本身并不直接定义样式,但可以通过 CSS 来为 HTML 标签添加样式

#### Html标签样式设置方法

##### 使用内联样式

通过` <style> `属性直接在 Html 元素中定义样式 

> <p style="color: blue; font-size: 20px;">这是一个蓝色字体,字体大小为20像素的段落.</p>

##### 使用内部样式表

> ```html
> <head>
>   <style>
>     p {
>       color: blue;
>       font-size: 20px;
>     }
>   </style>
> </head>
> <body>
>   <p>这是一个蓝色字体,字体大小为20像素的段落.</p>
> </body>
> ```

##### 使用外部样式表

> <head>  <link rel="stylesheet" type="text/css" href="styles.css"> </head>

## CSS

### CSS简介

CSS（Cascading Style Sheets）是一种用于描述文档样式（如字体,颜色,间距等）的样式表语言.它与HTML（Hypertext Markup Language）结合使用,用于控制网页的布局和外观.CSS的基本思想是通过选择器选取HTML文档中的元素,然后为这些元素定义样式.

### CSS作用

简单来说,CSS的作用是为HTML文档添加样式,控制网页的外观和布局.它用于定义字体、颜色、间距、背景等,使得网页看起来更漂亮、有层次感,并提高用户体验.CSS的主要目标是将内容和样式分离,使得开发者能够更灵活、方便地管理和修改网页的外观.

### CSS选择器

##### CSS 选择器简介 

CSS选择器用于选择需要样式化的HTML元素.选择器指定了样式规则将应用于文档中的哪些元素

##### 常见的 CSS 选择器

###### 元素选择器

- 通过元素的名称选择元素

###### 类选择器

- 通过元素的 class 属性选择元素

###### ID 选择器

- 通过元素的 id 属性选择唯一的元素

###### 子元素选择器

- 选择元素的直接子元素

###### 通用选择器

- 选择所有元素

### CSS设置样式

#### 宽度和高度（`Width` 和 `Height`）

> ```
> div {  
> 	width: 200px;  height: 100px; 
> }
> ```

#### 文本颜色（`Color`）

> ```
> div {  
> 	color: red; 
> }
> ```

#### 背景颜色（`Background-color`）

> ```
> div {
>   background-color: #f0f0f0;
> }
> ```

#### 字体大小（`Font-size`）

> ```
> div {
>   font-size: 24px;
> }
> ```

#### 字体样式（`Font-style`）

> ```
> div {
>   font-style: italic;
> }
> ```

#### 文字对齐（`Text-align`）

> ```
> div {
>   text-align: center;
> }
> ```

### CSS盒模型

#### CSS盒模型简介

CSS 盒模型是一种用于描述文档中元素布局的概念，它将每个元素看作是一个矩形的盒子，包括内容区域、内边距、边框和外边距。这四个部分组成了一个完整的盒子，影响元素在页面中的大小和定位。

#### 主要组成

> 由内而外排序

##### 内容区域（Content）

- 包含元素的实际内容，例如文本、图像等。它的大小可以通过设置 `width` 和 `height` 属性来调整

##### 内边距（Padding）

- 是内容区域与边框之间的空白区域，可以通过设置 `padding` 属性来调整。内边距为盒子的周围增加了空白区域

##### 边框（Border）

- 是包围内容和内边距的线条，可以通过设置 `border` 属性来调整。边框定义了盒子的可见边界。

##### 外边距（Margin）

- 是盒子与相邻元素之间的空白区域，可以通过设置 `margin` 属性来调整。外边距为盒子周围创建了空白区域。

> CSS 盒模型的默认情况下，`width` 和 `height` 属性定义的是内容区域的宽度和高度，而总宽度和总高度则包括了内边距、边框和外边距。这就是为什么设置一个元素的宽度和高度并不总是让它在页面上呈现的大小相同的原因。如果需要让宽度和高度包含内边距、边框和外边距，可以使用 `box-sizing` 属性。 
>
> 让 width 和 height 包括内边距,边框和外边距 box-sizing: border-box

### CSS中 position 定位

#### 简介

在 CSS 中，`position` 属性用于控制元素的定位方式。有五种常用的 `position` 属性值

#### Static（默认值）

- `position: static;`
- 元素在正常文档流中的位置，不受 top、right、bottom、left 属性的影响，也无法通过 `z-index` 进行层叠。

#### **Relative（**相对定位**）**

- `position: relative;`
- 元素相对于其正常位置进行定位，通过设置 `top`、`right`、`bottom`、`left` 属性来调整元素的位置。相对定位不会使元素脱离文档流，仍占据原有空间。

#### Absolute（绝对定位）

- `position: absolute;`
- 元素相对于其最近的非 static 祖先元素进行定位，如果没有非 static 定位的祖先元素，则相对于初始包含块（通常是 `<html>` 元素）。绝对定位会使元素脱离文档流，不占据原有空间。

#### **Fixed（**固定定位**）**

- `position: fixed;`
- 元素相对于视口（浏览器窗口）进行定位，即使页面滚动，元素位置也不会改变。固定定位同样使元素脱离文档流，不占据原有空间。

#### **Sticky（**粘性定位**）**

- `position: sticky;`
- 元素根据用户滚动的位置进行定位。当元素在视口范围内时，表现为相对定位；当元素滚出视口时，表现为固定定位。粘性定位在某个阈值满足时切换定位方式，需要通过设置 `top`、`right`、`bottom`、`left` 来确定阈值。



### CSS布局方式

#### 流动布局（Flow Layout）

- 默认的布局方式，元素按照其在 HTML 中出现的顺序在文档流中排列，遇到块级元素则换行。

#### 浮动布局（Float Layout）

- 使用 `float` 属性将元素浮动到左侧或右侧，其他内容围绕浮动元素。常用于实现多列布局。

> ```
> cssCopy code.left {
>   float: left;
> }
> 
> .right {
>   float: right;
> }
> ```

#### 弹性盒子布局（Flexbox Layout）

- 使用弹性容器和弹性项目的概念，使得容器内的项目能够更灵活地伸缩和对齐。

> ```
> cssCopy code.container {
>   display: flex;
>   justify-content: space-between;
> }
> ```

#### 栅格布局（Grid Layout）

- 使用网格布局系统，将页面划分为行和列，通过定义网格线和放置项目来实现复杂的布局。

> ```
> cssCopy code.container {
>   display: grid;
>   grid-template-columns: 1fr 1fr 1fr;
>   grid-gap: 10px;
> }
> ```

#### 定位布局（Positioning Layout）

- 使用 `position` 属性来定位元素，包括相对定位（`relative`）、绝对定位（`absolute`）、固定定位（`fixed`）等。

> ```
> cssCopy code.absolute {
>   position: absolute;
>   top: 20px;
>   left: 30px;
> }
> ```

### CSS伪类

#### 简介

CSS 伪类（Pseudo-classes）用于向选择器添加特殊的效果。它们允许你选择不在文档树中的元素或选择文档树中的元素的特殊状态

#### 常见CSS伪类

##### :hover

- 当用户将鼠标悬停在元素上时应用样式。

> ```
> cssCopy codea:hover {
>   color: red;
> }
> ```
>

##### :active

- 当用户点击并按住鼠标按钮时应用样式。

> ```
> cssCopy codebutton:active {
>   background-color: yellow;
> }
> ```
>

##### :focus

- 当元素获得焦点时应用样式，通常用于表单元素。

> ```
> cssCopy codeinput:focus {
>   border: 2px solid blue;
> }
> ```
>

##### :visited

- 选择用户已访问的链接，用于修改已访问链接的样式。

> ```
> cssCopy codea:visited {
>   color: purple;
> }
> ```
>

##### :nth-child(n)

- 选择父元素下的第 n 个子元素，n 是一个整数。

> ```
> cssCopy codeli:nth-child(odd) {
>   background-color: #f2f2f2;
> }
> ```
>

##### :nth-of-type(n)

- 选择父元素下相同类型的第 n 个子元素。

> ```
> cssCopy codep:nth-of-type(3) {
>   font-weight: bold;
> }
> ```
>

##### :first-child

- 选择父元素下的第一个子元素。

> ```
> cssCopy codediv p:first-child {
>   color: green;
> }
> ```
>

##### :last-child

- 选择父元素下的最后一个子元素。

> ```
> cssCopy codeul li:last-child {
>   border-bottom: 1px solid black;
> }
> ```
>

##### :nth-last-child(n)

- 选择父元素下的倒数第 n 个子元素。

> ```
> cssCopy codediv p:nth-last-child(2) {
>   text-decoration: underline;
> }
> ```

### JavaScript

#### 简介

JavaScript（JS）是一种高级、解释性的编程语言，通常用于在Web浏览器中实现交互式的客户端脚本。JavaScript是一门多范式的语言，支持面向对象、命令式和函数式编程风格

#### 基本语法

##### 变量声明

`var` 为全局变量声明,`let`声明变量可改变变量的值,`const`声明常量不可改变值

```
var value = 9; // 使用 var 关键字声明变量
let value = 9; // 使用 let 关键字声明变量
const value = 9; // 使用 const 关键字声明常量
```

##### 数据类型

数值型,字符串型,数组型,对象型,空值,未定义型,布尔型

数值型用于运算,记录数据

数组索引从0开始,每个位置不止能放数值型,也能放其他类型的数据

布尔型用于逻辑运算

空值为布尔型的 **false**

对象定义规则为一个 **key** 对应一个 **value** , **value** 可为数值,字符,函数等

未定义型为布尔型的 **false**

> ```
> 数值类型
> 9 
> 字符串类型
> "value"
> 布尔类型
> true 
> 数组类型
> [value1, value2, value3] 
> 对象类型
> { key1: "value",key2: value, key3: func() } 
> 空值
> null 
> 未定义
> undefined 
> ```

##### 运算符

大体和c语言中一样

##### 函数

> ```
> function name(parameter){
> 
> };
> ```

##### 控制结构

###### 条件语句

大体`if` `else` 用法与c语言一样

> ```
> if (布尔型) {
> 
> } else if {};
> ```

###### 循环语句

`for` 循环和 `while` 循环和c语言大体一样

> ```
> for (初始化一个变量;条件;控制变量){
> 
> };
> while(条件){
> 
> }
> ```



## Web三件套之间的关系

简单来说 Html 负责页面的整体框架搭建,负责结构层次,用标记将各个元素分到确定的位置,核心地位.

CSS负责页面的美化,美化字体颜色,样式,各个板块间的间距,渲染页面,起到美工作用,结合与 Html 中的元素以及其 id 或者 class 起作用.

JavaScript 负责用户与页面的交互,能够操作 Html 以及 CSS,使得页面并不始终是一个静态页面,增加了页面的交互性,结合 Html 与 CSS一起协作.





##### 