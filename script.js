$(document).ready(function() {

    var today = moment().format("MM/DD/YYYY");

    var now = parseInt(moment().format("k"));

    $("#currentDay").text(today);

    $("div").each(function() {

        var dataMil = $(this).attr("data-mil");

        if (typeof parseInt(dataMil) === "number") {
            
            if (now > dataMil) {
                $(this).addClass("past");
            }
            else if (now == dataMil) {
                $(this).addClass("present");
            }
            else if (now < dataMil) {
                $(this).addClass("future");
            };
        }
    })


    $(".saveBtn").on("click",function() {

        var dataTime = $(this).attr("data-time")
        var userInput = $("#" + dataTime + "_tasks").val();
        var task = {
            date: today,
            time: dataTime,
            task: userInput,
        };

        localStorage.setItem(today + " " + dataTime +"_tasks", JSON.stringify(task));
    })

    $("textarea").each(function() {

        var id = $(this).attr("id");
        var key = today + " " + id;
        var obj = JSON.parse(localStorage.getItem(key));

        if (!!obj && obj.date === today)    {
            $(this).val(obj.task);
        };
    })

});