console.log("We are using jQuery");
// $('p').click();
$('p').click(function(){
    console.log("You clicked on p");
    $(this).hide();
});