// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2 {
    constructor(attributes){
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    };
    volume(){
        return this.length * this.width * this.height;
    };
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
};

class CubeMaker extends CuboidMaker2 {
    constructor(attributes){
        super(attributes);
        this.edge = attributes.edge;
    };
    volume2(){
        return this.edge * this.edge * this.edge;
    };
    surfaceArea2(){
        return 6 * (this.edge * this.edge);
    };
};

const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5,
});

const cube1 = new CubeMaker({
    length: 8,
    width: 8,
    height: 8,
    edge: 8,
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

console.log(cube1.volume2());
console.log(cube1.surfaceArea2());