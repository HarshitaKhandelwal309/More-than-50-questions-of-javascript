let num = [1,2,3,4,5,6,7,8,9,10];
 var result=num.reduce(sum);
 console.log(result);

function sum(total,value)

{
return total+value;
}