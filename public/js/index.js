var STATE_FIP = "25";
var BASE_URL = "https://api.census.gov/data/2015/acs1";

var COUNTY_FIPS = {
  "barnstable": "001",
  "berkshire": "003",
  "bristol": "005",
  "essex": "009",
  "franklin": "011",
  "hampden": "013",
  "hampshire": "015",
  "middlesex": "017",
  "norfolk": "021",
  "plymouth": "023",
  "suffolk": "025",
  "worcester": "027"
}

var COUNTY_SUBDIVISIONS = ["fall river", "new bedford", "lawrence", "lynn", "springfield", "cambridge", "framingham", "lowell", "newton", "somerville", "quincy", "brockton", "boston", "worcester city"]


var INCOME_BRACKETS = "B19001_002E,B19001_003E,B19001_004E,B19001_005E,B19001_006E,B19001_007E,B19001_008E,B19001_009E,B19001_010E,B19001_011E,B19001_012E,B19001_013E,B19001_014E,B19001_015E,B19001_016E,B19001_017E";
var INCOME_LABELS = ["Less than \n\$10,000", "\$10,000 to \n14,999", "\$15,000 to\n19,999", "\$20,000 to\n24,999", "\$25,000 to\n29,999", "\$30,000 to\n34,999", "\$35,000 to\n39,999", "\$40,000 to\n44,999", "\$45,000 to\n49,999    ", "\$50,000 to\n59,999", "\$60,000 to\n74,999", "\$75,000 to\n99,999", "\$100,000 to\n124,999", "\$125,000 to\n149,999", "\$150,000 to\n199,999", "Over\n200,000"];


var ED_BRACKETS = 'B15003_002E,B15003_003E,B15003_004E,B15003_005E,B15003_006E,B15003_007E,B15003_008E,B15003_009E,B15003_010E,B15003_011E,B15003_012E,B15003_013E,B15003_014E,B15003_015E,B15003_016E,B15003_017E,B15003_018E,B15003_019E,B15003_020E,B15003_021E,B15003_022E,B15003_023E,B15003_024E,B15003_025E';
var ED_LABELS = ["None", "Nursery", "Kindergarten", "1st grade", "2nd grade", "3rd grade", "4th grade", "5th grade", "6th grade", "7th grade", "8th grade", "9th grade", "10th grade", "11th grade", "12th grade, no diploma", "High School", "GED/alternative", "<1yr college", ">1yr college", "Associate's Degree", "Bachelor's Degree", "Master's Degree", "Professional School Degree", "Doctorate Degree"]


var AGE_BRACKETS = 'B01001_003E,B01001_004E,B01001_005E,B01001_006E,B01001_007E,B01001_008E,B01001_009E,B01001_010E,B01001_011E,B01001_012E,B01001_013E,B01001_014E,B01001_015E,B01001_016E,B01001_017E,B01001_018E,B01001_019E,B01001_020E,B01001_021E,B01001_022E,B01001_023E,B01001_024E,B01001_025E,B01001_027E,B01001_028E,B01001_029E,B01001_030E,B01001_031E,B01001_032E,B01001_033E,B01001_034E,B01001_035E,B01001_036E,B01001_037E,B01001_038E,B01001_039E,B01001_040E,B01001_041E,B01001_042E,B01001_043E,B01001_044E,B01001_045E,B01001_046E,B01001_047E,B01001_048E,B01001_049E';
var AGE_LABELS = ["Under 5", "5 to 9", "10 to 14", "15 to 17", "18 and 19", "20", "21", "22 to 24", "25 to 29", "30 to 34", "35 to 39", "40 to 44", "45 to 49", "50 to 54", "55 to 59", "60 and 61", "62 to 64", "65 and 66", "67 to 69", "70 to 74", "75 to 79", "80 to 84", "85 and older"];

//var RACE_BRACKETS = "B02017_001E,B02018_001E,B02019_001E,B02008_001E,B02009_001E,B02013_001E";
//var RACE_LABELS = ["American Indian and Alaska Native", "Asian", "Native Hawaiian and Other Pacific Islander", "White", "Black or African American", "Some other race"];

