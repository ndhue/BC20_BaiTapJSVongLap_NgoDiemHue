function evenNumber(a){
    var ch="";
    for(i=0; i<a;i+=2)
        ch += i + " ";
    return ch;
}
function oddNumber(a){
    var ch="";
    for(i=1; i<a;i+=2)
        ch += i + " ";
    return ch;
}
function EvenAndOdd(){
    document.getElementById('ketqua1').innerHTML = "Số chẵn: " + evenNumber(100) + "<br>Số lẻ: " + oddNumber(100);
}
document.querySelector('#btn1').onclick = EvenAndOdd;

function divide3(){
    var a=0;
    var count=0;
    //Cach 1
    while(a!=1000){
        if(a%3==0)  count++;
        a++;
    }
    //Cach 2
    // for(var i=0;i<1000;i++){
    //     if(a%3==0)  count++;
    // }
    document.querySelector('#ketqua2').innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + count;
}
document.querySelector('#btn2').onclick = divide3;

function minNumber(){
    var sum=1;
    var a=1;
    while(sum<=10000){
        a++;
        sum+=a;
    }
    document.querySelector('#ketqua3').innerHTML = "Số nguyên dương nhỏ nhất: " + a;
}
document.querySelector('#btn3').onclick = minNumber;


function printPow(){
    var a = Number(document.getElementById("soX").value);
    var b = Number(document.getElementById("soN").value);
    var i=1;
    var t=1;
    var s=0;
    while(i<=b){
        t=t*a;
        s=s+t;
        i++;
    }
    document.querySelector('#ketqua4').innerHTML = "Tổng: " + s;
}
document.querySelector('#btn4').onclick = printPow;

function giaiThua(a){
    if(a==1) return 1;
    return a*giaiThua(a-1);
}
function printGT(){
    var a = Number(document.getElementById("soGT").value);
    document.querySelector('#ketqua5').innerHTML = "Giai thừa: " + giaiThua(a);
}
document.querySelector('#btn5').onclick = printGT;

function isPrime (n){
    if (n < 2) return false;
    var q = Math.floor(Math.sqrt(n));
    for (var i = 2; i <= q; i++){
        if (n % i == 0){
            return false;
        }
    }
    return true;
}
function demSoNT(){
    var a = Number(document.getElementById("soNT").value);
    var list="";
    for(var i=2; i<=a;i++){
        if(isPrime(i))
            list+= i+" ";
    }
    document.querySelector('#ketqua7').innerHTML = list;
}
document.querySelector('#btn7').onclick = demSoNT;
