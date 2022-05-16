(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{661:function(t,a,s){"use strict";s.r(a);var n=s(10),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"浏览器合成和页面优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器合成和页面优化"}},[t._v("#")]),t._v(" 浏览器合成和页面优化")]),t._v(" "),s("p",[s("strong",[t._v("浏览器渲染引擎处理过程")])]),t._v(" "),s("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://cdn.jsdelivr.net/gh/FrancisSaber/image/markdown-Image202204071548607.webp",alt:"img"}}),t._v(" "),s("ol",[s("li",[t._v("接收到文档后，浏览器先对文档进行编码格式转化。")]),t._v(" "),s("li",[t._v("渲染引擎（浏览器内核）会对HTML文档进行解析成DOM树，对CSS文件解析成CSSOM（CSS对象模型）（CSS和DOM的解析是并行，不会会相互阻塞）")]),t._v(" "),s("li",[t._v("遍历DOM树，级联计算CSSOM生成渲染树 （对于"),s("code",[t._v("display")]),t._v("为"),s("code",[t._v("none")]),t._v("或"),s("code",[t._v("head")]),t._v("等的元素不会出现在渲染树）")]),t._v(" "),s("li",[t._v("浏览器根据渲染树需求进行布局（计算每个元素在页面的具体位置和几何大小）")]),t._v(" "),s("li",[t._v("布局计算后会开始进行绘制\n"),s("ol",[s("li",[t._v("每个元素节点对应一个渲染对象，渲染对象保持着渲染树的结构，对于处在同一个z轴坐标空间的渲染对象属于同一个渲染层，为了保持渲染对象之间正确的层叠关系会形成图像层")]),t._v(" "),s("li",[t._v("每个图形层都有自己的图形上下文，通过绘制页面像素信息存入共享内存，最后通过GPU绘制在屏幕上")])])])]),t._v(" "),s("h3",{attrs:{id:"gpu加速"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gpu加速"}},[t._v("#")]),t._v(" GPU加速")]),t._v(" "),s("p",[t._v("某些情况下，一些元素会被单独提升为一个合成层，具有自己的图形上下文。（会开启GPU渲染也就是硬件加速）")]),t._v(" "),s("p",[t._v("如：opacity、transform、canvas、")]),t._v(" "),s("p",[t._v("对于SVG，由于并不是标准的DOM元素，Chrome并不能支持SVG元素的硬件加速，即使设置了transform、will-change等属性，单个的SVG元素也不能作为单独的层进行绘制。")]),t._v(" "),s("h3",{attrs:{id:"重绘和回流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重绘和回流"}},[t._v("#")]),t._v(" 重绘和回流")]),t._v(" "),s("h4",{attrs:{id:"dom树和render树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom树和render树"}},[t._v("#")]),t._v(" DOM树和Render树")]),t._v(" "),s("p",[t._v("重新绘画上色。一个页面加载到完成。首先是构建DOM树，然后根据DOM节点的几何属性形成render树（渲染树），当渲染树构建完成，页面开始根据DOM树进行布局，渲染树根据设置的样式进行渲染上色等操作。")]),t._v(" "),s("h4",{attrs:{id:"回流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回流"}},[t._v("#")]),t._v(" 回流")]),t._v(" "),s("p",[s("font",{attrs:{color:"orange"}},[t._v("当对一个DOM节点的进行删除或者增加节点、修改节点时，DOM树结构也就发生了改变，因此页面也发生了变化，需要根据DOM树重新生成渲染树，渲染树重新渲染页面，这个过程就叫回流。")])],1),t._v(" "),s("h4",{attrs:{id:"重绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重绘"}},[t._v("#")]),t._v(" 重绘")]),t._v(" "),s("p",[s("font",{attrs:{color:"orange"}},[t._v("如果只是改变一个节点的颜色，是不会影响到DOM树结构的，页面只需重新渲染，这就是重绘。")])],1),t._v(" "),s("h4",{attrs:{id:"相关知识点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关知识点"}},[t._v("#")]),t._v(" 相关知识点")]),t._v(" "),s("ol",[s("li",[t._v("因为"),s("code",[t._v("display")]),t._v("为none的元素在页面不需要渲染，因此不会出现在DOM树中，但是"),s("code",[t._v("visibility")]),t._v("为hidden的会出现在DOM树中，因为display为none会脱离文档流，而"),s("code",[t._v("visibility")]),t._v("为hidden虽然看不到，类似于透明度0，但仍会有渲染过程。")]),t._v(" "),s("li",[t._v("不使用table布局的原因是因为每一列td的宽度会以最大的td宽为标准，当下面的td大于上面已经渲染的时，页面会重流以最大td的为标准重新计算宽度，很耗费性能。")])]),t._v(" "),s("h4",{attrs:{id:"减少回流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少回流"}},[t._v("#")]),t._v(" 减少回流")]),t._v(" "),s("ol",[s("li",[t._v("如果要修改会造成DOM重新渲染的样式，定在同一个class类中，这样只会进行一次回流。")]),t._v(" "),s("li")]),t._v(" "),s("h3",{attrs:{id:"doucumentfragment对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doucumentfragment对象"}},[t._v("#")]),t._v(" DoucumentFragment对象")]),t._v(" "),s("p",[s("font",{attrs:{color:"orange"}},[t._v("DocumentFragment 接口表示文档的一部分（或一段）。更确切地说，"),s("u",[t._v("它表示一个或多个邻接的 Document 节点和它们的所有子孙节点。")]),t._v(" DocumentFragment 节点不属于文档树，继承的 parentNode 属性总是 null。 不过它有一种特殊的行为，该行为使得它非常有用，即当请求把一个 DocumentFragment 节点插入文档树时，插入的不是 DocumentFragment 自身，而是它的所有子孙节点。")]),t._v("这使得 "),s("font",{attrs:{color:"pink"}},[t._v("DocumentFragment 成了有用的占位符，暂时存放那些一次插入文档的节点。")]),t._v("它还有利于实现文档的剪切、复制和粘贴操作，尤其是与 Range 接口一起使用时更是如此。可以用 "),s("code",[t._v("Document.createDocumentFragment()")]),t._v(" 方法创建新的空 "),s("code",[t._v("DocumentFragment")]),t._v(" 节点。")],1),t._v(" "),s("p",[t._v("DocumentFragment 节点不属于DOM树，因此它的变化不会引起DOM树的变化；")]),t._v(" "),s("p",[t._v("我们知道，DOM树的操作会引起回流，那我们可以将DocumentFragment作为一个暂时的DOM节点存储器，当我们在DocumentFragment 修改完成时，我们就可以将存储DOM节点的DocumentFragment一次性加入DOM树，从而减少回流次数，达到性能优化的目的")]),t._v(" "),s("p",[t._v("优点：用于解决大量的回流问题，如要给"),s("code",[t._v("ul")]),t._v("标签添加5个"),s("code",[t._v("li")]),t._v("节点，可以一次性插入，只需回流一次")]),t._v(" "),s("p",[t._v("区别如下")]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://cdn.jsdelivr.net/gh/FrancisSaber/image/markdown-Image%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211120220512.gif",alt:"微信图片_20211120220512"}}),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://cdn.jsdelivr.net/gh/FrancisSaber/image/markdown-Image%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211120220452.gif",alt:"微信图片_20211120220452"}}),t._v(" "),s("h4",{attrs:{id:"用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fragment "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDocumentFragment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fragment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//null")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fragment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//#document-fragment")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fragment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//11")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("通过创建一个fragment，临时存储想要创建的标签节点，再在需要插入时，将该fragment插入就行。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#list"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fragment  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDocumentFragment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfragment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChildren")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'li'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\nlist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChildren")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fragment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//一次性插入100个li标签，只需回流一次")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"文档流概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档流概念"}},[t._v("#")]),t._v(" 文档流概念")]),t._v(" "),s("p",[t._v("即从上到下、从左到右的HTML排版")]),t._v(" "),s("div",{staticClass:"language-HTML line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tt1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" beige"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blueviolet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("当给第一个div设置浮动时，第一个div会脱离文档流，于是第二个和第三个div便会上移，如果第一个和第二个div大小相同，第二个div便会便第一个div覆盖而隐藏。设置 absolute 也会使div目标脱离文档流。效果如下")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FrancisSaber/image/markdown-Imageimage-20211120222743617.png",alt:"image-20211120222743617"}})]),t._v(" "),s("ul",[s("li",[t._v("形象的比喻，当设置了浮动或者absolute属性，div就浮在水上了，没有设置的就在水底，它们不在同一个水平面上，因此不会挤压彼此，但是浮动的在上可能会覆盖下的。")]),t._v(" "),s("li",[t._v("如果都设置了浮动属性，便会占据水上的空间，可能造成如下两种效果")]),t._v(" "),s("li",[s("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://cdn.jsdelivr.net/gh/FrancisSaber/image/markdown-Imageimage-20211120223424330.png",alt:"image-20211120223424330"}})]),t._v(" "),s("li",[t._v("如果父元素没有设置高度，可能因为子元素设置了浮动导致高度为0的问题")]),t._v(" "),s("li",[s("strong",[t._v("浮动的定义：")]),t._v(" 非IE浏览器下，"),s("font",{attrs:{color:"orange"}},[t._v("容器不设高度且子元素浮动时，容器高度不能被内容撑开。 此时，内容会溢出到容器外面而影响布局。这种现象被称为浮动（溢出）")])],1)]),t._v(" "),s("h4",{attrs:{id:"解决浮动的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决浮动的方法"}},[t._v("#")]),t._v(" 解决浮动的方法")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("额外标签")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tt1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tt2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" beige"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tt3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blueviolet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" both"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FrancisSaber/image/markdown-Imageimage-20211120225549359.png",alt:"image-20211120225549359"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FrancisSaber/image/markdown-Imageimage-20211120225604327.png",alt:"image-20211120225604327"}}),t._v("\n加和不加的效果如上")])]),t._v(" "),s("li",[s("p",[t._v("通过触发BLC规则")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".father{\n            border: 1px solid pink;\n            overflow: hidden;\n        }\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FrancisSaber/image/markdown-Imageimage-20211120225858146.png",alt:"image-20211120225858146"}})])]),t._v(" "),s("li",[s("p",[t._v("通过伪类 after")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('.clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/\n    content: "";\n    display: block;\n    height: 0;\n    clear:both;\n    visibility: hidden;\n}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);