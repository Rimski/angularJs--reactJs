import React from 'react';
import CountriesService from './reactService/contriesService';
const $cs = new CountriesService();

export default class MoreDetails extends React.Component {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.state = {
            country: {}
        }
    }
    componentWillMount() {
        $cs.getMoreDetails(this.id)
            .then((responce) => {
                console.log(responce);
                this.setState({ country: responce });
            })
    }
  
    render() {
        return (
            <div>
                <h3><span className='text-bold'>Capital: </span>{this.state.country.capital}</h3>
                <h3><span className='text-bold'>Subregion:</span>{this.state.country.subregion}</h3>
                <div >
                    <h3 className='text-bold'>Flag:</h3>
                    <img style={imgStyle} src={this.state.country.flag}></img>
                </div>
            </div>
        )
    }
}

const imgStyle = {
    maxHeight: '500px',
    maxWidth: "80%"
}