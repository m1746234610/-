//** 入口文件
import './style/index.less' // 引入css样式
import GameControl from './modules/GameControl';

let gameControl = new GameControl()
  gameControl.init()
// setInterval(() => {
//   console.log(gameControl.direction);
// }, 1000)
