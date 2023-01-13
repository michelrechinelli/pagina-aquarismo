
            function mult(){
                var n1 = document.getElementById("n1").value;
                
                var n4 = 20;
               
                var m  = n1*n4; 
            
                var d = m/1000;
            
                var e = ' Lâmpadas LED de 10W';
                var f = ' Lumén, isso equivale a:'
            
                document.querySelector(".result").innerHTML = m + f;
                document.querySelector(".result2").innerHTML = d + e;
            }
         
           