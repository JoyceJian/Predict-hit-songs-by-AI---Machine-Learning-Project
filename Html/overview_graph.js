////////////////////////////////////////////////////////////////////////////////////////////////////////
// Modes Summary Chart

var models_accuracy = [[0.3079, 'Decision Tree'],
[0.4427, 'Random Forest'],
[0.4020, 'Neural Network'],
[0.402, 'K Nearest Neighbors'],
[0.3740, 'Gaussian Naive Bayes'],
[0.40, 'Support Vector Machine'],
[0.4096, 'Logistic Regression']]

var accuracy = models_accuracy.map(function(item, index) {
   return ((item[0]).toFixed(4)+'%');
 });

// console.log(weight);

var model = models_accuracy.map(function(item, index) {
   return item[1];
 });

// console.log(feature);

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
 