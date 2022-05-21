
var arr=[1,2,4,4,6,7,9]
var k=11
var n=7
var count=0

for(var i=0; i<n; i++){
    for(var j=1 ; j<n; j++){
        if(arr[i]+arr[j]===k){
           count++
        }
    }
}
if(count>0){
    console.log("Yes")
}else{
    console.log("No")
}