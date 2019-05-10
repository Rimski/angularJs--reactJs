import React from 'react';
// import { countriesService } from '../services/countriesService'//get service //going to try and pass in angular service
import BaseCountry  from './baseCountry';
// const $cs = new countriesService();//instantiate service object
//island list file should display a list of island baseContry comps 
export default class CountryList extends React.Component {
    constructor(props) {
        super(props);
        this.$cs = props.contriesService;
        this.state = {
            countries: []
        }
    }
    componentDidMount() {
        this.$cs.getAllContries()
            .then((responce) => {
                this.setState({ countries: responce.sort((a, b) => b.borders.length - a.borders.length) });
            })
    }
    renderCountries() {//return non-converted react components 
        return (this.state.countries.map((item, i) => {
            if (item.borders.length > 0) {
                return (<BaseCountry key={i} country={item}></BaseCountry>)
            }  
        }));
    }
    render() {
        return (
            <div className="text-center">
                <h1>Contries with the most neighboring countries:</h1>
                <div>{this.renderCountries()}</div>
            </div>
        );
    }
}