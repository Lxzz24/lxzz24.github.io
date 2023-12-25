# overflow
本节能学到的知识:

overflow的基本特性表现，overflow与滚动条千丝万缕的瓜葛，overflow在清除浮动以及自适应布局中的应用，overflow与绝对定位之间的暧昧关系，依赖overflow的一些CSS样式表现，以及overflow与锚点技术。

## 基本属性

1. visible ( 默认 )
2. hidden 
3. scroll （出现滚动条）
4. auto (自动出现滚动条)
5. inherit

### overflow-x 和 overflow-y (IE8+)
当两个值不一样的时候，其中一个=visible，那么会被强制赋值成auto

### 作用的前提

1. 非水平 `display:inline`
2. 对应方位的尺寸限制 width/height/max-width/max-height/absolute拉伸
3. 对于单元格`td`等，还需要table为`table-layout:fixed`状态才行

## overflow 与 滚动条

### 滚动条出现的条件

1. overflow:auto/scroll ; `<html><textarea>` 自带滚动条
2. 内容尺寸超出了容器的限制

### body/html 与滚动条

无论什么浏览器，默认滚动条均来自html标签，而不是body标签。
**原因：**新建一个空白的HTML页面，body默认`.5em`margin值，如果滚动条出现在body上，那么滚动条与浏览器边缘则会有间距

所以如果我们想要取出页面默认滚动条，只需要
```css
html{ overflow: hidden;}
```

### body/html 与滚动条 - js与滚动高度

* chrome浏览器是： `document.body.scrollTop`
* 其他浏览器是：`document.documentElement.scrollTop`

目前，两者不会同时存在，因为，坊间流传这类写法：
```javascript
// 因为必然有一个为0，但是应该很容易出错吧。会出现undefined吧？ 用 || 双或 来代替+号更好
var st = document.body.scrollTop + document.documentElement.scrollTop
```

### overflow的padding-bottom缺失现象

```css
.box { width:400px; height:100px; overflow:auto; padding:100px 0 }
```
以上代码在chrome浏览器中能得到想要的效果，其他浏览器中，上下padding=100px的效果消失了

导致：不一样的scrollHeight(元素内容高度)

### 滚动条的宽度机制

一句话：滚动条会占用容器的可用宽度或高度

怎么计算滚动条的宽度呢？
```html
  <div class="box">
    <div id="in" class="in"></div>
  </div>
```
```css
  .box {
    width 400px
    height  400px
    overflow scroll
    .in {*zoom:1 /* for ie7*/}
  }
```
```javascript
// 结果是17
console.log(400 - document.getElementById('in').clientWidth)
```

结果：ie7/chrome/fireFox 宽度应该都是17

### overflow:auto的潜在布局隐患

因为有滚动条出现占用宽度，那么在这类布局下，就有可能会出现直接崩溃，布局错乱

### 水平居中跳动问题
```css
.container { width:1150px; margin: 0 auto;}
```
这类布局在自己的使用中也是出现滚动条一出现，内容就往左跳动

那怎么修复呢？有以下几点

1. 让页面一开始就显示垂直滚动条
  ```css
  html { overflow-y:scroll; }
  ```
2. 动态宽度
```css
// ie9 +
// 100vw - 浏览器宽度； 100% - 可用内容宽度
// 自己测试在html上。内容貌似也没有怎么跳动了
.container{padding-left: calc(100vw - 100%);}
```

### 自定义滚动条-webkit内核

- 整体部分::-webkit-scrollbar 
- 两端按钮::-webkit-scrollbar-button
- 外层轨道::-webkit-scrollbar-track 
- 内层轨道::-webkit-scrollbar-track-piece 
- 滚动滑块::-webkit-scrollbar-thumb 
- 边角::-webkit-scrollbar-corner 


