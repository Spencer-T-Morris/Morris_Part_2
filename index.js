var eventType = prompt ("what is the event"); 

if (eventType==="Casual" || eventType === "casual") {var type = ("something comfy") ;
  } else if (eventType==="Semi-formal" || eventType === "semi-formal" ) {var type = ("a polo");
  } else if (eventType==="Formal" || eventType === "formal" ) {var type = ("a suit");
  } 

var tempFahr = prompt ("what is the temparature") 

if (tempFahr < 54) {var outer = (" a coat");
 } else if (tempFahr >= 54 && tempFahr <= 70) {var outer = (" a jacket");
 } else if (tempFahr > 70) {var outer = (" no jacket");
}

var result = ('Since it is '+ tempFahr + ' and you are going to a ' + (eventType) +
 ' event, you should wear '+ type + ' and' + outer)

console.log(result);















/*
First Try I failed 
var eventType = prompt ("what is the event"); 
console.log(eventType)

if (eventType==="Casual") {console.log("something comfy") ;
  } else if (eventType==="Semi-formal") {console.log("a polo");
  } else if (eventType==="Formal") {console.log("a suit");
  } 

var tempFahr = prompt ("what is the temparature") 
console.log(tempFahr)

if (tempFahr < 54) {console.log("coat");
 } else if (tempFahr >= 54 && tempFahr <= 70) {console.log(" jacket");
 } else if (tempFahr > 70) {console.log(" no jacket");
}


var result = ('Since it is '+ tempFahr + ' and you are going to a ' + (eventType) +
 ' event, you should wear a '+ )
console.log(result);


*/