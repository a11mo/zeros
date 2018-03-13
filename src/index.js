module.exports = function getZerosCount(number) {
  // your implementation
/*  var a, b, c;
  var d = 0;
  a =  Math.floor(Math.log(number)) / Math.floor(Math.log(5));
  var c = 0;
  for(var i=1; i<=a; i++){
    b = Math.pow(5,i);
    d = d + Math.floor(number/b);
  }
  return d; */
  let zeros = 0;
  while (number > 0) {
    number = Math.floor(number/5);
    zeros += number;
  }
  return zeros;
}
