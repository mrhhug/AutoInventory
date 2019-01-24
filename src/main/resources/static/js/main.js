//https://stackoverflow.com/a/7220510
function syntaxHighlight(json) {
    if (typeof json !== 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

$('#getall-btn').click(function() {
    var method = "GET";
    var url="api/get/*";
    console.log(method + " : " + url);
    $('.response-body').html('Calling REST endpoint');
    $.ajax({
        type: method,
        url: url,
        success: function(result){
            var ret = "<table>";
            ret += "<tr><th>Make</th><th>Model</th><th>Color</th><th>VIN</th><th>Price</th></tr>";
            for (var i in result) {
                ret += "<tr>";
                ret += "<td>" + result[i]["make"] + "</td>";
                ret += "<td>" + result[i]["model"] + "</td>";
                ret += "<td>" + result[i]["color"] + "</td>";
                ret += "<td>" + result[i]["vin"] + "</td>";
                ret += "<td>" + result[i]["price"] + "</td>";
                ret += "</tr>";
            }
            ret += "</table>";
            $('.response-body').html(ret);
        },
        error: function(xhr, status, error) {
            $('.response-body').html(
                "status: " + status + "<br>" +
                "error: " + error + "<br>" +
                "xhr: " + "<pre>" + syntaxHighlight(xhr) + "</pre>"
            );
        }
    });
});

$('#getford-btn').click(function() {
    var method = "GET";
    var url="api/get/ford";
    console.log(method + " : " + url);
    $('.response-body').html('Calling REST endpoint');
    $.ajax({
        type: method,
        url: url,
        success: function(result){
            var ret = "<table>";
            ret += "<tr><th>Make</th><th>Model</th><th>Color</th><th>VIN</th><th>Price</th></tr>";
            for (var i in result) {
                ret += "<tr>";
                ret += "<td>" + result[i]["make"] + "</td>";
                ret += "<td>" + result[i]["model"] + "</td>";
                ret += "<td>" + result[i]["color"] + "</td>";
                ret += "<td>" + result[i]["vin"] + "</td>";
                ret += "<td>" + result[i]["price"] + "</td>";
                ret += "</tr>";
            }
            ret += "</table>";
            $('.response-body').html(ret);
        },
        error: function(xhr, status, error) {
            $('.response-body').html(
                "status: " + status + "<br>" +
                "error: " + error + "<br>" +
                "xhr: " + "<pre>" + syntaxHighlight(xhr) + "</pre>"
            );
        }
    });
});

$('#getchevy-btn').click(function() {
    var method = "GET";
    var url="api/get/chevy";
    console.log(method + " : " + url);
    $('.response-body').html('Calling REST endpoint');
    $.ajax({
        type: method,
        url: url,
        success: function(result){
            var ret = "<table>";
            ret += "<tr><th>Make</th><th>Model</th><th>Color</th><th>VIN</th><th>Price</th></tr>";
            for (var i in result) {
                ret += "<tr>";
                ret += "<td>" + result[i]["make"] + "</td>";
                ret += "<td>" + result[i]["model"] + "</td>";
                ret += "<td>" + result[i]["color"] + "</td>";
                ret += "<td>" + result[i]["vin"] + "</td>";
                ret += "<td>" + result[i]["price"] + "</td>";
                ret += "</tr>";
            }
            ret += "</table>";
            $('.response-body').html(ret);
        },
        error: function(xhr, status, error) {
            $('.response-body').html(
                "status: " + status + "<br>" +
                "error: " + error + "<br>" +
                "xhr: " + "<pre>" + syntaxHighlight(xhr) + "</pre>"
            );
        }
    });
});

$('#getcheap-btn').click(function() {
    var method = "GET";
    var url="api/get/cheap";
    console.log(method + " : " + url);
    $('.response-body').html('Calling REST endpoint');
    $.ajax({
        type: method,
        url: url,
        success: function(result){
            var ret = "<table>";
            ret += "<tr><th>Make</th><th>Model</th><th>Color</th><th>VIN</th><th>Price</th></tr>";
            for (var i in result) {
                ret += "<tr>";
                ret += "<td>" + result[i]["make"] + "</td>";
                ret += "<td>" + result[i]["model"] + "</td>";
                ret += "<td>" + result[i]["color"] + "</td>";
                ret += "<td>" + result[i]["vin"] + "</td>";
                ret += "<td>" + result[i]["price"] + "</td>";
                ret += "</tr>";
            }
            ret += "</table>";
            $('.response-body').html(ret);
        },
        error: function(xhr, status, error) {
            $('.response-body').html(
                "status: " + status + "<br>" +
                "error: " + error + "<br>" +
                "xhr: " + "<pre>" + syntaxHighlight(xhr) + "</pre>"
            );
        }
    });
});