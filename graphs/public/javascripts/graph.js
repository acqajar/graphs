console.log("hello")




d3.csv("https://docs.google.com/a/propelworks.com/spreadsheets/d/e/2PACX-1vTyqqAHVeIiHFKZRFmtjNsH1O6kv5fOmYS-P2REaw7XJytKXS2229n1W9EqaOT6Vq4Dj0t8PryceK2F/pub?output=csv", function(data){
    console.log(data)

    var max1 = 0, min1 = 100
    var maxArr = []

    // .rollup(function(d) {
    //  return d3.sum(d, function(g) {return g.FT1; }, function(g) {return g.TOTAL_UNIT; });
    // })
    // var max = d3.max(data, function(d) { return +d.FT10;} );
    // var min = d3.min(data, function(d) { return d.FT10; });
    //

    var data = d3.nest()
       .key(function(d) { return d.STATE_LABEL;})
       .rollup(function(d) { return {
         ftS: d3.sum(d, function(g) { return g.FT1; }),
         totalS: d3.sum(d, function(z) { return parseInt(z.TOTAL1) }),
         ftT: d3.sum(d, function(g) { return g.FT10; }),
         totalT: d3.sum(d, function(z) { return parseInt(z.TOTAL10) }),
         ftM: d3.sum(d, function(g) { return g.FT1_2; }),
         totalM: d3.sum(d, function(z) { return parseInt(z.TOTAL1_2) })
       }
     })
       .entries(data);


       console.log(data)



          function grabDeets(x){
            var res = []
            data.forEach(function(d) {
              if(d.key.toString().toLowerCase()=== x.toString().toLowerCase()){
                // console.log("k val - " + d.key)
                var percentFS = Math.round((d.values.ftS/d.values.totalS) *100)
                var percentFM = Math.round((d.values.ftM/d.values.totalM) *100)
                var percentFT = Math.round((d.values.ftT/d.values.totalT) *100)

                max1 = percentFT > max1? percentFT: max1;
                min1 = percentFT > min1? min1: percentFT
                // console.log("inside max - " + max1 + " --- min -- "+ min1 + " - per - " + percentFT)
                var arr =[x, percentFT]

                  maxArr.push(arr)



                  res.push(`${percentFS}`)
                  res.push(`${percentFM}`)
                  res.push(`${percentFT}`)
                }
              })
              return res
            };




            var colorS;

            function gradient(x,y){
              // var num = (x*50)/100
              var num = (x-27)/30
              var color = `rgba(250, 15, 160, ${num})`
              // return opacity = num
              var rgb = RGBAtoRGB(30,144,255,num,255,255,255)
               // console.log("rg first - " + RGBAtoRGB(250,15,160,num,255,255,255))
               // console.log("y - " + y)

               return $(`.datamaps-subunit.${y}`).attr("style",`fill:${rgb} !important`)

              // return RGBAtoRGB(250,15,160,num,255,255,255)
            }

            function RGBAtoRGB(r, g, b, a, r2,g2,b2){
              var r3 = Math.round(((1 - a) * r2) + (a * r))
              var g3 = Math.round(((1 - a) * g2) + (a * g))
              var b3 = Math.round(((1 - a) * b2) + (a * b))
              // console.log("rgb("+r3+","+g3+","+b3+")")
              colorS = "rgb("+r3+","+g3+","+b3+")"
              return "rgb("+r3+","+g3+","+b3+")";
            }
            //


            // var rgb = RGBAtoRGB(250,15,160,num,255,255,255)
            // this.setAttribute("style", `fill:${rgb}`);
            //
            // $(this).setAttribute("style", `fill:${rgb}`);


            // create color palette function
            // color can be whatever you wish
            // function gradient(x){
            //   var num = x/100
            //   var min = Math.min(num),
            //    max =Math.max(num);
            //   d3.scale.linear()
            //           .domain([min,max])
            //           .range(["#EFEFFF","#02386F"]);
            // }

            var series = {
                "AZ": {
                  "fillKey": "Republican",
                    "electoralVotes": 5,
                    "details": grabDeets("Arizona"),
                },
                "CO": {
                    "fillKey": "Light Democrat",
                    "electoralVotes": 5,
                    "details": grabDeets("Colorado"),
                },
                "DE": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    "details": grabDeets("Delaware")
                },
                "FL": {
                    "fillKey": "UNDECIDED",
                    "electoralVotes": 29,
                    "details": grabDeets("Florida")
                },
                "GA": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    "details": grabDeets("Georgia")
                },
                "HI": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    "details": grabDeets("Hawaii")
                },
                "ID": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    "details": grabDeets("Idaho")
                },
                "IL": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    "details": grabDeets("Illinois")
                },
                "IN": {
                    "fillKey": "Republican",
                    "electoralVotes": 11,
                    "details": grabDeets("Indiana")
                },
                "IA": {
                    "fillKey": "Light Democrat",
                    "electoralVotes": 11,
                    "details": grabDeets("Iowa")
                },
                "KS": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    "details": grabDeets("Kansas")
                },
                "KY": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    "details": grabDeets("Kentucky")
                },
                "LA": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    "details": grabDeets("Louisiana")
                },
                "MD": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    "details": grabDeets("Maryland")
                },
                "ME": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    "details": grabDeets("Maine")
                },
                "MA": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    "details": grabDeets("Massachusetts")
                },
                "MN": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    "details": grabDeets("Minnesota")
                },
                "MI": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    "details": grabDeets("Michigan")
                },
                "MS": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    "details": grabDeets("Mississippi")
                },
                "MO": {
                    "fillKey": "Republican",
                    "electoralVotes": 13,
                    "details": grabDeets("Missouri")
                },
                "MT": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    "details": grabDeets("Montana")
                },
                "NC": {
                    "fillKey": "Light Republican",
                    "electoralVotes": 32,
                    "details": grabDeets("North Carolina")
                },
                "NE": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    "details": grabDeets("Nebraska")
                },
                "NV": {
                    "fillKey": "Heavy Democrat",
                    "electoralVotes": 32,
                    "details": grabDeets("Nevada")
                },
                "NH": {
                    "fillKey": "Light Democrat",
                    "electoralVotes": 32,
                    "details": grabDeets("New Hampshire")
                },
                "NJ": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    "details": grabDeets("New Jersey")
                },
                "NY": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    "details": grabDeets("New York")
                },
                "ND": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    "details": grabDeets("North Dakota")
                },
                "NM": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    "details": grabDeets("New Mexico")
                },
                "OH": {
                    "fillKey": "UNDECIDED",
                    "electoralVotes": 32,
                    "details": grabDeets("Ohio")
                },
                "OK": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    "details": grabDeets("Oklahoma")
                },
                "OR": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    "details": grabDeets("Oregon")
                },
                "PA": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    "details": grabDeets("Pennsylvania")
                },
                "RI": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    "details": grabDeets("Rhode Island")
                },
                "SC": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    "details": grabDeets("New Mexico")
                },
                "SD": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    "details": grabDeets("South Dakota")
                },
                "TN": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    "details": grabDeets("Tennessee")
                },
                "TX": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    "details": grabDeets("Texas")
                },
                "UT": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    "details": grabDeets("Utah")
                },
                "WI": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    "details": grabDeets("Wisconsin")
                },
                "VA": {
                    "fillKey": "Light Democrat",
                    "electoralVotes": 32,
                    "details": grabDeets("Virginia")
                },
                "VT": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    "details": grabDeets("Vermont")
                },
                "WA": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    "details": grabDeets("Washington")
                },
                "WV": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    "details": grabDeets("West Virginia")
                },
                "WY": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    "details": grabDeets("Wyoming")
                },
                "CA": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    "details": grabDeets("California")
                },
                "CT": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    "details": grabDeets("Connecticut")
                },
                "AK": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    "details": grabDeets("Arkansas")
                },
                "AR": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    "details": grabDeets("Arizona")
                },
                "AL": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    "details": grabDeets("Alabama")
                }
              }

            console.log("colorS - " + colorS)
        var map = new Datamap({
              element: document.getElementById('container'),
              scope: "usa",
              fills: {
               'Republican': '#CC4731',
               'Democrat': '#306596',
               'Heavy Democrat': '#667FAF',
               'Light Democrat': '#A9C0DE',
               'Heavy Republican': '#CA5E5B',
               'Light Republican': '#EAA9A8',
               // defaultFill: colorS
              },
              data: series,
              geographyConfig: {
                highlightFillColor: 'rgb(29,233,182)',
                highlightBorderColor: 'rgb(29,233,182)',
                  popupTemplate: function(geo, data) {
                      return '<div class="hoverinfo"><strong>'
                              + geo.properties.name +
                              // ': ' + data.electoralVotes +
                              '</strong><p>Percentage Senior Mgmt: </p>'
                              + data.details[0] +
                              '% <p> Percentage Mid Mgmt</p>' + data.details[1] +
                              '% <p> Percentage Total Women</p>' + data.details[2] + '%</div>'

                              // gradient(data.details[0],"AZ")

                  },
              }
          });


          for (var key in series){
            // console.log("hi" + key)
              var abbr = key;
            for(var prop in series[key])
              if(prop === "details"){
                // console.log("subkey" + series[key][prop])
                var num = series[key][prop][2]
                gradient(num, key)
              }
            }

            // console.log("final Max - " + max1 + " - min -" + min1)

            // console.log("maxarr- " + maxArr.sort(function(a, b) {
            //     return a[1] > b[1] ? -1 : 1;
            // }))

});
