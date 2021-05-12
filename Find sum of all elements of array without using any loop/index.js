let arr = [1,15,3,20,5];

var sum = arr.reduce(arrSum)
{
    console.log("The sum of an array is: "+sum);
}


function arrSum(total,value)
{
    return total+value;
}