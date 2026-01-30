function Circle(r) {
  this.radius = r;
  // this.loc = { x: 10, y: 20 };

  // PRIVATE variable (chỉ sử dụng ở Circle)
  let loc = { x: 0, y: 0 };

  //   this.computeLoc = function () {};

  // PRIVATE method (chỉ sử dụng ở Circle)
  //   let computeLoc = function () {};
  //   function computeLoc() {}
  let computeLoc = () => {};

  this.draw = function () {
    this.computeLoc();
    console.log("Circle completed!");
  };

  // Private method để tính diện tích circle
  // r**2 * PI
  this.circleArea = () => {
    return console.log(this.radius ** 2 * Math.PI);
  };
}

const c = new Circle(4);
