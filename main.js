var circleArea = function(radius) {
// area of a circle is radius squared * PI
  var area= Math.pow(radius, 2)* Math.PI
//   round the area two decimal places
  var roundingArea=parseFloat(area.toFixed(2))
//   if radius is not a # or it is negative(num less than 0) return false
  if(isNaN(radius) || radius <=0 ){
    return false
  }
//   otherwise return the area of the circle
  return roundingArea
  }

  
