const width = window.innerWidth * 0.95;
const height = window.innerHeight * 0.95;

const svg = d3.select("body").append("svg").attr("width", width).attr("height", height);

// Parameters for the normal distribution
const mean = width / 2;
const standard_deviation = width / 6;

// Generate x values
const xValues = d3.range(mean - 3 * standard_deviation, mean + 3 * standard_deviation, 1);

// Calculate the probability density for each x value
const data = xValues.map((x) => ({ x, y: normalDensity(x) }));

function normalDensity(x) {
  const a = 1 / (standard_deviation * Math.sqrt(2 * Math.PI));
  const b = -0.5 * Math.pow((x - mean) / standard_deviation, 2);
  return a * Math.exp(b);
}

// Create scales for mapping data to the SVG
const xScale = d3.scaleLinear()
  .domain([mean - 3 * standard_deviation, mean + 3 * standard_deviation])
  .range([0, width]);

const yScale = d3.scaleLinear()
  .domain([0, d3.max(data, (d) => d.y)])
  .range([height, 0]);

// Create a line generator
const line = d3
  .line()
  .x((d) => xScale(d.x))
  .y((d) => yScale(d.y));

// Append the line to the SVG
svg
  .append("path")
  .datum(data)
  .attr("d", line)
  .attr("fill", "none")
  .attr("stroke", "steelblue")
  .attr("stroke-width", 2);