console.log("hello")


$(function(){





  d3.select(".col-xs-12")
    .selectAll("p")
    .data(["hi", "dude","go", "Kobe Bryant","Shaq","Los Angeles"])
    .enter()
    .append("p")
      .text(function(d){
        return d + ", LAKERS"
      })







});
