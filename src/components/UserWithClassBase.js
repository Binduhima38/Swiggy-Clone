import React from "react";
class UserDataWithClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count : 100,
            count2 : 2
        }
    }
    componentDidMount(){
        console.log("componentDidMount")

    }
    static getDerivedStateFromProps(nextProps, prevState){
        console.log("getDerivedStateFromProps : nextProps",nextProps, "prevState :", prevState)
        return {
            ...prevState,
            
        }

    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate : prevProps",prevProps, "prevState :", prevState)
        return {
            ...prevState
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate : prevProps",prevProps, "prevState :", prevState, "snapshot :", snapshot)
    }

    shouldComponentUpdate(nextState, nextProps, nextContext){
        console.log("shouldComponentUpdate : nextState",nextState, "nextProps :", nextProps, "nextContext :",nextContext)
        
        
        return true
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    render(){        
        const {Title,Description} = this.props
        return (
        <div>
            <h1>{Title}</h1>
            <h2>{Description}</h2>
            <h3>Count: {this.state.count}</h3>
            <h3>Count2: {this.state.count2}</h3>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
                this.setState(prevState => {
                    return {
                        ...prevState,
                        count2: prevState.count2 + 1
                    }
                })
                //  this.setState( {
                //     count2: this.state.count2 + 1
                // })
            }}>click me!</button>
        </div>
    )
}
}
export default UserDataWithClass;