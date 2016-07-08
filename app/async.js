exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    for (var i = 0; i < 10; ++i) {
      setTimeout(function () {
        console.log('hello world')
      }, 100);
    }
    return value;
  },
  manipulateRemoteData: function(url) {
    $.ajax(url).then(function (res) {
      var people = res.people;
      console.log(people);
      var nameArray = people.map(function(obj){
        var rObj;
        rObj = obj.name;
        console.log(rObj);
        return rObj
      });
      return nameArray.sort();
    })
  }
};


