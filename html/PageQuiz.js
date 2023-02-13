const questions = [
    {
        'que': '  Two HTML tags that are present at the same level are called_______.',
        'a': 'Parent',
        'b': 'Children',
        'c': 'Siblings',
        'd': 'None of the above',
        'correct': 'c'
    },
    {
        'que': '  What content would you typically place within the head tags?',
        'a': 'Content that is not supposed to be visible on the page.',
        'b': 'Only the title tags',
        'c': 'Nothing all content should be avoided',
        'd': 'None of the above',
        'correct': 'a'
    },
    {
        'que': '  What are the two core sections in an HTML document?',
        'a': 'The <title> and <content> sections',
        'b': 'The <meta> and <article> sections',
        'c': 'The <head> and <body> sections',
        'd': 'None of the above',
        'correct': 'c'
    },
    {
        'que': 'What does the alt attribute do?',
        'a': 'Creats a valid HTML',
        'b': 'Provides a text alternative for search engines.',
        'c': 'Used with screen reasers',
        'd': 'All of the above',
        'correct': 'd'
    },
    {
        'que': ' Which of the following attributes is used to add a tooltip to a div or a element?',
        'a': 'tooltip',
        'b': 'hint',
        'c': 'title',
        'd': 'id',
        'correct': 'c'
    },
    {
        'que': '  Which of the following is the correct value of the target attribute within an anchor tag?',
        'a': '-blank',
        'b': '_blank',
        'c': '__blank',
        'd': '_new',
        'correct': 'b'
    },
    {
        'que': ' Which of the following tag is used to create a header row for the table ?',
        'a': 'table',
        'b': 'thead',
        'c': 'tbody',
        'd': 'tfoot',
        'correct': 'b'
    },
    {
        'que': '  Why are headers used in tables?',
        'a': 'The headers allow us to express labels for every column in a table.',
        'b': 'The table will not show without the thead tag.',
        'c': 'The table needs the th tag to show hgeadings.',
        'd': 'All of the above',
        'correct': 'a'
    },
    {
        'que': ' Which of these is are HTML5 semantic elements?',
        'a': 'header, footer, span',
        'b': 'footer, body, article',
        'c': 'header, footer, article',
        'd': 'article, section, span',
        'correct': 'c'
    },
    {
        'que': ' Which of the elements would not be typically used for primary content?',
        'a': 'aside, nav',
        'b': 'nav, section',
        'c': 'aside, article',
        'd': 'article, nav',
        'correct': 'a'
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