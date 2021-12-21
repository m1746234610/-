// 定义food类
export class Food {
  // 定义一个属性表示食物所对应的元素
  element: HTMLElement;
  constructor() {
    // 获取页面中的food元素，并赋给this.element
    // !: 表示this.element不会为空
    this.element = document.getElementById('food')!;
  }

  // 定义一个获取食物X轴坐标的方法
  get X() {
    return this.element.offsetLeft
  }

  // 定义一个获取食物Y轴坐标的方法
  get Y() {
    return this.element.offsetTop
  }

  // 修改食物位置的方法
  change() {
    // 生成一个随机数
    // 食物的位置在0~290之间
    // 蛇移动一次是一格，一格的大小是10px，所以食物的坐标只能被10整除的数字

    this.element.style.top = Math.floor(Math.random() * 30) * 10 + 'px'
    this.element.style.left = Math.floor(Math.random() * 30) * 10 + 'px'
  }
}

// 测试代码
// const food = new Food()
// console.log(food.X, food.Y);
// food.change()
// console.log(food.X, food.Y);

// export default Food