      function showPro() {
        document.getElementById("choix").style.display = "none";
        document.getElementById("formPro").style.display = "block";
      }
 
      function showParticulier() {
        document.getElementById("choix").style.display = "none";
        document.getElementById("formParticulier").style.display = "block";
      }
 
      function showsend() {
     
        const formPro = document.getElementById('formPro');
        const formParticulier = document.getElementById('formParticulier');
 
        let isValid = true;
 
        if (formPro.style.display !== 'none') {
   
          const inputs = formPro.querySelectorAll('input, textarea');
          inputs.forEach(input => {
            if (input.hasAttribute('required') && input.value.trim() === '') {
              isValid = false;
            }
            if (input.hasAttribute('minlength') && input.value.trim().length < input.getAttribute('minlength')) {
              isValid = false;
            }
          });
        } else if (formParticulier.style.display !== 'none') {
          // Valider formParticulier
          const inputs = formParticulier.querySelectorAll('input, textarea');
          inputs.forEach(input => {
            if (input.hasAttribute('required') && input.value.trim() === '') {
              isValid = false;
            }
            if (input.hasAttribute('minlength') && input.value.trim().length < input.getAttribute('minlength')) {
              isValid = false;
            }
          });
        }
 
        if (!isValid) {
          alert('Veuillez remplir correctement tous les champs');
          return;
        }
 
       
        document.getElementById('choix').style.display = 'none';
        document.getElementById('formPro').style.display = 'none';
        document.getElementById('formParticulier').style.display = 'none';
        document.getElementById('FormSend').style.display = 'flex';
      }
 
    //   function goBack() {
    //     document.getElementById('FormSend').style.display = 'none';
    //     document.getElementById('choix').style.display = 'flex';
 
    //     document.getElementById('formPro').reset();
    //     document.getElementById('formParticulier').reset();
    //   }