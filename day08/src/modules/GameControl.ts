// 引入其他类
import { Food } from "./Food";
import ScoreCard from "./ScoreCard";
import Snake from "./Snake";

// 游戏控制器，控制其他所有的类
export default class GameControl {
  // 先定义三个属性，属性类型为对应的类
  snake: Snake
  food: Food
  scoreCard: ScoreCard

  // 创建一个属性，用来存储蛇移动的方向
  direction: string = ''

  // 创建一个变量，用来判断游戏是否结束
  isLive: boolean = true

  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scoreCard = new ScoreCard(10, 5)
  }

  // 游戏初始化，调用后表示游戏开始
  init() {
    // 1.绑定键盘按下的事件
    document.addEventListener('keydown', this.keyDownHandle.bind(this))

    this.run()
  }

  // 创建一个键盘按下的相应函数
  keyDownHandle(e: KeyboardEvent) {
    // 检查方向键是否正确
    if (e.key === 'ArrowUp' || e.key === 'Up' || e.key === 'ArrowRight' || e.key === 'Right' || e.key === 'ArrowDown' || e.key === 'Down' || e.key === 'ArrowLeft' || e.key === 'Left') {
      // 当蛇有身体后才不能掉头
      if (this.snake.bodies[1]) {
        // 储存方向值
        if (this.direction === 'ArrowUp' && e.key === 'ArrowDown') {
          this.direction = 'ArrowUp'
        } else if (this.direction === 'ArrowRight' && e.key === 'ArrowLeft') {
          this.direction = 'ArrowRight'
        } else if (this.direction === 'ArrowDown' && e.key === 'ArrowUp') {
          this.direction = 'ArrowDown'
        } else if (this.direction === 'ArrowLeft' && e.key === 'ArrowRight') {
          this.direction = 'ArrowLeft'
        } else {
          this.direction = e.key
        }
      } else {
        this.direction = e.key
      }
    }

    // console.log(e.key, this.direction);

    /* 
      ArrowUp Up
      ArrowRight Right
      ArrowDown Down
      ArrowLeft Left
    */
  }

  // 创建一个蛇移动的方法
  run() {
    /*
      根据方向(this.dirction)来移动蛇
          向上 top减少
          向下 top增加
          向左 left减少
          向右 left增加
     */

    // 获取蛇当前的坐标
    let X = this.snake.X
    let Y = this.snake.Y

    // 计算X、Y
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        Y -= 10
        break
      case 'ArrowDown':
      case 'Down':
        Y += 10;
        break
      case 'ArrowLeft':
      case 'Left':
        X -= 10;
        break
      case 'ArrowRight':
      case 'Right':
        X += 10;
        break
    }

    // 在这里进行异常捕获(可以捕获所有抛出来的异常)
    try { // 没有异常，进入这里
      // 修改蛇的x、y
      this.snake.X = X
      this.snake.Y = Y
    } catch (e) { // 捕获到异常后，进入这里
      // 对异常进行捕获后，程序不会停止运行

      alert('你输了，GAME OVER!!!')
      this.isLive = false
    }

    // 吃到食物
    this.checkEat(X, Y)

    //* 开启定时调用 通过递归的方式让蛇不停的移动，因为用的是setTimeout，不会出现内存溢出
    let num = 300 - (this.scoreCard.level - 1) * 30

    // 如果isLive为true，就执行后面的定时器，否则不执行
    this.isLive && setTimeout(this.run.bind(this), num);
    // this.isLive === true ? setTimeout(this.run.bind(this), num) : alert('游戏结束')
  }

  // 创建一个方法用来检查蛇是否吃到了食物
  checkEat(X: number, Y: number) {
    if (this.food.X === X && this.food.Y === Y) {
      // 如果蛇的新坐标跟食物的坐标一样，说明吃到了食物
      this.food.change()
      // 增加分数
      this.scoreCard.addScore()
      // 增加蛇的身体
      this.snake.addBody()
    }
  }

}