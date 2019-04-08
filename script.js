var userInput = '';
$('.alert').hide();

$('#paper').click(function(){
    var paper = $('#paper').clone();
    $('#userChoice').html(paper);
    userInput = 'paper';
});

$('#rock').click(function(){
    var rock = $('#rock').clone();
    $('#userChoice').html(rock);
    userInput = 'rock';
});

$('#scissors').click(function(){
    var scissors = $('#scissors').clone();
    $('#userChoice').html(scissors);
    userInput = 'scissors';
});

$('img.clickable').click(function(){
    var uChoice = userInput;
    var computerChoice = getComputerChoice();
    var cpc = $('#' + computerChoice).clone();
    $('#computerChoice').html(cpc);
    console.log(computerChoice);
    var result = determineWinner(uChoice, computerChoice);
    // console.log(result);
    if(result === 'Won'){
        $('#win').show();
    }else if(result === 'Lost'){
        $('#loose').show();
    }else if(result === 'tied'){
        $('#tied').show();
    }
    $('#replay').show();
});

$('#replay').click(function(){
    location.reload();
})

function getComputerChoice(){
    var result = Math.floor(Math.random()*3)
    if(result === 0){
        return 'rock'
    } else if(result === 1){
        return 'paper'
    } else if(result === 2){
        return 'scissors'
    }
}

function determineWinner(userChoice, computerChoice){
    if(userChoice === 'bomb'){
        return 'Won'
    }
    if(userChoice === computerChoice){
        return 'tied'
    } else if(userChoice === 'rock'){
        if(computerChoice === 'scissors'){
            return 'Won'
        } else {
            return 'Lost'
        }
    } else if(userChoice === 'paper'){
        if(computerChoice === 'rock'){
            return 'Won'
        } else {
            return 'Lost'
        }
    } else if(userChoice === 'scissors'){
        if(computerChoice === 'paper'){
            return 'Won'
        } else {
            return 'Lost'
        }
    }
}
