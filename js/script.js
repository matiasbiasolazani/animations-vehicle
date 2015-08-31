$(document).ready(function() {

  // ------------------------------------------- Air Vehicle -------------------------------------------
  var acelerateAirVehicle = function() {
    optionSelectedAir = document.getElementById('option-speed-air');
    optionPropelling = document.getElementById('option-propelling-nozzle');
    timeCountAir = optionSelectedAir.value;
    countPropelling = optionPropelling.value;
    TimeOptionsPropelling = ((timeCountAir + countPropelling) * 4) / 100;
    TimeOptionsPropelling = (400 - TimeOptionsPropelling) / 100;
    $('.topwrap1').css('-moz-animation', 'bgscroll ' + TimeOptionsPropelling +'s infinite linear').css('-webkit-animation', 'bgscroll ' + TimeOptionsPropelling +'s infinite linear');
  };

  var desacelerateAirVehicle = function() {
    $('#option-speed-air').prop('selectedIndex',0);
    $('#option-propelling-nozzle').prop('selectedIndex',0);
    timeCountAir = optionSelectedAir.value;
    countPropelling = optionPropelling.value;
    TimeOptionsPropelling = ((timeCountAir + countPropelling) * 4) / 100;
    TimeOptionsPropelling = (400 - TimeOptionsPropelling) / 100;
    $('.topwrap1').css('-moz-animation', 'bgscroll 25s infinite linear').css('-webkit-animation', 'bgscroll 25s infinite linear');
  }

  $('.air-acelerate').click(function() {
    acelerateAirVehicle();
    console.log('Transition Result (Lower unit Transition = More Speed):', TimeOptionsPropelling);
  });

  $('.air-down-acelerate').click(function() {
    desacelerateAirVehicle();
  });

  $('.air-propelling-acelerate').click(function(){
    $('.select-propelling-nozzle').slideToggle('slow');
  });
  
  // ------------------------------------------- Land Vehicle -------------------------------------------
  var acelerateLandVehicle = function() {
    optionSelected = document.getElementById('option-speed');
    optionWheels = document.getElementById('option-wheels');
    timeCount = optionSelected.value;
    countWheels = optionWheels.value;
    TimeOptionsWheels = ((timeCount + countWheels) * 4) / 100;
    TimeOptionsWheels = (100 - TimeOptionsWheels) / 100;
    $('.topwrap2').css('-moz-animation', 'bgscroll ' + TimeOptionsWheels +'s infinite linear').css('-webkit-animation', 'bgscroll ' + TimeOptionsWheels +'s infinite linear');
  };

  var desacelerateLandVehicle = function() {
    $('#option-speed').prop('selectedIndex',0);
    $('#option-wheels').prop('selectedIndex',0);
    timeCount = optionSelected.value;
    countWheels = optionWheels.value;
    TimeOptionsWheels = ((timeCount + countWheels) * 4) / 100;
    TimeOptionsWheels = (100 - TimeOptionsWheels) / 100;
    $('.topwrap2').css('-moz-animation', 'bgscroll 25s infinite linear').css('-webkit-animation', 'bgscroll 25s infinite linear');
  }

  $('.land-acelerate').click(function() {
    acelerateLandVehicle();
    console.log('Transition Result (Lower unit Transition = More Speed):', TimeOptionsWheels);
  });

  $('.land-down-acelerate').click(function() {
    desacelerateLandVehicle();
  });

  // ------------------------------------------- Water Vehicle -------------------------------------------
  var acelerateWaterVehicle = function() {
    optionSelectedWater = document.getElementById('option-speed-water');
    optionFins = document.getElementById('option-fins');
    timeCountWater = optionSelectedWater.value;
    countFins = optionFins.value;
    TimeOptionFins = ((timeCountWater + countFins) * 4) / 100;
    TimeOptionFins = (100 - TimeOptionFins) / 100;
    $('.topwrap3').css('-moz-animation', 'bgscroll ' + TimeOptionFins +'s infinite linear').css('-webkit-animation', 'bgscroll ' + TimeOptionFins +'s infinite linear');
  };

  var desacelerateWaterVehicle = function() {
    $('#option-speed-water').prop('selectedIndex',0);
    $('#option-fins').prop('selectedIndex',0);
    timeCountWater = optionSelectedWater.value;
    countFins = optionFins.value;
    TimeOptionFins = ((timeCountWater + countFins) * 4) / 100;
    TimeOptionFins = (100 - TimeOptionFins) / 100;
    $('.topwrap3').css('-moz-animation', 'bgscroll 25s infinite linear').css('-webkit-animation', 'bgscroll 25s infinite linear');
  }

  $('.water-acelerate').click(function() {
    acelerateWaterVehicle();
    console.log('Transition Result (Lower unit Transition = More Speed):', TimeOptionFins);
  });

  $('.water-down-acelerate').click(function() {
    desacelerateWaterVehicle();
  });

  $('.water-propeller-acelerate').click(function() {
    $('.select-fins-water').slideToggle('slow');
  });

  // ------------------------------------------- Amphibious Vehicle -------------------------------------------

  var acelerateAmphVehicle = function() {
    optionSelectedAmph = document.getElementById('option-speed-amph');
    optionFinsAmph = document.getElementById('option-fins-amph');
    optionWheelsAmph = document.getElementById('option-wheels-amph');
    timeCountAmph = optionSelectedAmph.value;
    countFinsAmph = optionFinsAmph.value;
    countWheelsAmph = optionWheelsAmph.value;
    TimeOptionAmphibious = ((timeCountAmph + countWheelsAmph - countFinsAmph) * 4) / 100;
    TimeOptionAmphibious = (200 - TimeOptionAmphibious) / 100;
    $('.topwrap4').css('-moz-animation', 'bgscroll ' + TimeOptionAmphibious +'s infinite linear').css('-webkit-animation', 'bgscroll ' + TimeOptionAmphibious +'s infinite linear');
  };

  var desacelerateAmphVehicle = function() {
    $('#option-speed-amph').prop('selectedIndex',0);
    $('#option-wheels-amph').prop('selectedIndex',0);
    $('#option-fins-amph').prop('selectedIndex',0);
    timeCountAmph = optionSelectedAmph.value;
    countFinsAmph = optionFinsAmph.value;
    countWheelsAmph = optionWheelsAmph.value;
    TimeOptionAmphibious = ((timeCountAmph + countWheelsAmph - countFinsAmph) * 4) / 100;
    TimeOptionAmphibious = (200 - TimeOptionAmphibious) / 100;
    $('.topwrap4').css('-moz-animation', 'bgscroll 25s infinite linear').css('-webkit-animation', 'bgscroll 25s infinite linear');
  }
  $('.amphibious-acelerate').click(function() {
    acelerateAmphVehicle();
    console.log('Transition Result (Lower unit Transition = More Speed):', TimeOptionAmphibious);
  });

  $('.amphibious-down-acelerate').click(function() {
    desacelerateAmphVehicle();
  });

  $('.amphibious-propeller-acelerate').click(function() {
    $('.select-fins').slideToggle('slow');
  });
});