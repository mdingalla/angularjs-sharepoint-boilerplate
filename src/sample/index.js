
import angular from 'angular';
import uirouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

import routing from './routes';
import SampleController from './sample.controller';

import listService from './../services/listService.service';


export default angular.module('app.sample', [uirouter,listService,uiBootstrap])
  .config(routing)
  .controller('SampleController', SampleController)
  .name;
