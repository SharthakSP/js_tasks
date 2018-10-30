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
    var chunked_arr = [];
    

    for (let i = 0; i < array.length; i++) {
        var temp = [];

        if (i == 1) {
            temp[0] = array[0];
            temp[1] = array[1];
            chunked_arr.push(temp);

        } else if (i > 1 && i % 2 == 0) {
            if (array.length % 2 != 0 && i == array.length - 1) {
                temp[0] = array[array.length - 1];
                chunked_arr.push(temp);   
                break;
            }
            temp[0] = array[i];
            temp[1] = array[i + 1];
            chunked_arr.push(temp);
        }

        

    }
    console.log(chunked_arr);
}
chunk();








