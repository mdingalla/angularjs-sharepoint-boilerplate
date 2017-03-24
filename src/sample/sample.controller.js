var samplemodal = require('./../modals/samplemodal.html');

export default class SampleController {
  constructor(listService,$uibModal) {
    this.mymodal = $uibModal;
    this.listService = listService;
    this.items =[];

    this.listService.prepList().then((data)=>{
      console.log(data);
      this.refresh();
    });

  }



  refresh()
  {
    this.listService.getListItems().then((data)=>{
      this.items = data;
    });
  }

  openModal(item){
      var self = this;
      let modalInstance = this.mymodal.open({
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        template:samplemodal,
        controller: 'SampleModalController',
        controllerAs: '$ctrl',
        size: 'md',
        resolve: {
          item: function () {
            return item;
          }
        }
      });

      modalInstance.result.then(function(selectedItem) {
        console.log(selectedItem);
        self.listService.saveOrUpdate(selectedItem).then((data)=>{
          self.refresh();
        });
      }, function () {
      });
  }

  deleteItem(id)
  {
    var self = this;
    this.listService.deleteItem(id).then((data)=>{
      self.refresh();
    });
  }

}

SampleController.$inject = ['listService','$uibModal'];
