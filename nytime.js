var userstartyear;
var userendyear;
var number_of_records;
var searchterm;

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var api = "0a5c2827270f41ba906797a4d7139961";

//set the values of the query

// startyear

//end year

//number of records

//searchterm

searchterm = "&q=Trump"

var link = queryURL + "?&api-key=" + api + searchterm;

    $.ajax({
        url: link,
        method: "GET"


    })
    .done(function(response) {
        console.log(response);
        var result = response.response.docs;
        console.log(result.length);
        for (var i = 0; i < result.length; i++) {
            console.log(result[i].headline.main);

        }
});
