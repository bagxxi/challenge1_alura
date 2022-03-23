
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
function quitarAcentos(cadena){
	const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
	return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
}

function funcionEncriptar(){ 
    
    let inputOriginal = document.getElementById('input-texto').value;
    
    let inputEncriptado = "";

    let inputNumber2 = inputOriginal;

   let inputOriginal1 = quitarAcentos(inputNumber2).toLowerCase();

   alert("La palabra ingresada es : " + inputOriginal1);

    console.log(inputOriginal1)

    let vocal = "";

    for(i = 0; i < inputOriginal1.length; i++)
    {
       switch(inputOriginal1[i]){
           case 'a':
               vocal = "ai";
               break;
            case 'e':
                vocal = "enter";
                break;
            case 'i':
                vocal = "imes";
                break;
            case 'o':
                vocal = "ober";
                break;
            case 'u':
                vocal ="ufat";
                break;
            default:
                vocal = inputOriginal1[i];
       }
       inputEncriptado = inputEncriptado + vocal;
    }

    console.log(inputEncriptado);

    document.getElementById('msg').value = inputEncriptado;
}

function copyToClipBoard(){
    var content = document.getElementById('msg').value;

    navigator.clipboard.writeText(content)
    .then(() => {
        alert("Texto copiado al portapapeles")
    })
    .catch(err => {
        console.log('No se pudo copiar el texto', err);
    })
}

function funcionDesencriptar(){ 
    
    let inputOriginal = document.getElementById('input-texto').value;

    let inputOriginal1 = quitarAcentos(inputOriginal).toLowerCase();

    alert("La palabra ingresada es : " + inputOriginal1);
    
    let inputAi = inputOriginal1.replaceAll("ai", 'a');
    let inputEnter = inputAi.replaceAll("enter", 'e');
    let inputImes = inputEnter.replaceAll("imes", 'i');
    let inputOber = inputImes.replaceAll("ober", 'o');
    let inputUfat = inputOber.replaceAll("ufat", 'u');

    let inputDesencriptado = inputUfat;

    console.log(inputDesencriptado);

    document.getElementById('msg').value = inputDesencriptado;
}