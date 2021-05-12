//method1
function factorial(num)
{
    if(num==0)
    {
        return 1;
    }
    else
    {
        return num*factorial(num-1) ;
    }
}
var result = factorial(5);
console.log(result);

//method 2
var num = 5 ;
var fact= 1;
for(var i=1;i<=num;i++)
{
    fact= fact*i;
}
console.log(fact);
