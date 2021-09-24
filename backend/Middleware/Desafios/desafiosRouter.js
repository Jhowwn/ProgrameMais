import express from 'express';
import db from "./desafiosQuery.js";

const router = express.Router();

let questao;
let answers;

// Função para embaralhar as respostas
function misturaResposta(arrayAnswers) {
    // Loop em todos os elementos
    for (let i = arrayAnswers.length - 1; i > 0; i--) {
        // Escolhendo um elemento aleatório
        let res = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arrayAnswers[i], arrayAnswers[res]] = [arrayAnswers[res], arrayAnswers[i]];
    }
    // Retornando array embaralhado
    return arrayAnswers;
    //console.log(arrayAnswers);
}

function getAlternativas(){
    
    // assegurando a resposta correta
    const correct = answers[0];
    //excluindo a resposta correta do array
    answers.shift();
    //embaralhando as respostas erradas
    misturaResposta(answers);
    //pegando as tres primeiras respostas
    answers.slice(0,3);
    //incluindo a resposta correta novamente nas alternativas
    answers.push(correct);
    //Embaralhando novamente o array de respostas com a resposta correta inclusa
    misturaResposta(answers);
    //mandando a resposta correta no final do array junto com as respostas erradas
    answers.push(correct);

    return answers;
}


router.get("/language/:lang", async (req, res)=>{
    const {lang} = req.params;
    questao = await db.getQuestion(lang);
    const id = questao[0].id_questao;
    answers = await db.getAnswer(id);
    const respostas = getAlternativas();
    //Incluindo as respostas ja embaralhadas com a questao
    questao.push(respostas);
    //console.log(question);
    res.send(questao);
});


export default router;