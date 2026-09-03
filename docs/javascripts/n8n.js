function fFetchWorkflowData() {
  var dataFile='../n8n/' + $('#demo').attr('data-file') +'.json';

  $.getJSON(dataFile, function(data) {
    fBuildN8NComponent(JSON.stringify(data));
  })
  .fail(function(jqxhr, textStatus, error) {
    console.error("Request Failed: " + textStatus + ", " + error);
  });
}

function fBuildN8NComponent(data){

  $('#demo').attr({
    'workflow':data,
    'theme':'dark',
    'frame':'true'
    })
}