function Sudoku (stage, util) {
  this.stage = stage
  this.nums = []
  this.keys = [] // 键盘
  var length = 1000
  var total = 9
  this.point = null  // 当前选中
  this.tipVars = true  // 剩余值提示
  this.config = {
    total: total,
    rectangleSize: 3,
    length: length,
    step: length / total,
    boxWidth: length / total,
    lineWidth: 2,
    marginWidth: 5,
    debugPoint: {
      x: 6,
      y: 1
    }
  }
  this.util = util
}

Sudoku.prototype = {
  init: function init (nums) {
    this.initNums(nums)
    this.findVariable()
    this.updateNums()
    this.clearUserNums()
    this.drawAll()
    this.point = null
  },

  initNums: function __initNums (nums) {
    var _this = this
    genNums(nums)
    // readDB()
    genKeys()

    // readDB()
    function readDB () {
      if (localStorage.strNums) {
        try {
          console.log('读取数据');
          var nums = JSON.parse(localStorage.strNums)
          for (var i = 0; i < nums.length; i++) {
            for (var j = 0; j < nums[i].length; j++) {
              _this.nums[i][j].userNum = nums[i][j].userNum
            }
          }
        } catch (err) {
          console.log('读取数据出错', err);
        }
      }
    }

    function genKeys () {
      var keys = [
        [0, 0, 1, 2, 3, 0, 'T'],
        ['R', 0, 4, 5, 6, 0, 'C'],
        [0, 0, 7, 8, 9, 0, 'A']
      ]
      _this.keys = keys.map(function (lines, x) {
        return lines.map(function (num, y) {
          return {
            type: 'key',      // 类别
            num: num,      // 题目上的数字
            color: "#ff8c43",   // 文字颜色
            bgColor: "",      // 背景颜色
            get number () {
              return this.num
            }
          }
        })
      })
    }

    function genNums (nums) {
      nums = nums || [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],

        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],

        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
      ]
      _this.nums = nums.map(function (lines, x) {
        return lines.map(function (num, y) {
          var bgColor = '#FFF'
          // 间隔效果
          if ((x > 2 && x < 6) || (y > 2 && y < 6)) bgColor = '#f7f7f7'
          if ((x > 2 && x < 6) && (y > 2 && y < 6)) bgColor = '#FFF'
          return {
            num: num,      // 题目上的数字
            color: "black",   // 文字颜色
            originBgColor: bgColor,      // 背景颜色
            bgColor: bgColor,      // 背景颜色
            x: x,      // 坐标
            y: y,      // 坐标
            userNum: '',  // 用户填的数字的数字
            vars: [],       // 方格内还可以填的数字
            get number () {
              return this.num || this.userNum
            }
          }
        })
      })
    }
  },
  getUserNums: function () {
    return this.nums.map(function (lines, x) {
      return lines.map(function (num, y) {
        return {
          userNum: num.userNum
        }
      })
    })
  },
  saveDB: function () {
    var userNums = this.nums.map(function (lines, x) {
      return lines.map(function (num, y) {
        return {
          userNum: num.userNum
        }
      })
    })
    var strNums = JSON.stringify(userNums)
    // console.log('save nums', strNums);
    localStorage.strNums = strNums
  },
  clearUserNums: function () {
    this.nums.forEach(function (lines) {
      lines.forEach(function (num) {
        num.userNum = null
      })
    })
  },
  updateNums: function () {
    var _this = this
    if (!this.point) return
    resetBgColor()
    selectGrid()
    conflictGrid()
    keyBoard()

    /**
     * 重置背景色
     */
    function resetBgColor () {
      _this.nums.forEach(function (lines) {
        lines.forEach(function (num) {
          num.bgColor = num.number && num.number === _this.point.number ? "#2b9bff" : (num.originBgColor || "");
        })
      })
    }

    /**
     * 选中效果
     */
    function selectGrid () {
      _this.point.bgColor = "#ffd141";
    }

    /**
     * 冲突效果
     */
    function conflictGrid () {
      if (!_this.point.number) return
      var grids = _this.getGridRoud(_this.point.x, _this.point.y)
      grids.forEach(function (g) {
        if (g.number === _this.point.number && (g.x !== _this.point.x || g.y !== _this.point.y)) {
          _this.point.bgColor = "#ce8ecc";
          g.bgColor = "#ca6cc8";
        }
      })
    }

    /**
     * 键盘效果
     */
    function keyBoard () {
      _this.keys.forEach(function (lines) {
        lines.forEach(function (num) {
          if (typeof (num.number) != 'number' || _this.point.vars.indexOf(num.number) > -1) {
            num.color = "#ff8c43"
          } else {
            num.color = "#808080"
          }
        })
      })
    }
  },
  /**
   * 和指定格子相关的格子们
   */
  getGridRoud: function getGridRoud (x, y, includeBlock) {
    var nums = this.nums
    var total = this.config.total
    var rectangleSize = this.config.rectangleSize
    var vNums = getVerticalLines(nums, x, y)
    var hNums = getHorizontalLines(nums, x, y)
    if (includeBlock) {
      var rectangleNums = getRectangle(nums, x, y)
      return rectangleNums.concat(vNums).concat(hNums)
    } else {
      return vNums.concat(hNums)
    }

    // 所在竖线
    function getVerticalLines (nums, x, y) {
      var result = []
      for (var i = 0; i < total; i++) {
        result.push(nums[x][i])
      }
      return result
    }

    // 所在横线
    function getHorizontalLines (nums, x, y) {
      var result = []
      for (var i = 0; i < total; i++) {
        result.push(nums[i][y])
      }
      return result
    }

    // 所在方块的数字
    function getRectangle (nums, x, y) {
      var x_base = Math.floor(x / rectangleSize)
      var y_base = Math.floor(y / rectangleSize)
      var result = []
      for (var i = 0; i < rectangleSize; i++) {
        for (var j = 0; j < rectangleSize; j++) {
          result.push(nums[i + x_base * rectangleSize][j + y_base * rectangleSize])
        }
      }
      return result
    }
  },
  /**
   * 空格子的剩余值
   */
  findVariable: function findVariable () {
    if (!this.tipVars) return
    var _this = this
    var total = this.config.total
    for (var i = 0; i < total; i++) {
      for (var j = 0; j < total; j++) {
        if (this.nums[i][j].number) continue
        this.nums[i][j].vars = findResidue(this.nums, i, j)
      }
    }

    // 找到剩余值
    function findResidue (nums, x, y) {
      var result = []
      var grids = _this.getGridRoud(x, y, true)
      grids.forEach(function (g) {
        if (g.number) result.push(g.number)
      })
      // console.log('residues ', result);
      result = _this.util.unique(result)
      var allNums = _this.util.range(1, 10)
      result = _this.util.diff(allNums, result)
      return result
    }
  },
  drawAll: function () {
    this.stage.clear()
    this.drawGrids()
    this.drawKeyboard()
    this.stage.update();
  },
  drawGrids: function drawGrids () {
    var boxWidth = this.config.boxWidth
    var rectangleSize = this.config.rectangleSize
    var total = this.config.total
    var stage = this.stage

    // var shape = new createjs.Shape();
    // var background = shape.graphics.beginFill("#000").drawRect(0, 0, length, length);
    // stage.addChild(background);

    for (var i = 0; i < total; i++) {
      for (var j = 0; j < total; j++) {
        // 做出分割线的效果
        var yp = Math.floor(i / rectangleSize) * 2 + 65
        var xp = Math.floor(j / rectangleSize) * 2
        var x = j * (boxWidth / 2 - 1) + xp
        var y = i * (boxWidth / 2 - 1) + yp
        this.drawGrid(x, y, this.nums[i][j])
      }
    }

    stage.enableMouseOver();
    // stage.update();
  },
  drawGrid: function drawGrids (x, y, object) {
    var _this = this
    var stage = this.stage
    var boxWidth = this.config.step
    var lineWidth = 3
    var width = boxWidth - lineWidth

    var box = new createjs.Container();

    var shape = new createjs.Shape();      //画圆形
    shape.graphics.beginFill(object.bgColor || "#FFF")
      .setStrokeStyle(lineWidth, 'square')
      .beginStroke("#808080")
      .drawRect(x + lineWidth, y + lineWidth, width, width);

    var text = null
    if (object.number) {
      text = this.drawNumber(x, y, object)
    } else {
      text = this.drawVars(x, y, object)
    }
    box.addChild(shape, text);
    box.x = x;
    box.y = y;
    box.object = object;

    box.on('click', function (e, data) {
      _this.onClick(e, data)
    }, null, false, object);

    box.cursor = 'pointer';
    stage.addChild(box);
  },
  /**
   * 表格数值
   * @param x
   * @param y
   * @param object
   */
  drawNumber: function drawNumber (x, y, object) {
    var boxWidth = this.config.boxWidth
    var color = object.color
    if (object.userNum) color = '#808080'
    var txt = new createjs.Text(object.number, (boxWidth) + "px Arial", color);
    txt.x = x + (boxWidth / 4)
    txt.y = y + (boxWidth / 16)
    return txt
  },
  /**
   * 可选值
   * @param x
   * @param y
   * @param object
   */
  drawVars: function drawGrids (x, y, object) {
    if (!this.tipVars) return

    var boxWidth = this.config.boxWidth
    var rectangleSize = this.config.rectangleSize

    var vars = object.vars
    if (!vars) return
    if (vars && vars.length > 3) return

    var box = new createjs.Container();
    var smallStep = boxWidth / rectangleSize - 5
    var index = 1
    for (var i = 0; i < rectangleSize; i++) {
      for (var j = 0; j < rectangleSize; j++) {
        var x_inner = x + j * smallStep + (smallStep / 4)
        var y_inner = y + i * smallStep + (smallStep / 4)
        if (vars.indexOf(index) > -1) {
          var txt = new createjs.Text(index, (smallStep) + "px Arial", "#2a9440");
          txt.x = x_inner
          txt.y = y_inner
          box.addChild(txt)
        }
        index++
      }
    }
    return box
  },
  onClick: function onClick (e, data) {
    // console.log('click', data)
    if (data && data.type === 'key') {
      this.onKeyClick(data)
    } else {
      this.onGridClick(data)
    }
    this.updateNums()
    this.drawAll()
  },
  onGridClick: function onClick (data) {
    this.point = data
  },
  onKeyClick: function onClick (data) {
    var _this = this
    if (this.point && this.point.num) return
    if (data.num === 'C') {
      if (this.point) {
        this.point.userNum = 0
      }
    } else if (data.num === 'R') {
      _this.clearUserNums()
    } else if (data.num === 'T') {
      _this.tipVars = !_this.tipVars
    } else if (data.num === 'A') {
      _this.nums.forEach(function (lines) {
        lines.forEach(function (num) {
          if (num.vars && num.vars.length === 1) {
            num.userNum = num.vars[0]
          }
        })
      })
    } else {
      if (this.point) {
        this.point.userNum = data.number
      }
    }
    // this.saveDB()
    this.findVariable()
  },
  /**
   * 键盘
   */
  drawKeyboard: function drawKeyboard () {
    var boxWidth = this.config.boxWidth
    var stage = this.stage
    var keys = this.keys
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 7; j++) {
        // 做出分割线的效果
        var yp = 580
        var xp = 50
        var x = j * (boxWidth / 2 - 1) + xp
        var y = i * (boxWidth / 2 - 1) + yp
        this.drawGrid(x, y, keys[i][j])
      }
    }

    stage.enableMouseOver();
    // stage.update();
  }
}
