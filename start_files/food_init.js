$(document).ready(function() {
  url = "http://198.20.92.8:8888/";
  var req = $.get(url, function (data) {
    var elems = $(data);
    days = $('.ruoka-header-ruoka', elems);
    weekday = moment().weekday();
    food = days.eq(weekday-1).html();
    $('.ruoka').append('<div class="ruoka-row">' + food + '</div>');
  });
});
