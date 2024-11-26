let arr = [10];
arr["prop"] = "asaad";
console.log(arr);
console.log(arr.length);

arr.push("mina");
console.log(arr);
console.log(arr.length);

arr[10] = "mahmoud";
console.log(arr);
console.log(arr.length);

arr["aaa"] = "rady";
console.log(arr);
console.log(arr.length);

for (let i in arr) {
    console.log(i);
}

for (let i of arr) {
    console.log(i);
}
