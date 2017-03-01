(function() {
    'use strict';

        var myApp = angular.module('myApp');

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


 })();
