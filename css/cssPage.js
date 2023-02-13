const questions = [
    {
        'que': '  The style element is ideally put inside the _______ element.',
        'a': 'head',
        'b': 'body',
        'c': 'title',
        'd': 'html',
        'correct': 'a'
    },
    {
        'que': '  If you want to target a unique element, which is the best choice for the selector?',
        'a': 'Class attribute',
        'b': 'ID attribute',
        'c': 'Tag name',
        'd': 'Add it as the style attribute',
        'correct': 'b'
    },
    {
        'que': '  which of the following enables you to target an <h1> element with its id set as heading ?',
        'a': '.heading',
        'b': '#heading',
        'c': 'heading',
        'd': 'None of the aboveh1',
        'correct': 'b'
    },
    {
        'que': 'Which of the following operators is used to target a direct child element?',
        'a': '>',
        'b': '~',
        'c': '+',
        'd': 'Whitespace',
        'correct': 'a'
    },
    {
        'que': ' The <link> tag is used to link to _____ style sheets.',
        'a': 'Internal',
        'b': 'Ecternal',
        'c': 'Embedded',
        'd': 'Linked',
        'correct': 'b'
    },
    {
        'que': '  Select the correct syntax for font property.',
        'a': '.textClass{font: 15px};',
        'b': '.textClass{font-size: 15px};',
        'c': '.textClass{font.size = 15px};',
        'd': '.textClass{font-size = 15px};',
        'correct': 'b'
    },
    {
        'que': 'The font-size property sets the ______ of a font ?',
        'a': 'color',
        'b': 'Margin',
        'c': 'Pixel',
        'd': 'Size',
        'correct': 'd'
    },
    {
        'que': '  Why are headers used in tablesWhich HTML attribute is used to define inline styles?',
        'a': 'class',
        'b': 'font',
        'c': 'styles',
        'd': 'style',
        'correct': 'd'
    },
    {
        'que': ' How do you make each word in a text start with a capital letter?',
        'a': 'text-transform:capitalize',
        'b': 'transform:capitalize',
        'c': 'You cant do that with CSS',
        'd': 'text-style:capitalize',
        'correct': 'a'
    },
    {
        'que': 'What is the default value of the position property?',
        'a': 'absolute',
        'b': 'static',
        'c': 'relative',
        'd': 'fixed',
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