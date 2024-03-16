const arr = [1,2,999,56,"Mithun",1234,"PW"];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (typeof arr[index] == "string") {
        console.log("Found the String:"+arr[index]);     
    }   
}
