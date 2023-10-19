const treeData = {
    name: "START",
    children: [
        {
            name: "is_circle",
            children: [
                {
                    name: "edible",
                    children: [
                        {
                            name: "Robot fit for survival"
                        }
                    ]
                }
            ]
        },
        {
            name: "is_not_circle",
            children: [
                {
                    name: "is_not_edible",
                    children: [
                        {
                            name: "Robot is not fit for survival"
                        }
                    ]
                }
            ]
        }
    ]
};

const width = window.innerWidth * 0.7;
const height = window.innerHeight * 0.8;

const svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width * 0.03 + ", " + height * 0.03 + ")");

const treeLayout = d3.tree().size([width * 0.6, height]);
const root = d3.hierarchy(treeData);
const tree = treeLayout(root);

const nodes = svg.selectAll(".node")
    .data(tree.descendants())
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", d => `translate(${d.y},${d.x})`);

nodes.append("circle")
    .attr("r", 7);

nodes.append("text")
    .text(d => d.data.name)
    .attr("x", d => d.children ? 0 : 10)
    .attr("y", d => d.children ? -10 : 0)
    .attr("dy", 5)
    .attr("text-anchor", "left");

const links = svg.selectAll(".link")
    .data(tree.links())
    .enter()
    .append("path")
    .attr("class", "link")
    .style('stroke', '#000')
    .attr("d", d => {
        return `M${d.source.y},${d.source.x} L${d.target.y},${d.target.x}`;
    });