//Variáveis
const scoreContainer = document.querySelector("#score-container");
const questionsContainer = document.querySelector("#questions-container");
const question = document.querySelector("#question");
const answersContainer = document.querySelector("#answers-container");
const letters = ["a", "b", "c", "d"];

let points = 0;
let actualQuestion = 0;

//Questões e respostas

const questions = [
    {
        "question" : "Quantos Livros tem a Bíblia ?",
        "answers" : [
            {
                "answer" : "67",
                "correct" : false
            },

            {
                "answer" : "60",
                "correct" : false
            },

            {
                "answer" : "66",
                "correct" : true
            },

            {
                "answer" : "58",
                "correct" : false
            }
        ]
    },

    {
        "question" : "Qual o nome do Apóstolo escolhido para substituir Judas Iscariotes?",
        "answers" : [
            {
                "answer" : "Ananias",
                "correct" : false
            },

            {
                "answer" : "Tiago",
                "correct" : false
            },

            {
                "answer" : "Barnabé",
                "correct" : false
            },

            {
                "answer" : "Matias",
                "correct" : true
            }
        ]
    },

    {
        "question" : "Quem fez o seguinte pedido a Jesus: Concede-nos que na tua glória nos assentemos, um à tua direita, e outro à tua esquerda.",
        "answers" : [
            {
                "answer" : "João e Pedro",
                "correct" : false
            },

            {
                "answer" : "Mateus e João",
                "correct" : false
            },

            {
                "answer" : "Tomé e Pedro",
                "correct" : false
            },

            {
                "answer" : "Tiago e João",
                "correct" : true
            }

        ]
    },

    {
        "question" : "Quem pediu a Deus para que sua morte fosse adiada e ganhou mais 15 anos de vida?",
        "answers" : [
            {
                "answer" : "Josias",
                "correct" : false
            },

            {
                "answer" : "Isaías",
                "correct" : false
            },

            {
                "answer" : "Ezequias",
                "correct" : true
            },

            {
                "answer" : "Uzias",
                "correct" : false
            }
        ]
    },

    {
        "question" : "Complete o versículo: 'Da mesma forma o Espírito nos ajuda em nossa fraqueza, pois não sabemos como orar, mas o Espírito intercede por nós com'",
        "answers" : [
            {
                "answer" : "Orações poderosas",
                "correct" : false
            },

            {
                "answer" : "Orações incessantes",
                "correct" : false
            },

            {
                "answer" : "Orações inexprimíveis",
                "correct" : false
            },

            {
                "answer" : "Gemidos inexprimíveis",
                "correct" : true
            }
        ]
    },

    {
        "question" : "Quantos livros tem o Antigo Testamento?",
        "answers" : [
            {
                "answer" : "39",
                "correct" : true
            },

            {
                "answer" : "37",
                "correct" : false
            },

            {
                "answer" : "29",
                "correct" : false
            },

            {
                "answer" : "41",
                "correct" : false
            }
        ]
    },

    {
        "question" : "Quantos livros tem o Novo Testamento?",
        "answers" : [
            {
                "answer" : "31",
                "correct" : false
            },

            {
                "answer" : "38",
                "correct" : false
            },

            {
                "answer" : "27",
                "correct" : true
            },

            {
                "answer" : "25",
                "correct" : false
            }
        ]
    },

    {
        "question" : "Onde está o versículo: 'Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus.' ?",
        "answers" : [
            {
                "answer" : "Efésios 2:8",
                "correct" : true
            },

            {
                "answer" : "Gálatas 3:3",
                "correct" : false
            },

            {
                "answer" : "João 2:5",
                "correct" : false
            },

            {
                "answer" : "Mateus 22:29",
                "correct" : false
            }
        ]
    },

    {
        "question" : " O hino '15' é muito cantado na PIBU; localize o seu nome.",
        "answers" : [
            {
                "answer" : "Bendito o Cordeiro",
                "correct" : false
            },

            {
                "answer" : "Exultação",
                "correct" : true
            },

            {
                "answer" : "Atribulado Coração",
                "correct" : false
            },

            {
                "answer" : "O Caminho da Cruz",
                "correct" : false
            }
        ]
    },

    {
        "question" : "Em Filipenses 1:21 quem disse isso: 'Porquanto, para mim, o viver é Cristo, e o morrer é lucro.' ",
        "answers" : [
            {
                "answer" : "Pedro",
                "correct" : false
            },

            {
                "answer" : "Tiago",
                "correct" : false
            },

            {
                "answer" : "Paulo",
                "correct" : true
            },

            {
                "answer" : "Tomé",
                "correct" : false
            }
        ]
    },

]

