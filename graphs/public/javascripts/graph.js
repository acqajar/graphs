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
          var tot = parseFloat(d.TOTAL_UNIT) * 4
          var y_t = parseFloat(d.TOTAL_UNIT) *2
          //  "translate(" + tot + "," + y_t + ")"
          return `translate(${tot*0.1}, ${y_t*0.1})`

        })
        .on("click", function(d){
          d3.selectAll("text.state").remove()
          d3.select(this).raise()
          .append("text")
          .attr("class", "state")
          // var score =  JSON.stringify(parseFloat(d.FT1/d.MT1))
          // .text(d.STATE_LABEL + ", " + d.NAC2_LABEL + ", " + d.FT1 + ", " + d.MT1 )
          .text(function(d){
            var total = parseFloat(d.MT1) + parseFloat(d.FT1)
            var f = parseFloat(d.FT1)
            var score = f/total
            console.log("tot - " + total + " num - " + Math.round(score) + " - f - " + f)
            return d.STATE_LABEL + ", " + d.NAC2_LABEL + ", " + Math.round(score*100) + "%"
          })

        })
        // .on("mouseout", function(d){
        //   d3.selectAll("text.state").remove()
        // })


      total_u.append("circle")
        .attr("r", function(d){
          console.log("d - " + d.FT1)

          var tot = parseFloat(d.FT1/d.MT1) * 10
          return `${tot}`
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
