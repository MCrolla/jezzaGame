$(document).ready(function () {
    var score = -1;
    //Hides all elements at start of game
    $("p, button.restart, #logoHeaderSmall, .imgRyan, .imgJemma").hide();
    console.log(score);

    //shows first Q after button is clicked
    $(".getStarted").on('click', () => {
        $(".getStarted").hide();
        $(".wobblyHead").hide();
        $("#header").hide();
        $("#logoHeaderSmall").show();
        $(".intro").show();
        $(".one").show();
        $(".imgRyan, .imgJemma").show();
        $(".opendoor, .nothome, .daftcunt").show();

        updateScoreboard();
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
        $('button.restart').show();
        $(".opendoor, .nothome, .daftcunt").hide();
        $('button.restart').on('click', () => {
            $("p, button.restart, #logoHeaderSmall, .imgRyan, .imgJemma").hide();
            $(".getStarted").show();
            $(".wobblyHead").show();
            $("#header").show();
        })
    }

    function updateScoreboard(){
        score++;
        $("#scoreboard").html(score);
        $("#scoreboard").show();
    }
});