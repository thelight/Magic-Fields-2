jQuery(document).ready(function($) {
  mf_suggest_labels = function () {

    $('.options_label input[name*=mf_posttype]:text').each(function(index,value) {
      rel = $(this).attr('rel');
      label = $('#posttype-label').val();
      rel = rel.replace('%s',label);
      $(this).val(rel);
    });
  }

  if( $('#suggest-labels:checked').val() != undefined ) {
      $('#posttype-label').change(mf_suggest_labels);
  }

  $('#suggest-labels').click(function() {
    if($('#suggest-labels:checked').val() != undefined) {
      $('#posttype-label').change(mf_suggest_labels);
    } else {
      $('#posttype-label').unbind('change');
    }
  });
});