// FIX RACE
// ASIAN ALONE OR IN COMBINATION WITH ONE OR MORE OTHER RACES
var RACE_BRACKETS = "B02010_001E,B02011_001E,B02012_001E,B02008_001E,B02009_001E,B02013_001E";
var RACE_LABELS = ["American Indian and Alaska Native", "Asian", "Native Hawaiian and Other Pacific Islander", "White", "Black or African American", "Some other race"];


//var ETHNICITY_BRACKETS = "B03001_001E,B03001_002E";
//var ETHNICITY_LABELS = ["Hispanic or Latino", "NOT Hispanic or Latino"];

// FIX ETHNICITY

var ETHNICITY_BRACKETS = "B03001_003E,B03001_002E";
var ETHNICITY_LABELS = ["Hispanic or Latino", "NOT Hispanic or Latino"];

//CHANGED
//var LINGUISTIC_BRACKETS = "B19001_002E,B19001_003E,B19001_004E,B19001_005E,B19001_006E,B19001_007E,B19001_008E,B19001_009E,B19001_010E,B19001_011E,B19001_012E,B19001_013E,B19001_014E,B19001_015E,B19001_016E,B19001_017E";
//var LINGUISTIC_LABELS = ["Less than \n\$10,000", "\$10,000 to \n14,999", "\$15,000 to\n19,999", "\$20,000 to\n24,999", "\$25,000 to\n29,999", "\$30,000 to\n34,999", "\$35,000 to\n39,999", "\$40,000 to\n44,999", "\$45,000 to\n49,999    ", "\$50,000 to\n59,999", "\$60,000 to\n74,999", "\$75,000 to\n99,999", "\$100,000 to\n124,999", "\$125,000 to\n149,999", "\$150,000 to\n199,999", "Over\n200,000"];


var LINGUISTIC_BRACKETS = "B16001_001E,B16001_003E,B16001_006E,B16001_009E,B16001_015E";
var LINGUISTIC_LABELS = ["English","Spanish","French (incl. Cajun)","Haitian","Portuguese"];

var EMPLOYMENT_BRACKETS = "B23025_004E,B23025_006E,B23025_005E";
var EMPLOYMENT_LABELS = ["Civilian labor force", "Armed forces", "Unemployed"];

// FYI: B23025_005E	Estimate!!Total!!In labor force!!Civilian labor force!!Unemployed

