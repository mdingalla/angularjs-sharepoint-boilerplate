import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './routes';
import HomeController from './home/home.controller';

import 'bootstrap/dist/css/bootstrap.css';

angular.module('app', [uirouter])
.config(routing)
.controller('HomeController',HomeController);
