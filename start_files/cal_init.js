var vev
$(document).ready(function() {
  url = "https://wilma.edu.hel.fi/schedule/export/students/546835/Wilma.ics?token=02546835x9ac972ffd350081f3103c9a41f2b271b&p=28&f=56&tstamp=1509006401";
  var raw_data = $.get(url, function (rdata) {
    data = raw_data.split('\n');
    for (var i = 0; i < data.length; i++) {
      if(data[i][0] == 'S')
      {
        vals = data[i].split(' ');
      }
    }
    });
  });
