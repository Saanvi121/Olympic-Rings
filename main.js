var canvas=document.getElementById("myCanvas")
var ctx=canvas.getContext("2d")

ctx.beginPath()
ctx.strokeStyle="blue"
ctx.lineWidth=5
ctx.arc(290,230,40,0,360)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="black"
ctx.lineWidth=5
ctx.arc(390,230,40,0,360)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="red"
ctx.lineWidth=5
ctx.arc(490,230,40,0,360)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="yellow"
ctx.lineWidth=5
ctx.arc(340,270,40,0,360)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="green"
ctx.lineWidth=5
ctx.arc(440,270,40,0,360)
ctx.stroke()