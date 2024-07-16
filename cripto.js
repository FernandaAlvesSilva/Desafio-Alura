let mensagem = '';
let novaMensagem = '';
let dicionario = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function desapareceCopia() {
    let botao = document.getElementById('botaoCopia');
    botao.style.display = 'none';
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.getElementById(tag);
    campo.value = texto; 
}

function getInput() {
    let texto = document.getElementById('inputText');
    let mensagem_text = texto.value;
    mensagem = mensagem_text.toLowerCase();
    return mensagem;
}

function eraseInput() {
    let texto = document.getElementById('inputText');
    texto.value = '';
}

function criptografar() {
    novaMensagem = '';
    getInput();
    if (mensagem === '') {
        return;
    } else {
        for (let letra of mensagem) {
            if (letra in dicionario) {
                novaMensagem += dicionario[letra];
            } else {
                novaMensagem += letra;
            }
        }
        document.querySelector(".conteudo-um").style.display = "none";
        document.querySelector(".conteudo-dois").style.display = "block";
        document.getElementById("outputText").style.display = "block";
        exibirTextoNaTela('outputText', novaMensagem);
        eraseInput();
        document.getElementById("botaoCopia").style.display = "block";
    }
}

function descriptografar() {
    novaMensagem = '';
    getInput();
    if (mensagem === '') {
        return;
    } else {
        let textoTemporario = mensagem;

        for (let chave in dicionario) {
            let valor = dicionario[chave];
            textoTemporario = textoTemporario.split(valor).join(chave);
        }

        novaMensagem = textoTemporario;
        
        document.querySelector(".conteudo-um").style.display = "none";
        document.querySelector(".conteudo-dois").style.display = "block";
        document.getElementById("outputText").style.display = "block";
        exibirTextoNaTela('outputText', novaMensagem);
        eraseInput();
        document.getElementById("botaoCopia").style.display = "block";
    }
}


function copiar() {
    let copyText = document.getElementById('outputText');
    copyText.select();
    document.execCommand('copy');
}

