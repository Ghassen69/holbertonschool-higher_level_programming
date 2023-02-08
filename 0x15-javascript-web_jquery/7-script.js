$.ajax({
  url: 'https://swapi.co/api/people/5/?format=json',
  type: 'GET',
  dataType: 'json',
  success: function (data) {
    $('DIV#character').text(data.name);
  }
});
