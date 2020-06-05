var initialValue = 4;
var min = 1;
var max = 7;

$(document).ready(function () {
  var leftWidthPercentage = (initialValue / max) * 100;
  var rightWidthPercentage = ((max - initialValue) / max) * 100;

  $("#leftGraph").css("width", leftWidthPercentage + "%");
  $("#rightGraph").css("width", rightWidthPercentage + "%");
});

$(function () {
  $("#employee-contribution").slider({
    range: "max",
    min,
    max,
    value: initialValue,

    slide: function (event, ui) {
      $("#amount-employee").val(ui.value + "%");
      enableButtons();
    },
  });
  $("#amount-employee").val($("#employee-contribution").slider("value") + "%");
});

function disableButtons() {
  $("#btnSubmit").removeClass("project-btn");
  $("#btnSubmit").addClass("project-btn-disabled");
  $("#btnReset").removeClass("reset-btn");
  $("#btnReset").addClass("reset-btn-disabled");
  $("#btnSubmit").attr("disabled", true);
  $("#btnReset").attr("disabled", true);
}

function enableButtons() {
  $("#btnSubmit").removeClass("project-btn-disabled");
  $("#btnSubmit").addClass("project-btn");
  $("#btnReset").removeClass("reset-btn-disabled");
  $("#btnReset").addClass("reset-btn");
  $("#btnSubmit").attr("disabled", false);
  $("#btnReset").attr("disabled", false);
}

function onProjectionReset() {
  var value = 4;
  $("#employee-contribution").slider({ value });
  $("#amount-employee").val(`${value}%`);
  disableButtons();
  $("#projectionsGraph").css("grid-template-columns", "46fr 29fr");
}
function onProjectionSubmit() {
  updateGraph();
  disableButtons();
}

function updateGraph() {
  var value = $("#employee-contribution").slider("value");
  if (value === max) {
    $("#rightGraphCaption").css("opacity", 0);
  } else {
    $("#rightGraphCaption").css("opacity", 1);
  }

  var leftWidthPercentage = (value / max) * 100;
  var rightWidthPercentage = ((max - value) / max) * 100;

  $("#leftGraph").css("width", leftWidthPercentage + "%");
  $("#rightGraph").css("width", rightWidthPercentage + "%");
}
