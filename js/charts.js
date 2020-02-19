var canvas = document.getElementById("barChart");
var ctx = canvas.getContext('2d');

// Global Options:
Chart.defaults.global.defaultFontColor = 'dodgerblue';
Chart.defaults.global.defaultFontSize = 16;


// Data with datasets options
var data = {
    labels: ["50", "60", "65"],
    datasets: [
        {
            label: "Project Value at Retirement ",
            fill: true,
            backgroundColor: [
                '#5261AC',
                '#5261AC',
                '#5261AC'],
            data: [50, 60, 65]
        }
    ]
};

// Notice how nested the beginAtZero is
var options = {
    title: {
        display: true,
        text: 'Project Value',
        position: 'bottom'
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

// Chart declaration:
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});

// Initialize a new plugin instance for all
// e.g. $('input[type="range"]') elements.
$('input[type="range"]').rangeslider();

// Destroy all plugin instances created from the
// e.g. $('input[type="range"]') elements.
$('input[type="range"]').rangeslider('destroy');

// Update all rangeslider instances for all
// e.g. $('input[type="range"]') elements.
// Usefull if you changed some attributes e.g. `min` or `max` etc.
$('input[type="range"]').rangeslider('update', true);

$('input[type="range"]').rangeslider({
    polyfill: false
});

$('#relationship-status-slider').on('change input', function () {
    $('#relationship-status-output').text($(this).val());
});

$(function () {

    var labels = [];


    $("#pips-slider")

        .slider({

            min: 0,
            max: 500,
            value: 99,
            step: 1

        })

        .slider("pips", {

            first: "label",
            last: "label",
            rest: "label",
            labels: labels,
            step: 1

        })

        .slider("float", {

            handle: true,
            pips: false,
            labels: labels

        });

});


$(function () {
    $("#slider-range-max").slider({
        range: "max",
        min: 1,
        max: 2000,
        value: 2,
        slide: function (event, ui) {
            $('€' + "#amount").val(ui.value);
        }
    });
    $("#amount").val($("#slider-range-max").slider("value"));
});


$(function () {
    $("#slider-range-max1").slider({
        range: "max",
        min: 1,
        max: 2000,
        value: 2,
        slide: function (event, ui) {
            $('€' + "#amount1").val(ui.value);
        }
    });
    $("#amount1").val($("#slider-range-max1").slider("value"));
});