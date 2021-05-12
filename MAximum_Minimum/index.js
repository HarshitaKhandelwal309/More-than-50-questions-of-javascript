let number =  [1,2,3,4,5,6,7,8,9,10];


// var maxi = Math.max(number);
// var mini = Math.min(number);
// console.log( maxi);
// console.log( mini);


// If we want  to find minimum and maximum value in an array 
// then we cant directly apply Math.min or max it will give an output NaN
// to avoid this we use below method

//method 1

         var minimum=Math.min.apply(Math, number);
         console.log(minimum);


         var maximum = Math.max.apply(Math, number);
         console.log(maximum);


//method 2
        console.log(Math .min(...number));
        console.log(Math .max(...number));


        