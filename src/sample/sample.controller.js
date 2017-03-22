var samplemodal = require('./../modals/samplemodal.html');

export default class SampleController {
  constructor(listService,$uibModal) {
    this.mymodal = $uibModal;
    this.listService = listService;
    this.items =[];
    this.refresh();

  //  this.openModal = this.openModal.bind(this);
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
        // templateUrl:'samplemodal.html',
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
        // $ctrl.selected = selectedItem;
      }, function () {
        // $log.info('Modal dismissed at: ' + new Date());
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
