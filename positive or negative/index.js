//method1

// function check(number)
// {
// var result = Math.sign(number)
// return result;
// }
//  console.log(check(56)); // 1
//  console.log(check(-56)); // -1
//  console.log(check(0)); // 0
//  console.log(check("hello")); // Nan


//method2
 function check(number)
{

if(number>0)
{
  var result= "positive";
  return result;
}
else if(number<0)
{
    var result=    "Negative";
    return result;
}
else if(number==0)
{
    var result=  "Zero";
    return result;
}


}
 console.log(check(-56));
 