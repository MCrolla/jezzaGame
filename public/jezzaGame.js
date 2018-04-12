$(document).ready(function () {
    var score = 0;
    //Hides all elements at start of game
    $("p,img, button.restart").hide();
    console.log(score);

    //shows first Q after button is clicked
    $(".getStarted").on('click', () => {
        $(".getStarted").hide();
        $(".intro").show();
        $(".one").show();
        $(".opendoor, .nothome, .daftcunt").show();
        $("#scoreboard").html(score);
        $("#scoreboard").show();
            });

//correct answer Q1
    $(".opendoor").on('click', () => {
        $(".answer").hide();
        $(".two").show();
        $(".givehamster, .ransome, .alreadydead").show();
        updateScoreboard();
        console.log(score);
    });

    //correct answer Q2
    $(".ransome").on('click', () => {
        $(".answer").hide();
        $(".three").show();
        $(".shove, .giveup, .pickup ").show();
        updateScoreboard();
        console.log(score);
    });

    //correct answer Q3
    $(".pickup").on('click', () => {
        $(".answer").hide();
        $(".four").show();
        $(".cry, .beg, .hurl ").show();
        updateScoreboard()
        console.log(score);
    });

    // wrong answers question one
    $(".nothome, .daftcunt").on('click', () => {
        wrongAnswer()
    });

    //wrong answers Q2
    $(".givehamster, .alreadydead").on('click', () => {
        wrongAnswer()
    });

    //wrong answer Q3
    $(".shove, .giveup").on('click', () => {
        wrongAnswer()
    });


//this function restarts the game
    function wrongAnswer() {
        $(".intro, .question, .answer").hide();
        $('button.restart, img').show();
        $('button.restart').on('click', () => {
            $("p, img, button.restart").hide();
            $('.getStarted').show();
            score = 0;
        })
    }

    function updateScoreboard(){
        score++;
        $("#scoreboard").html(score);
        $("#scoreboard").show();
    }
});