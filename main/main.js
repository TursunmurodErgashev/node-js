let array=[1,3,2,6,4,9,7,8];
function Sort(arr) {
let len = arr.length; 
for (let i=0; i<len; i++) {
    for (let j=0; j<len; j++) {
        if (arr[j] > arr[j+1]) {
            let tem  = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = tem;
        }
    }
}
return arr;
};
console.log(Sort(array));
