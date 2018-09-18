$.getJSON("https://api.github.com/repos/sunsetstation/sunsetstation/pulls?state=open", function(data) {
    var items = [];
    var mergeStatus = '';
    $.each(data, function(key, val) {
        if (key < 5) {
            if (data[key]['merged_at'] == null) {
                mergeStatus = "images/closed.svg";
            } else {
                mergeStatus = "images/merged.svg";
            }
            items.push("<div class='pull-request'><a href='" + data[key]['user']['html_url'] + "'><img class='avatar' src='" + data[key]['user']['avatar_url'] + "'></img></a><a href='" + data[key]['html_url'] + "'><h5 class='title'>" + "<img class='mergestatus' src='" + mergeStatus + "'>" + data[key]['title'] + "</h5></a>" + "<p>" + data[key]['body'] + "<br />By <a href='" + data[key]['user']['html_url'] + "'>" + data[key]['user']['login'] + "</a></p></div>");
        };
    });
    $("<ul/>", {
        "class": "pr-list",
        html: items.join("")
    }).appendTo(".recent-pr");
});
