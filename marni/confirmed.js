d3.csv("covid-19 dataset.csv", function(data){

    var totalconfirmed = [d3.sum(data.map(function(d){ 
		return d.confirmed}))];
	 
    console.log(totalconfirmed);
	
	d3.select('body')
    .selectAll('p1')
    .data(totalconfirmed)
    .enter()
    .append('p1')
    .text(function(d){ 
		return d;})
	});
	