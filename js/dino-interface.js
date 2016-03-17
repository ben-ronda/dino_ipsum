$(document).ready(function(){
  $('#dino').click(function(html){
    var paragraphs = $('#paragraphs').val();
    var wordcount = $('#wordcount').val();
    $('#paragraphs').val("");
    $('#wordcount').val("");
    $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=' + paragraphs + '&words=' + wordcount)
    {
      $('#result').html(html);
    });
  });
});
