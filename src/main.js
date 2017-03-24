import './main.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';

import 'bootstrap/dist/css/bootstrap.css';
import home from './home';
import sample from './sample';
import modals from './modals';
import resources from './resources';

angular.module('myApp', [uirouter,home,sample,modals,resources])
.config(routing);
