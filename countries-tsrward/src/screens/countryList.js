import React from 'react';
import { CountriesService } from '../services/countriesService'//get service
import { BaseCountry } from '../universalComponents/baseCountry';
const $cs = new CountriesService();//instantiate service object
//island list file should display a list of island baseContry comps 
export class CountryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: []
        }
    }
    componentDidMount() {
        $cs.getAll()
            .then((responce) => {
                this.setState({ countries: responce.sort((a, b) => b.borders.length - a.borders.length) });
            })
    }
    renderCountries = () => {
        return (this.state.countries.map((item, i) => {
            if (item.borders.length > 0) {
                return (<BaseCountry key={i} country={item}></BaseCountry>)
            } 
        }));
    }
    render() {
        return (
            <>
                <h1>Contries with the most neighboring countries:</h1>
                <div>{this.renderCountries()}</div>
            </>
        );
    }
}