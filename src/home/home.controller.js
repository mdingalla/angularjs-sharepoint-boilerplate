export default class HomeController {
  constructor() {
    this.name = 'SharePoint';
  }

  changeName(name) {
    if(name=='SharePoint')
    {
      this.name = 'AngularJS';
    }
    else {
      this.name = 'SharePoint';
    }
  }
}
