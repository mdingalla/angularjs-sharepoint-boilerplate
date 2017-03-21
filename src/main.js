import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import HomeController from './home/home.controller';

import 'bootstrap/dist/css/bootstrap.css';
import home from './home';

angular.module('myApp', [uirouter,home])
.config(routing)
.controller('HomeController',HomeController);
