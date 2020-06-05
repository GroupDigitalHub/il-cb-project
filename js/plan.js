var planCollapsed = true;

function planCollapse() {
  var rotate = $("#planarrow").css("transform");
  const degree = planCollapsed ? 90 : 0;
  $("#planarrow").css({ transform: "rotate(" + degree + "deg)" });
  planCollapsed = !planCollapsed;
}
