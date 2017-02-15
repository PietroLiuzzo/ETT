// for all tagged ETT  https://hypothes.is/api/search?tag=ETT
// example below for one annotation

$.getJSON( "https://hypothes.is/api/search?tag=ETT", function( data ) {
console.log(data);
  var items = [];
       for (var i = 0; i < data.rows.length; i++) {
       var ann = data.rows[i]
      items.push( "<div id='" + ann.id + "' class='card'><ul><li>" + ann.created +"</li><li>"  + ann.document.title +"</li><li>" + ann.links.html + "</li></ul></div>" );
};
  
  $( "<div/>", {
    "class": "dataoutput",
    html: items.join( "" )
  }).appendTo( "#JSON" );
  
 /* require(["underscore"], function (d){
  var groupedData = _.groupBy(data, rows.tags[1]);
  console.log(groupedData);
});*/
});