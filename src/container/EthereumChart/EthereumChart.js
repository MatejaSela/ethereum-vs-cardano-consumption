import "./ethereum-chart.css";
import * as d3 from "d3";
import React, { useState } from "react";
import ethData from '../../eth_data.csv';

const EthereumChart = () => {
        React.useEffect(() => {
            d3.csv(ethData).then((d) => {
                const parsedate = d3.timeParse("%Y/%m/%d");
                d.forEach((element) => {
                    element.date = parsedate(element.date);
                    element.TWhPerYear = Number(element.TWhPerYear);
                });
                console.log(d)
                setData(d);
                });
               
                return () => undefined;
        }, []);

        const [activeIndex, setActiveIndex] = useState(null),
        [data, setData] = useState([]);

        const margin = { top: 40, right: 80, bottom: 60, left: 50 },
        width = 960 - margin.left - margin.right,
        height = 280 - margin.top - margin.bottom,
        color = "OrangeRed";
    
        const yMinValue = d3.min(data, (d) => d.TWhPerYear),
        yMaxValue = d3.max(data, (d) => d.TWhPerYear);

        const getX = d3
            .scaleTime()
            .domain(d3.extent(data, (d) => d.date))
            .range([0, width]);

        const getY = d3
            .scaleLinear()
            .domain([yMinValue - 1, yMaxValue + 2])
            .range([height, 0]);

        const getXAxis = (ref) => {
            const xAxis = d3.axisBottom(getX);
            d3.select(ref).call(xAxis.tickFormat(d3.timeFormat("%b")));
        }

        const getYAxis = (ref) => {
            const yAxis = d3.axisLeft(getY).tickSize(-width).tickPadding(7);
            d3.select(ref).call(yAxis);
        };

        const handleMouseMove = (e) => {
            const bisect = d3.bisector((d) => d.date).left,
                x0 = getX.invert(d3.pointer(e, this)[0]),
                index = bisect(data, x0, 1);
            setActiveIndex(index);
        };

        const handleMouseLeave = () => {
            setActiveIndex(null);
        };

        const linePath = d3
            .line()
            .x((d) => getX(d.date))
            .y((d) => getY(d.TWhPerYear))
            .curve(d3.curveMonotoneX)(data);

        const areaPath = d3
            .area()
            .x((d) => getX(d.date))
            .y0((d) => getY(d.TWhPerYear))
            .y1(() => getY(yMinValue - 1))
            .curve(d3.curveMonotoneX)(data);

        return (
            <div className="wrapper">
                <svg
                    viewBox={`0 0 ${width + margin.left + margin.right} 
                                    ${height + margin.top + margin.bottom}`}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                // x- and y-axes
                    <g className="axis" ref={getYAxis} />
                    <g
                        className="axis xAxis"
                        ref={getXAxis}
                        transform={`translate(0,${height})`}
                    />
                // area and line paths
                    <path fill={color} d={areaPath} opacity={0.3} />
                    <path strokeWidth={3} fill="none" stroke={color} d={linePath} />
                // y-axis label
                    <text
                        transform={"rotate(-90)"}
                        x={0 - height / 2} y={0 - margin.left} dy="1em">
                        {"TWh per Year"}
                    </text>
                // chart title
                    <text
                        x={width / 2} y={0 - margin.top / 2} textAnchor="middle" >
                        {"Ethereum Current Yearly Maximum Energy Consumption"}
                    </text>
                // chart subtitle
                    <a
                        className="subtitle"
                        href="https://digiconomist.net/ethereum-energy-consumption/"
                        target="_blank">
                        <text x="0" y={height + 50}>
                            {"Source: Digiconomist"}
                        </text>
                    </a>
                </svg>
            </div>
        );    
    }
export default EthereumChart;
