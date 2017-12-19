console.log("hello")


$(function(){


  d3.csv("./data/eeoc.csv", function(data){
    console.log(data)



    var total_u = d3.select("svg")
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
        .attr("class","total_unit")
        .attr("transform", function(d){
          var tot = parseFloat(d.TOTAL_UNIT)
          var y_t = parseFloat(d.TOTAL_UNIT) +1
          //  "translate(" + tot + "," + y_t + ")"
          return `translate(${tot/10}, ${y_t/10})`

        })
        .on("mouseover", function(d){
          d3.select(this).raise()
          .append("text")
          .attr("class", "state")
          .text(d.STATE_LABEL)
        })
        .on("mouseout", function(d){
          d3.selectAll("text.state").remove()
        })


      total_u.append("circle")
        .attr("r", function(d){
          var tot = parseFloat(d.TOTAL_UNIT)
          return `${tot/100}`
          //  tot*0.1
        })
        .attr("fill-opacity", 0.1)








  })




  // d3.select(".col-xs-12")
  //   .selectAll("p")
  //   .data(["hi", "dude","go", "Kobe Bryant","Shaq","Los Angeles"])
  //   .enter()
  //   .append("p")
  //     .text(function(d){
  //       return d + ", LAKERS"
  //     })







});
