$(document).ready(function(){
$('#download').click(function(){
  $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data){
    console.log(data);

    var pname=$('<p></p>');
    pname.text(data.imie);
    $('#dane-programisty').append(pname);

    var psurname=$('<p></p>');
    psurname.text(data.nazwisko);
    $('#dane-programisty').append(psurname);

    var pprofession=$('<p></p>');
    pprofession.text(data.zawod);
    $('#dane-programisty').append(pprofession);

    var pfirm=$('<p></p>');
    pfirm.text(data.firma);
    $('#dane-programisty').append(pfirm);

  });
});

});