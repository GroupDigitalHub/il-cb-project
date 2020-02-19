
$(function () {
    $("#slider-range-max").slider({
        range: "max",
        min: 1,
        max: 1000,
        value: 500,
        slide: function (event, ui) {
            $("#amount").val(ui.value);
        }
    });
    $("#amount").val($("#slider-range-max").slider("value"));
});


$(function () {
    $("#slider-range-max1").slider({
        range: "max",
        min: 1,
        max: 7,
        value: 2,
        slide: function (event, ui) {
            $("#amount1").val(ui.value);
        }
    });
    $("#amount1").val($("#slider-range-max1").slider("value"));
});

