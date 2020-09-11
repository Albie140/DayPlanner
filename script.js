var today = moment()
today.format("LLLL")
// console.log(today.format("LLLL"))
$("#currentDay").text(today.format("LLLL"))



var timeBlocks = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var task = " "


function saveTask(timeBlocks, task) {
    $(".saveBtn").on("click", function () {
localStorage.clear();
        // console.log(this)
        var newTask = $(this).siblings(".description").val();
        // console.log(newTask)
        var saveTime = $(this).attr("id");
        localStorage.setItem(saveTime, newTask);
retrieveTask()
    })
}
saveTask()

function retrieveTask() {
    $("#9").val(localStorage.getItem("9amSave"));
    $("#10").val(localStorage.getItem("10amSave"));
    $("#11").val(localStorage.getItem("11amSave"));
    $("#12").val(localStorage.getItem("12pmSave"));
    $("#13").val(localStorage.getItem("1pmSave"));
    $("#14").val(localStorage.getItem("2pmSave"));
    $("#15").val(localStorage.getItem("3pmSave"));
    $("#16").val(localStorage.getItem("4pmSave"));
    $("#17").val(localStorage.getItem("5pmSave"));

}
retrieveTask()

//color coded function
$(".description").each(function () {
    var blockTime = JSON.parse($(this).attr("id"));
    console.log(blockTime);
    var currentTime = today.hours();
    console.log(currentTime);
    if (blockTime === currentTime) {
        $(this).addClass("present")
    }
    if (blockTime < currentTime) {
        $(this).addClass("past")
    }
    if (blockTime > currentTime) {
        $(this).addClass("future")
    }

})