//quizz sendo substituido para primeira pergunta

function startQuizz() {
    //criar a primeria pergunta
    createQuestion(0);
}

//cria uma pergunta

function createQuestion(i){
//limpar a questão anterior
    const allButtons = answersContainer.querySelectorAll("button");
    allButtons.forEach(function (btn){
        btn.remove();
    });

    //alterando texto da pergunta
    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");

    //obtendo dados do objeto questions
    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;

    //inserir alternativas
    questions[i].answers.forEach(function(answer, i){
    
        //criar templates dinamicamente
        const answersTemplate = document.querySelector(".answer-template").cloneNode(true);
        const letterBtn = answersTemplate.querySelector(".option-letter");
        const questionAnswerBtn = answersTemplate.querySelector(".question-answer");

        //indice do array da const letters
        letterBtn.textContent = letters[i];

        //chave de answer da const questions
        questionAnswerBtn.textContent = answer['answer'];
        
        //inserindo atributo no answerTemplates
        answersTemplate.setAttribute("correct-answer", answer["correct"]);
        
        //removendo classes, para que o template seja idêntico aos botões de resposta, inclusive os estilos
        answersTemplate.classList.remove("answer-template");
        answersTemplate.classList.remove("hide");

        //inserir alternativas na tela
        answersContainer.appendChild(answersTemplate);

        //inserir evento nos botões de resposta
        answersTemplate.addEventListener("click",function(){
            checkAnswer(this);
        });
    });

    //incrementar o número da questão 
   actualQuestion++;
}

//checando o botão clicado
function checkAnswer(btn){
    
    //selecionando todos os botões
    const buttons = answersContainer.querySelectorAll("button");
    
    //verifica se as repostas estão corretas e adiciona classes nos botões
    buttons.forEach(function(button){
        if(button.getAttribute("correct-answer") === "true"){
            button.classList.add("correct-answer");

            //verifica se o usuario acertou a pergunta
            if(btn === button){
                points++
            }
        }
        else{
            button.classList.add("wrong-answer");
        }

    });
    
    nextQuestion();
}

//exibe a proxima questão no quizz
function nextQuestion(){

    //timer para o usuário ver as respostas
    setTimeout(function(){

        //verificar se ainda há perguntas
        if(actualQuestion >= questions.length){
            //menssagem de quiz finalizado
            messageQuizzFinished();
            console.log("quizz finalizado com sucesso");

        }
        
        //a cada 1.3 segundos é criada uma nova pergunta
        createQuestion(actualQuestion);
    },1300);

}

function messageQuizzFinished(){

    hideOrShowQuizz();

    //alterar dados da pontuação

    //calcular score
    const score = ((points/questions.length)*100).toFixed(2);

    //mostrar score porcentagem
    const porcentage = document.querySelector("#score-display span");
    porcentage.textContent = score.toString();

    //mostrar número de respostas corretas
    const answersCorrects = document.querySelector("#corrects");
    answersCorrects.textContent = points.toString();

    //mostrar quantidade de pergunta
    const answersQuantity = document.querySelector("#qtd-questions");
    answersQuantity.textContent = questions.length;
    
    //dar o feedback
    messageFeedback(answersCorrects);
}

//alterando a menssagem do feedback
function messageFeedback (answersCorrects){
    let messageCongratulations = document.querySelector("#congratulations");
    let acertos = parseInt(answersCorrects.textContent);

    if(acertos <= 3){
        return messageCongratulations.textContent = "Misericórdia! Precisa de 'mais' EBD na sua vida!"
    }
    else if(acertos <= 5){
        return messageCongratulations.textContent = "Precisa de 'Mais' EBD!"
    }

    else if(acertos <= 7){
        return messageCongratulations.textContent = "Você foi bem, mas pode melhorar. Bora estudar mais!"
    }

    else if(acertos <= 9){
        return messageCongratulations.textContent = "Parabéns, você está no caminho certo. Continue estudando!"
    }
    
    else if(acertos == 10){
        return messageCongratulations.textContent = "Crentão em. kkk continue assim"
    }

  
}

//mostrar ou ocultar pontuação
function hideOrShowQuizz(){
    questionsContainer.classList.toggle("hide");
    scoreContainer.classList.toggle("hide");
}

//reiniciar quizz
const restartBtn = document.querySelector("#restart");
restartBtn.addEventListener("click", function(){
    actualQuestion = 0;
    points = 0;
    hideOrShowQuizz();
    startQuizz();
});

//inicialização do quizz
startQuizz();

