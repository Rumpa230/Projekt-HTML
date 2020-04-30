var portfolioApp = angular.module('portfolioApp',[]);


//portfolioApp.controller('GalleryListCtrl', ['$scope', '$http',
//function($scope, $http) {
//$http.get('img/galleries.json').success(function(data) {
//$scope.galleries=data;
//$scope.sortList=data;
 //});


//}]);



portfolioApp.controller('GalleryListCtrl', function($scope) {
$scope.galleries =
    [
        { 'title':'UFC 66 Liddell vs. Ortiz II ',
        'when':'2006-12-30',
        'thumbnailUrl':'img/66.jpg'
        },
        { 'title':'UFC 91 Lesnar vs. Couture',
        'when':'2008-10-15',
        'thumbnailUrl':'img/91.jpg'
        },
        { 'title':'UFC 100 Lesnar vs. Mir',
        'when':'2009-07-11',
        'thumbnailUrl':'img/100.jpg'
        },
        { 'title':'UFC 168 Weidman vs Silva II',
        'when':'2013-12-28',
        'thumbnailUrl':'img/168.jpg'
        },
        { 'title':'UFC 194 Aldo vs McGregor ',
        'when':'2015-12-12',
        'thumbnailUrl':'img/194.jpg'
        },
        { 'title':'UFC 196 McGregor vs Diaz ',
        'when':'2016-03-05',
        'thumbnailUrl':'img/196.jpg'
        }
    ];

    $scope.sortList =
    [

        {
          'label':'Chronologicznie',
          'value':'when'
        },
        {
            'label':'Alfabetycznie',
            'value':'title'
        },

        {
            'label':'Od Najnowszych',
            'value':'-when'
        },
    ];

    $scope.orderProp = $scope.sortList[0];
    $scope.galleries.length;
    $scope.galleries.sekcja = "Galeria zdjęć";
});
