const width = window.innerWidth * 0.95;
const height = window.innerHeight * 0.95;

const svg = d3.select("body").append("svg").attr("width", width).attr("height", height);

// Parameters for the normal distribution
const mean = width / 2;
const standard_derivation = width / 9;

// Generate and plot random points following a normal distribution
const data = d3.range(1000).map(() => ({
    x: d3.randomNormal(mean, standard_derivation)(),
    y: height / 2,
}));

svg
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y)
    .attr("r", 3)
;