// $("h1").css("color", "red");

// $("h1").css("color", "green");

// $("button").text("Dont't click me");
// $("button").html("<em>Hey</em>");

// $("h1").addClass("big-title");

// $("a").attr("href", "https://wwww.yahoo.com");

// $("h1").click(function() {
//     $("h1").css("color", "purple")
// });


// $("button").click(function () {
//     $("h1").css("color", "purple");
// });

// $("input").keydown(function(event) {
//     console.log(event.key)
// })

// $(document).keydown(function(event) {
//     $("h1").text(event.key);
// })

// $("h1").on("mouseover", function() {
//     $("h1").css("color", "purple")
// });

$("button").on("click", function() {
    $("h1").animate({margin: "20%"});
});