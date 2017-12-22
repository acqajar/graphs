console.log("hello")




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
        .on("mouseover", function(d){
          d3.selectAll("text.state").remove()
          d3.select(this).raise()
          .append("text")
          .attr("class", "state")
          .text(function(d){
            var total = parseFloat(d.MT1) + parseFloat(d.FT1)
            var f = parseFloat(d.FT1)
            var score = f/total
            console.log("tot - " + total + " num - " + Math.round(score) + " - f - " + f)
            return d.STATE_LABEL + ", " + d.NAC2_LABEL + ", " + Math.round(score*100) + "%"
          })

        })
        .on("mouseout", function(d){
          d3.selectAll("text.state").remove()
        })

  $(function(){

      // total_u.append("circle")
      //   .attr("r", function(d){
      //     console.log("d - " + d.FT1)
      //
      //     var tot = parseFloat(d.FT1/d.MT1) * 10
      //     return `${tot}`
      //     //  tot*0.1
      //   })
      //   .attr("fill-opacity", 0.1)
      //
      //
      //
      //
      // var states = d3.nest()
      //   .key(function(d){
      //     return d.STATE_LABEL
      //   })
      //   .rollup(function(v){
      //     return v.length
      //   })
      //   .entries(data)
      //   // console.log(states)
      //   var select_s = d3.select(".states")
      //   select_s
      //     .selectAll("option")
      //     .data(states)
      //     .enter()
      //     .append("option")
      //       .text(function(d){
      //         return d.key + " - " + d.value
      //       })
      //       .attr("value", function(d){
      //         return d.key
      //       })
      //
      //       select_s
      //         .on("change", function(){
      //           d3.selectAll(".total_unit")
      //             .attr("opacity", 1)
      //           var value = select_s.property("value")
      //             if(value !== "ALL"){
      //               d3.selectAll(".total_unit")
      //               .filter(function(d){
      //                 console.log("val- " + value + " - states  - " + d.STATE_LABEL)
      //                 return d.STATE_LABEL !== value
      //               })
      //               .attr("opacity", 0)
      //             }
      //         })
      //
      //
      //
      //
      //       var nac2 = d3.nest()
      //         .key(function(d){
      //           return d.NAC2_LABEL
      //         })
      //         .rollup(function(v){
      //           return v.length
      //         })
      //         .entries(data)
      //         // console.log(data)
      //       var select_l = d3.select(".labels")
      //       select_l
      //         .selectAll("option")
      //         .data(nac2)
      //         .enter()
      //         .append("option")
      //           .text(function(d){
      //             return d.key + " - " + d.value
      //           })
      //           .attr("value", function(d){
      //             return d.key
      //           })
      //
      //
      //
      //             select_l
      //               .on("change", function(){
      //                 d3.selectAll(".total_unit")
      //                   .attr("opacity", 1)
      //                 var value = select_l.property("value")
      //                   if(value !== "ALL"){
      //                     d3.selectAll(".total_unit")
      //                     .filter(function(d){
      //                       console.log("val- " + value + " - nac  - " + d.NAC2_LABEL)
      //                       return d.NAC2_LABEL !== value
      //                     })
      //                     .attr("opacity", 0)
      //                   }
      //               })
      //
      //
      //
      //
      //
      //                             select_s.unshift({"value": "All",
      //                               "value": d3.sum(select_s, function(d){
      //                                 return d.value
      //                               })
      //                             })
      //
      //
      //
      //                                             select_l.unshift({"value": "All",
      //                                               "value": d3.sum(select_l, function(d){
      //                                                 return d.value
      //                                               })
      //                                             })
      //
      //
      //
      //
      //
      //




// Bar graph implementation


var margin = {top: 40, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var formatPercent = d3.format(50)
// d3.format(",.0f")
// d3.format(".0%");

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .4);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    var total = parseFloat(d.MT1) + parseFloat(d.FT1)
    var f = parseFloat(d.FT1)
    var score = (f/total) *100
    return "<strong>State:</strong> <span style='color:red'>" + d.STATE_LABEL + ", "+ Math.round(score)+ "% </span>";
  })

var svg = d3.select(".svgAppend").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);
  var max = parseFloat(d3.max(data, function(d) { return d.TOTAL_UNIT; })) + 4000
  x.domain(data.map(function(d) { return d.NAC2_LABEL; }));
  y.domain([0, max]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Frequency");

  svg.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.NAC2_LABEL); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.TOTAL_UNIT); })
      .attr("height", function(d) { return height - (y(d.TOTAL_UNIT)) })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)



function type(d) {
  d.TOTAL_UNIT = +d.TOTAL_UNIT;
  return d;
}













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
