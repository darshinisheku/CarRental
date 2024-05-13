"use strict"

window.onload=init;

function init()
{
    let submitbtn = document.getElementById("submit");
    submitbtn.onclick=calTotal;
}

function carRental()
{
    let carRent = 29.99;
    let days = document.getElementById('noOfDays');
    let tdays = Number(days.value);
    console.log(tdays);
    return carRent*tdays;
}

function calculateOptions(){

    let days = document.getElementById('noOfDays');
    let tdays = Number(days.value);
    let extraPerDay = 0;

let tollTagChkbox = document.getElementById("ElectronicTag");
if (tollTagChkbox.checked) {
   extraPerDay += 3.95;
}

let gpsChkbox = document.getElementById("GPS");
if (gpsChkbox.checked) {
   extraPerDay += 4.95;
}

let roadsideChkbox = document.getElementById("RoadTag");
if (roadsideChkbox.checked) {
   extraPerDay += 2.95;
}

    console.log(extraPerDay);
    return extraPerDay * tdays;

}

function calSurCharge()
{
    let yesRadioBtn = document.getElementById('yesRadioBtn');
    let noRadioBtn = document.getElementById('noRadioBtn');
    let days = document.getElementById('noOfDays');
    let tdays = Number(days.value);
    let carRent = 29.99;

    let surCharge = 0;
    if(yesRadioBtn.checked){
        surCharge += (0.3*carRent*tdays);
    }
    else{
        surCharge=0;
    }

    console.log(surCharge);
    return surCharge;

}


function calTotal(){
    let tcarRental = carRental();
    let optionalCharges = calculateOptions();
    let surCharge = calSurCharge();

    let totalDue = tcarRental+optionalCharges+surCharge;
    display(tcarRental,optionalCharges,surCharge,totalDue);

}

function display(a,b,c,d){

    let cr = document.getElementById('carRental');
    cr.innerHTML=a;
    let op = document.getElementById('options');
    op.innerHTML=b;
    let sc = document.getElementById('surCharge');
    sc.innerHTML=c;
    let td = document.getElementById('total');
    td.innerHTML=d;

}

   
   



