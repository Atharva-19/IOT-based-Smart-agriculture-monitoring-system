setChartLibrary('google-chart');
setChartTitle('Temperature Monitor');
setChartType('lineGraph');
setCrosshair(true);
mul(0.0977);
setAxisName('time_stamp','temperature(In Celsius)');
plotChart('time_stamp','temp');