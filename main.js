// 获取随机字符函数
function randomString(len){
  len = len || 5
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz2345678'
  let maxPos = chars.length
   var val = ''
    for(var i=0; i<len; i++){
      // charAt 返回字符串中的 某个位置的字符 传递的参数是 字符的位置数字
      // Math.random() 获取一个0~1 的数字，包括小数
      val += chars.charAt(Math.random()* maxPos)
    }
    return val
}
// 获取随机颜色函数
function randomColor(){
  var r = Math.floor(Math.random()*256)
  var g = Math.floor(Math.random()*256)
  var b = Math.floor(Math.random()*256)
  
  return "rgb(" + r + "," + g + "," + b+ ")"
}
console.log(randomColor())
// 获取 canvas 元素
const c = document.querySelector('#myCanvas')
// 获取随机字符
var varification = randomString()
// canvas 验证 填充函数
function cav(){
  // 随机验证码字符串
  varification= randomString()
  // 获取canvas的宽度
  const cxtwidth = c.offsetWidth
  // 获取canvas的高度
  const cxtheight = c.offsetHeight
  //创建画布
  const ctx = c.getContext('2d')
  // 重置画布
  ctx.clearRect(0,0,cxtwidth,cxtheight)
  // 字体颜色
  ctx.fillStyle = 'red'
  // 字体大小和字体类型
  ctx.font = '24px Arial'
  // 填充
  ctx.fillText(varification, 20, 30)
  // 验证码上显示线条
  for(var i=0; i<=5;i++){
    ctx.strokeStyle = randomColor()
    // 起始点
    ctx.beginPath()
    // 移动到指定位置，不创建路径
    ctx.moveTo(Math.random()*cxtwidth, Math.random()* cxtheight);
    //创建一个新的点
    ctx.lineTo(Math.random()*cxtwidth, Math.random()* cxtheight)
    // 填充
    ctx.stroke()
  }
  // 验证码上显示的小点
  for( var i=0;i<=30;i++){
    ctx.strokeStyle = randomColor()
    //起始点
    ctx.beginPath();

    let x= Math.random()* cxtwidth
    let y= Math.random()* cxtheight
    // 移动
    ctx.moveTo(x,y)
    ctx.lineTo(x+1,y+1)
    // 填充
    ctx.stroke()
  }
}
cav()
c.addEventListener('click', ()=>{
  // 重新调用
  cav()
})
// 获取按钮
var btn = document.querySelector('.btn')
var val = document.querySelector('#val')
btn.addEventListener('click', ()=>{
  console.log(val.value)
  console.log(varification)
  if(val.value !== varification) {
    alert('验证码不正确！')
    return 
  }
  alert('验证码正确！')
})