var arrayOfQuotes = [
    {
        quote: '“Be yourself; everyone else is already taken.”',
    author : '― Oscar Wilde'
    },

    {
        quote : '“So many books, so little time.”',
        author : '― Frank Zappa'
        },

    {
        quote: '“A room without books is like a body without a soul.”',
        author : '― Marcus Tullius Cicero'
        },

    {
        quote : '“Be yourself; everyone else is already taken.”',
        author : '― Oscar Wilde'
        },

    {
        quote : '“You only live once, but if you do it right, once is enough.”',
        author : '― Mae West'
        },

    {
        quote : '“Be the change that you wish to see in the world.”',
        author : '― Mahatma Gandhi'
        },

    {
        quote : '“A friend is someone who knows all about you and still loves you.”',
        author : '― Elbert Hubbard'
        },


    {
        quote : '“Always forgive your enemies; nothing annoys them so much.”',
        author : '― Oscar Wilde'
        },

    {
        quote : '“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
        author : '― Mahatma Gandhi'
        },



    {
        quote : '“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”',
        author : '― Ralph Waldo Emerson'
        },



    {
        quote : '“Insanity is doing the same thing, over and over again, but expecting different results.”',
        author : '― Narcotics Anonymous'
        },


    {
        quote: '“It is better to be hated for what you are than to be loved for what you are not.”',
        author : '― Andre Gide, Autumn Leaves'
        },

    {
        quote : '“We accept the love we think we deserve.”',
        author : '― Stephen Chbosky'
        },

    {
        quote : '“I am so clever that sometimes I do not understand a single word of what I am saying.”',
        author : '― Oscar Wilde'
        },
]

// function randomQuot(){
//     var resultsQuot = Math.floor(Math.random() * arrayOfQuotes.length )
//     document.getElementById("quoteOutput").innerHTML = arrayOfQuotes[resultsQuot].quote;
//     document.getElementById("authorOutput").innerHTML = arrayOfQuotes[resultsQuot].author;
// }

var arrAll = []; 

function randomSelector(arrayLength) {
    if (arrAll.length === arrayLength) {
        console.log("All quotes have been shown.");
        arrAll = [];
    }

    var resultsQuot;
    do {
        resultsQuot = Math.floor(Math.random() * arrayLength);
    } while (arrAll.includes(resultsQuot)); 

    arrAll.push(resultsQuot);
    return resultsQuot;
}

function randomQuot() {
    var resultsQuot = randomSelector(arrayOfQuotes.length);
    document.getElementById("quoteOutput").innerHTML = arrayOfQuotes[resultsQuot].quote;
    document.getElementById("authorOutput").innerHTML = arrayOfQuotes[resultsQuot].author;
}

