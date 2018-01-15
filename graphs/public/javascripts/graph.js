console.log("hello")




  d3.csv("./data/eeoc.csv", function(data){
    console.log(data)
    // .rollup(function(d) {
    //  return d3.sum(d, function(g) {return g.FT1; }, function(g) {return g.TOTAL_UNIT; });
    // })
    var data = d3.nest()
       .key(function(d) { return d.STATE_LABEL;})
       .rollup(function(d) { return {
         ft: d3.sum(d, function(g) { return g.FT1; }),
         bl: d3.sum(d, function(g) { return g.BLKT1; }),
         total: d3.sum(d, function(z) { return parseInt(z.MT1) + parseInt(z.FT1) })
       }
     })
       .entries(data);


       console.log(data)


          function grabDeets(x){
            var res = []
            data.forEach(function(d) {
              if(d.key.toString().toLowerCase()=== x.toString().toLowerCase()){
                // console.log("k val - " + d.key)
                var percentF = Math.round((d.values.ft/d.values.total) *100)
                var percentA = Math.round((d.values.bl/d.values.total) *100)
                  res.push(`${percentF}%`)
                  res.push(`${percentA}%`)
                }
              })
              return res
            };


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
               defaultFill: '#EDDC4E'
              },
              data: {
                "AZ": {
                    "fillKey": "Republican",
                    "electoralVotes": 5,
                    "details": grabDeets("Arizona")
                },
                "CO": {
                    "fillKey": "Light Democrat",
                    "electoralVotes": 5,
                    "details": grabDeets("Colorado")
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
              },
              geographyConfig: {
                  popupTemplate: function(geo, data) {
                      return '<div class="hoverinfo"><strong>'
                              + geo.properties.name +
                              // ': ' + data.electoralVotes +
                              '</strong><p>Percentage Women (ft1/total): </p>'
                              + data.details[0] +
                              '<p> African-American</p>' + data.details[1] + '</div>'

                  }
              }
          });


});
