var $form = $('form#test-form'),
  url =
    'https://script.google.com/macros/s/AKfycby7djTgeLHEyQVW4ruOEBXsHQoJ5jldANy8_efvayGaB8Acyve1/exec';

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: 'GET',
    dataType: 'json',
    data: $form.serializeObject(),
  })
    .success
    // do something
    ();
});
