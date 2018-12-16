var barData = [];

for (let i = 0; i < 50; i ++) {
    barData.push(Math.random() * 30);
}

var height = 400,
    width = 600,
    barWidth = 50,
    barOffset = 5;

var yScale = d3.scaleLinear()
            .domain([0, d3.max(barData)])
            .range([0,height]);

var xScale = d3.scaleBand()
            .domain(barData)
            .range([0, width])
            .paddingInner(.3)
            .paddingOuter(.1)

var colors = d3.scaleLinear()
        .domain([0, barData.length])
        .range(['#FFB832', '#C61C6F'])
        

d3.select('#viz').append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background', '#C9D7D6')
.selectAll('rect').data(barData)
    .enter().append('rect')
    .attr('fill', function(d, i) {
        return colors(i);
    })
    .attr('width', function(d) {
        return xScale.bandwidth();
    }) 
    .attr('height', function(d) {
        return yScale(d);
    })
    .attr('x', function (d) {
        return xScale(d);
    })
    .attr('y', function (d) {
        return height - yScale(d);
    })

    .on('mouseover', function(d) {
        d3.select(this)
            .style('opacity', .5)
    })

    .on('mouseout', function(d) {
        d3.select(this)
            .style('opacity', 1)
    })