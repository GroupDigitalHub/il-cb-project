
$(function () {
    $("#employee-contribution").slider({
        range: "max",
        min: 1,
        max: 1000,
        value: 500,
        slide: function (event, ui) {
            $("#amount-employee").val("€" + ui.value);
        }
    });
    $("#amount-employee").val("€" + $("#employee-contribution").slider("value"));
});


$(function () {
    $("#employer-contribution").slider({
        range: "max",
        min: 1,
        max: 7,
        value: 2,
        slide: function (event, ui) {
            $("#amount-employer").val(ui.value + "%");
        }
    });
    $("#amount-employer").val($("#employer-contribution").slider("value") + "%");
});

$(function () {
    $("#avc-contribution").slider({
        range: "max",
        min: 1,
        max: 25,
        value: 0,
        slide: function (event, ui) {
            $("#amount-avc").val(ui.value + "%");
        }
    });
    $("#amount-avc").val($("#avc-contribution").slider("value") + "%");
});

