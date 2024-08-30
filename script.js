const caixaPrincipal = document.querySelector("caixa-principal");
const caixaPergunta = document.querySelector("caixa-perguntas");
const caixaAlternativas = document.querySelector("caixa-alternativas");
const caixaResultado = document.querySelector("caixa-resultados");
const textoResultado = document.querySelector("texto-resultado");

const perguntas = [
    {
        enunciado: "Pergunta 1"
        alternativas: [
            "Alternativa 1"
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
];




let atual =0;
let perguntaAtual;

fuction mostra 