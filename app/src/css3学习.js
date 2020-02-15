//transform

//旋转 div 元素

//css书写方式

// width: 200px;
// height: 100px;
// background - color: yellow;
// transform: rotate(2deg);旋转的程度

//属性

// none	定义不进行转换。
// matrix(n,n,n,n,n,n)	定义 2D 转换，使用六个值的矩阵。
// matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)	定义 3D 转换，使用 16 个值的 4x4 矩阵。
// translate(x,y)	定义 2D 转换。
// translate3d(x,y,z)	定义 3D 转换。
// translateX(x)	定义转换，只是用 X 轴的值。
// translateY(y)	定义转换，只是用 Y 轴的值。
// translateZ(z)	定义 3D 转换，只是用 Z 轴的值。
// scale(x[,y]?)	定义 2D 缩放转换。
// scale3d(x,y,z)	定义 3D 缩放转换。
// scaleX(x)	通过设置 X 轴的值来定义缩放转换。
// scaleY(y)	通过设置 Y 轴的值来定义缩放转换。
// scaleZ(z)	通过设置 Z 轴的值来定义 3D 缩放转换。
// rotate(angle)	定义 2D 旋转，在参数中规定角度。
// rotate3d(x,y,z,angle)	定义 3D 旋转。
// rotateX(angle)	定义沿着 X 轴的 3D 旋转。
// rotateY(angle)	定义沿着 Y 轴的 3D 旋转。
// rotateZ(angle)	定义沿着 Z 轴的 3D 旋转。
// skew(x-angle,y-angle)	定义沿着 X 和 Y 轴的 2D 倾斜转换。
// skewX(angle)	定义沿着 X 轴的 2D 倾斜转换。
// skewY(angle)	定义沿着 Y 轴的 2D 倾斜转换。
// perspective(n)	为 3D 转换元素定义透视视图。

//transion属性，过渡

// 上面提到的过渡效果的属性，有两个：一个是transition-porperty,一个是transition-duration,分别代表属性的名称和属性的过渡时间；

// 关于过渡效果，还有另外两个属性，一个是transion-timing-fuction,一个是transition-delay，分别代表属性的过渡效果和延时时间：

// 所谓过渡效果，指的是 当过渡发生时，从最初始的时候到最终的时候，经历的过程；一般来说有 5 种效果：分别是 linear,easy,easy-in,easy-out,easy-in-out

//anmitate属于js的方法实现动画的方法

// $(selector).animate(styles,options)
// styles	必需。规定产生动画效果的 CSS 样式和值（同上）。
// options	可选。规定动画的额外选项。
// speed - 设置动画的速度
// easing - 规定要使用的 easing 函数
// callback - 规定动画完成之后要执行的函数
// step - 规定动画的每一步完成之后要执行的函数
// queue - 布尔值。指示是否在效果队列中放置动画。如果为 false，则动画将立即开始
// specialEasing - 来自 styles 参数的一个或多个 CSS 属性的映射，以及它们的对应 easing 函数