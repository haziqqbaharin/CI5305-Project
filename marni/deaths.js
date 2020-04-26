d3.csv("covid-19 dataset.csv", function(data){

    var totaldeaths = [d3.sum(data.map(function(d){ 
		return d.deaths}))];
	   
	
    console.log(totaldeaths);
	
	d3.select('body')
    .selectAll('p2')
    .data(totaldeaths)
    .enter()
    .append('p2')
    .text(function(d){ 
		return d;})
	});