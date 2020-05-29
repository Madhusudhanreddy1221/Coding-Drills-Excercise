window.onsubmit=function CheckPlans() {
    //variable to store  day time minutes from user
    var daytimeMinutes=document.getElementById('daytime_minutes').value;
    console.log(daytimeMinutes);
    //varibale to store evening minutes from user
    var eveningMinutes=document.getElementById('evening_minutes').value;
    console.log(eveningMinutes);
    //variable to store weekend minutes from the user
    var weekendMinutes=document.getElementById('weekend_minutes').value;
    console.log(weekendMinutes);
    var daytimePriceA=0.25;
    var daytimePriceB=0.45;
    var eveningPriceA=0.15;
    var eveningPriceB=0.35;
    var weekendPriceA=0.20;
    var weekendPriceB=0.25;
    var daytimeFreeMinutesA=100;
    var daytimeFreeMinutesB=250;
    var planAPrice=calcualtePlanA(); //calling function to calculate cost of  plan A
    console.log("plan A price: "+planAPrice);
    var planBPrice=calcualtePlanB();//calling function to calculate cost of  plan B
    console.log("plan B price: "+ planBPrice);
    var result=document.getElementById('result'); //getting result html element to output the plans on to it
    //calculating plan A
    function calcualtePlanA(){
        var actualDayMinutes= daytimeMinutes-daytimeFreeMinutesA;
        //Checking if the provided free  minutes are under used in daytime
        if (actualDayMinutes<0){
            var price=0+(eveningMinutes*eveningPriceA)+(weekendMinutes*weekendPriceA);//calculating the actual price if day time free minutes are still remaining
        }
        else{
            //calculating if minutes are over used than free minutes
            var price= (actualDayMinutes*daytimePriceA)+(eveningMinutes*eveningPriceA)+(weekendMinutes*weekendPriceA);
        }
        return price.toFixed(2);// Printing the fixed two decimenls (example 132:25)
    }
    //Calculating plan B
    function calcualtePlanB() {
        var actualDayMinutes= daytimeMinutes-daytimeFreeMinutesB;
        //Checking if the provided free  minutes are under used in daytime
        if (actualDayMinutes<0){
            var price=0+(eveningMinutes*eveningPriceB)+(weekendMinutes*weekendPriceB);//calculating the actual price if day time free minutes are still remaining
        }
        else{
            //calculating if minutes are over used than free minutes
            var price= (actualDayMinutes*daytimePriceB)+(eveningMinutes*eveningPriceB)+(weekendMinutes*weekendPriceB);
        }
        return price.toFixed(2);// Printing the fixed two decimenls (example 132:25)
    }
    //Checking if plan A is Less than Plan B
    if(planAPrice<planBPrice){
        result.innerHTML="Plan A costs"+planAPrice+"<br>"+"Plan B costs"+planBPrice+"<br>"+"Plan A is cheapest";
    }
    //Checking if both plans have same cost
    else if(planAPrice==planBPrice){
        result.innerHTML="Plan A costs"+planAPrice+"<br>"+"Plan B costs"+planBPrice+"<br>"+"Plan A and B are the same price.t";
    }
    //Default result which is plan B is the cheapest
    else{
        result.innerHTML="Plan A costs"+planAPrice+"<br>"+"Plan B costs"+planBPrice+"<br>"+"Plan B is cheapest";
    }
    return false;
}
