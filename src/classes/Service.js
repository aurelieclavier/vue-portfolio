export default class Service {
  previousWidth = 0
  // text = ""
  // title = ""
  // style = ""
  // textRect = ""
  // fontInitial = 0

  constructor(text, title, style) {
    this.text = text
    this.title = title
    this.style = style
    this.textRect = this.text.getBoundingClientRect()

    this.fontInitial = parseInt(this.style.substring(0, this.style.indexOf("p")))
  }

  fontResize(fontNumber) {
    var windowWidth = document.documentElement.clientWidth
    
    var fontSize
    
    if (this.textRect.width > windowWidth) {
      if (windowWidth > this.previousWidth) {
        fontSize = fontNumber + 3
      } else {
        fontSize = fontNumber - 3
      }
    } else {
      fontSize = this.fontInitial
    }
    this.previousWidth = windowWidth
    return fontSize
  }
}