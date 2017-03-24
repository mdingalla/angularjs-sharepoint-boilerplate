import angular from 'angular';
import uirouter from 'angular-ui-router';

import ResourcesController from './resources.controller';
import routing from './routes';

export default angular.module('app.resources',[uirouter])
.config(routing)
.controller('ResourcesController',ResourcesController)
.name;
