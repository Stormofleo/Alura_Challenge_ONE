const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/** 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"  */


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
}

function btnCopiar(){
    let copyText = mensaje;

    copyText.select();
    copyText.setSelectionRange(0,99999); //Para mobiles

    navigator.clipboard.writeText(copyText.value);

}

function encriptar (stringEcriptado){
    let  matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEcriptado.includes(matrizCodigo[i][0])) {
            stringEcriptado = stringEcriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
        
    }
    return stringEcriptado;
}

function desencriptar (stringDesencriptado){
    let  matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado =stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}


