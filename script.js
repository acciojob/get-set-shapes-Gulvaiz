class Rectangle {
     constructor(width,height){
          this._width = width
          this._height = height
     }

     get width(){
          return `${this._width}`
     }

     get height(){
          return `${this._height}`
     }

     getArea() {
          const area = `${this._width}` * `${this.height}`
     }
}

class Square extends Animal {
     constructor(side){
          this._side = side
     }

     getPerimeter(){
          const perimeter = 4 * `${this._side}`
     }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;