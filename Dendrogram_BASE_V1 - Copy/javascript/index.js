const treeData = {
    name: "START",
    children: [
        {
            name: "is_red",
            children: [
                {
                    name: "is_large",
                    children: [
                        {
                            name: "is_circle",
                            children: [
                                {
                                    name: "RED, LARGE, CIRCLE"
                                }
                            ]
                        },
                        {
                            name: "is_not_circle",
                            children: [
                                {
                                    name: "is_rect",
                                    children: [
                                        {
                                            name: "RED, LARGE, RECT"
                                        },
                                        {
                                            name: "is_not_rect"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "is_not_large",
                    children: [
                        {
                            name: "is_circle",
                            children: [
                                {
                                    name: "RED, NOT LARGE, CIRCLE"
                                }
                            ]
                        },
                        {
                            name: "is_not_circle"
                        }
                    ]
                },
            ]
        },
        {
            name: "is_not_red",
            children: [
                {
                    name: "is_blue",
                    children: [
                        {
                            name: "is_large",
                            children: [
                                {
                                    name: "is_circle"
                                },
                                {
                                    name: "is_not_circle"
                                }
                            ]
                        },
                        {
                            name: "is_not_large",
                            children: [
                                {
                                    name: "is_circle"
                                },
                                {
                                    name: "is_not_circle"
                                }
                            ]
                        },
                    ]
                },
                {
                    name: "is_not_blue",
                }
            ]
        },
    ]
};

const width = window.innerWidth * 0.95;
const height = window.innerHeight * 0.95;

const svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(50, 50)");

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
    .attr("x", d => d.children ? -20 : 20)
    .attr("dy", 3);

const links = svg.selectAll(".link")
    .data(tree.links())
    .enter()
    .append("path")
    .attr("class", "link")
    .attr("d", d => {
        return `M${d.source.y},${d.source.x} C${(d.source.y + d.target.y) / 2},${d.source.x} ${(d.source.y + d.target.y) / 2},${d.target.x} ${d.target.y},${d.target.x}`;
    });