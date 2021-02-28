String.prototype.validate = function (condition) {
  var length = this.length;
  var empty = this == "";

  if (typeof condition == "string") {
    if (eval(condition)) {
      return true;
    } else {
      return false;
    }
  } else {
    if (new RegExp(condition).test(this)) {
      return true;
    } else {
      return false;
    }
  }
};

console.log("some-string".validate("!empty"));
console.log("some-string".validate("length < 3"));
console.log("some-string".validate("length>30"));
console.log("some-string".validate("!length<=10"));
console.log("some-string".validate("length=3"));
console.log("some-string".validate(/^.*-s/i));
