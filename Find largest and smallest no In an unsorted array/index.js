const arr = [50,89,63,21,74,30];

var max=arr[0];//50
var min= arr[0];//50
for(let i = 1 ;i<arr.length; i++)
{
    if(arr[i]>max)
    {
        max=arr[i];
    }
    else  if (arr[i]<min)
    {
        min=arr[i];
    }
}
console.log("The largest value is: "+max);
console.log("The smallest value is: "+min);

