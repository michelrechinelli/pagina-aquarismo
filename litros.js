function mult(){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    var n4 = 1000;
   
    var m  = n1*n2*n3/n4; 
    var n = ' Litros'

    document.querySelector(".result").innerHTML = m + n;
} 