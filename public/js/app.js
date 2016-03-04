var app = angular.module('ngCampingChecklist', []);

app.controller('CampingChecklistController', function($scope){
  $scope.campingChecklist = {
    motoStuff: ['Bike cover',
                'Boots & socks',
                'Bungee cords',
                'Cargo net',
                'Chain oil/wax',
                'Earplugs',
                'Gloves & spares',
                'Helmets',
                'Jackets',
                'Leatherman tool',
                'Leathers/Aerostich',
                'Lock/security stuff',
                'Oil',
                'Rain gloves',
                'Raingear',
                'Saddlebags',
                'Scarf and/or CoolTie',
                'Spare bulbs',
                'Spare fuses',
                'Spare key(s)',
                'Tankbag',
                'Tire patch kit',
                'Toolkit',
                'Totes',
                'Windshield cleaner',
              ],
    personalStuff: ['Antihistamines',
                    'Brush',
                    'Casual clothes (non-riding)',
                    'Chapstick',
                    'Comb',
                    'Contact lenses & stuff',
                    'Dental floss',
                    'Deodorant',
                    'Epipen',
                    'Fanny pack or backpack',
                    'Kotex/Tampons',
                    'Medications',
                    'Reading glasses',
                    'Safe sex stuff',
                    'Shampoo',
                    'Shaving kit',
                    'Soap',
                    'Sunglasses',
                    'Toothbrush & toothpaste',
                    'Towel(s)',
                    'Washcloth',
                  ],
  };
  console.log($scope.campingChecklist.motoStuff[4]);
  $scope.saveChecklist = function(){
    var campingChecklistItem = $scope.currentItem;
    $scope.campingChecklist.push(campingChecklistItem);
    $scope.currentItem = "";
  };
  $scope.removeTodo = function(singleItem){
    var index = $scope.campingChecklist.indexOf(singleItem);
    $scope.campingChecklist.splice(index, 1);
  }
  $scope.editItem = function(singleItem){
    var index = $scope.campingChecklist.indexOf(singleItem);
    $scope.campingChecklist.splice(index, 1, $scope.currentItem);
    $scope.currentItem = "";
  }
  $scope.moveUp = function(singleItem){
    var index = $scope.campingChecklist.indexOf(singleItem);
    $scope.campingChecklist.splice(index, 1);
    $scope.campingChecklist.splice(index-1, 0, singleItem);
  }
});
