var today = moment()
today.format("LLLL")
console.log(today.format("LLLL"))
$("#currentDay").text(today.format("LLLL"))


var timeBlocks = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var task = ""


function saveTask(timeBlock, task) {
    $(".saveBtn").on("click", function () {
        localStorage.setItem(timeBlock, task);
        console.log(this)
        for (var i = 0; i < timeBlocks.length; i++) {
            var task = localStorage.getItem(timeBlocks[timeBlocks.length]);
            // console.log(this);

        }
    })
}
saveTask()




//     //change text of relevant timeblock to task
// }