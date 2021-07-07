



function insertionsort(arr){
    for(var i=1;i<arr.length;i++){
        //does arr[i] need to be shifted because its smaller than arr[i-1]
        if(arr[i] < arr[i-1]){
            //perform shift
            var temp = arr[i]
            for(var y = i; y>0;y--){
                if(arr[y-1] >= temp){
                    console.log('b',temp,arr)
                    arr[y] = arr[y-1]
                    console.log('a',temp,arr)
                }
                else{
                    break
                }
            }
            console.log('sb',temp,arr)
            arr[y] = temp
            console.log('sa',temp,arr)
        }
    }
    return arr
}

array = [2,5,3,7,10,3,9,1]
console.log(insertionsort(array))