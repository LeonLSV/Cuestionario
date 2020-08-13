// select all elements
const start = document.getElementById("start");
const container = document.getElementById("container");
const logo = document.getElementById("logo");
const choices = document.getElementById("choices");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "En la siguiente gráfica ¿Qué harías?",
        imgSrc : "images/grafica.jfif",
        choiceA : "Retrasar la Purpura",
        choiceB : "Adelantar la Azul",
        choiceC : "Adelantar la Purpura",
        correct : "A"
    },{
        question : "Entre estas dos gráficas ¿A cual le aplicarias delay y de cuantos ms?",
        imgSrc : "images/grafica1.png",
        choiceA : "Azul 0.2 seg",
        choiceB : "Amarilla 0.2 seg",
        choiceC : "Azul 2 ms",
        correct : "C"
    },{
        question : "¿Qué filtro estoy usando? (El corte esta en 500 Hz)",
        imgSrc : "images/grafica2.png",
        choiceA : "Linkwitz Riler 4to orden",
        choiceB : "Butterworth 2do orden",
        choiceC : "Butterworth 4to orden",
        correct : "C"
    },{
        question : "¿Cuál será la suma resultante en 1KHz de las dos señales que se muestran en la imagen?",
        imgSrc : "images/grafica3.png",
        choiceA : "+3 dB",
        choiceB : "+0 dB",
        choiceC : "+6 dB",
        correct : "C"
    },{
        question : "¿Qué aplicarías y a q señal en este ejemplo?",
        imgSrc : "images/grafica4.jfif",
        choiceA : "Inversión de polaridad",
        choiceB : "Delay electrónico",
        choiceC : "Filtro All Pass",
        correct : "A"
    },{
        question : "¿Qué señal tiene más retraso en la imagen?",
        imgSrc : "images/grafica5.jfif",
        choiceA : "No estan retrasadas",
        choiceB : "Gráfica Azul",
        choiceC : "Gráfica Marrón",
        correct : "B"
    },{
        question : "Un filtro de 1er orden ¿Cuántos dBs cae?",
        imgSrc : "images/grafica6.png",
        choiceA : "3 dB",
        choiceB : "6 dB",
        choiceC : "9 dB",
        correct : "B"
    },{
        question : "Si hago un arreglo de subs gradiente y los separo 1.43m ¿Qué delay aplicarías? (a 20°)",
        imgSrc : "images/grafica7.png",
        choiceA : "4.16 ms",
        choiceB : "3.14 ms",
        choiceC : "5.12 ms",
        correct : "A"
    },{
        question : "Periodo de 344 Hz",
        imgSrc : "images/grafica8.png",
        choiceA : "2.1 ms",
        choiceB : "2.9 ms",
        choiceC : "3.4 ms",
        correct : "B"
    },{
        question : "Si ecualizo ¿Altero la fase?",
        imgSrc : "images/grafica9.png",
        choiceA : "Verdadero",
        choiceB : "Falso",
        choiceC : "No sé",
        correct : "A"
    },{
        question : "¿Qúe ventana FFT de Smaart es conveniente usar para ajustar un rango de frecuencias amplio?",
        imgSrc : "images/grafica10.png",
        choiceA : "32k",
        choiceB : "512",
        choiceC : "MTW",
        correct : "C"
    },{
        question : "¿Para qué sirve el FIND DELAY del Smaart?",
        imgSrc : "images/grafica11.png",
        choiceA : "Ajustar el delay",
        choiceB : "Sincronizar las gráficas y saber el delay total",
        choiceC : "Para poner las gráficas más bonitas",
        correct : "B"
    },{
        question : "¿Cuánto decae la señal al duplicar la distancia?",
        imgSrc : "images/grafica12.png",
        choiceA : "3 dB",
        choiceB : "12 dB",
        choiceC : "6 dB",
        correct : "C"
    },{
        question : "¿Qué se necesita para hacer un arreglo de sub gradiente?",
        imgSrc : "images/grafica13.png",
        choiceA : "Dly, inversión y sep de ¼ de longitud",
        choiceB : "Dly y separación de ¼ de longitud entre subs",
        choiceC : "Separación e inversión",
        correct : "A"
    },{
        question : "¿Qué se necesita para hacer un arreglo End Fired de 4 elementos?",
        imgSrc : "images/grafica14.png",
        choiceA : "Dly",
        choiceB : "Dly + separación ¼ long",
        choiceC : "Separación de ¼ long",
        correct : "B"
    },{
        question : "¿A qué rango de frecuencias afecta la Humedad?",
        imgSrc : "images/grafica15.png",
        choiceA : "Altas",
        choiceB : "Bajas",
        choiceC : "Medias",
        correct : "A"
    },{
        question : "¿Cuál es el periodo de 1 kHz?",
        imgSrc : "images/grafica16.png",
        choiceA : "1 ms",
        choiceB : "1 seg",
        choiceC : "100 ms",
        correct : "A"
    },{
        question : "¿Qué información podemos encontrar con el impulso?",
        imgSrc : "images/grafica17.png",
        choiceA : "Tiempo de arribos de señales",
        choiceB : "Reflexiones y Polaridad",
        choiceC : "Ambos respuestas son correctas",
        correct : "C"
    },{
        question : "¿A qué se le llama filtro de peine?",
        imgSrc : "images/grafica18.png",
        choiceA : "suma de 2 señales distintas desfasadas entre si",
        choiceB : "suma de 2 señales iguales desfasadas entre si",
        choiceC : "suma de 2 señales desfasadas entre si",
        correct : "B"
    },{
        question : "En la configuración del Smaart, debo...",
        imgSrc : "images/grafica19.png",
        choiceA : "Configurar los inputs y outputs",
        choiceB : "Probar el ruido rosa",
        choiceC : "Llamar al 911-LSV",
        correct : "A"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 30; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    logo.style.display = "none";

    renderQuestion();
    quiz.style.display = "flex";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "flex";
    choices.style.display = "none";
    qImg.style.display = "none";
    question.style.display = "none";
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    // choose the image based on the scorePerCent
    let img =
    (scorePerCent >= 80) ? "images/5.png" :
    (scorePerCent >= 60) ? "images/4.png" :
    (scorePerCent >= 40) ? "images/3.png" :
    (scorePerCent >= 20) ? "images/2.png" :
    (scorePerCent >= 0) ? "images/1.png" :
    "img/1.png";
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}