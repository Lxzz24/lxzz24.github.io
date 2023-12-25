# line-height
本节能学到的知识：

line-height的定义、line-height与行内框盒子模型、line-height的高度机理、line-height的各类属性值、line-height与图片的表现，以及实际应用经验分享


**行高，两行文字基线之间的距离**

1. 什么是基线？ 上中学的时候写英文字母对齐的那种就是基线
2. 为何是基线？ 基线是定义任何线的根本
3. 需要两行吗？ 两行的定义已经决定了一行的表现

下图是微软雅黑的字母基线示意图。字体不同基线的位置可能不同。
红色之间的距离就是基线
![](assets/line_height/baseline与line-height.png)

如果定义 `line-height:200px`,那么第二行文字的基线将距离第一行文字的基线200px处

**为何line-height可以让单行文本垂直居中？**

真的垂直居中了么？
只有字体大小为0（使用图片演示）的时候才是垂直居中，否则就是有偏差的

具体是为什么，请看下面的章节
----------------

## line-height与行内框盒子模型

行内框盒子模型：css进阶必备知识

所有内联元素的样式表现都与行内框盒子模型有关！例如浮动的图文环绕效果...

```html
<p>普通文字，这里有个<em>em</em>标签</p>
```
上面的代码包含了4种盒子：

1. 内容区域（content area）：是一种围绕文字看不见的盒子，盒子大小与 `font-size`大小相关

    大神理解：选中文字出现的蓝色背景应该就是这个盒子
2. 内联盒子（inline boxes）：不会让内容块显示，而是排成一行。如果外部含`inline`水平的标签(span,a,em等)，则属于内联盒子。如果是个光秃秃的文字，则属于 匿名内联盒子

3. 行框盒子（line boxes）：每一行就是一个 行框盒子。每个行框盒子又是由一个一个内联盒子组成

4. 包含盒子(containing box) ：p标签所在的位置，此盒子由一行一行的行框盒子组成。（把p标签围起来的区域）


----

## 行高的高度机理

深入理解内联元素的高度表现
```html
<p>普通文字，这里有个<em>em</em>标签</p>

可以用js获取上面p标签的高=> clientheight
```
### p元素的高度从何而来呢？
不是由文字撑开而来的。是line-height撑开的；

内联元素的高度由line-height决定

1. 行高由于其继承性，影响无处不在，即使单行文本也不列外
2. 行高只是幕后黑手，高度的表现**不是行高**，而是内**容区域和行间距**

只不过正好：内容区域高度 + 行间距 = 行高
只不过正好：content area + vertical spacing = line-height

### 内容区域

1. 内容区域高度只与 **字号** 以及 **字体** 有关系，与line-height没有任何关系
2. 在simsun字体下，内容区域高度等于文字大小值

    font-size + 行间距 = line-height

### 行间距
```css
font-size:240px
line-height:360px
则行间距 = 360px - 240px = 120px
```

行间距上下拆分，就有了 “半行间距”


### 小结
行高决定内联盒子高度；
行间距墙头草，
可大可小（甚至负值）,
保证高度正好等于行高

**如果行宽盒子里面有多个不同行高的内联盒子？**

大多数答案：由行高最高的盒子决定
```html
<p>普通文字，这里有个<em>em</em>标签</p>

em{
    line-height:80px;
    vertical-align:40px // 这个效果是 em标签在基线往上偏移40px
}

所以这里由于偏移了，p的高度不再是80了，而是98px
```

含多个行框盒子的包含容器：多行文本的高度就是单行文本高度累加


若行框盒子里面混入inline-block水平元素（如图片），高度如何表现呢？

------


## line-height 各类属性值
深入理解line-height不同类别值的不同表现

### line-height 支持属性值

1. normal
2. `<number>`
3. `<length>`
4. `<percent>`
5. inherit


1. **normal :**
    默认属性值，跟着用户的浏览器走，且与元素字体关联
    normal值 = 字体像素 / 100;

2. **number:**
    使用数值作为行高，如`line-height:1.5`;
    根据当前元素的font-size大小计算，假设文字大小=20px，则实际的行高像素值是：
    line-height = 1.5 *20px = 30px

