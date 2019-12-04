//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Decision Tree Features Importances
var feature_importances_decision_tree =[[0.13283988990588416, 'loudness'],
 [0.11160551392351757, 'duration_ms'],
 [0.10297433479924727, 'tempo'],
 [0.0998221412470228, 'speechiness'],
 [0.09555279534331029, 'energy'],
 [0.09450781072708907, 'acousticness'],
 [0.091189127516146, 'valence'],
 [0.08463258428574362, 'danceability'],
 [0.0686077918386917, 'liveness'],
 [0.06226230371709528, 'key'],
 [0.03866161250405336, 'instrumentalness'],
 [0.011978226836664647, 'mode'],
 [0.005365867355534342, 'time_signature']]

 var weight2 = feature_importances_decision_tree.map(function(item, index) {
  return ((item[0]).toFixed(4)+'%');
});

console.log(weight2);

var feature2 = feature_importances_decision_tree.map(function(item, index) {
  return item[1];
});

// console.log(feature);

var trace2 = {
    y: feature2,
    x: weight2,
    type: "bar",
    text: feature2,
    orientation: "h"
  
  };

var layout2 = {
      title: "Feauture Importances of Decision Tree",
      xaxis: { title: "Weights",tickformat: ',.2%'},
      yaxis: { title: "Features",autorange:"reversed"},
      
      margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
      }};
    
var dataforbar2 = [trace2];

  //plot the bar chart
Plotly.newPlot("feature_importances2", dataforbar2,layout2);