setChartLibrary('google-chart');
setChartTitle('Soil Moisture Monitor');
setChartType('lineGraph');
setCrosshair(true);
// Assuming SensorReading contains the raw soil moisture reading
var MinReading =0 // The minimum reading for dry soil;
var MaxReading =1023// The maximum reading for saturated soil;

var Percentage = 100 - ((moisture/1024)*100);
moisture= Percentage

// Assuming your soil moisture data is provided in variables 'time_stamp' and 'moisture'
setAxisName('time_stamp', 'Moisture Level');
plotChart('time_stamp', 'moisture');