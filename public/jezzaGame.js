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
        $("#score").html(score);
        $("#score").show();
            });

//correct answer Q1
    $(".opendoor").on('click', () => {
        $(".answer").hide();
        $(".two").show();
        $(".givehamster, .ransome, .alreadydead").show();
        updateScore();
        });

    //correct answer Q2
    $(".ransome").on('click', () => {
        $(".answer").hide();
        $(".three").show();
        $(".shove, .giveup, .pickup ").show();
        updateScore();
        });

    //correct answer Q3
    $(".pickup").on('click', () => {
        $(".answer").hide();
        $(".four").show();
        $(".cry, .beg, .hurl ").show();
        updateScore()
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

    function updateScore(){
        score++;
        $("#score").html(score);
        $("#score").show();
    }

    $('#postScore').on('click', ()=> {
        const data ={ name: $('#name').val(),
            score: $('#score').text(),
        };
        $.ajax({
            url:'http://localhost:3000/newScores',
            type:"POST",
            data: JSON.stringify(data),
            contentType:"application/json; charset=utf-8",
            dataType:"json",
            success: function(){
            console.log('gelukt')
            }

        })
        })
    });