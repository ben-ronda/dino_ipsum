$(document).ready(function(){
  $('#dino').click(function(){
    var paragraphs = $('#paragraphs').val();
    var wordcount = $('#wordcount').val();
    console.log(paragraphs);
    $('#paragraphs').val("");
    $('#wordcount').val("");
    $.get('http://dinoipsum.herokuapp.com/api/',
    {
      format: 'html',
      paragraphs: paragraphs,
      words: wordcount
    },
    function(data, _status, _xhr){
      $('#result').html(data);
    });
  });
});
