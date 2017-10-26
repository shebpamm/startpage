$(document).ready(function() {
  url = "http://198.20.92.8:8888/";
  var req = $.get(url, function (data) {
    var elems = $(data);
    days = $('.ruoka-header-ruoka', elems);
    weekday = moment().weekday();
    food = days.eq(weekday-1).html();
    for (var i = 0; i < 5; i++) {
        if(i+1 == weekday) $('.ruoka').append('<div class="ruoka-row current">' + days.eq(i).html() + '</div>');
        else $('.ruoka').append('<div class="ruoka-row">' + days.eq(i).html() + '</div>');
    }

  });
});
