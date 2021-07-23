function setup() {
  createCanvas(400, 400);
  count();
}

function draw() {
  background(220);
}

function count()
{
   var numbers = [1,2,3,4,5,6,7,8,9];
   var len = numbers.length;

  for(var i = 1; i<=len; i++)
  {
    console.log(numbers[i]);
  }
}


