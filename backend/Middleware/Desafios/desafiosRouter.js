import express from 'express';
import db from "./desafiosQuery.js";

const router = express.Router();

//let answers;
let prova = [];
//let cont = 0;

// Função para embaralhar as respostas
function misturaArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo um elemento aleatório
        let res = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[res]] = [arr[res], arr[i]];
    }
    // Retornando array embaralhado
    return arr;
    //console.log(arrayAnswers);
}

function workQuestion(quest){

    misturaArray(quest);
    return quest;
}

function getAlternativas(quest, answ, cont){
    let prov =[];
    
    let perg;
    // assegurando a resposta correta
    let correct = answ[0];
    //excluindo a resposta correta do array
    answ.shift();
    //embaralhando as respostas erradas
    misturaArray(answ);
    //pegando as tres primeiras respostas
    answ = answ.slice(0,3);
    //incluindo a resposta correta novamente nas alternativas
    answ.push(correct);
    //Embaralhando novamente o array de respostas com a resposta correta inclusa
    misturaArray(answ);
    //mandando a resposta correta no final do array junto com as respostas erradas
    answ.push(correct);
    //Incluindo a questao no array de prova
    perg ={
        id_questao: quest.id_questao,
        questao: quest.questao,
        alternativas:[
            {
                id: cont,
                alternativa: answ[0].resposta_correta
            },
            {
                id: cont+1,
                alternativa: answ[1].resposta_correta
            },
            {
                id: cont+2,
                alternativa: answ[2].resposta_correta
            },
            {
                id: cont+3,
                alternativa: answ[3].resposta_correta
            }
        ],
        corect: answ[4].resposta_correta,
    }
    
    prova.push(perg);
    //console.log(prova[0].questao);

}

router.get("/language/:lang", async (req, res)=>{
    const {lang} = req.params;
    const questao = await db.getQuestion(lang);
    const questFinal = workQuestion(questao);
    //console.log(questFinal)

 
    //let answers = await db.getAnswer(questFinal[0].id_questao, questFinal[1].id_questao, questFinal[2].id_questao);
    //let respostas = answers.slice(0,3);
    //answers = answers.sort();
   // console.log(respostas);
    
    //getAlternativas(questFinal[0], answers[0], 0);
    //getAlternativas(questFinal[1], answers[1], 4);
    //getAlternativas(questFinal[0], answers[0], 0);
    let answers = await db.obterRespostas(questFinal[0].id_questao);
    getAlternativas(questFinal[0], answers, 0);
    //console.log(answers)
    answers = [];
    //console.log(questFinal[0].id_questao);
    answers = await db.obterRespostas(questFinal[1].id_questao);
    getAlternativas(questFinal[1], answers, 4);
    answers = [];
    //console.log(questFinal[1].id_questao);
    answers = await db.obterRespostas(questFinal[2].id_questao);
    getAlternativas(questFinal[2], answers, 8);
    answers=[];
    //console.log(questFinal[2].id_questao);
    //console.log(prova[0].questao);
    
    res.send(prova);
    //console.log(prova);
    prova=[];
    //cont = 0;
});


export default router;