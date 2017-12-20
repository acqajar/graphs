console.log("hello")


$(function(){


  d3.csv("./data/eeoc.csv", function(data){
    // console.log(data)



    var total_u = d3.select("svg")
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
        .attr("class","total_unit")
        .attr("transform", function(d){
          var tot = parseFloat(d.TOTAL_UNIT) * .6
          var y_t = parseFloat(d.TOTAL_UNIT) *.2
          //  "translate(" + tot + "," + y_t + ")"
          return `translate(${tot}, ${y_t + 100})`

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




      var states = d3.nest()
        .key(function(d){
          return d.STATE_LABEL
        })
        .rollup(function(v){
          return v.length
        })
        .entries(data)
        // console.log(states)
        var select_s = d3.select(".states")
        select_s
          .selectAll("option")
          .data(states)
          .enter()
          .append("option")
            .text(function(d){
              return d.key + " - " + d.value
            })
            .attr("value", function(d){
              return d.key
            })

            select_s
              .on("change", function(){
                d3.selectAll(".total_unit")
                  .attr("opacity", 1)
                var value = select_s.property("value")
                  if(value !== "ALL"){
                    d3.selectAll(".total_unit")
                    .filter(function(d){
                      console.log("val- " + value + " - states  - " + d.STATE_LABEL)
                      return d.STATE_LABEL !== value
                    })
                    .attr("opacity", 0)
                  }
              })








            var nac2 = d3.nest()
              .key(function(d){
                return d.NAC2_LABEL
              })
              .rollup(function(v){
                return v.length
              })
              .entries(data)
              // console.log(data)
            var select_l = d3.select(".labels")
            select_l
              .selectAll("option")
              .data(nac2)
              .enter()
              .append("option")
                .text(function(d){
                  return d.key + " - " + d.value
                })
                .attr("value", function(d){
                  return d.key
                })

                  select_l
                    .on("change", function(){
                      d3.selectAll(".total_unit")
                        .attr("opacity", 1)
                      var value = select_l.property("value")
                        if(value !== "ALL"){
                          d3.selectAll(".total_unit")
                          .filter(function(d){
                            console.log("val- " + value + " - nac  - " + d.NAC2_LABEL)
                            return d.NAC2_LABEL !== value
                          })
                          .attr("opacity", 0)
                        }
                    })



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
