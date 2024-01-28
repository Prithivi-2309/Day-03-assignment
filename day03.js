
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var result = JSON.parse(request.response)
    console.log(result);
    //Q1
for(var i=0;i<=result.length;i++){
    if(result[i].flags){
    console.log(result[i].flags);
    }
    // Q 3 
if(result[i].name){
console.log(result[i].name);
}
if(result[i].region){
    console.log(result[i].region);
}
if(result[i].subregion){
    console.log(result[i].subregion);
}
if(result[i].population){
    console.log(result[i].population);
}
else{
    console.log("no data found");
}


}

}
