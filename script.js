const caixaPrincipal = document.querySelector("caixa-principal");
const caixaPergunta = document.querySelector("caixa-perguntas");
const caixaAlternativas = document.querySelector("caixa-alternativas");
const caixaResultado = document.querySelector("caixa-resultados");
const textoResultado = document.querySelector("texto-resultado");

const perguntas = [
    {
        enunciado: "1 Qual é uma das principais causas da poluição nos mares?"
        alternativas: [
            "A) Descarte inadequado de plásticos e resíduos."
            "B) Resíduos naturais como folhas e galhos"
        ]
    },
    {
        enunciado: "2 O que é microplástico?",
        alternativas: [
            "A) Pequenas partículas de plástico resultantes da degradação de produtos maiores.",
            "B) Pequenas partículas de areia encontradas em praias."
        ]
    }
];




let atual =0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas ();
}

function mostraAlternativas (){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}
mostraPergunta()