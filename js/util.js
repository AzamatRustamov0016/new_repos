const selectElem = (element, wrapper = document) => wrapper.querySelector(element, wrapper) 
const createElem = (element) => document.createElement(element) 
 
const normaliazeDate = (time) => { 
    let data = new Date(time); 
    let day = data.getDate(); 
    let monts = data.getMonth() + 1; 
    let year = data.getFullYear(); 
 
    return day + "." + monts + "." + year 
}