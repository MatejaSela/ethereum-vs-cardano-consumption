import "./bar-chart.css";
import * as d3 from "d3";
import React, { useState, useEffect } from "react";


const BarChart = (props) => {
    const [data, setData] = useState([]);
    const [transactionMultiplier, settransactionMultiplier] = useState(1);

    function handleChange(e) {
        const data1 = [
            {group: "Cardano " + transactionMultiplier + " tx", value: props.totCardano*e.target.value},
            {group: "Ethereum 1tx", value: props.totEthereum},
        ];
        setData(data1)
     
        console.log(e.target.value);
      }


    useEffect(() => {
        update(data)
    }, [data]);
    
    // set the dimensions and margins of the graph
    const margin = {top: 30, right: 30, bottom: 70, left: 60},
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    // // create a tooltip
    // var Tooltip = d3.select("my_dataviz")
    //     .append("svg")
    //     .style("opacity", 0)
    //     .attr("class", "tooltip")
    //     .style("background-color", "white")
    //     .style("border", "solid")
    //     .style("border-width", "2px")
    //     .style("border-radius", "5px")
    //     .style("padding", "5px")

    // // Three function that change the tooltip when user hover / move / leave a cell
    // var mouseover = function(d) {
    //     Tooltip
    //     .style("opacity", 1)
    //     d3.select(this)
    //     .style("stroke", "black")
    //     .style("opacity", 1)
    // }
    // var mousemove = function(d) {
    //     Tooltip
    //     .html("The exact value of<br>this cell is: " + d.value)
    //     .style("left", (d3.pointer(this)[0]+70) + "px")
    //     .style("top", (d3.pointer(this)[1]) + "px")
    // }
    // var mouseleave = function(d) {
    //     Tooltip
    //     .style("opacity", 0)
    //     d3.select(this)
    //     .style("stroke", "none")
    //     .style("opacity", 0.8)
    // }

    // .on("mouseover", mouseover)
    // .on("mousemove", mousemove)
    // .on("mouseleave", mouseleave)
    
    // append the svg object to the body of the page
    const svg = d3.select("#my_dataviz"+props.chartId)
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)

    .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Y-axis label   
    svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("y", 6)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Consumption in MWh");
    
    // X-axis label
    svg.append("text")
        .attr("class", "x label")
        .attr("x", width)
        .attr("y", height - 6)
        .text("Transactions");
    
    // X axis
    const x = d3.scaleBand()
        .range([ 0, width ])
        .domain(data.map(d => d.group))
        .padding(0.2);
        svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x))
    
    // Add Y axis
    const y = d3.scaleLinear()
        .domain([0, props.totEthereum])
        .range([ height, 0]);
        svg.append("g")
        .attr("class", "myYaxis")
        .call(d3.axisLeft(y));


    // A function that create / update the plot for a given variable:
    function update(data) {
    
        var u = svg.selectAll("rect")
            .data(data)
            
    
        u.join("rect")
            .transition()
            .duration(500)
            .attr("x", d => x(d.group))
            .attr("y", d => y(d.value))
            .attr("width", x.bandwidth())
            .attr("height", d => height - y(d.value))
            .attr("fill", "#333")
    }
    
    // Initialize the plot with the first dataset

    return(
        <div className="barwrapper">
            <button onClick={() => setData(data)}>Cardano vs. Ethereum</button>
            <form>
                <label>
                    Cardano transactions:
                    <input name="Cardano Transactions" onChange={handleChange} /> transactions
                </label>
            </form>
            <div id={"my_dataviz"+props.chartId}></div>
        </div>
    )
}
export default BarChart
