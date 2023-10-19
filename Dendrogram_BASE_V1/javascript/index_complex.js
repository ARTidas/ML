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
                                    name: "IS EDIBLE"//name: "RED, LARGE, CIRCLE"
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
                                            name: "IS NOT EDIBLE"//name: "RED, LARGE, RECT"
                                        },
                                        {
                                            name: "is_not_rect",
                                            children: [
                                                {
                                                    name: "is_triangle",
                                                    children: [
                                                        {
                                                            name: "IS NOT EDIBLE"//name: "RED, LARGE, TRIANGLE"
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: "is_not_triangle",
                                                    children: [
                                                        {
                                                            name: "???"//name: "RED, LARGE, ???"
                                                        }
                                                    ]
                                                }
                                            ]
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
                                    name: "IS EDIBLE"//name: "RED, NOT LARGE, CIRCLE"
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
                                            name: "IS NOT EDIBLE"
                                        },
                                        {
                                            name: "is_not_rect",
                                            children: [
                                                {
                                                    name: "is_triangle",
                                                    children: [
                                                        {
                                                            name: "IS NOT EDIBLE"
                                                        }
                                                    ]
                                                },
                                                {
                                                    name: "is_not_triangle",
                                                    children: [
                                                        {
                                                            name: "???"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
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
                                    name: "is_circle",
                                    children: [
                                        {
                                            name: "IS EDIBLE"//name: "BLUE, LARGE, CIRCLE"
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
                                                    name: "IS NOT EDIBLE"
                                                },
                                                {
                                                    name: "is_not_rect",
                                                    children: [
                                                        {
                                                            name: "is_triangle",
                                                            children: [
                                                                {
                                                                    name: "IS NOT EDIBLE"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            name: "is_not_triangle",
                                                            children: [
                                                                {
                                                                    name: "???"
                                                                }
                                                            ]
                                                        }
                                                    ]
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
                                            name: "IS EDIBLE"//name: "BLUE, NOT LARGE, CIRCLE"
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
                                                    name: "IS NOT EDIBLE"
                                                },
                                                {
                                                    name: "is_not_rect",
                                                    children: [
                                                        {
                                                            name: "is_triangle",
                                                            children: [
                                                                {
                                                                    name: "IS NOT EDIBLE"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            name: "is_not_triangle",
                                                            children: [
                                                                {
                                                                    name: "???"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {
                    name: "is_not_blue",
                    children: [
                        {
                            name: "is_yellow",
                            children: [
                                {
                                    name: "is_large",
                                    children: [
                                        {
                                            name: "is_circle",
                                            children: [
                                                {
                                                    name: "IS EDIBLE"
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
                                                            name: "IS NOT EDIBLE"
                                                        },
                                                        {
                                                            name: "is_not_rect",
                                                            children: [
                                                                {
                                                                    name: "is_triangle",
                                                                    children: [
                                                                        {
                                                                            name: "IS NOT EDIBLE"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    name: "is_not_triangle",
                                                                    children: [
                                                                        {
                                                                            name: "???"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
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
                                                    name: "IS EDIBLE"
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
                                                            name: "IS NOT EDIBLE"
                                                        },
                                                        {
                                                            name: "is_not_rect",
                                                            children: [
                                                                {
                                                                    name: "is_triangle",
                                                                    children: [
                                                                        {
                                                                            name: "IS NOT EDIBLE"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    name: "is_not_triangle",
                                                                    children: [
                                                                        {
                                                                            name: "???"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            name: "is_not_yellow",
                            children: [
                                {
                                    name: "???"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
    ]
};

const width = window.innerWidth * 0.95;
const height = window.innerHeight * 0.85;

const dendrogram_strecting_factor_y = 2;
const dendrogram_strecting_factor_x = 0.65;

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
    .attr("transform", d => `translate(
        ${d.y * dendrogram_strecting_factor_y},
        ${d.x * dendrogram_strecting_factor_x}
    )`);

nodes.append("circle")
    .attr("r", 3);

nodes.append("text")
    .text(d => d.data.name)
    .attr("x", d => d.children ? 0 : 10)
    .attr("y", d => d.children ? -10 : 0)
    .attr("dy", 5)
    .attr("font-size", "16px")
    .attr("text-anchor", "left");

const links = svg.selectAll(".link")
    .data(tree.links())
    .enter()
    .append("path")
    .attr("class", "link")
    .style('stroke', '#000')
    .attr("d", d => {
        //return `M${d.source.y},${d.source.x} L${d.target.y},${d.target.x}`;
        return `
            M${d.source.y * dendrogram_strecting_factor_y},
            ${d.source.x * dendrogram_strecting_factor_x} 
            L${d.target.y * dendrogram_strecting_factor_y},
            ${d.target.x * dendrogram_strecting_factor_x}
        `;
    });