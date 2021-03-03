class Shape {
    constructor(color) {
        this.color = color;
    }
    getArea() {

    }
}

class Rectangle extends Shape {
    constructor(color, height, width) {
        super(color);
        this.height = height;
        this.width = width;
    }
    getArea() {

    }
}

class Triagnle extends Shape {
    constructor(color, base, height) {
        super(color);
        this.base = base;
        this.height = height;
    }
    getArea() {

    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius;
    }
    getArea() {

    }
}
