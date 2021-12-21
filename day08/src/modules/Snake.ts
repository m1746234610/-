export default class Snake {
  // 表示蛇头
  head: HTMLElement //* HTMLElement是一个元素
  // 表示蛇的身体（包括蛇头）
  bodies: HTMLCollection //* HTMLCollection是一个集合，它会实时刷新
  // 获取蛇的容器
  element: HTMLElement
  constructor() {
    // 这里获取snake元素中的第一个div
    this.head = document.querySelector('#snake>div')!
    //* as '类型': 断言，包括了'!'的功能
    // this.head = document.querySelector('#snake>div') as HTMLElement

    this.element = document.querySelector('#snake')!
    this.bodies = this.element.getElementsByTagName('div')

  }

  // 获取蛇头的X坐标
  get X() {
    return this.head.offsetLeft
  }

  // 获取蛇头的Y坐标
  get Y() {
    return this.head.offsetTop
  }

  // 设置初始坐标
  set X(value: number) {
    // 如果新值和旧值一样，直接返回，不在修改
    if (this.X === value) return

    if (value < 0 || value > 290) {
      // 在这里抛出一个错误，然后程序会结束
      throw new Error('你输了')
    }

    // 移动身体
    this.moveBody()

    this.head.style.left = value + 'px'
    this.checkHeadBody()
  }

  set Y(value: number) {
    // 如果新值和旧值一样，直接返回，不在修改
    if (this.Y === value) return

    if (value < 0 || value > 290) {
      // 在这里抛出一个错误，然后程序会结束
      throw new Error('你输了')
    }

    // 移动身体
    this.moveBody()

    this.head.style.top = value + 'px'
    this.checkHeadBody()
  }

  // 蛇增加身体的方法
  addBody() {
    // 向element中添加一格身体
    this.element.appendChild(document.createElement('div'));
    //* this.element.insertAdjacentHTML('beforeend',"<div></div>")
    (this.bodies[this.bodies.length - 1] as HTMLElement).style.display = 'none'
  }

  // 移动身体的方法
  moveBody() {
    (this.bodies[this.bodies.length - 1] as HTMLElement).style.display = 'block'
    /* 
      移动蛇的身体，是要从后向前，一个一个的改变蛇的位置
          第4个格子 = 第3个格子的位置
          第3个格子 = 第2个格子的位置
          第2个格子 = 蛇头的位置
    */
    for (let i = this.bodies.length - 1; i > 0; i--) {
      //** 报错原因：类型问题，bodies是HTMLCollection类型，它里面的类型是Element类型，而实际类型是HTMLElement，Element是一个接口，HTMLElement是一个子接口。所以bodies里面是有offsetLeft、offsetTop等属性

      //** 解决办法：通过as断言告知bodies是HTMLElement类型的

      // 获取前面身体的位置
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      // 把位置赋给当前身体
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }

  // 检查蛇头有没有跟身体相撞
  checkHeadBody() {
    // 获取蛇身体的所有坐标
    for (let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement
      // 检查蛇头是否跟身体相撞了
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        throw new Error('头跟身体相撞了')
      }
    }
  }

}