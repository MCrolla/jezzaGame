$(document).ready(function () {
    //Hides all elements at start of game
    $("p,img, button.restart").hide();

    //shows first Q after button is clicked
    $(".getStarted").on('click', () => {
        $(".getStarted").hide();
        $(".intro").show();
        $(".one").show();
        $(".opendoor, .nothome, .daftcunt").show();
        console.log("hij doet het")
    });

//correct answer Q one
    $(".opendoor").on('click', () => {
        $(".opendoor, .nothome, .daftcunt").hide();
        $(".two").show();
        $(".givehamster, .ransome, .alreadydead").show();
    });

    // wrong answers question one
    $(".nothome, .daftcunt").on('click', () => {
        wrongAnswer()
    });

//this function restarts the game
    function wrongAnswer() {
        $(".intro, .question, .opendoor, .nothome, .daftcunt").hide();
        $('button.restart, img').show();
        $('button.restart').on('click', () => {
            $("p, img, button.restart").hide();
            $('.getStarted').show();
        })
    }
});