let words = extWords;
let alreadyGenerated = [ ];
var question = displayguessedword();
var dashletters;
var score = 0;
function generateRandomword() {
    let randomNum = Math.floor(Math.random() * 999);
    let randomWord = words[randomNum];
    if(!alreadyGenerated.includes(randomNum) && randomWord.length>=3){
        alreadyGenerated.push(randomNum);
        console.log('random word' ,randomWord)
        console.log('random number', randomNum)
        return randomWord;
    }
    else{
        generateRandomword()
    }
    
} 
function displayguessedword()
{
    let generateWord = generateRandomword().toUpperCase();
    // console.log(generateWord)
    let generateWordlength = generateWord.length;
    let generateWordarray = generateWord.split('');
    let wordTobeDisplayed;
    switch(generateWordlength){
        case 3:
            wordTobeDisplayed =`A Three Letter Word ${generateWordarray[0]}**`
            dashletters = 'A Three Letter Word';
        break;
        case 4:
            wordTobeDisplayed =`A Four Letter Word ${generateWordarray[0]}**${generateWordarray[3]}`
            dashletters = 'A Four Letter Word';
        break;
        case 5:
            wordTobeDisplayed =`A Five Letter Word ${generateWordarray[0]}***${generateWordarray[4]}`
            dashletters = 'A Five Letter Word';
        break;
        case 6:
            wordTobeDisplayed =`A Six Letter Word ${generateWordarray[0]}*${generateWordarray[2]}**${generateWordarray[5]}`
            dashletters = 'A Six Letter Word';
        break;
        case 7:
            wordTobeDisplayed =`A Seven Letter Word ${generateWordarray[0]}**${generateWordarray[3]}**${generateWordarray[6]}`
            dashletters = 'A Seven Letter Word';
        break;
        case 8:
            wordTobeDisplayed =`A Eight Letter Word ${generateWordarray[0]}**${generateWordarray[3]}***${generateWordarray[7]}`
            dashletters = 'A Eight Letter Word';
        break;
        case 9:
            wordTobeDisplayed =`A Nine Letter Word ${generateWordarray[0]}**${generateWordarray[3]}*${generateWordarray[5]}**${generateWordarray[8]}`
            dashletters = 'A Nine Letter Word';
        break;
        case 10:
            wordTobeDisplayed =`A Ten Letter Word ${generateWordarray[0]}***${generateWordarray[4]}*${generateWordarray[6]}**${generateWordarray[9]}`
            dashletters = 'A Ten Letter Word';
        break;
        case 10:
            wordTobeDisplayed =`A Eleven Letter Word ${generateWordarray[0]}**${generateWordarray[3]}*${generateWordarray[5]}*${generateWordarray[7]}**${generateWordarray[10]}`
            dashletters = 'A Eleven Letter Word';
        break;
        default:
            wordTobeDisplayed=`A ${generateWordlength} letter word starts with ${generateWordarray[0]} and ends with ${generateWordarray[length-1]}`
 }
 var questionel = document.querySelector('.words');
 questionel.innerText = wordTobeDisplayed;
//  console.log(generateWord);
 return generateWord;
}
function Check()
{
    var answer = document.querySelector('#userinput').value.toUpperCase();
    if(question == answer ){
        score +=1;
        var scoreel = document.querySelector('.scorenum');
        scoreel.innerText = score;
        var messageel = document.querySelector('.message');   
        messageel.innerText = 'Good Job!!!👍';
        let questionel = document.querySelector('.words');
        questionel.innerText = dashletters+' '+question;

    }
    else{
        var messageel = document.querySelector('.message');
        messageel.innerText = 'Try Again!!!😔😔😔';
    }
}
function NxtQuestion(){
    question = displayguessedword();
    document.querySelector('#userinput').value='';
    var msg = document.querySelector('.message');
    msg.innerText = 'Start Guessing...'
}
