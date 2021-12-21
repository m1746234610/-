// 定义记分牌
export default class ScoreCard {
  // 记录分数和等级
  score = 0
  level = 1

  // 分数和等级所在的元素，在这里或构造函数中初始化
  scoreEle: HTMLElement = document.querySelector('#score')!
  levelEle: HTMLElement = document.querySelector('#level')!

  // 设置一个变量限制等级
  maxLevel: number
  // 设置一个升级数量
  upScore: number

  //* es6语法，如果传参了，就用传的参数，否则就用默认值10
  constructor(maxLevel: number = 10, upScore: number = 10) {
    // this.scoreEle = document.querySelector('#score')!
    // this.levelEle = document.querySelector('#level')!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }


  // 设置加分的方法
  addScore() {
    this.scoreEle.innerHTML = ++this.score + ''

    // 判断当前分数
    if (this.score % this.upScore === 0) { // 每10分升一级
      this.addLevel()
    }
  }

  // 提升等级的方法
  addLevel() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + ''
    }
  }
}

// 测试代码
// const score = new ScoreCard()
// for (let i = 0; i < 200; i++) {
//   score.addScore()
// }
