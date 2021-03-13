// so calender based on 9-5 work day
// iterated through the current hour colors that box red if true
// past hours are grey
// upcoming hours green
// save icon
// current day and time at top of the planner
// saves user input into local storage
// uhhhhh think thats it tbh...

window.onload = function (){

    // let today = new Date();
    let date = moment().format('LL');
    $('#currentDay').html(date);

}

// set up the schedule table from 9-5
let scheduleHours = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];
let $container = $('.container');

    $.each(scheduleHours, function (index, value){
        let bgColor = changeColor(value);
        let $row = $('<div>').addClass('row');
        let $col1 = $('<div>' + value + '</div>').addClass('col-sm-1 hour time');
        let $col2 = $('<div></div>').addClass('col-sm-10 past description ' + bgColor + ' time-' + value);
        let $col3 = $('<button></button>').addClass('col-sm-1 saveBtn');
        let textarea = $('<textarea></textarea>').addClass('col-sm-12 input');
        let saveIcon = $('<i class = "fas fa-save" style = "margin: auto; padding: 10px;"></i>');

            $row.append($col1);
            $row.append($col2);
            $col2.append(textarea);
            $row.append($col3);
            $col3.append(saveIcon);
            $container.append($row);

    })
    
    

    $.each(scheduleHours, function (index, value){

        $('.time-' + value + ' .input').val(localStorage.getItem(value))

    })

    // On save button click user entered data in textarea will be saved to local storage
    $('.saveBtn').click(function () {
        let time = $(this).siblings('div.time').text();   
        let input = $(this).siblings('div.description').children("textarea").val();
        localStorage.setItem(time, input);
     });


     function changeColor() {
        
        let hour = moment().hour();

        $('.col2').each(function () {
            let val = $(this).attr('id');
    
            if (val > hour) {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
    
            } else if (val == hour) {
                $(this).removeClass("future");
                $(this).addClass("present");
                $(this).removeClass("past");
    
            } else if (val < hour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
        })
    }

    setInterval(function() {
        changeColor();
    }, 1000);