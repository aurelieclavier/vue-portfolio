<template>
    <canvas id="c" @mousemove="OnMouseMove"></canvas>
</template>

<script>
import Circle from '../classes/Circle'
export default {
  name: 'AnimatedBackground',
  props: {
    num: Number,
    maxRadius: Number,
    colors: Array
  },
  data () {
    return {
      circles: null,
      mouse: {
        x: null,
        y: null
      },
      // maxRadius: 30,
      canvas: ''
    }
  },
  methods: {
    animate: function () {
      requestAnimationFrame(this.animate)
      this.ctx.clearRect(0, 0, innerWidth, innerHeight)
      this.circles.forEach(function (circle) {
        circle.update()
      })
    },
    OnMouseMove: function (e) {
      this.mouse.x = e.x
      this.mouse.y = e.y
    }
  },
  mounted () {
    this.canvas = document.querySelector('#c')
    this.ctx = this.canvas.getContext('2d')
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    var circle = new Circle(this.mouse.x, this.mouse.y, 0, 0, 5, this.colors, this.canvas, this.ctx, this.mouse)
    this.circles = circle.init()
    this.animate()
    var that = this
    window.addEventListener('resize', function (event) {
      that.canvas.width = window.innerWidth
      that.canvas.height = window.innerHeight
      var circle = new Circle(that.mouse.x, that.mouse.y, 0, 0, 5, that.colors, that.canvas, that.ctx, that.mouse)
      that.circles = circle.init()
    })
  }
}
</script>