// Google Analytics
(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-97409379-1', 'auto');
ga('send', 'pageview');

function getSum(total, num) {
  if (typeof num === 'string' || num instanceof String) {
    return parseInt(total) + parseInt(num);
  } else {
    return total + num;
  }
}

$(document).ready(function() {

  $(document).on('click', "#submit", function(e) {

    var queryType = $('.nav-tabs .active').text();
    var brackets = "";
    var labels = [];
    var plotTitle = "";
    var x_axis_label = "";
    var y_axis_append = "";

    console.log("here");
    console.log(queryType);

    if (queryType == "Income") {
      brackets = INCOME_BRACKETS;
      labels = INCOME_LABELS;
      plotTitle = "Household Income Distribution Across MA Counties";
      x_axis_label = "Household Income";
    } else if (queryType == "Education") {
      brackets = ED_BRACKETS;
      labels = ED_LABELS;
      plotTitle = "Maximum Education Level Attained Across MA Counties";
      x_axis_label = "Maximum Education Level Attained";
      y_axis_append = "Over 25";
    } else if (queryType == "Age") {
      brackets = AGE_BRACKETS;
      labels = AGE_LABELS;
      plotTitle = "Age Distribution Across MA Counties";
      x_axis_label = "Age";
    } else if (queryType == "Race") {
      brackets = RACE_BRACKETS;
      labels = RACE_LABELS;
      plotTitle = "Races Across MA Regions";
      x_axis_label = "Race";
    } else if (queryType == "Ethnicity") {
      brackets = ETHNICITY_BRACKETS;
      labels = ETHNICITY_LABELS;
      plotTitle = "Ethnicities Across MA Regions";
      x_axis_label = "Ethnicity";
    } else if (queryType == "Language") {
      brackets = LINGUISTIC_BRACKETS;
      labels = LINGUISTIC_LABELS;
      plotTitle = "Language Spoken at Home Across MA Regions";
      x_axis_label = "Language";
    } else if (queryType == "Employment") {
      brackets = EMPLOYMENT_BRACKETS;
      labels = EMPLOYMENT_LABELS;
      plotTitle = "Employment Across MA Regions";
      x_axis_label = "Employment";

      // TODO: remove option for counties w/o data
      /*
      COUNTY_FIPS = {
          "essex": "009",
          "middlesex": "017",
          "norfolk": "021",
          "plymouth": "023",
          "suffolk": "025"

      }
      */
    }
    //var incomeChoice = $('#income-options option:selected').val();
    //var demographicChoice = $('#demographic-options option:selected').val();

    ga('send', 'event', 'Button', 'submit', queryType);

    // var demographicChoice = $('#demographic-options option:selected').val();

    var countyInput = "";
    var countyInputList = [];
    $(".label-info").each(function() {
      // Only process valid input strings
      var key = $(this).text().toLowerCase();
      if (COUNTY_FIPS[key]) {
        countyInput += COUNTY_FIPS[key] + ",";
        ga('send', 'event', 'Counties', 'find', key);
      } else {
        // $("#location-info").append('<div class="alert alert-danger alert-dismissible" role="alert">' +
        // '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
        // "Please enter a valid county name.</div>")
        countyInputList.push(key);
        ga('send', 'event', 'Counties', 'find', key);
      }
    });

    indices = []
    var data_counties = {}
    var data_subcounties = {}
    var find_sub = countyInputList.length != 0
    console.log(find_sub)
    if (find_sub) {
      for (i = 0; i < countyInputList.length; i++) {
        indices.push(COUNTY_SUBDIVISIONS.indexOf(countyInputList[i]))
      }
      data_subcounties = {
        get: "NAME," + brackets,
        for: "county subdivision:*",
        in: "state:" + STATE_FIP,
        key: KEY
      }
    }

    var noCounties = false;
    if (countyInput.length == 0) {
      noCounties = true;
      countyInput = "005,"
    }
    data_counties = {
      get: "NAME," + brackets,
      for: "county:" + countyInput.slice(0, -1),
      in: "state:" + STATE_FIP,
      key: KEY
    }

    $.ajax(BASE_URL, {
      "method": "GET",
      "data": data_counties,
      "success": function(resp) {
        console.log(this.url)
        console.log(resp)
        var data = [];
        var y_vals = []
        var names = []
        var y_axis_label = "";
        var tick_format = "";

        if (noCounties == false) {
          if ($("#percentages").is(":checked")) {
            y_axis_label = "Percentage of Population " + y_axis_append;
            tick_format = '%';
            ga('send', 'event', 'Button', 'check', 'Percentages');
            for (i = 1; i < resp.length; i++) {
              // TODO: Slice to (1,-3) if county subdivisions
              var vals = resp[i].slice(1, -2);
              var sum = vals.reduce(getSum)
              var percentages = vals.map(function(x) {
                return x * 1.0 / sum
              });
              console.log(percentages);
              y_vals.push(percentages)
              names.push(resp[i][0].split(',')[0]);
            }
          } else {
            y_axis_label = "Number of People " + y_axis_append;
            tick_format = '';
            for (i = 1; i < resp.length; i++) {
              y_vals.push(resp[i].slice(1, -2));
              names.push(resp[i][0].split(',')[0])
            }
          }
        }
        if (find_sub) {
          $.ajax(BASE_URL, {
            "async": false,

            "method": "GET",
            "data": data_subcounties,
            "success": function(resp) {
              var new_resp = [resp[0]]
              for (i = 0; i < indices.length; i++) {
                new_resp.push(resp[indices[i] + 1]);
              }
              resp = new_resp
              console.log("New resp")
              console.log(resp)
              if ($("#percentages").is(":checked")) {
                y_axis_label = "Percentage of Population " + y_axis_append;
                tick_format = '%';
                ga('send', 'event', 'Button', 'check', 'Percentages');
                for (i = 1; i < resp.length; i++) {
                  // TODO: Slice to (1,-3) if county subdivisions
                  var vals = resp[i].slice(1, -3);
                  var sum = vals.reduce(getSum)
                  var percentages = vals.map(function(x) {
                    return x * 1.0 / sum
                  });
                  console.log(percentages);
                  y_vals.push(percentages)
                  names.push(resp[i][0].split(',')[0]);
                }
              } else {
                y_axis_label = "Number of People " + y_axis_append;
                tick_format = '';
                for (i = 1; i < resp.length; i++) {
                  y_vals.push(resp[i].slice(1, -2));
                  names.push(resp[i][0].split(',')[0])
                }
              }
            }
          })
        }
        if ($("#state-compare").is(":checked")) {
          ga('send', 'event', 'Button', 'check', 'Compare-to-state');
          $.ajax(BASE_URL, {
            "async": false,
            "method": "GET",
            "data": {
              get: "NAME," + brackets,
              for: "county:*",
              in: "state:" + STATE_FIP,
              key: KEY
            },
            "success": function(resp2) {
              all_counties_data = [];
              for (i = 1; i < resp2.length; i++) {
                single_county = resp2[i].slice(1, -2);
                all_counties_data.push(single_county)
              }
              all_counties_data = all_counties_data.reduce(function(array1, array2) {
                return array1.map(function(value, index) {
                  return parseInt(value) + parseInt(array2[index]);
                });
              });

              if ($("#percentages").is(":checked")) {
                var sum = all_counties_data.reduce(getSum)
                all_counties_data = all_counties_data.map(function(x) {
                  return x * 1.0 / sum
                });
              }

              y_vals.push(all_counties_data);
              names.push('Entire State');
            }
          });
        }

        console.log(y_vals);


        if (queryType == "Age") {
          var new_y_vals = []
          for (i = 0; i < y_vals.length; i++) {
            var county_vals = [];
            var num_vals = y_vals[i].length / 2.0;
            for (j = 0; j < num_vals; j++) {
              county_vals.push(parseFloat(y_vals[i][j]) + parseFloat(y_vals[i][j + num_vals]))
            }
            new_y_vals.push(county_vals);
          }
          y_vals = new_y_vals;

          var combined_y_vals = []
          labels = ["Under 10", "10 to 20", "20s", "30s", "40s", "50s", "60s", "70s", "Over 80"];
          for (i = 0; i < y_vals.length; i++) {
            var county_vals = []
            county_vals.push(y_vals[i].slice(0, 1).reduce(getSum));
            county_vals.push(y_vals[i].slice(2, 4).reduce(getSum));
            county_vals.push(y_vals[i].slice(5, 8).reduce(getSum));
            county_vals.push(y_vals[i].slice(9, 10).reduce(getSum));
            county_vals.push(y_vals[i].slice(11, 12).reduce(getSum));
            county_vals.push(y_vals[i].slice(13, 14).reduce(getSum));
            county_vals.push(y_vals[i].slice(15, 18).reduce(getSum));
            county_vals.push(y_vals[i].slice(19, 20).reduce(getSum));
            county_vals.push(y_vals[i].slice(21, 22).reduce(getSum));
            combined_y_vals.push(county_vals);
          }
          y_vals = combined_y_vals;

        }


        if (queryType == "Education") {
          var new_y_vals = []
          labels = ["Less than H.S. Diploma", "H.S. Diploma or Equivalent", "Associate's Degree", "Bachelor's Degree", "Graduate Degree"]
          for (i = 0; i < y_vals.length; i++) {
            var county_vals = []
            county_vals.push(y_vals[i].slice(0, 14).reduce(getSum));
            county_vals.push(y_vals[i].slice(15, 18).reduce(getSum));
            county_vals.push(parseFloat(y_vals[i][19]));
            county_vals.push(parseFloat(y_vals[i][20]));
            county_vals.push(y_vals[i].slice(21, 23).reduce(getSum));
            new_y_vals.push(county_vals);
          }
          y_vals = new_y_vals;
        }


        for (i = 0; i < y_vals.length; i++) {
          data.push({
            x: labels,
            //y: resp[i].slice(1, -2),
            y: y_vals[i],
            name: names[i],
            type: 'bar'
          });
        }

        var layout = {
          barmode: 'group',
          title: plotTitle,
          margin: {
            b: 150
          },
          height: 600,
          width: 900,
          xaxis: {
            title: x_axis_label,
            titlefont: {
              family: 'Helvetica',
              size: 18,
              color: '#7f7f7f'
            }
          },
          yaxis: {
            title: y_axis_label,
            tickformat: tick_format,
            titlefont: {
              family: 'Helvetica',
              size: 18,
              color: '#7f7f7f'
            }
          }
        };

        $("#info-text").show();
        Plotly.newPlot('myDiv', data, layout, {
          displayModeBar: true
        });
      }
    });
  });
});
