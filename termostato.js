
            function mult(){
                var n1 = document.getElementById("n1").value;
                var n2 = document.getElementById("n2").value;
                var n3 = document.getElementById("n3").value;
                var n4 = 1000;
               
                var m  = n1*n2*n3/n4; 

                document.querySelector(".result").innerHTML = m;
            } 
         
            const lampada = document.getElementById(".lamp")

            function lampOn(){
                lampada.src = './midia/luz2.jpg';
            }
           function lampOff(){
            lampada.src = './midia/luz.jpg';
           }
           lampada.addEventListener( 'mouseover',lampOn);
           lampada.addEventListener( 'mouseleave',lampOff);