//reverese
var str = "racecar";

var c = "";
for (let i = str.length - 1; i >= 0; i--) {
    var b = str[i];
    c += b;
}

console.log(`The reverse of ${str} is ${c}`);

//palindrome string
if (str === c) {
    console.log("The given String is palindrome.");
} else {
    console.log("The given String is not palindrome.");
}

//reverse integer
var int = 12;
var a2 = 0;
while (int != 0) {
    var a1 = int % 10;
    var int = parseInt(int / 10);
    var a2 = a2 * 10 + a1;
}
console.log(a2);


//capitalize letter
var b1 = "hello";
var b2 = b1.replace(b1[0], b1[0].toUpperCase());
console.log(b2);

// //maximum character
// var c1 = "javascript JavaScript java python javascript javascript python";
// c1 = c1 + " ";
// var c2 = "";
// var c4 = [];

// for (let i = 0; i<c1.length; i++) {
//     var c3 = c1[i];
//     c2+=c3;

//     if (c2[i] === " ") {
//         c4.shift();
//         c4.push(c2.trim().toUpperCase());  
//         continue;
//     }

// }

// var c5 = c4.length;
// var count = 0;
// var c6 = c4[0];
// for (let i =0;i<c5;i++) {
//     var cur_count = 1;
//     for (let j =i+1;j<c5;j++) {
//         if (c4[i] === c4[j]) {
//             cur_count++;
//         } else {

//             break;
//         }

//         if (cur_count > count) {
//             count = cur_count;
//             c6.shift();
//             c6 = c4[j];
//         }
//     }
// }
//console.log(c6);

//array chunking
function chunk() {
    var array = [1, 2, 3, 4, 5, 6, 7,45,45,322,23];
    //the chunked arrays will be stored in chunked_arr
    var chunked_arr = [];
    
    //looping through array
    for (let i = 0; i < array.length; i++) {
        //creating a temporary array 
        var temp = [];

        //checking condition if the loop is running the second time
        //when i reaches 1 (in second loop) we add the value from array because first two elements will always be the same
        //so we add the first two elements manually
        if (i == 1) {
            //adding elements in temporary array from the actual array
            temp[0] = array[0];
            temp[1] = array[1];
            //pushing the temporary array to the chunked array
            chunked_arr.push(temp);

        //managing the index number
        //if the loop is running for the (odd number time) it should skip this
        //when the loop is even number times then it will enter this loop  
        //beacuse when the loop is running for two times, two elements can be added together 
        //i.e. if the array is added one at a time the result may be [[1],[2],[3],[4]] instead of [[1,2],[1,3]] 
        //to chunk two elements should be separated
        } else if (i > 1 && i % 2 == 0) {
            //the last index value
            //this loop runs only if the loop is in last loop i.e. i == array.length -1
            //if the array length is of odd number the last element should be added in single 
            //i.e.[[1,2],[3,4],[5]]
            //here last element is single because of the array length being odd number
            if (array.length % 2 != 0 && i == array.length - 1) {
                temp[0] = array[array.length - 1];
                //pushing in chunked array
                chunked_arr.push(temp);   
                break;
            }
            //if the array length is even number it will skip above step
            //since temp[0] will remove the previous element and add new element 
            //it is necessary to specify temp[0] because while adding in chunked array it should no be like 
            //[[1,2],[undefined,undefined,3,4],[and so on]]
            //it will add as separate array
            //now array[i] will be added and pushed to chunked_arr
            //temp[0] will store current array[i=(current i value)] so no undefined confilcts occur
            temp[0] = array[i];
            //temp[1] will store array[i +1] the next element from array[i]
            temp[1] = array[i + 1];
            chunked_arr.push(temp);
        } 
    }
    console.log(chunked_arr);
}
chunk();








