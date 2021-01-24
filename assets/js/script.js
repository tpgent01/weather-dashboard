// Search city when icon is clicked
$(document).ready(function() {
    $("#search-btn").on("keypress", "click", function(e) {
        if(e.which == 13) {
            var searchValue = $("#search-value").val();
            $("#search-value").val("");
            searchWeather(searchValue);
        }
    })
})