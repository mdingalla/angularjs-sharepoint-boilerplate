
import angular from 'angular';
import uirouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';


import SampleModalController from './samplemodal.controller';

export default angular.module('app.modals', [uirouter,uiBootstrap])
  .controller('SampleModalController', SampleModalController)
  .name;
