hours = [{s:'0815',e:'0930'},{s:'0940',e:'1100'},{s:'1105',e:'1250'},{s:'1305',e:'1420'},{s:'1430',e:'1545'}]

function appendList(v, h) {
    $('.table').append('<div class="row">'+v+'</div>');
}

function filterList(props) {
    curDate = moment();
    var todaysList = [];
    for (var i = 0; i < props.length; i++)
    {
        comTime = props[i].starttime;
        if(props[i].rrule == null) continue;
        uTime = props[i].rrule.until;
        classTime = moment(comTime.year + '-' + comTime.month + '-' + comTime.day);
        untilTime = moment(uTime.year + '-' + uTime.month + '-' + uTime.day);
        if(classTime.isSameOrBefore(curDate) && classTime.weekday() == curDate.weekday() && curDate.isSameOrBefore(untilTime))
        {
            appendList(props[i].name.split(" ")[0]);
        }
    }
    for (var i = 0; i < hours.length; i++) {
        st = moment(hours[i].s, 'hhmm')
        et = moment(hours[i].e, 'hhmm')
        if(st < moment() && moment() < et) $('.row').eq(i).addClass("current");
    }

}

$(document).ready(function() {
  url = "https://wilma.edu.hel.fi/schedule/export/students/546835/Wilma.ics?token=02546835x9ac972ffd350081f3103c9a41f2b271b&p=28&f=56&tstamp=1509006401";
  var req = $.get(url, function (rdata) {
      var jcal = ICAL.parse(rdata);
      var vcal = new ICAL.Component(jcal);
      var vevents = vcal.getAllSubcomponents("vevent");
      props = _.map(vevents,function(vevent) {
         return {
           name: vevent.getFirstPropertyValue("summary"),
           starttime: vevent.getFirstPropertyValue("dtstart"),
           endtime: vevent.getFirstPropertyValue("dtend"),
           description: vevent.getFirstPropertyValue("description"),
           rrule: vevent.getFirstPropertyValue("rrule")
           };
       });
       filterList(props);

    });
});
