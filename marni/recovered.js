d3.csv("covid-19 dataset.csv", function(data){

    var totalrecovered = [d3.sum(data.map(function(d){ 
		return d.recovered}))];
	   
	
    console.log(totalrecovered);
	
	d3.select('body')
    .selectAll('p3')
    .data(totalrecovered)
    .enter()
    .append('p3')
    .text(function(d){ 
		return d;})
	});