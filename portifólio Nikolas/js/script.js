//animação de digitação
function ativaLetra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((Letra, i) => {
        setTimeout(()=>{
            elemento.innerHTML +=Letra;
        }, 75 * i);
    });
}

const titulo = document.querySelector('.digitando');
ativaLetra(titulo);

//copiar numero de telefone

document.getElementById("copy-phone-btn").addEventListener("click", function () {
    var phoneNumberElement = document.getElementById("phone-number");
    var tempInput = document.createElement("input");
    tempInput.value = phoneNumberElement.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Número de telefone copiado para a área de transferência: " + phoneNumberElement.textContent);
  });

//copiar email

document.getElementById("copy-mail").addEventListener("click", function () {
    var emailElement = document.getElementById("email-niko");
    var tempInput = document.createElement("input");
    tempInput.value = emailElement.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Email copiado para a árrea de transferência: " + emailElement.textContent);
  });
