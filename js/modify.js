$( function() {
    var handle = $( "#custom-handle" );
    $( "#sliderHandle" ).slider({
      range:'min',
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
      }
    });
  } );
// ********** Modify Contributions Sliders ********** 


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
                $('#avc-contribution').slider('disable');
            }
            else if (ui.value == 2) {
                $("#amount-employer").val(ui.value + "%");
                $('.ui-slider-handle').css("left", "16.667%");
                $('#avc-contribution').slider('disable');
            }
            else if (ui.value == 3) {
                $("#amount-employer").val(ui.value + "%");
                $('.ui-slider-handle').css("left", "33.33%");
                $('#avc-contribution').slider('disable');
            }
            else if (ui.value == 4) {
                $("#amount-employer").val(ui.value + "%");
                $('.ui-slider-handle').css("left", "50%");
                $('#avc-contribution').slider('disable');
            }
            else if (ui.value == 5) {
                $("#amount-employer").val(ui.value + "%");
                $('.ui-slider-handle').css("left", "66.667%");
                $('#avc-contribution').slider('disable');
            }
            else if (ui.value == 6) {
                $("#amount-employer").val(ui.value + "%");
                $('.ui-slider-handle').css("left", "83.333%");
                $('#avc-contribution').slider('disable');
                $('#avc-contribution .ui-slider-handle').css("display", "none");
            }
            else if (ui.value == 7) {
                $("#amount-employer").val(ui.value + "%");
                $('.ui-slider-handle').css("left", "100%");
                $('#avc-contribution .ui-slider-handle').css("left", "0%");
                $('#avc-contribution').slider('enable');
                $('.avc').css("display", "flex");
                $('#avc-contribution .ui-slider-handle').css("display", "flex");
            }
            else if (ui.value <= 7) {
                $('#avc-contribution .ui-slider-handle').css("left", "0%");
            }
           

        }
        
    });
    $("#amount-employee").val($("#employee-contribution").slider("value") + "%");

    

});

//  ********** End of Modify Contributions Sliders ********** 


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

// ********** AVC Slider ********** 

$(function () {
    $("#avc-contribution").slider({
        range: "max",
        min: 0,
        max: 18,
        value: 0,
        slide: function (event, ui) {
            $("#amount-avc").val(ui.value + "%");
            $("#amount-avc").val(ui.value + "%");
            if (ui.value > 0) {
                $('#employee-contribution').slider('disable');
            }
            else if (ui.value == 0) {
                $('#employee-contribution').slider('enable');
            }
        }
    });
    $("#amount-avc").val($("#avc-contribution").slider("value") + "%");
});

// ********** End Of AVC Slider ********** 

// ********** Modify Summary Modal ********** 

//  ********** End Of Modify Summary Modal  ********** 
//Tooltip JS
$(function () {
    $(document).tooltip();
});


//Script for Bootstrap Side Menu (Main Menu)
$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});

// ************* INFO SIDEBAR RIGHT *********** //

$('.toggle-right').on('click', function() {
    $('.right-sidebar').toggleClass("right-sidebar-collapsed");
});