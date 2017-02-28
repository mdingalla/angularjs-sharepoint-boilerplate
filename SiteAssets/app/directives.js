(function() {
    'use strict';

        var myApp = angular.module('myApp');

        myApp.directive('vendorDocuments',vendorDocuments);
        vendorDocuments.$inject = ['$q','$http','VendorFilesServices'];
        function vendorDocuments($q,$http,VendorFilesServices)
        {
          // function activate(scope,vendor,file)
          // {
          //   if (vendor)
          //   {
          //     var vendorfiles = VendorFilesServices.GetVendorFile(vendor,file);
          //
          //     vendorfiles.then(function (data) {
          //         // console.log(data);
          //
          //         if (data.d.results && data.d.results.length > 0)
          //         {
          //           scope.showFile = true;
          //
          //           if (scope.multifile)
          //           {
          //               scope.VendorFiles = data.d.results;
          //               scope.ngModel = data.d.results;
          //
          //
          //           }
          //           else
          //           {
          //             var file = data.d.results[0];
          //             scope.VendorFile = file;
          //             scope.ngModel = file;
          //           }
          //         }
          //         else {
          //           if (scope.multifile)
          //           {
          //               scope.ngModel = [];
          //               scope.ngModel.push({ID:null,file:null,FileRef:'',FileLeafRef:''});
          //           }
          //           else {
          //            scope.showFile = false;
          //            scope.ngModel = null;
          //          }
          //         }
          //     },function(err) {
          //         console.log(err);
          //     });
          //   }
          //   else
          //   {
          //     if (scope.multifile)
          //     {
          //         scope.ngModel = [];
          //         scope.ngModel.push({ID:null,file:null,FileRef:'',FileLeafRef:''});
          //     }
          //     else {
          //
          //     }
          //   }
          // }

          function activate(scope,vendor,file)
          {
             if (vendor)
             {
               var vendorfiles = VendorFilesServices.GetVendorFile(vendor,file);

               vendorfiles.then(function (data) {
                     console.log('activate' + data);
                   if (data.d.results && data.d.results.length > 0)
                   {
                     scope.showFile = true;
                     if (scope.multifile)
                     {
                         scope.VendorFiles = data.d.results;
                         scope.ngModel = data.d.results;
                     }
                     else
                     {
                       var file = data.d.results[0];
                       scope.VendorFile = file;
                       scope.ngModel = file;
                     }
                   }
                   else {

                     if (scope.multifile)
                     {
                         scope.ngModel = [];
                         scope.ngModel.push({ID:null,file:null,FileRef:'',FileLeafRef:''});
                     }
                     else {
                       scope.showFile = false;
                       scope.ngModel = null;
                     }
                   }
               },function(err) {
                   console.log(err);
               });
             }
             else
             {
               if (scope.multifile)
               {
                   scope.ngModel = [];
                   scope.ngModel.push({ID:null,file:null,FileRef:'',FileLeafRef:''});
               }
              //  else {
              //    scope.ngModel = {ID:null,file:null,FileRef:'',FileLeafRef:''};
              //  }
             }
           }

          return {
            require: 'ngModel',
            restrict: 'E',
            replace:true,
            templateUrl:_spPageContextInfo.webAbsoluteUrl + '/SiteAssets/cewp/vendorDocuments.html',
            scope:{
              ngModel : '=',
              vendorId: '&vendorId',
              vendorMulti:'&vendorMulti',
              vendorFileType: '&vendorfileType',
              ngRequired:'='
            },
            link:function($scope,elem,attr,ngModelCtrl) {
              $scope.reload = true;
              $scope.multifile = $scope.vendorMulti();
              $scope.VendorFiles = [];
              $scope.ReplacedFile = null;
              $scope.VendorFile = {
                FileLeafRef:null
              };
              $scope.showReplace = false;

              activate($scope,$scope.vendorId(),$scope.vendorFileType());

              // $scope.showReplace = $scope.VendorFile.FileLeafRef && $scope.IsDisabled();


              $scope.IsDisabled = function()
              {
                var result;
                if (attr.disabled != undefined)
                {
                  result =  attr.disabled;
                }
                else {
                  result =   attr.disabled != undefined;
                }
                $scope.showReplace = result === 'true';
                return result;
              }

              $scope.NoDocs = function() {
                var isdisabled = attr.disabled != undefined;
                if ($scope.multifile)
                {

                  if ($scope.VendorFiles.length > 0)
                  {
                    return $scope.VendorFiles[$scope.VendorFiles.length - 1].FileLeafRef.length <= 0;
                  }
                  else {
                    return true;
                  }
                  // && ngModelCtrl.$modelValue.length <= 0;
                }
                else {
                  return  $scope.ngModel ==null;
                  // && $scope.ngModel;
                }
              }


              // console.log(ngModelCtrl);

              $scope.$watch(function(){
                  // console.log(ngModelCtrl.$modelValue);
                  var isvalid = true;
                  var nonullfile = true;
                  if ($scope.multifile && $scope.ngRequired)
                  {
                    var mymodel = ngModelCtrl.$modelValue;

                    if (mymodel && mymodel.length > 0)
                    {

                      angular.forEach(mymodel,function(v) {
                        if (!v.ID && !v.file)
                        {
                          nonullfile = false;

                        }
                      })
                      //console.log(mymodel.length);
                      isvalid = nonullfile;
                    }
                    	ngModelCtrl.$setValidity('required', isvalid);

                  }
                return ngModelCtrl.$modelValue;
              }, function(){
                $scope.model = ngModelCtrl.$viewValue;

              });

              $scope.Add = function(){

                $scope.ngModel.push({ID:null,file:null,FileRef:'',FileLeafRef:''});
              }

              $scope.DeleteMe = function(item) {
                var index = $scope.ngModel.indexOf(item);
                $scope.ngModel.splice(index, 1);
              }

              $scope.DeleteFile = function(item){
                var id = item.ID;
                var deleteService = VendorFilesServices.Delete(id,item.FileRef);
                deleteService.then(function(){
                    // $scope.showFile = !$scope.showFile;
                    // $scope.ngModel = null;
                    // $scope.VendorFile = null;
                     activate($scope,$scope.vendorId(),$scope.vendorFileType());
                },function(error) {

                })
              }

              $scope.ReplaceFile = function(item){
                $scope.showFile = !$scope.showFile;
                $scope.ReplacedFile = item;

              }

              $scope.CancelReplaceFile = function() {
                $scope.showFile = !$scope.showFile;
                $scope.ReplacedFile = null;
              }

              $scope.IsRequired = function(){
                return true;
              }

              $scope.Reset = function(){
                // elem.find('input')[0].value = ''
                // elem.val(null);
                  ngModelCtrl.$modelValue = null;
                  ngModelCtrl.$viewValue = null;
                  $scope.reload = false;
                  console.log($scope.reload);
                  //  console.log(ngModelCtrl);
              }

              // console.log($scope);
            }
            // compile: function(elem,attr)
            // {
            //     //console.log(elem);
            //     return function(scope,elem,attrs,ngModelCtrl)
            //     {
            //         console.log(ngModelCtrl);
            //
            //         scope.$watch(function(){
            //   				return ngModelCtrl.$modelValue;
            //   			}, function(){
            //   				scope.model = ngModelCtrl.$viewValue;
            //   			});
            //
            //     };
            // }
          }
          }

        myApp.directive("mAppLoading",splashDirective);
        splashDirective.$inject = ['$animate'];
        function splashDirective($animate)
        {
          // Return the directive configuration.
          return({
           link: link,
           restrict: "C"
            //  templateUrl:_spPageContextInfo.webAbsoluteUrl + '/SiteAssets/app/templates/splash.html',
          });


            // I bind the JavaScript events to the scope.
          function link( scope, element, attributes )
          {
            $animate.leave( element.children().eq( 1 ) ).then(
               function cleanupAfterAnimation() {

                 // Remove the root directive element.
                 element.remove();

                 // Clear the closed-over variable references.
                 scope = element = attributes = null;

               });

          }

        }

        myApp.directive("vendormultiRequired",vendormultiRequired);
        function vendormultiRequired() {
          return
          ({
            restrict: 'A',
            require: 'ngModel',
            link: function($scope, element, attrs, ngModelCtrl)
              {
                console.log(ngModelCtrl);
                  ngModelCtrl.$parsers.push(function(viewValue) {
                    var valid = viewValue.length > 0;
                    ngModelCtrl.$setValidity('vendormultirequired', valid);
                    return valid ? viewValue : undefined;
                  });
              }
          })
        }

        myApp.directive('backTop',backTop);
        backTop.$inject = [];
        function backTop() {
         return {
             restrict: 'E',
             transclude: true,
             replace: true,
             // template: '<div id="backtop" class="{{theme}}"><button>{{text}}</button></div>',
              template: '<div id="backtop" class="{{theme}}"><button type="button"><i class="fa fa-chevron-up"></i><div ng-transclude></div></button></div>',
             scope: {
               text: "@buttonText",
               speed: "@scrollSpeed",
               theme: "@buttonTheme"
             },
             link: function(scope, element) {

               var self = this;


               scope.currentYPosition = function() {
                 if (self.pageYOffset)
                   return self.pageYOffset;
                 if (document.documentElement && document.documentElement.scrollTop)
                   return document.documentElement.scrollTop;
                 if (document.body.scrollTop)
                   return document.body.scrollTop;
                 return 0;
               };

               scope.smoothScroll = function() {
                 var startY = scope.currentYPosition();
                 var stopY = 0;
                 var distance = stopY > startY ? stopY - startY : startY - stopY;
                 if (distance < 100) {
                   scrollTo(0, stopY);
                  //  return;
                  return false;
                 }
                 var speed = Math.round(scope.speed / 100);
                 var step = Math.round(distance / 25);
                 var leapY = stopY > startY ? startY + step : startY - step;
                 var timer = 0;
                 if (stopY > startY) {
                   for (var i = startY; i < stopY; i += step) {
                     setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                     leapY += step;
                     if (leapY > stopY) leapY = stopY;
                     timer++;
                   }
                  //  return;
                  return false;
                 }
                 for (var j = startY; j > stopY; j -= step) {
                   setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                   leapY -= step;
                   if (leapY < stopY) leapY = stopY;
                   timer++;
                 }
               };

               scope.button = element.find('button');

               var workspace = angular.element(document.getElementById('s4-workspace'));
                var approvalhistory = angular.element(document.getElementById('approvalhistory'));

               scope.button.on('click', function() {
                  workspace.animate({ scrollTop: 0 }, 1000);
                  // scope.smoothScroll();
                 element.removeClass('show');
               });




               jQuery('#s4-workspace').scroll(function() {
                    // console.log(document.body.offsetHeight);
                    // console.log('workspace scrollY:' + workspace.scrollTop());
                    // console.log('workspace innerHeight :' + workspace.innerHeight());
                      // if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    if (workspace.scrollTop() > 300)
                    {
                        element.addClass('show');
                    //    console.log('showing');
                      } else {
                        element.removeClass('show');
                    //    console.log('hiding');
                      }
                  });


              //  $($window).bind('scroll',listener);
              //  function listener()
              //  {
              //    console.log('scroll')
              //  }

              //  window.addEventListener('scroll', function(e) {

              }
         }
        }

        myApp.directive('resumeWorkflow',resumeWorkflow);
        resumeWorkflow.$inject = ['$uibModal','WorkflowConfig'];
        function resumeWorkflow($uibModal, WorkflowConfig) {
          return
          ({
            restrict:'E',
            transclude: true,
            replace: true,
            templateUrl:_spPageContextInfo.webAbsoluteUrl + '/SiteAssets/cewp/resumeWorkflow.html',
            scope:{
              maxflow:'@maxFlow',
              current:'@currentFlow',
            },
            link:link
          });

          function link(scope,element,attr) {
            element.bind('click',function() {

              var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: _spPageContextInfo.webAbsoluteUrl + '/SiteAssets/cewp/resumeWorkflowModal.html',
                controller: 'UploadCompleteCtrl as vm',
                size: 'sm',
                resolve: {
                  id: function() {
                    return scope.Id;
                    // return {
                    //   Id:vm.Id,
                    //   Draft:IsDraft
                    // }
                  }
                }
              });

              modalInstance.result.then(function(item) {
                // toaster.pop('success','Job Description','Saved ....');

              }, function () {
                console.log('closed');
              });

            })
          }
        }

        myApp.directive('vendorTypeChart',vendorTypeChart);
        vendorTypeChart.$inject = ['$compile'];
        function vendorTypeChart($compile) {
            return {
              restrict:'E',
              // scope:{
              //   labels:'@',
              //   series:'@',
              //   options:'@',
              //   datasetOverride:'@'
              // },
              // transclude: true,
              // replace: true,
              templateUrl:_spPageContextInfo.webAbsoluteUrl + '/SiteAssets/cewp/vendorTypeChart.html',
              compile:function(elem,attr) {
                  return function($scope,element) {
                    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
                    $scope.series = ['Series A', 'Series B'];
                    $scope.data = [
                      [65, 59, 80, 81, 56, 55, 40],
                      [28, 48, 40, 19, 86, 27, 90]
                    ];
                    $scope.onClick = function (points, evt) {
                      console.log(points, evt);
                    };
                    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
                    $scope.options = {
                      scales: {
                        yAxes: [
                          {
                            id: 'y-axis-1',
                            type: 'linear',
                            display: true,
                            position: 'left'
                          },
                          {
                            id: 'y-axis-2',
                            type: 'linear',
                            display: true,
                            position: 'right'
                          }
                        ]
                      }
                    };
                    $compile(element.contents())($scope);
                  }
              }
            };
        }

        myApp.directive('noRecord',noRecord);
        noRecord.$inject = [];
        function noRecord() {
          return {
            restrict:'E',
            require:'ngModel',
            scope:{
              ngModel:'='
            },
            template:"<div class='alert alert-dismissible alert-info' ng-hide='showMe'>" +
                '<button type="button" class="close" data-dismiss="alert">×</button>' +
                '<strong>No Record to Display</strong>' +
              '</div>',
            link:function(scope,elem,attr,ngModelCtrl) {
                scope.$watch(function(){
                  scope.showMe =scope.ngModel && scope.ngModel.length > 0;
                })

            }
          }
        }

        myApp.directive('testAlert',testAlert);
        testAlert.$inject = ['SharePointService'];
        function testAlert(SharePointService) {
          return {
            restrict:'E',
            scope:true,
             templateUrl: _spPageContextInfo.webAbsoluteUrl  + '/SiteAssets/cewp/testAlert.html',
             link:link
          }

          function link(scope,elem,attr) {
            SharePointService.GetRestListItemsFilter('VendorRegSettings','Title','Default')
              .then(function(data) {
                if (data.d.results.length > 0)
                {
                  scope.Environment = data.d.results[0].Environment;
                }
              });

              return function(scope,elem,attr) {

              }
          }
        }
 })();
