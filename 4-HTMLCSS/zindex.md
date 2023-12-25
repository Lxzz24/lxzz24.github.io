# z-index

本节能学到的知识：

1. 深入理解嵌套表现及z-index的计算规则；
2. 详细介绍元素层叠表现、顺序及CSS的一些属性对层叠上下文的作用；
3. 分享z-index相关事件经验。

## z-index 基础

了解z-index的语法，支持的属性值等

> ** 含义** :
>     z-index属性指定了元素及其子元素的“z顺序”，而z顺序可以决定当元素发生覆盖的时候，哪个元素在上面。通常一个较大z-index值的元素会覆盖较低的那一个


支持的属性值：

1. auto； 默认值
2. `<integer>` 数值
3. inherit; 继承

基本特性：

1. 支持负值
2. 支持css3 animation动画
3. 在css2.1时代，需要和定位元素配合使用

如果不考虑css3，只有定位元素（position：relative/absolute/fixed/sticky）的z-index才有作用，在css3中有例外

---

## z-index 与css定位属性
嵌套表现以及z-index计算规则

**z-index 只对定位元素有响应**

如果定位元素z-index没有发生嵌套：

1. 后来居上的准则
2. 哪个大，哪个上

如果定位元素z-index发生嵌套：

1. 祖先优先原则（非 auto，只能是数值。）

    > ** CSS2.1:z-index:auto **
    当前层叠上下文的生成盒子层叠水平是0.盒子（除非是根元素）不会创建一个新的层叠上下文

---

## 理解CSS中的层叠上下文和层叠水平
元素层叠表现基础且重要的概念    

> **层叠上下文（stacking context）**
是HTML元素中的一个三维概念，表示元素在z轴上有了“可以高人一等。”

具有层叠上下文的元素有：

* 页面根元素天生具有层叠上下问，称之为“根层叠上下文”
* z-index值为数值的定位元素也具有层叠上下文
* 其他属性

> **层叠水平（stacking level）**
层叠上下文中的每个元素都有一个层叠水平，决定了同一个层叠上下文中元素在z轴上的显示顺序。
>
> 遵循“后来居上”和“谁大谁上”的层叠准则

特性：

* 层叠上下文可以嵌套，组合成一个分层次的层叠上下文
* 每个层叠上下文和兄弟元素独立：当进行层叠变化或渲染的时候，只需要考虑后代元素。
* 每个层叠上下文是自成体系的：当元素的内容被层叠后，整个元素被认为是在父层的层叠顺序中。

---

## 理解层叠顺序 - stacking order

> 元素发生层叠时候有着特定的垂直显示顺序

著名的7阶层叠水平（stacking level）
![](assets/zindex/著名的7阶层叠水平.png)

1. 层叠顺序的意义

    规范元素重叠时候的呈现规则
2. 为何层叠顺序是这样的？

    比如float元素不是应该更屌一点，为什么inline元素还在float元素上呢？     
    因为：更符合页面加载的功能和视觉呈现
![](assets/zindex/为何内容元素比float元素高.png)


![](assets/zindex/内容元素比float元素层叠水平高.png)
```html
    <div class="item1">
      <img src="~@/assets/demo-java.jpg"/>
      以前浮动课程就讲过，浮动原本设计的作用是实现文章环绕图片的效果。
      如果图片和文字发生重叠，显然，是后面的文字要优先显示的，因为，文字比让图片重要。
      就像这里，我就放一个美女图片，你再有洪荒之力也猜不到我想表达的内容吧，嘿嘿
    </div>
```
```css
  .item1{
    img {
      float left
      margin-right -30px   // 浮动后右移，和文字重叠
    }
  }
```
![](assets/zindex/层叠水平内容高示例2.png)

文字是内联元素，在7阶层叠水平中，内联元素和inline-block是平级，所以是后来居上

---

## z-index与层叠上下文
解释z-index的实际行为表现

1. 定位元素默认z-index：auto 可以看成是z-index：0
2. z-index不为auto的定位元素会创建层叠上下文
3. z-index层叠顺序的比较止步于父级层叠上下文


为何定位元素要覆盖普通元素？
在7阶层叠水平表中，z-index:auto高于水平盒子

从层叠顺序上讲，z-index:auto可以看成z-index:0;
但是从层叠上下文来讲，两者却有着本质差异！


这章节最重要的是，要学会看为什么一些z-index底的元素反而在上面，最最重要的要去套7阶层叠水平图的规范。只要一套，基本上就懂了，还有边框和背景色，内容之分，所以要注意

---

## 其他css属性与层叠上下文
介绍其他也会创建层叠上下文的css属性

