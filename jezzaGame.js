$(document).ready(function () {
//Hides everything, except for start button
    $(" div.story, .hideOnLoad, .restartButton").hide();

    //Shows first part of the story, after start button is clicked
    $(".getStarted").on('click', () => {
        $("div.story, .hideOnLoad").show();
        $(".getStarted").hide();
    });


    $("#option1").click(function () {
        $("p").append("<p>I am the hamster killer</p>")
        $("#firstQuestion, #option1, #option2, #option3").hide()
    });

    $("#option2, #option3").click(function () {
        $("p").append("<p>GET OUT OF MY STUDIO</p>")
        $("#firstQuestion, #option1, #option2, #option3").hide()
        $("#restart").show()
    });

    $(".restartButton").on('click', () =>{
            $("#firstQuestion, .hideOnLoad").show();
        $("p").hide();
        });

});