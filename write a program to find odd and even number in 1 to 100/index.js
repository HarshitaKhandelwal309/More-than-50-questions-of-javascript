//method1
var even = 0 ; var odd=0;
for(let i = 1; i<=100;i++)
{
        if(i%2==0)
        {
                console.log( i +" even");
                even++;
              
                

        }
        else{
                console.log(i+ " odd");
                odd++;
                
        }
}
console.log("Total even no are:" + even) ;
console.log("Total odd number are:" +odd);


//method2

var num = 100;
var even= 100/2;
var odd= num-even;
console.log(even);
console.log(odd);