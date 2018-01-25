$(document).ready(function () {
  $('input:checkbox').on('click', function () {
    $('input:checkbox').not(this).prop('checked', false);
  });
});