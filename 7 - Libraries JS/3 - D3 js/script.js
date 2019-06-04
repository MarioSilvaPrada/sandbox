var barData = [];

for (let i = 0; i < 12; i ++) {
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

var tooltip = d3.select('body')
                .append('div')
                .style('position', 'absolute')
                .style('padding','0 10px')
                .style('background', 'white')
                .style('opacity', 0)
        

var myChart = d3.select('#viz').append('svg')
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
    .attr('height', 0)
    .attr('x', function(d) {
        return xScale(d)
    })
    .attr('y', height)
    

    .on('mouseover', function(d) {
        d3.select(this)
            // .transition()
            // .delay(400)
            // .duration(200)
            tooltip.transition().duration(200)
            .style('opacity', .9)
            tooltip.html(d)
            .style('left', (d3.event.pageX - 35) + 'px')
            .style('top', (d3.event.pageY - 30) + 'px')
            .style('opacity', .5)
    })

    .on('mouseout', function(d) {
        d3.select(this)
            .transition()
            .style('opacity', 1)
    });

    myChart.transition()
        .attr('height', function (d) {
            return yScale(d);
        })
        .attr('y', function (d) {
            return height - yScale(d);
        })
        .delay(function (d, i) {
            return i * 20;
        })
        .duration(1000)
        .ease(d3.easeBounceOut)

