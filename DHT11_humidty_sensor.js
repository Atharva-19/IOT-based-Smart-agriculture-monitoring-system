var lineGraph1 = new boltGraph();
lineGraph1.setChartType("lineGraph");
lineGraph1.setAxisName('X-Axis Name','Temperature->');
lineGraph1.plotChart('time_stamp','Temperature');
var lineGraph2 = new boltGraph();
lineGraph2.setChartType("lineGraph");
lineGraph2.setAxisName('X-Axis Name','Humidity->');
lineGraph2.plotChart('time_stamp','Humidity');