import angular from 'angular';
import routes from './routes';
import homeController from '../controllers/home.controller';
import { react2angular } from 'react2angular';
import BaseCountry from '../reactComps/baseCountry';
import CountryList from '../reactComps/countryList.js';

var app = angular.module('angularjsReactjsCountries', [require('angular-route')]);
require('../services/countries.service');
require("../controllers/island.controller");
app.controller('homeController', homeController);
app.component('baseCountry', react2angular(BaseCountry, ['country']));
app.component('countryList', react2angular(CountryList, [], ['contriesService']));
app.config(routes);