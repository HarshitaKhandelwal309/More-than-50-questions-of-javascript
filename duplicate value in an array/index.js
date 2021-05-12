const arr= [2,1,3,5,2,8,9,8,3,1];
for(var i=0 ;i<arr.length ; i++)
{
    for(var j=i+1; j<arr.length;j++)
    {
        if(arr[i]==arr[j])
        {
            console.log(arr[j]);
            
        }
        
    }
}






