// Code your solution in this file!

function distanceFromHqInBlocks(blocknumber) {
  if (blocknumber > 42) {
    return blocknumber - 42;
  }else{
      return 42 - blocknumber;
    }
  }

function distanceFromHqInFeet(blocknumber) {
  return distanceFromHqInBlocks(blocknumber) * 264;

}

function distanceTravelledInFeet(startLocation, endLocation) {
   if (startLocation > endLocation) {
     return (startLocation - endLocation) * 264;
   }else{
     return (endLocation - startLocation) * 264;
   }

 }

 function calculatesFarePrice(startLocation, endLocation) {
   const distance = distanceTravelledInFeet(startLocation, endLocation);
   if (distance <= 400) {
     return 0;
   } else if (distance > 400 && distance <= 2000) {
     return .02 * (distance - 400);
   }else if (distance > 2000 && distance < 2500) {
     return 25;
   }else{
     return "cannot travel that far";
   }
   }
