function convertMe(){   //Function
    //formula
  let yards = parseInt(document.getElementById('yards').value);
    
  let meters = yards / 1.094;
    
    document.getElementById('output').value = meters.toFixed(2); //output with decimal limit


  }
    
      //EventListener Method
      document.getElementById("btnConvert").addEventListener("click",convertMe); 