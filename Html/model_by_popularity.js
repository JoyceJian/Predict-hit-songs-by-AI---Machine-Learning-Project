////////////////////////////////////////////////////////////////////////////////////////////////////////
// Modes Summary Chart

var models_accuracy = [[0.5820, 'Decision Tree'],
[0.6137, 'Random Forest'],
[0.5925, 'Neural Network'],
[0.577, 'K Nearest Neighbors'],
[0.5185, 'Gaussian Naive Bayes'],
[0.65, 'Support Vector Machine'],
[0.6137, 'Logistic Regression'],
[0.6253, 'Pyspark']]

var accuracy = models_accuracy.map(function(item, index) {
   return ((item[0]).toFixed(4)+'%');
 });

console.log(weight);

var model = models_accuracy.map(function(item, index) {
   return item[1];
 });

console.log(feature);

var trace_summary = {
     x: model,
     y: accuracy,
     type: "bar",
     text: model
     //orientation: "h"
   
   };

var layout_summary = {
       title: "Model Accuracy",
       xaxis: { title: "Model",},
       yaxis: { title: "Accuracy",tickformat: ',.2%'},
       
       margin: {
         l: 100,
         r: 100,
         t: 100,
         b: 100
       }};
     
var data_summary = [trace_summary];

   //plot the bar chart
Plotly.newPlot("model_summary", data_summary,layout_summary);
 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ramdom Forest Features Importances
 var feature_importances = [[0.11043033537036605, 'speechiness'],
 [0.11030668722446511, 'duration_ms'],
 [0.10079099671720887, 'tempo'],
 [0.09575117609070352, 'loudness'],
 [0.08817878069543118, 'instrumentalness'],
 [0.08689751084986462, 'acousticness'],
 [0.085906870322989, 'valence'],
 [0.08533999250034477, 'energy'],
 [0.08357862714606375, 'liveness'],
 [0.08251592925401793, 'danceability'],
 [0.0493828610150668, 'key'],
 [0.014017307284972141, 'mode'],
 [0.006902925528506188, 'time_signature']];

 
 var weight = feature_importances.map(function(item, index) {
    return ((item[0]).toFixed(4)+'%');
  });

 console.log(weight);

 var feature = feature_importances.map(function(item, index) {
    return item[1];
  });

 console.log(feature);

var trace1 = {
      y: feature,
      x: weight,
      type: "bar",
      text: feature,
      orientation: "h"
    
    };

var layout = {
        title: "Feauture Importances of Random Forest",
        xaxis: { title: "Weights",tickformat: ',.2%'},
        yaxis: { title: "Features",autorange:"reversed"},
        
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }};
      
var dataforbar = [trace1];

    //plot the bar chart
Plotly.newPlot("feature_importances", dataforbar,layout);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Decision Tree Features Importances
var feature_importances_decision_tree =[[0.15601525668939278, 'tempo'],
[0.11211767401022499, 'duration_ms'],
[0.1117603374627619, 'instrumentalness'],
[0.09589488357926906, 'acousticness'],
[0.09112447823965306, 'valence'],
[0.08830259136423334, 'energy'],
[0.08769179496327092, 'danceability'],
[0.08671290841549019, 'speechiness'],
[0.06891948881907183, 'liveness'],
[0.053052853854855336, 'loudness'],
[0.023115857382509104, 'mode'],
[0.01828292221922119, 'key'],
[0.007008953000046148, 'time_signature']];

 var weight2 = feature_importances_decision_tree.map(function(item, index) {
  return ((item[0]).toFixed(4)+'%');
});

console.log(weight2);

var feature2 = feature_importances_decision_tree.map(function(item, index) {
  return item[1];
});

console.log(feature);

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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Primay features 3D chart 
// Plotly.d3.csv('3d_RandomForest.csv', function(err, rows){
//   function unpack(rows, key) {
//     return rows.map(function(row)
//     { return row[key]; });}

//   var trace1990 = {
//     x:unpack(rows, 'duration_ms_1990'), y: unpack(rows, 'loudness_1990'), z: unpack(rows, 'speechiness_1990'),
//     name: '1990',
//     mode: 'markers',
   
//     marker: {
//       size: 5,
//       line: {
//       color: 'rgba(217, 217, 217, 0.14)',
//       width: 0.5},
//       opacity: 0.6},
//     type: 'scatter3d'
//     };

//     var trace2000 = {
//       x:unpack(rows, 'duration_ms_2000'), y: unpack(rows, 'loudness_2000'), z: unpack(rows, 'speechiness_2000'),
//       name:'2000',
//       mode: 'markers',
//       marker: {
//         size: 5,
//         line: {
//         color: 'rgba(234, 18, 14, 0.14)',
//         width: 0.5},
//         opacity: 0.6},
//       type: 'scatter3d'
//       };
    
//       var trace2010 = {
//         x:unpack(rows, 'duration_ms_2010'), y: unpack(rows, 'loudness_2010'), z: unpack(rows, 'speechiness_2010'),
//         mode: 'markers',
//         name:"2010",
//         marker: {
//           size: 5,
//           line: {
//           color: 'rgba(244, 248, 37, 0.14)',
//           width: 0.5},
//           opacity: 0.6},
//         type: 'scatter3d'
//         };

//       var trace2019 = {
//           x:unpack(rows, 'duration_ms_2019'), y: unpack(rows, 'loudness_2019'), z: unpack(rows, 'speechiness_2019'),
//           mode: 'markers',
//           name:"2019",
//           marker: {
//             size: 5,
//             line: {
//             color: 'rgba(37, 248, 40, 0.14)',
//             width: 0.5},
//             opacity: 0.6},
//           type: 'scatter3d'
//           };

//     var data = [trace1990,trace2000,trace2010,trace2019];
//     var layout2 = {margin: {
//       l: 0,
//       r: 0,
//       b: 0,
//       t: 0
//       }};

//     Plotly.newPlot('3d', data, layout2);

// });



