// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet',
    eventType: 'live',
    type: 'video',
    videoEmbeddable: 'true'
  });

  request.execute(function(response) {
    var str = JSON.parse(JSON.stringify(response.result));
    var sr = "<ul>";
    for (var obj in str.items){
        sr += "<li><iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/"+str.items[obj].id['videoId']+"\"></iframe></li>";
    }
    sr+="</ul>";
    $('#search-container').html('<p>' + sr + '</p>');
  });
}
