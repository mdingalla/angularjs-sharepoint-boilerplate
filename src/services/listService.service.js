import * as pnp from 'sp-pnp-js';
import angular from 'angular';

pnp.setup({
  headers: {
    Accept: 'application/json; odata=verbose',
  }
});

if (!window.location.origin) {
      window.location.origin = window.location.protocol + "//"   +
      window.location.hostname + (window.location.port ? ':' + window.location.port : '');
}
var listServiceWeb = new pnp.Web(window.location.origin  + _spPageContextInfo.webServerRelativeUrl);

class listService {
  constructor($q){
    'ngInject';
    this.$q = $q;
  }

  getListItems(){
    let deferred = this.$q.defer();

    listServiceWeb.lists.getByTitle('SampleList').items.get().then((response)=>{
      deferred.resolve(response);
    });

    return deferred.promise;
  }

  saveOrUpdate(item){
    let deferred = this.$q.defer();

    let data = {
      Title:item.Title
    };

    if (item.Id)
    {
      listServiceWeb.lists.getByTitle('SampleList').items.getById(item.Id).update(data)
      .then((response)=>{
        deferred.resolve(response);
      });
    }
    else {
      listServiceWeb.lists.getByTitle('SampleList').items.add(data)
      .then((response)=>{
        deferred.resolve(response);
      });
    }

    return deferred.promise;
  }

  deleteItem(id)
  {
      let deferred = this.$q.defer();

      listServiceWeb.lists.getByTitle('SampleList').items.getById(id).delete()
      .then((response)=>{
        deferred.resolve(response);
      });

      return deferred.promise;
  }


  prepList(){
    let deferred = this.$q.defer();
    listServiceWeb.lists.add('SampleList','',100,false).then(function(result) {
        deferred.resolve(true);
    }).catch(function(err) {
        deferred.resolve(false);
    });
    return deferred.promise;
  }

}

export default angular.module('services.list-service',[])
  .service('listService',listService)
  .name;
