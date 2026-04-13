function stringReverser (str) {
    const arr = str.split('');
    let arr2 = [];
    let result = ''; 

    for (let i = arr.length; i >= 0; i--){
        arr2.push(arr[i]); 
    }
    return arr2.join('');
}

console.log(stringReverser("Don't play with me"));