// import React from 'react';
// //This component will take a country in, display name and will allow you to click more details showing more data on countries
// export class BaseCountry extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             country: props.country
//         }
//     }
//     renderNeibors () {
//         if (this.state.country.borders.length > 0) {
//             return (
//                 <h4>neighboring countries: {this.state.country.borders.length}</h4>
//             )
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.country.name}</h1>
//                 {this.renderNeibors()}
//                 <div>
//                     <button className="btn btn-outline-secondary" onClick={this.ratingUp} variant="outline-primary">More Details</button>
//                 </div>
//             </div>
//         )
//     }
// }
import React from 'react';
import MoreDetails from './moreDetails';
//This component will take a country in, display name and will allow you to click more details showing more data on countries
export class BaseCountry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: props.country,
            moreDetails: false
        }
    }
    renderNeibors() {
        if (this.state.country.borders.length > 0) {
            return (
                <h4>neighboring countries: {this.state.country.borders.length}</h4>
            )
        }
    }
    toggleMoreDetails() {
        var details = !this.state.moreDetails;
        this.setState({ moreDetails: details });
    }
    moreDetailsButton() {
        if (this.state.moreDetails) {
            return (
                <>
                    <MoreDetails id={this.state.country.alpha3Code}></MoreDetails>
                    <button onClick={() => { this.toggleMoreDetails() }} className='btn btn-outline-secondary'>Hide</button>
                </>
            );
        } else {
            return (
                <div>
                    <button className="btn btn-outline-secondary" onClick={() => { this.toggleMoreDetails() }} >More Details</button>
                </div>
            );
        }
    }
    render() {
        return (
            <div className='text-center' style={divStyle}>
                <h1>{this.state.country.name}</h1>
                {this.renderNeibors()}
                {this.moreDetailsButton()}
            </div>
        )
    }
}
const divStyle = {
    border: '5px solid black',
    width: '80%',
    margin: '10px auto 10px'
}
