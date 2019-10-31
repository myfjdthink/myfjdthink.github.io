function Utils () {}

Utils.prototype = {
  unique: function unique (arr) {
    return arr.filter(function onlyUnique (value, index, self) {
      return self.indexOf(value) === index;
    })
  },
  range: function range (start, end, step) {
    step = step || 1
    return new Array(end - start).fill(0).map(function (value, index) {
      return start + (index * step)
    })
  },
  diff: function diff (arrA, arrB) {
    return arrA.filter(function (o) {
      return arrB.indexOf(o) < 0
    });
  }
}
