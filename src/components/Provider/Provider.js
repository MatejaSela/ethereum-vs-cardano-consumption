import React from "react";
export const MContext = React.createContext();  //exporting context object

export default class MyProvider extends React.Component {
state = {consumptionData:[]}
render() {
        return (
            <MContext.Provider value={
            {   state: this.state,
                setConsumptionData: (value) => this.setState({
                            consumptionData: value })}}>
            {this.props.children}   //this indicates that the global store is accessible to all the child tags with MyProvider as Parent
            </MContext.Provider>)
    }
}


