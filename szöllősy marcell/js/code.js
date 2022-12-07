function feliratkozas(){
      let email = document.getElmentByid('email');
      if(email.value ! = ""){
          email.value = "";
          alert("Sikeresen feliratkozott! Köszönjük szépen!";
      }else{
           alert("Kérem töltse ki az E-mailt mezőt!");
      }
}