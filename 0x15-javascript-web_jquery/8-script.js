$.ajax({
  url: 'https://swapi.co/api/films?format=json',
  type: 'GET',
  dataType: 'json',
  success: function (response) {
    const results = response.results;
    for (const i in results) {
      $('UL#list_movies').append('<li>' + results[i].title + '</li>');
    }
  }
});
