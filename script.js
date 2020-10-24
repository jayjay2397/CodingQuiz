//Quiz questions

var questions = [{
    title: "Which of the following function of an array object adds one or more elements to the front of an array and returns the new length of the array?",
    choices: ["unshift( )", "sort( )", "splice( )", "toString( )"],
    answer: "unshift( )"
},
{
    title: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
    choices: ["last( )", "put( )", "push( )", "pop( )"],
    answer: "push( )"
},
{
    title: " Which built-in method returns the characters in a string beginning at the specified location?",
    choices: ["substr( )", "getSubstring( )", "slice( )", "None of the above."],
    answer: "substr( )"
},
{
    title: "Which of the following function of an array object adds and/or removes elements from an array?",
    choices: ["toSource( )", "sort( )", "unshift( )", "splice( )"],
    answer: "splice( )"
},
{
    title: "Which of the following function of String object combines the text of two strings and returns a new string?",
    choices: ["add( )", "concat( )", " merge( )", "append( )"],
    answer: "concat( )"
}]

// function variables 

var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

//