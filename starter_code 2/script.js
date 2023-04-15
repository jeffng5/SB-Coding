// const input = document.querySelector('#fruit');
// const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu']

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

const cleanFruits = fruits.map(fruit=> fruit.toLowerCase());







function addSelect(arg){
	let textField= document.querySelector('p')		
	let option = document.querySelector('select')
	let option2= document.createElement('option')
	let searchTerm=document.querySelector('input#fruit.InputField').value
	let searchObj=cleanFruits.findIndex(function(val) {return val===searchTerm})
	textField.append(option)
	option.appendChild(option2)
	option2.append(cleanFruits[searchObj])
	return option2
	}
	
// let entry = document.querySelector('input#fruit.InputField')
// entry.addEventListener("keypress", function(e) {e.preventDefault(); 
// 	if (e.target.value==='abcdefghijklmnopqrstuvwxyz')  { 
// 		addselect()}});

function inputText(){
	let searchTerm=document.querySelector('input#fruit.InputField').value
	let parentBox= document.querySelector('ul')
	let lis= document.createElement('li')
	parentBox.append(lis)
	lis.append(searchTerm)
	return lis}


		
let bttn=document.getElementById('submission')
bttn.addEventListener("click", function(e){e.preventDefault();
inputText(e); addSelect(e)});



// let button = document.querySelector('input#fruit.InputField')
// button.addEventListener("click", function(e){e.preventDefault(); 
// 	addSelect()});



