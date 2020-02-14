import React, { Component } from 'react'

export default class componentName extends Component {
  componentDidMount(){
    let path="./2.jpg"//正确的图片路径为./1.jpg，现在的路径是错误的
    const preloadImage = function (path) {
      return new Promise(function (resolve, reject) {
        var image = new Image()//创建一个Image对象定义Image对象的 src:a.src="xxx.gif" 这样做就相当于给浏览器缓存了一张图片
        console.log(image)
        image.onload  = resolve//绑定成功状态
        image.onerror = reject//绑定失败状态
        image.src = path//进行路径src赋值
      })
    }
    preloadImage(path)//执行这个函数
    //当路径为错误的时候会进行捕捉错误状态，当路径为正确的时候没有报错反应
    // console.log(preloadImage())
  }
  render() {
    return (
      <div className="App">
        
    </div>
    )
  }
}
