function Topic (stage, topics) {
  this.topics = topics
  this.stage = stage
  this.current = 1
  this.sudoku = new Sudoku(stage, new Utils())
  this.level = 0
  this.userNums = null
  var length = 1000
  this.loadDb()
}

var levelMap = {
  'easy': '简单',
  'medium': '中等',
  'hard': '困难',
  'very-hard': '大师',
  'insane': '疯狂',
  'inhuman': '非人'
}
var levels = [
  'easy',
  'medium',
  'hard',
  'very-hard',
  'insane',
  'inhuman'
]
Topic.prototype = {
  init: function init () {
    this.drawMenu()
    var levelKey = levels[this.level % 6]
    console.log('level', levelKey)
    console.log('current', this.current)
    var nums = this.topics[levelKey][this.current - 1]
    // console.log('nums', nums)
    // this.saveDB()
    // var userNums = this.getUserNums()
    // console.log('userNums', userNums)
    this.sudoku.init(nums)
  },
  saveDB: function saveDB () {
    var userInfo = {
      level: this.level,
      current: this.current
    }
    // var userNums = this.sudoku.getUserNums()
    localStorage.userInfo = JSON.stringify(userInfo)
    // localStorage['userNums-' + this.level + '-' + this.current] = JSON.stringify(userNums)
  },
  loadDb: function loadDb () {
    if (localStorage.userInfo) {
      try {
        console.log('读取数据');
        var userInfo = JSON.parse(localStorage.userInfo)
        this.current = userInfo.current
        this.level = userInfo.level
      } catch (err) {
        console.log('读取数据出错', err);
      }
    }
  },
  getUserNums: function getUserNums (level, current) {
    var key = 'userNums-' + level + '-' + current
    if (localStorage[key]) {
      try {
        console.log('读取数据');
        var userNums = JSON.parse(localStorage[key])
        return userNums
      } catch (err) {
        console.log('读取数据出错', err);
      }
    }
    return null
  },
  onClick: function onClick (e, data) {
    if (data.type === 'level') {
      this.level += 1
    }
    if (data.type === '<<') {
      this.current = Math.max(0, this.current - 1)
    }
    if (data.type === '>>') {
      var levelKey = levels[this.level % 6]
      var total = this.topics[levelKey].length
      this.current = Math.min(total, this.current + 1)
    }
    this.init()
  },
  drawMenu: function drawMenu () {
    var _this = this
    // var length = this.length
    var stage = this.stage
    var box = new createjs.Container();
    // var shape = new createjs.Shape();      //画圆形
    // shape.graphics.beginFill("#808080")
    // // .setStrokeStyle(5, 'square')
    // // .beginStroke("#808080")
    //   .drawRect(0, 0, length, 100);
    var levelKey = levels[this.level % 6]
    var current = this.current + '/' + this.topics[levelKey].length
    var levelName = levelMap[levelKey]
    // box.addChild(shape);
    drawText(box, levelName, -10, 'level')
    drawText(box, '<<', 200)
    drawText(box, current, 410)
    drawText(box, '>>', 620)
    box.x = 80;
    box.y = 20;

    stage.addChild(box);
    stage.update()

    function drawText (box, name, x, type) {
      var shape = new createjs.Shape();      //画圆形
      shape.graphics.beginFill("#FFF")
      // .setStrokeStyle(5, 'square')
      // .beginStroke("#808080")
        .drawRect(x - 50, -15, 200, 120);


      var textSize = 60
      var textColor = "#808080"
      var text = new createjs.Text(name, (textSize) + "px Arial", textColor);
      text.x = x
      text.y = 20
      text.cursor = 'pointer';
      shape.on('click', function (e, data) {
        console.log('cccc', data, _this.level)
        _this.onClick(e, data)
      }, null, false, {name: name, type: type || name});
      box.addChild(shape, text)
    }

  }

}
