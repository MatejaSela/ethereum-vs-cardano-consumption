import "./bar-chart.css";
import * as d3 from "d3";
import React, { useState, useEffect } from "react";


const BarChart = (props) => {
    const [data, setData] = useState([
        {group: "Cardano", value: props.totCardano},
        {group: "Ethereum", value: props.totEthereum},
    ]);

    // set the dimensions and margins of the graph
    const margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

    // create a tooltip


    var mouseover = function(d) {
        let eth_cons = data[1].value
        let ada_cons = data[0].value
        let text;
        if(eth_cons > ada_cons){
            text = "The selected number of years of Cardano consumption are " + data[1].value/data[0].value + " times less energy consuming than Ethereum"
        }
        else{
            text = "The selected number of years of Cardano consumption are " + data[0].value/data[1].value + " times more energy consuming than Ethereum"
        }
        d3.select(".barwrapper")
            .append("div")
                .attr("class", "tooltip")
                .style("visibility", "visible")
                .style("opacity", 1)
                .style("background-color", "white")
                .append("p")
                    .attr("class", "texty")
                    .text(text)
        
        d3.select(this)
            .style("stroke", "black")
            .style("opacity", 1)
    }

    var mouseleave = function(d) {

        d3.select(".tooltip")
            .attr("class", ".tooltip")
            .style("visibility", "hidden")
            .remove("p").attr("class", "texty")

        d3.select(this)
            .style("stroke", "none")
            .style("opacity", 0.8)
    }

    const svg = d3.select("#barchart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`)

    function handleChange(e) {
        const data1 = [
            {group: "Cardano", value: props.totCardano*e.target.value},
            {group: "Ethereum", value: props.totEthereum},
        ];
        setData(data1)
        svg.remove("svg")
    }

    useEffect(() => {
        update(data)
    }, [data]);
        
    function update(data) {

        // X-axis label
        svg.append("text")
        .attr("class", "x label")
        .attr("x", width)
        .attr("y", height - 6)
        .text("Blockchain");

        // X axis
        const x = d3.scaleBand()
        .range([0, width ])
        .domain(data.map(d => d.group))
        .padding(0.2);

        svg.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(x));

        // Y-axis label   
        svg.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("y", 6)
            .attr("dy", ".75em")
            .attr("transform", "rotate(-90)")
            .text("Consumption in MWh");
            
        let y = props.totEthereum > data[0].value ? d3.scaleLinear()
            .domain([0, props.totEthereum])
            .range([ height, 0]) : d3.scaleLinear()
            .domain([0, data[0].value])
            .range([ height, 0])

        svg.append("g")
            .attr("class", "myYaxis")
            .call(d3.axisLeft(y));
        
        d3.select("#barchart").transition()
        .duration(500)

        var u = svg.selectAll("rect")
            .data(data)
            
        u.join("rect")
            .attr("x", d => x(d.group))
            .attr("y", d => y(d.value))
            .attr("width", x.bandwidth())
            .attr("height", d => height - y(d.value))
            .attr("fill", "#333")
            .on("mouseover", mouseover)
            .on("mouseleave", mouseleave);
    }
        
    return(
        <div className="barwrapper"> 
        <form>
        <label>
            Cardano years of consumption:
            <input name="Cardano Transactions" onChange={handleChange} />
        </label>
        </form>
        {data ?     
            <div id="barchart"></div>
        : null}
       
       </div>
    )
}
export default BarChart
