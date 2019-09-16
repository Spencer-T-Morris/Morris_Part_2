
var eventType = prompt ("what is the event"); 
console.log(eventType)

if (eventType="Casual") {console.log("something comfy") ;
  } else if (eventType="Semi-formal") {console.log("a polo");
  } else if (eventType="Formal") {console.log("a suit");
  } 

var tempFahr = prompt ("what is the temparature") 
console.log(tempFahr)

if (tempFahr < 54) {console.log("coat");
 } else if (tempFahr >54 && tempFahr <70) {console.log("no jacket");
 } else if (tempFahr >70) {console.log("jacket");
}


var result= ('the temperature is'+ tempFahr + 'and you are going to a' + (eventType) +
 'event, you should wear a'+ eventType.concat(tempFahr) )
console.log(result);


