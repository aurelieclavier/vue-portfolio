export default class Circle {
    circles
    num = 400
    maxRadius = 50
    constructor(x, y, dx, dy, radius, color, canvas, ctx, mouse) {
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.radius = radius
        this.minRadius = radius
        this.color = color
        this.canvas = canvas
        this.ctx = ctx
        this.mouse = mouse
    }
    init() {
        this.circles = []
        for (let i = 0; i < this.num; i++) {
            let radius = Math.random() * 4 + 1
            let x = Math.random() * (innerWidth - radius * 2) + this.radius
            let y = Math.random() * (innerHeight - radius * 2) + this.radius
            let dx = (Math.random() - 0.5)
            let dy = (Math.random() - 0.5)
            let color = this.color[Math.floor(Math.random() * this.color.length)]
            this.circles.push(new Circle(x, y, dx, dy, radius, color, this.canvas, this.ctx, this.mouse))
        }
        return this.circles
    }
    resize() {
        if (this.canvas) {
            this.canvas.width = window.innerWidth
            this.canvas.height = window.innerHeight
        }
        this.init()
    }
    draw() {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.ctx.fillStyle = this.color
        this.ctx.fill()
    }
    update() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
        this.x += this.dx
        this.y += this.dy
        // interactive with mouse events
        if (this.mouse.x - this.x < 50 && this.mouse.x - this.x > -50 && this.mouse.y - this.y < 50 && this.mouse.y - this.y > -50) {
            if (this.radius < this.maxRadius) {
                this.radius += 1
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1
        }
        this.draw()
    }
}
