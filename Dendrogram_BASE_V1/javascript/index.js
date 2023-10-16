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
                                    name: "END"//name: "RED, LARGE, CIRCLE"
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
                                            name: "END"//name: "RED, LARGE, RECT"
                                        },
                                        {
                                            name: "is_not_rect",
                                            children: [
                                                {
                                                    name: "is_triangle",
                                                    children: [
                                                        {
                                                            name: "END"//name: "RED, LARGE, TRIANGLE"
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
                                    name: "END"//name: "RED, NOT LARGE, CIRCLE"
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
                                            name: "END"
                                        },
                                        {
                                            name: "is_not_rect",
                                            children: [
                                                {
                                                    name: "is_triangle",
                                                    children: [
                                                        {
                                                            name: "END"
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
                                            name: "END"//name: "BLUE, LARGE, CIRCLE"
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
                                                    name: "END"
                                                },
                                                {
                                                    name: "is_not_rect",
                                                    children: [
                                                        {
                                                            name: "is_triangle",
                                                            children: [
                                                                {
                                                                    name: "END"
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
                                            name: "END"//name: "BLUE, NOT LARGE, CIRCLE"
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
                                                    name: "END"
                                                },
                                                {
                                                    name: "is_not_rect",
                                                    children: [
                                                        {
                                                            name: "is_triangle",
                                                            children: [
                                                                {
                                                                    name: "END"
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
                                                    name: "END"
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
                                                            name: "END"
                                                        },
                                                        {
                                                            name: "is_not_rect",
                                                            children: [
                                                                {
                                                                    name: "is_triangle",
                                                                    children: [
                                                                        {
                                                                            name: "END"
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
                                                    name: "END"
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
                                                            name: "END"
                                                        },
                                                        {
                                                            name: "is_not_rect",
                                                            children: [
                                                                {
                                                                    name: "is_triangle",
                                                                    children: [
                                                                        {
                                                                            name: "END"
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
const height = window.innerHeight * 0.95;

const svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width * 0.03 + ", " + height * 0.03 + ")")
;

const treeLayout = d3.tree().size([width * 0.6, height]);
const root = d3.hierarchy(treeData);
const tree = treeLayout(root);

const nodes = svg.selectAll(".node")
    .data(tree.descendants())
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", d => `translate(${d.y},${d.x})`)
;

nodes.append("circle")
    .attr("r", 3);

nodes.append("text")
    .text(d => d.data.name)
    .attr("x", d => d.children ? 0 : 20)
    .attr("y", d => d.children ? -10 : 0)
    .attr("dy", 5)
    //.attr("textLength", "90")
    //.attr("transform", "rotate(-10)")
    .attr("text-anchor", "middle")
;

const links = svg.selectAll(".link")
    .data(tree.links())
    .enter()
    .append("path")
    .attr("class", "link")
    .style('stroke', '#000')
    .attr("d", d => {
        return `M${d.source.y},${d.source.x} L${d.target.y},${d.target.x}`;
    });
    /*.attr("d", d => {
        return   `M${d.source.y},${d.source.x} C${(d.source.y + d.target.y) / 2},${d.source.x} ${(d.source.y + d.target.y) / 2},${d.target.x} ${d.target.y},${d.target.x}`;
        //return `M${sourceY},${sourceX} L${(sourceY + targetY) / 2},${sourceX} ${(sourceY + targetY) / 2},${targetX} ${targetY},${targetX}`;
    });*/

/*const straight = d => "M" + d.source.x + "," + d.source.y
    + "H" + d.target.x + "V" + d.target.y;

const link = svg.selectAll('.link')
    .data(links)
    .enter()
    .append('path')
    .attr('class', 'link')
    .style('stroke', '#8da0cb')
    .attr('d', straight);*/

// Create links for all nodes, including those with single children
/*const links = svg.selectAll(".link");

tree.each((node) => {
    if (node.parent) {
        links
            .append("path")
            .attr("class", "link")
            .attr("d", () => {
                const sourceX = node.parent.x;
                const sourceY = node.parent.y;
                const targetX = node.x;
                const targetY = node.y;
                return `M${sourceY},${sourceX} L${(sourceY + targetY) / 2},${sourceX} ${(sourceY + targetY) / 2},${targetX} ${targetY},${targetX}`;
            });
    }
});*/