import express from 'express';
import db from "./desafiosQuery.js";

const router = express.Router();

//let answers;
let prova = [];

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

    //let idQuest;
    misturaArray(quest);
    //console.log(quest.length)
    
    //quest = quest.slice(3,quest.length);
    
    
    //console.log("depois do "+quest.length);
    return quest;
    //console.log(quest);
}

function getAlternativas(quest, answ){
    
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
    prova.push(quest);
    //Incluindo as respostas ja embaralhadas com a questao
    prova.push(answ);

}

router.get("/language/:lang", async (req, res)=>{
    const {lang} = req.params;
    const questao = await db.getQuestion(lang);
    const questFinal = workQuestion(questao);
 
    let answers = await db.getAnswer(questFinal[0].id_questao);
    getAlternativas(questFinal[0], answers);
    answers = [];
    console.log(questFinal[0].id_questao);
    answers = await db.getAnswer(questFinal[1].id_questao);
    getAlternativas(questFinal[1], answers);
    answers = [];
    console.log(questFinal[1].id_questao);
    answers = await db.getAnswer(questFinal[2].id_questao);
    getAlternativas(questFinal[2], answers);
    answers=[];
    console.log(questFinal[2].id_questao);
    
    res.send(prova);
    prova=[];
});


export default router;