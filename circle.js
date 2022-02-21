
const circleArea = (r) => {

  let circleArea = Math.PI * Math.pow(r,2);

  return circleArea
}

const circleCircumference = (r) => {

  let circleCircumference = 2 * Math.PI * r

  return circleCircumference
}

module.exports =  {
  circleArea,
  circleCircumference
}