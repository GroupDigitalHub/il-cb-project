var allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach((wrap) => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}
$(".range")
  .on("input", function () {
    $(".bubble").val(this.value + " %");
  })
  .trigger("change");

var range = $(".range"),
  value = $(".n-v"),
  roundSlider = $("#s1");

value.html(range.attr("value"));

window.onSliderCreate = function (e) {
  this._handles().append(
    '<div class="arrow_box"> <div>You saved</div> <b class="box_value"></b> <div>When you sell</div> </div>'
  );
  //this.control.append($("<div class="start">$ "+this.options.min+"</div>"));
  //this.control.append($("<div class="end">$ "+this.options.max+"</div>"));
  updateBox.call(this);
};

window.updateBox = function (e) {
  var profit = Math.round(this.options.value * 0.005);
  this._handles()
    .find(".box_value")
    .html("â‚¬ " + profit);
};
$(document).ready(function () {
  $(".bubble").append("%");
});

window.changeTooltip = function (e) {
  updateBox.call(this);
  return "â‚¬ " + e.value.toFixed(2) + "<div>Tax Saving<div>";
};

roundSlider.roundSlider({
  radius: 80,
  circleShape: "pie",
  min: range.attr("min"),
  max: range.attr("max"),
  sliderType: "min-range",
  showTooltip: true,
  startAngle: 315,
  value: range.attr("value"),
  editableTooltip: false,
  value: 5,
  tooltipFormat: "changeTooltip",
  create: "onSliderCreate",
  min: 4,
  max: 25,
});

range.on("input", function () {
  var localValue = this.value;
  value.html(localValue);
  roundSlider.roundSlider("setValue", localValue, 1);
});

var range = $(".range"),
  value = $(".n-v"),
  roundSlider = $("#s1");

value.html(range.attr("value"));

window.onSliderCreate = function (e) {
  this._handles().append(
    '<div class="arrow_box"> <div>You saved</div> <b class="box_value"></b> <div>When you sell</div> </div>'
  );
  //this.control.append($("<div class="start">$ "+this.options.min+"</div>"));
  //this.control.append($("<div class="end">$ "+this.options.max+"</div>"));
  updateBox.call(this);
};

window.updateBox = function (e) {
  var profit = Math.round(this.options.value * 0.005);
  this._handles()
    .find(".box_value")
    .html("â‚¬ " + profit);
};
$(document).ready(function () {
  $(".bubble").append("%");
});

window.changeTooltip = function (e) {
  updateBox.call(this);
  return "â‚¬ " + e.value.toFixed(2) + "<div>Tax Saving<div>";
};

roundSlider.roundSlider({
  radius: 80,
  circleShape: "pie",
  min: range.attr("min"),
  max: range.attr("max"),
  sliderType: "min-range",
  showTooltip: true,
  startAngle: 315,
  value: range.attr("value"),
  editableTooltip: false,
  value: 5,
  tooltipFormat: "changeTooltip",
  create: "onSliderCreate",
  min: 4,
  max: 25,
});

range.on("input", function () {
  var localValue = this.value;
  value.html(localValue);
  roundSlider.roundSlider("setValue", localValue, 1);
});

function myFunction() {
  alert("Hello! I am an alert box!");
}
