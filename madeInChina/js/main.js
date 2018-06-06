const range = document.querySelector('.products__range--input')
const infesting = document.querySelector('#infesting')
const delevary = document.querySelector('#delevary')
const marcating = document.querySelector('#marcating')
const salary = document.querySelector('#salary')
const UIval = document.querySelector('#val')
const items = document.querySelector('.products__items')
const item = document.querySelectorAll('.products__items__item')

range.addEventListener('input', getVal)

items.addEventListener('click', function(e){
	if(e.target.parentElement.classList.contains('products__items__item')){
		item.forEach( function(item) {
			item.classList.remove('selected')
		});
		e.target.parentElement.classList.add('selected')

		scrollToCalc()

	}

})
getInfesting ()

function scrollToCalc(){
	window.scrollTo(0 , range.offsetTop - 100)
}

function getVal(){
	const value = range.value
	getInfesting (value)
}

function setVal(val){
	range.value = val
	getVal()
}

function getInfesting (val = 0) {
	infesting.textContent = val
	getdelevary(val)
	getMarkiting(val)
	getSalary(val)
	getMoney(val)
}

function getdelevary(val = 0){
	const del = val * 87 / 100
	delevary.textContent = del
}

function getSalary (val = 0) {
	const UIsalary =  val * 2.5
	salary.textContent = UIsalary
}

function getMarkiting(val = 0) {
	const markiting = val * 13 / 100
	marcating.textContent = markiting
}
function getMoney (val = 0) {
	const UIsalary =  val * 2.5
	const UIm = UIsalary - val 
	UIval.textContent = UIm
	console.log()
}