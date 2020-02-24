
$(function () {
    $("#employee-contribution").slider({
        range: "max",
        min: 1,
        max: 7,
        value: 4,
        slide: function (event, ui) {
            $("#amount-employee").val(ui.value + "%");
            if (ui.value == 1) {
                $("#amount-employer").val(ui.value + "%");
                $('.ui-slider-handle').css("left", "0%");
            }
            else if (ui.value == 2) {
                $("#amount-employer").val(ui.value + "%");
                $('.ui-slider-handle').css("left", "16.667%");
            }
            else if (ui.value == 3) {
                $("#amount-employer").val(ui.value + "%");
                $('.ui-slider-handle').css("left", "33.33%");
            }
            else if (ui.value == 4) {
                $("#amount-employer").val(ui.value + "%");
                $('.ui-slider-handle').css("left", "50%");
            }
            else if (ui.value == 5) {
                $("#amount-employer").val(ui.value + "%");
                $('.ui-slider-handle').css("left", "66.667%");
            }
            else if (ui.value == 6) {
                $("#amount-employer").val(ui.value + "%");
                $('.ui-slider-handle').css("left", "83.333%");
            }
            else if (ui.value == 7) {
                $("#amount-employer").val(ui.value + "%");
                $('.ui-slider-handle').css("left", "100%");
                $('#avc-contribution .ui-slider-handle').css("left", "0%");
                $('.avc').css("display", "flex");
            }

        }
    });
    $("#amount-employee").val($("#employee-contribution").slider("value") + "%");
});


$(function () {
    $("#employer-contribution").slider({
        range: "max",
        min: 1,
        max: 7,
        value: 4,
        slide: function (event, ui) {
            $("#amount-employer").val(ui.value + "%");

        }
    });
    $("#amount-employer").val($("#employer-contribution").slider("value") + "%");
    $('#employer-contribution').slider('disable');


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

var block = document.getElementById('modal-btn-yes');

block.addEventListener('click', function () {

    if (block.getAttribute('class') == 'avc') block.setAttribute('class', 'avc-reordered');
    else block.setAttribute('class', 'avc');
});

var modalConfirm = function (callback) {

    $("#btn-confirm").on("click", function () {
        $("#my-modal").modal('show');
    });

    $("#modal-btn-yes").on("click", function () {
        callback(true);
        $("#my-modal").modal('hide');
    });

    $("#modal-btn-no").on("click", function () {
        callback(false);
        $("#my-modal").modal('hide');
    });
};

modalConfirm(function (confirm) {
    if (confirm) {
        //Acciones si el usuario confirma
        $("#result").html("CONFIRMED");
    } else {
        //Acciones si el usuario no confirma
        $("#result").html("NOT CONFIRMED");
    }
});