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
         total: d3.sum(d, function(z) { return parseInt(z.MT1) + parseInt(z.FT1) })
       }
     })
       .entries(data);


       console.log(data)


          function grabDeets(x){
            var res;
            data.forEach(function(d) {
              // console.log("state - " + x)
              // console.log("hi d - " + d.STATE_LABEL)
              if(d.key.toString().toLowerCase()=== x.toString().toLowerCase()){
                console.log("k val - " + (d.values.ft/d.values.total) *100)
                var percent = (d.values.ft/d.values.total) *100
                  res= `${percent}%`
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
                    details: function(){
                      return grabDeets("Arizona")
                    }
                },
                "CO": {
                    "fillKey": "Light Democrat",
                    "electoralVotes": 5,
                    details: function(){
                      return grabDeets("Colorado")
                    }
                },
                "DE": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("California")
                    }
                },
                "FL": {
                    "fillKey": "UNDECIDED",
                    "electoralVotes": 29,
                    details: function(){
                      return grabDeets("Florida")
                    }
                },
                "GA": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("Georgia")
                    }
                },
                "HI": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("California")
                    }
                },
                "ID": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("Idaho")
                    }
                },
                "IL": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("Illinois")
                    }
                },
                "IN": {
                    "fillKey": "Republican",
                    "electoralVotes": 11
                },
                "IA": {
                    "fillKey": "Light Democrat",
                    "electoralVotes": 11
                },
                "KS": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "KY": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "LA": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "MD": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "ME": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "MA": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "MN": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "MI": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "MS": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "MO": {
                    "fillKey": "Republican",
                    "electoralVotes": 13
                },
                "MT": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "NC": {
                    "fillKey": "Light Republican",
                    "electoralVotes": 32
                },
                "NE": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "NV": {
                    "fillKey": "Heavy Democrat",
                    "electoralVotes": 32
                },
                "NH": {
                    "fillKey": "Light Democrat",
                    "electoralVotes": 32
                },
                "NJ": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "NY": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "ND": {
                    "fillKey": "Republican",
                    "electoralVotes": 32
                },
                "NM": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32
                },
                "OH": {
                    "fillKey": "UNDECIDED",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("Ohio")
                    }
                },
                "OK": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("Oklahoma")
                    }
                },
                "OR": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("Oregon")
                    }
                },
                "PA": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("Pensylvannia")
                    }
                },
                "RI": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("Rhode Island")
                    }
                },
                "SC": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("South Carolina")
                    }
                },
                "SD": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("South Dakota")
                    }
                },
                "TN": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("Tennessee")
                    }
                },
                "TX": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("Texas")
                    }
                },
                "UT": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("Utah")
                    }
                },
                "WI": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("Wisconsin")
                    }
                },
                "VA": {
                    "fillKey": "Light Democrat",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("Virginia")
                    }
                },
                "VT": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("California")
                    }
                },
                "WA": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("Washington")
                    }
                },
                "WV": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("California")
                    }
                },
                "WY": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("Wyoming")
                    }
                },
                "CA": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    "details": grabDeets("California")
                },
                "CT": {
                    "fillKey": "Democrat",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("Conneticut")
                    }
                },
                "AK": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("Arkansas")
                    }
                },
                "AR": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("Arizona")
                    }
                },
                "AL": {
                    "fillKey": "Republican",
                    "electoralVotes": 32,
                    details: function(){
                      return grabDeets("Alabama")
                    }
                }
              },
              geographyConfig: {
                  popupTemplate: function(geo, data) {
                    console.log("deeets" + data.details)
                      return '<div class="hoverinfo"><strong> Number of things in ' + geo.properties.name +
                              ': ' + data.electoralVotes +
                              '</strong><p>Hey there: </p>'+ data.details +'</div>'

                  }
              }
          });


});
