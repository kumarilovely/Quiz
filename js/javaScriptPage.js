const questions = [
    {
        'que': ' Inside which HTML element do we put the JavaScript?',
        'a': '<script>',
        'b': '<javaScript>',
        'c': '<scripting>',
        'd': '<js>',
        'correct': 'a'
    },
    {
        'que': ' <p id="demo">This is a demonstration.</p>',
        'a': 'document.getElementById("demo").innerHTML = "Hello World!";',
        'b': '#demo.innerHTML = "Hello World!";',
        'c': 'document.getElementByName("p").innerHTML = "Hello World!";',
        'd': 'document.getElement("p").innerHTML = "Hello World!";',
        'correct': 'a'
    },
    {
        'que': '  Where is the correct place to insert a JavaScript?',
        'a': 'Both the <head> section and the <body> section are correct',
        'b': 'The <head> section',
        'c': 'The <body> section',
        'd': 'None of the above',
        'correct': 'a'
    },
    {
        'que': 'What is the correct syntax for referring to an external script called "xxx.js"?',
        'a': '<script name="xxx.js">',
        'b': '<script src="xxx.js">',
        'c': '<script href="xxx.js>',
        'd': 'All of the above',
        'correct': 'a'
    },
    {
        'que': ' How do you write "Hello World" in an alert box?',
        'a': 'alertBox("Hello World");',
        'b': 'alert("Hello World");',
        'c': 'msgBox("Hello World");',
        'd': 'msg("Hello World");',
        'correct': 'b'
    },
    {
        'que': '  How do you create a function in JavaScript?',
        'a': '-function:myFunction()',
        'b': 'function = myFunction()',
        'c': 'function myFunction()',
        'd': 'Myfunction()',
        'correct': 'c'
    },
    {
        'que': ' How to write an IF statement in JavaScript?',
        'a': 'if i = 5 then',
        'b': 'if i = 5',
        'c': 'if i == 5 then',
        'd': 'if (i == 5)',
        'correct': 'c'
    },
    {
        'que': '  How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        'a': 'if i =! 5 then',
        'b': 'if (i <> 5)',
        'c': 'if i <> 5',
        'd': 'if (i != 5)',
        'correct': 'd'
    },
    {
        'que': ' How does a FOR loop start?',
        'a': 'for i = 1 to 5',
        'b': 'for (i <= 5; i++)',
        'c': 'for (i = 0; i <= 5; i++)',
        'd': 'for (i = 0; i <= 5)',
        'correct': 'c'
    },
    {
        'que': ' How can you add a comment in a JavaScript??',
        'a': '<!--This is a comment-->',
        'b': '//This is a comment',
        'c': 'This is a comment',
        'd': '/*This is comment*/',
        'correct': 'b'
    }
]

let index = 0;
let right = 0;
let wrong = 0;
let total = questions.length;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')

const loadQuestion = () => {
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index]
    quesBox.innerText = ` (${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if(ans == data.correct){
        right++;
    }else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked) {
                answer = input.value;
            } 
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById('box').innerHTML = `
    <h3> Thank You for Playing the Quiz...</h3>
    <h2> ${right} / ${total} are correct </h2>
    `
}


loadQuestion();