1. z-index 值不为auto的flex项（父元素display:flex|inline-flex）
2. 元素的opacity值不是1
3. 元素的transform值不是none
4. 元素mix-blend-mode值不是normal
5. 元素的filter值不是none
6. 元素的isolation值是isolate
7. postion:fixed声明 （chrome等blink/webkit内核浏览器）
8. will-change指定的属性值为上面任意一个
9. 元素的-webkit-overflow-scrolling设为touch 

---

## z-index 与其他css属性层叠上下文
非定位元素层叠上下文和z-index关系大揭秘

1. 不支持z-index的层叠上下文元素的层叠顺序均是z-index:auto级别

![](assets/zindex/更完整的7阶层叠水平.png)

2. 依赖z-index的层叠上下文元素的层叠顺序取决于z-index值
  
   依赖z-index值创建层叠上下文的情况：
   1. position值为relative/absolute或fixed
   2. display:flex|inline-flex容器的子flex项
   
层叠上下文导致的有趣的现象
![](assets/zindex/层叠上下文的有趣的例子.png)
```html
 <div class="item2">
      <div class="box">
        <p>看什么看，还不赶快叫师娘</p>
        <img src="~@/assets/demo-java.jpg"/>
      </div>
    </div>
```   
```css
.item2{
    text-align center
    img{
      animation:fadein 3s infinite;
    }
    .box{
      position relative
      display inline-block
    }
    p{
      position absolute
      bottom 2px
      left 0
      right 0
      color #fff
      font-size 15px
      line-height 2
      background rgba(1, 8, 5, 0.38)
    }
    @keyframes fadein{
      from{
        opacity 0
      }
      to{
        opacity 1
      }
    }
  }
```

上面的代码写了一个把文字叠加到图片上的一个效果，然后让图片的透明度从0变为1的一个动画效果。 实际的结果却出现了，连文字都被一起变成透明的了

这里为什么会照成这样的效果呢？
1. 元素的opacity值不是1，的时候会创建层叠上下文,且这里没有指定z-index，所以是 auto
2. 定位元素也会创建层叠上下文，且这里没有指定z-index，所以是  auto
3. 他们的层级是一样的权重，都是auto。后来居上，所以文字被覆盖掉了
4. （如果把dom顺序：p标签放到图片后面，效果则比较完美）因为层叠水平是一样的，后来居上嘛。可以尝试修改下z-index的值，就能验证了

---

## 实践分享

1. 最小化影响原则
2. 不犯二准则
3. 组件层级计数器
4. 可访问性隐藏

### 最小化影响原则
** 目的：**避免z-index嵌套层叠关系混乱
** 原因：**

 1. 元素的层叠水平主要由所在的层叠上下文决定
 2. ie7 z-index:auto也会新建层叠上下文
 
** 做法 **

 1. 避免使用定位属性
 2. 定位属性从大容器平级分离为私有小容器
 
### 不犯二准则
** 目的： ** 避免z-index混乱，一山比一山高的样式问题
** 原因： ** 多人协作以及后期维护
** 做法： ** 对于非浮层元素，避免设置z-index值，z-index值没有任何道理需要超过2 ------ 不犯二准则

### 组件层级计数器
** 目的： ** 避免浮层组件因z-index被覆盖的问题
** 原因： ** 

1. 总会遇到意想不到的高层级元素
2. 组件的覆盖规则具有动态性

  比如弹框，后面弹出来的覆盖前面的弹框。

** 做法： ** 组件层级计数器方法 ；通过JS获得body下子元素的最大z-index值

### 负值与可访问性隐藏
** 可访问性隐藏： ** 人肉眼不可见，但是辅助设备可以识别（比如把文字设置left为负数-999，人烟看不见了，但是屏幕阅读器能看到）

z-index负值元素在层叠上下文的背景之上，其他元素之下

利用这种特性我们实现一个小示例
![](assets/zindex/利用可访问隐藏特性制作好看的按钮.png)
```html
<div class="item3">
      <h3>原始按钮</h3>
      <form>
        <input required/>
        <input type="submit">
      </form>
      <h3>帅气按钮</h3>
      <form>
        <input required/>
        <input type="submit" id="submit">
        <label for="submit">提交</label>
      </form>
    </div>
```
```css
  .item3{
    [type=submit]{
      position absolute
      z-index -1
    }
    label{
      background #0f5499
      padding 10px
      color #fff
    }
  }
```
原始的按钮比较丑陋，用自定义标签然后使用 for指向id，for的标签就有指向的功能了，但是我们要利用"可访问性隐藏"特性来把原始按钮隐藏，这里的隐藏不是看不见，就必须第一个按钮，在我们的css里面也把第一个原始按钮也作用上了，能看到但是点击不了，所以在第二帅气按钮里面，只要我们把 新的lable元素增加背景色就能把原始的按钮挡住了。

当然在不考虑低版本的浏览器的时候，直接把原始按钮display：none，也能有效果
 
 
 
 