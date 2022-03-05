
// const data = {
//     daily:{   work: {
//                     hours: "5hrs",
//                     privious: "Previous - 7hrs"},
//                 play: {
//                     hours: "1hrs",
//                     privious: "Previous - 2hrs"},
//                 study: {
//                     hours: "0hrs",
//                     privious: "Previous - 1hrs"},
//                 exercise: {
//                     hours: "1hrs",
//                     privious: "Previous - 1hrs"},
//                 social: {
//                     hours: "1hrs",
//                     privious: "Previous - 3hrs"},
//                 selfCare: {
//                     hours: "0hrs",
//                     privious: "Previous - 1hrs"},
//             },
//     weekly:{   work: {
//                     hours: "5hrs",
//                     privious: "Previous - 7hrs"},
//                 play: {
//                     hours: "10hrs",
//                     privious: "Previous - 8hrs"},
//                 study: {
//                     hours: "4hrs",
//                     privious: "Previous - 7hrs"},
//                 exercise: {
//                     hours: "4hrs",
//                     privious: "Previous - 5hrs"},
//                 social: {
//                     hours: "5hrs",
//                     privious: "Previous - 10hrs"},
//                 selfCare: {
//                     hours: "2hrs",
//                     privious: "Previous - 2hrs"},
// },
//     monthly:{   work: {
//                     hours: "103hrs",
//                     privious: "Previous - 128hrs"},
//                 play: {
//                     hours: "23hrs",
//                     privious: "Previous - 29hrs"},
//                 study: {
//                     hours: "13hrs",
//                     privious: "Previous - 19hrs"},
//                 exercise: {
//                     hours: "11hrs",
//                     privious: "Previous - 18hrs"},
//                 social: {
//                     hours: "21hrs",
//                     privious: "Previous - 23hrs"},
//                 selfCare: {
//                     hours: "7hrs",
//                     privious: "Previous - 11hrs"},
//  }}




function daily(){
    const daily = [
        work=["5hrs","Previous - 7hrs"],
        play=["1hr","Previous - 2hrs"],
        study=["0hrs","Previous - 1hr"],
        exercise=["1hr","Previous - 1hr"],
        social=["1hr","Previous - 3hrs"],
        selfCare=["0hrs","Previous - 1hr"],
        ]
    const hours = document.querySelectorAll(".conteiner__horas")
    const previous = document.querySelectorAll(".conteiner__last-week")
    for(i = 0; i < hours.length; i++){
        console.log(daily[5][1])
        hours[i].innerHTML = daily[i][0]
        previous[i].innerHTML = daily[i][1]
    }
    //fetch("../../data.json").then(response =>{return response.json}).then(data => console.log(data.title))
 }
 function weekly(){
    const weekly = [
        work=["32hrs","Previous - 36hrs"],
        play=["10hrs","Previous - 8hrs"],
        study=["4hrs","Previous - 7hrs"],
        exercise=["4hrs","Previous - 5hrs"],
        social=["5hrs","Previous - 10hrs"],
        selfCare=["2hrs","Previous - 2hrs"],
        ]
    const hours = document.querySelectorAll(".conteiner__horas")
    const previous = document.querySelectorAll(".conteiner__last-week")
    for(i = 0; i < hours.length; i++){
        
        hours[i].innerHTML = weekly[i][0]
        previous[i].innerHTML = weekly[i][1]
    }
    //fetch("../../data.json").then(response =>{return response.json}).then(data => console.log(data.title))
 }
 function monthly(){
    const monthly = [
        work=["103hrs","Previous - 128hrs"],
        play=["23hrs","Previous - 29hrs"],
        study=["13hrs","Previous - 19hrs"],
        exercise=["11hrs","Previous - 18hrs"],
        social=["21hrs","Previous - 23hrs"],
        selfCare=["7hrs","Previous - 11hrs"],
        ]
    const hours = document.querySelectorAll(".conteiner__horas")
    const previous = document.querySelectorAll(".conteiner__last-week")
    for(i = 0; i < hours.length; i++){
        hours[i].innerHTML = monthly[i][0]
        previous[i].innerHTML = monthly[i][1]
    }
    //fetch("../../data.json").then(response =>{return response.json}).then(data => console.log(data.title))
 }
