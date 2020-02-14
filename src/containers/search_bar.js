import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({ term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: ''});
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className='input-group'>
                <input 
                    placeholder='Get a five day forcast in your fav. city'
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}

                />
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary'>Submit</button>
                </span>
            </form>
        )
    }
}

// Whatever will return from here will show up as props in the component.
function mapDispatchToProps(dispatch){
    // whenever select book is call the result will be flow through all the reducers.
    return bindActionCreators({fetchWeather: fetchWeather}, dispatch);
}

// Promote BookList componebt as a container as it needs to be aware of the state.
export default connect(null, mapDispatchToProps)(SearchBar);