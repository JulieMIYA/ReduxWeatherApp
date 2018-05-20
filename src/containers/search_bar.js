import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

const mapDispatchToProps = (dispatch)=>{
    // return {fetchWeather : bindActionCreators(fetchWeather, dispatch)}
    return bindActionCreators( { fetchWeather }, dispatch );
}
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term : ''
        };
    }
    onInputChange (event){
        this.setState({term : event.target.value});
    }
    onFormSubmit (event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term : ''});
    }
    render(){
        return (
            <form className='input-group' onSubmit ={ (event)=>this.onFormSubmit(event) }>
                <input type ="text" 
                       className ="form-control"
                       placeholder = "get a five-day forecast in your favourite cities"
                       value = { this.state.term } 
                       onChange = {this.onInputChange.bind(this)} />
                <span className="input-group-btn">
                    <button type= "submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}
export default connect (null, mapDispatchToProps)(SearchBar);
