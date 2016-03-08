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
                'Windshield cleaner'
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
                    'Washcloth'
                  ],
  };
  $scope.currentItem = {};
  var checklistSelected=true;

  $scope.saveChecklist = function(category, newItem){
    $scope.campingChecklist[category].push(newItem);
    $scope.currentItem[category] = "";
  };
  $scope.removeItem = function(category,singleItem){
    var index = $scope.campingChecklist[category].indexOf(singleItem);
    $scope.campingChecklist[category].splice(index, 1);
  }
  $scope.editItem = function(category,singleItem, newItem){
    var index = $scope.campingChecklist[category].indexOf(singleItem);
    $scope.campingChecklist[category].splice(index, 1, newItem);
    $scope.currentItem[category] = "";
  }
  $scope.moveUp = function(category,singleItem){
    var index = $scope.campingChecklist[category].indexOf(singleItem);
    $scope.campingChecklist[category].splice(index, 1);
    $scope.campingChecklist[category].splice(index-1, 0, singleItem);
  }
  $scope.moveDown = function(category,singleItem){
    var index = $scope.campingChecklist[category].indexOf(singleItem);
    $scope.campingChecklist[category].splice(index, 1);
    $scope.campingChecklist[category].splice(index+1, 0, singleItem);
  }
});
