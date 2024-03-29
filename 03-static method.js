class Square {
    constructor(_width) {
        this.width = _width;
        this.height = _width;
    }

    static equals(a, b) {
        return a.width * a.height === b.width * b.height;
    }


    static isValidDimensions(width, height) {
        return width === height;
    }
}
let square1 = new Square(8);
let square2 = new Square(8);

// console.log(Square.equals(square1, square2));


console.log(Square.isValidDimensions(7, 6));

