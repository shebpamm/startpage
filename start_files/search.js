var cmds = ['help', 'time', 'drive', 'reddit'];

function triggerer(event) {
    searchbox = $('.searchbox').first();
    if(event.keyCode == 13) {
        window.location.href = "https://google.com/search?q=" + searchbox.val();
    }
    if (searchbox.val()[0] == ".") searchbox.autocomplete('enable');
    else searchbox.autocomplete('disable');
}

$( document ).ready(function() {
    searchbox = $('.searchbox').first();
    searchbox.keyup(triggerer);
    searchbox.autocomplete({
        lookup: function (query, done) {
            // Do Ajax call or lookup locally, when done,
            // call the callback and pass your results:
            var result = {
                suggestions: [
                    //TYPE DEFINES IF IT IS A LINK OR ACTION
                    //type 0 == ACTION
                    //type 1 == LINK
                    { "value": ".drive",    "data": "https://drive.google.com", "type": 1 },
                    { "value": ".reddit",   "data": "https://reddit.com", "type": 1},
                    { "value": ".time",     "data": 1, "type": 0 },
                    { "value": ".help",     "data": 0, "type": 0 }

                ]
            };

            done(result);
        },
        onSelect: function (suggestion) {
            if(suggestion.type == 1) {
                window.location.href = suggestion.data;
            }
            else {
                switch (suggestion.data) {
                    //Help
                    case 0:
                        alert("bruh");
                        break;
                    //Time
                    case 1:
                        swapClock();
                        break;
                    case 2:

                        break;
                    case 3:

                        break;
                    case 4:

                        break;
                    case 5:

                        break;
                    case 6:

                        break;
                    case 7:

                        break;
                    default:
                        alert("hm, there is an command but no action...")
                        break;

                }
            }
    }});
    searchbox.autocomplete('disable');
});
