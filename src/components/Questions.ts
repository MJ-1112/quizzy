 type ques ={
    id:number;
    question: string;
    answer: string
}

export const quizQuestions: ques[]=[
    {id:1,question:"What is the capital of Australia?", answer: "Canberra"},
    {id:2,question:"Which planet is known as the Red Planet?", answer: "Mars"},
    {id:3,question:"Who wrote the play Romeo and Juliet?", answer: "William Shakespeare"},
    {id:4,question:"What is the largest ocean on Earth?", answer: "Pacific Ocean"},
    {id:5,question:"In which year did India gain independence?", answer: "1947"},
    {id:6,question:"Who is known as the 'Father of Computers'?", answer: "Charles Babbage"},
    {id:7,question:"Which element has the chemical symbol 'O'?", answer: "Oxygen"},
    {id:8,question:"How many continents are there in the world?", answer: "7"},
    {id:9,question:"What is the currency of Japan?", answer: "Yen"},
    {id:10,question:"Who painted the Mona Lisa?", answer: "Leonardo da Vinci"},

]

type opt= {
    option1: string;
    option2: string;
    option3: string;
    option4: string;
}

export const quizOptions: opt[] =[
    {option1:"Sydney", option2:"Melbourne",option3:"Canberra",option4:"Brisbane"},
    {option1:"Venus", option2:"Mars",option3:"Jupiter",option4:"Saturn"},
    {option1:"Charles Dickens", option2:"William Shakespeare",option3:"Leo Tolstoy",option4:"Mark Twain"},
    {option1:"Atlantic Ocean", option2:"Pacific Ocean",option3:"Indian Ocean",option4:"Artcic Ocean"},
    {option1:"1945", option2:"1947",option3:"1950",option4:"1952"},
    {option1:"Alan Turing", option2:"Charles Babbage",option3:"Thomas Edison",option4:"Isaac Newton"},
    {option1:"Oxygen", option2:"Osmium",option3:"Oxide",option4:"Olivine"},
    {option1:"5", option2:"6",option3:"7",option4:"8"},
    {option1:"Dollar", option2:"Won",option3:"Yen",option4:"Peso"},
    {option1:"Pablo Picasso", option2:"Leonardo da Vinci",option3:"Vincent van Gogh",option4:"Claude Monet"},
]
