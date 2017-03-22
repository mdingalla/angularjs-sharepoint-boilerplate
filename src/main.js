import './main.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import HomeController from './home/home.controller';
import SampleController from './sample/sample.controller';
import SampleModalController from './modals/samplemodal.controller';

import 'bootstrap/dist/css/bootstrap.css';
import home from './home';
import sample from './sample';
import modals from './modals';

angular.module('myApp', [uirouter,home,sample,modals])
.config(routing)
.controller('HomeController',HomeController)
.controller('SampleController',SampleController)
.controller('SampleModalController',SampleModalController)
;
