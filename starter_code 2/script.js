// const input = document.querySelector('#fruit');
// const suggestions = document.querySelector('.suggestions ul');

//cleaning the fruit list
const fruits = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu']
const cleanFruits = fruits.map(fruit=> fruit.toLowerCase());
console.log(cleanFruits[0].length)
console.log(typeof(cleanFruits[0]))
// function search(str) {
// 	let results = [];

// 	// TODO

// 	return results;
// }

// function searchHandler(e) {
// 	// TODO
// }

// function showSuggestions(results, inputVal) {
// 	let search=document.getElementById('fruit')
// 	save=[]
// 	search.addEventListener("keydown", function(e) {e.preventDefault; save.push(e.target)});
// 	if (save == inputVal){ return x.slice(save.length)}
// }

// function useSuggestion(e) {
// 	let search=document.getElementById('fruit')
// 	save=[]
// 	search.addEventListener("keydown", function(e) {e.preventDefault; save.push(e.target)});  }

// input.addEventListener('keyup', searchHandler);
// suggestions.addEventListener('click', useSuggestion);

// function addSelect(){
	
// 	let re = /\D+/
// 	let option2= document.createElement('option')
// 	let searchTerm=document.querySelector('input#fruit.InputField').value
// 	let textField= document.querySelector('p')		
// 	let option = document.querySelector('select')
// 	textField.append(option)
// 	option.appendChild(option2)
// 	cleanFruits.filter(function(val, i, arr){if (val[0] == searchTerm[0]) {
// 		return option2.append(cleanFruits[i])}})}

	// return option2}
	
	
// let entry = document.querySelector('input#fruit.InputField')
// entry.addEventListener("keypress", function(e) {e.preventDefault(); 
// 	if (e.target.value==='abcdefghijklmnopqrstuvwxyz')  { 
// 		addselect()}});

// function inputText(){
// 	let searchTerm=document.querySelector('input#fruit').value
// 	let parentBox= document.querySelector('.suggestions ul')
// 	let lis= document.createElement('li')
// 	parentBox.append(lis)
// 	lis.append(searchTerm)
// 	return lis}


		
//let bttn=document.querySelector('input#fruit')
// bttn.addEventListener("keyup", function(e){e.preventDefault();
// addSelect2()});

// let keysPressed = {};

// bttn.addEventListener('keyup', (event) => { event.preventDefault()
//    keysPressed[event.key] = true; let searchTerm=document.querySelector('input#fruit').value	
//    const variable = cleanFruits.filter(function(val){return val.includes(searchTerm)});

//    let select = document.querySelector("select");
   
//    for(let i = 0; i < variable.length; i++) {
// 	   let opt = variable[i];
// 	   let el = document.createElement("option");
// 	   el.textContent = opt;
// 	   el.value = opt;
// 	   select.append(el);}});

// let button = document.querySelector('input#fruit.InputField')
// button.addEventListener("click", function(e){e.preventDefault(); 
// 	addSelect()});

// remove dropdown selection
function remove() {
	let select = document.getELementsByClassName("choice");
	select.remove()
}
// getting a search term from user input	
function addSelect2(){
	let searchTerm=document.querySelector('input#fruit').value	
	const variable = cleanFruits.filter(function(val){return val.includes(searchTerm)});

	let select = document.querySelector("select");

	//display the matching items **not original code, forgot to cite	
for(let i = 0; i < variable.length; i++) {
		let opt = variable[i];
		let el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		el.id =opt
		select.appendChild(el);
	} return select
}
// the two event listeners 
let bttn=document.querySelector('input#fruit')
bttn.addEventListener('dblclick', (event) => {event.preventDefault(); addSelect2(); })

let button=document.querySelector('button')
button.addEventListener('click', (e) => {e.preventDefault(); let element = document.querySelector("option");
element.remove() });
	
// code to place the dropdown selection into the searchBar *Not fully working* 
let output=document.querySelector('input')
console.log(output.innerHTML='')
// let lis= document.createElement('li')
let select=document.querySelector('select')
select.className = 'choice'
select.addEventListener("click", (e) => {e.preventDefault();
output.setAttribute('placeholder', e.target.value)
// output.innerHTML = ""
// lis.innerHTML = `${e.target.value}`;
// output.appendChild(lis)
return output })
// selectedOption= document.getElementsByClassName('choice').value
// document.getElementById('fruit')=selectedOption})