3. **length**
    使用具体长度值作为行高值。如：
    ```css
    line-height:1.5em
    line-height:1.5rem
    line-height:20px;
    line-height:20pt;
    
    ```
4. **percent**
    使用百分比作为行高值。例如`line-height:150%`.
    相对于设置了该`line-height`属性的元素的`font-size`大小计算  
    假设文字大小是20px,则实际的行高像素值是：
    line-height = 150% * 20px = 30px
5. inherit
    行高继承。ie8+
    ```css
    input{line-height:inherit;}
    ```
    input 框等元素默认行高是normal，使用inherit可以让文本框样式可控性更强
    
   
**下面集合有什么区别?**
```css
line-height:1.5
line-height:1.5rem
line-height:1.5em;
```
计算无差别。应用元素有差别

* line-height:1.5 ：所有可继承元素根据font-size重计算行高
* line-height:150%、1.5em 当前元素根据font-size计算行高，继承给下面的元素（所有的子元素不会重新按照自己的font-size计算）

![](assets/line_height/行高应用元素的差别.png)

右边的文字容器（父级元素）的font-size = 24px;所以子元素（文字）按照父级的font-size来计算行高的

### body全局数值行高使用经验
```css
body{ font-size:14px; line-height:?}
```

博客类：1.5 以上，方便阅读
应用类：匹配20像素，方便心算
line-height = 20px/14px 约等于1.42857  (在谷歌浏览器下等于19px)

所以最后使用：1.4286
```css
body{ font-size:14px; line-height:1.4286}
body{ font-size:14px/1.4286; 'microsoft yahei'} // 缩写


```


## line-height 与图片的表现
深入探讨行高和图片的样式表现

**行高会不会影响图片实际占据的高度？**
答：不会！影响的是其他的高度

```html
     <div class="item1">
       <img src="~@/assets/pic.jpg"/>
       <span>xxxx</span>
     </div>
```
```css
  .item1{
    background-color antiquewhite
    line-height 90px
    img{
      height 200px
    }
    span{
      display inline-block  // 内联块装化，就能看到行高了
      background-color royalblue
    }
  }
```
这个示例可以看出来。行高影响的是其他内容的高度。因为需要基线对齐，所以会造成图片所在的容器变高了。（行高大于一定范围）


### 隐匿文本节点
在absolute中讲到的一样，有隐匿的文本节点。会造成一定的间隙。

### 消除图片底部间隙的方法

1. 图片块状话 - 无基线对齐
    ```css
    display:block;
    ```
2. 图片底线对齐
    ```css
    img{vertical-align:bottom}
    ```    
3. 行高足够小 - 基线位置上移
    ```css
    .box{ line-height : 0}
    ```    
    
### 小图片和大文字
小图标和大文字排版在一起的情况
基本上高度受行高控制。
剩下的就是图文的 垂直对齐了：`vertical-align`

----

## 行高的实际应用
### 大小不固定的图片，多行文字垂直居中

**图片垂直居中：近似垂直； IE8+**
```html
    <div class="item2">
      <img src="~@/assets/pic.jpg"/>
    </div>
```
```css
  .item2 {
    margin-top 10px
    background-color antiquewhite
    line-height 300px
    text-align center
    img {
      height 200px // 这里可以随意改变图片大小
      vertical-align middle // 基线网上1/2X高度
    }
  }
```

**多行文本的垂直居中 IE8+**
```html
    <div class="item3">
     <p>多行文本水平居中实现的原理跟上一页图片的实现是一样的，区别在于要把多行文本所在的容器的
      display水平转成和图片一样的，也就是inline-block,
      以及重置外部继承的 text-align和line-height属性值</p>
    </div>
```
```css
  .item3 {
    margin-top 10px // 和这个无关
    line-height 250px
    background-color antiquewhite
    text-align center
    p{
      display inline-block
      line-height normal
      text-align left
      vertical-align middle
    }
  }
```
这个题目的限定：父级元素用行高把内容区域撑高了。

这里的原理就是：把文字所在元素块装化，然后重置块化内的行高，最后让块状化元素middle



