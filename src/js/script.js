$.get("src/svg/svg.svg", function(data) {
    var div = document.createElement("div");
    div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
    $(div).attr('id','SvgContainer');
    document.body.insertBefore(div, document.body.childNodes[0]);
    //$("#SvgContainer").html($("#SvgContainer").html());
});


/**
 * SVG fallback
 */
loadCSS = function(href) {
    var cssLink = $("<link rel='stylesheet' type='text/css' href='"+href+"'>");
    $("head").append(cssLink);
};

if($('html').hasClass('no-svg')){
    loadCSS('src/img/svg.css');
}