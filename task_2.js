//fizz buzz
function fi_bu() {
    for (let i = 1; i < 101; i++) {
        if (i % 3 == 0) {
            console.log("fizz");
            continue;
        } else if (i % 5 == 0) {
            console.log("buzz");
            continue;
        } else {
            console.log(i);
        }
    }
}
//fi_bu();

//number to array 
function arr_dig() {
    var int = 12345;
    var a2 = [];
    while (int != 0) {
        var a1 = int % 10;
        var int = parseInt(int / 10);
        var a3 = a1.toString();
        a2.push(a3);
    }
    console.log(a2.reverse());
}
//arr_dig();

//product
function set () {
    var b1 = [1,2];
    var b2 = [];
    b2[0] = "";
    b2[b1.length] = b1;
    for (let i =0;i<b2.length+1;i++) {

    }
}
set();