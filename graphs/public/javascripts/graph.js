console.log("hello")


$(function(){


  d3.csv("./data/eeoc.csv", function(data){
    console.log("data - " + data)
  })


  d3.select(".col-xs-12")
    .selectAll("p")
    .data(["hi", "dude","go", "Kobe Bryant","Shaq","Los Angeles"])
    .enter()
    .append("p")
      .text(function(d){
        return d + ", LAKERS"
      })







});
