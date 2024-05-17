$(document).ready(function() {
    $("#nav_list a").click(function(event) {
        event.preventDefault();

        var fileName = $(this).attr("title") + ".json";
        
        $.ajax({
            url: "json_files/" + fileName,
            dataType: "json",
            success: function(data) {
                $("main").empty();

                var speaker = data.speakers[0];

                var html = `
                    <h1>${speaker.title}</h1>
                    <img src="${speaker.image}" alt="${speaker.speaker}">
                    <h2>${speaker.month}<br>${speaker.speaker}</h2>
                    <p>${speaker.text}</p>
                `;

                $("main").append(html);
            },
            error: function() {
                alert("An error occurred while loading the data.");
            }
        });
    });
}); // end ready
