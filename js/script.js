//milestone 1












//milestone 2
//RECUPERO TUTTI GLI ELEMENTIO DEL DOM CHE MI SERVONO
//vado a recuperare tutti in camdpi della form e la form stessa
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const form = document.querySelector('form');
const nameField = document.getElementById('name-fied');
const ageField = document.getElementById('age-field');
const rangeField = document.getElementById('range-field');

//vado a recuperarre tutti i campi della card
const offerta = document.getElementById('offerta');
const carrozza = document.getElementById('carrozza');
const codiceCP = document.getElementById('codice');
const costo = document.getElementById('costo');

//creo azione al click del bottone
button1.addEventListener('click', function(event){
    event.preventDefault(); //blocco il comportamento di default del form
    carrozza.innerHTML = Math.floor(Math.random() * 9) + 1; //genero un numero random per la carrozza
    codiceCP.innerHTML = Math.floor(Math.random() * 10000) + 1; //genero un numero random per il codice cp
    //calcolo il costo del biglietto
    
});