经过尝试，只能修改容器的滚动条样式，浏览器的没有作用。
直接把这个放在css中就可以了。但是要有滚动条出现才有效果。
且只要定义了-webkit-scrollbar，那么下面都要定义，不然滚动条就会消失，应该是把自定义默认的都给重置未无了吧。
```css
  ::-webkit-scrollbar { /*血槽宽度*/
    width 8px;   // 控制垂直滚动条宽度
    height 8px; // 控制水平高度
  }
  ::-webkit-scrollbar-track { /*背景槽*/
    background-color #dd
    border-radius 6px
  }
  ::-webkit-scrollbar-thumb { /*拖动条*/
    background-color: rgba(0, 0, 0, .3)
    border-radius 6px
  }

```

### ie滚动条自定义

看介绍说 太丑太丑，自定义都太丑，就不贴代码了，反正自己也只学习ie10+的浏览器。

jquery滚动条自定义插件：
https://github.com/malihu/malihu-custom-scrollbar-plugin

### ios 原生滚动回调效果
-webkit-overflow-scrolling:touch

哈哈。不知道这个是怎么用的。没有尝试出来

------------------

## overflow与BFC
清除浮动、自适应布局等

**什么是BFC?**

  Block formatting context : 块级格式化上下文 ；
  页面之结界，内部元素再怎么翻云覆雨都不会影响外部。
  
**以下熟悉会触发bFC:**

1. auto
2. scroll
3. hidden
  
**一般有以下几点应用：**

 1. 清除浮动影响
 2. 避免margin穿透问题
 3. 两栏自适应布局 
  
### 内部浮动无影响 ie7+
内部浮动元素。只要被父级元素增加 bfc 效果，则会清除浮动影响.

```css
.clearfix {overflow:hidden;_zoom;1}
上面的代码在一些情况下，会隐藏一些元素？个人经验太少，没有发现

下面的是广为流传的：
.clearfix:after {content:'';display:table;clear:both;}
```

### 避免margin穿透问题
什么叫argin穿透？
一个图片设置了margin，但是背景颜色没有平铺到margin的区域

### 是不是所有的BFC属性都有如此表现？
是的，但是由于自身特性，具体的表现不一：

1. overflow:hidden ; 自适应，旦“溢出不可见”限制应用场景
2. float + float ； 包裹性 + 破坏性，无法自适应，块状浮动布局
3. position:absolutr; 脱离文档流，自娱自乐
4. display:inline-block；包裹性，无法自适应
5. display:table-cell; 包裹性，但天生无溢出特性，绝对宽度页能自适应


### 两栏自适应布局
```css
.right {
        display table-cell
      width 2000px
}
```

--------------

## overflow 与绝对定位
隐藏失效与滚动固定

当容器使用 overflow 的时候，内部元素如果使用绝对定位，则会失效，不会被剪裁。

**失效原因：**
绝对定位元素不总是被父级overflow属性剪裁，尤其当overflow在绝对定位元素及包含块之间的时候。

什么是包含块：含`position:relative/absolute/fixed`声明的父级元素，没有则body元素


**如何避免失效**

1. overflow 元素自身为包含块
2. overflow 元素的子元素为包含块
3. 任意合法 transform 声明当做包含块（IE9+和fireFox）

--------------

## 依赖overflow的样式表现

### 跪舔css3：resize拉伸

* resize：both 水平垂直两边拉
* resize：horizontal 只有水平方向拉
* resize：vertical 只有垂直方向拉

但是，要想此声明起作用，元素的overflow属性值態是visible

这里的拉伸指：出现一个标识，可以让用户拖动改变元素的宽高。就如同文本域一样

### 跪舔css3：ellipsis文字溢出点点点省略

texttext-overflow:ellipsis  顾名思义，文本溢出省略号表示
必须要元素声明是：overflow:hidden 才有效果

--------------

## overflow与锚点技术

锚点：地址栏中 #xxx 的就是锚链也是hash值。对应锚点，元素中id=#xxx

### 锚点定位的本质？
就是滚床单（改变容器的滚动高度）。从某一个地方滚动到对应的锚点处

1. 容器可滚动
2. 锚点元素在容器内

### 锚点定位的触发

1. url地址中的锚链与锚点元素
2. 可focus的锚点元素处于focus

### 锚点定位的作用

1. 快速定位
2. 锚点定位与overflow选项卡技术（太影响体验）


