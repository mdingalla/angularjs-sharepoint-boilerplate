export default class SampleModalController {
  constructor($uibModalInstance,item) {
      this.message = "Test";
      this.modalInstance = $uibModalInstance;
      this.item = item || {
        Id:null,
        Title:''
      };
  }

  ok(){
    this.modalInstance.close(this.item)
  }

  cancel(){
    this.modalInstance.dismiss('cancel');
  }

}

SampleModalController.$inject = ['$uibModalInstance','item'];
