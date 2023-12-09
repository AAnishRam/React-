function sum(...args){
    let sum = 0;
    for(let i=0;i<args.length;i++)
    {
        sum+=args[i];
    }
    return sum;
}

function spread()
{
    const arr1 = [1,2,3];
    const arr2 = [1,2,3,2,4];

    const arr = [...arr1,...arr2];

    console.log(arr);
}

console.log(sum(1,2,3,4,5))
console.log(sum(1,2,3,4,5,6))
console.log(spread())