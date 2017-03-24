import './home.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './routes';
import scrollto from './scrollto';
import HomeController from './home.controller';
import LearnController from './learn.controller';

export default angular.module('app.home', [uirouter])
  .config(routing)
  .controller('HomeController', HomeController)
  .controller('LearnController',LearnController)
  .run(scrollto)
  .name;
