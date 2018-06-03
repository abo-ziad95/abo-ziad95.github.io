function Book (title, author, isbn) {
	this.title = title,
	this.author = author,
	this.isbn = isbn;
}

function UI (){}

UI.prototype.addListBook = function(book){
	const list = document.getElementById('book-list')
	      row = document.createElement('tr')
	      row.innerHTML = `<td>${book.title}</td>
                           <td>${book.author}</td>
                           <td>${book.isbn}</td>
                           <td><a href="#" class="delete">x</a></td>`
	      list.appendChild(row)
};

UI.prototype.clear = function(){
  document.getElementById('title').value = ''
  document.getElementById('author').value = ''
  document.getElementById('isbn').value = ''
};

UI.prototype.showAlert = function(msg, className){
	const div = document.createElement('div')
	const form = document.getElementById('form')
	const container = document.querySelector('.container')
	div.className = `alert ${className}`
	div.appendChild(document.createTextNode(msg))
	container.insertBefore(div, form)

	setTimeout(function(){
		document.querySelector('.alert').remove()
	},3000)
};

UI.prototype.deleteBook = function(target){
	if (target.className === 'delete') {
		target.parentElement.parentElement.remove()

	}
};

document.getElementById('form').addEventListener('submit',function(e){
  e.preventDefault();

  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const isbn = document.getElementById('isbn').value

  const book = new Book(title, author, isbn)

  const ui = new UI()

  if (book.title === '' || book.author === '' || book.isbn === '') {
  	ui.showAlert('please fiil in all fields', 'error')
  }else{
    ui.addListBook(book)
  	ui.showAlert('book added', 'succes')
    ui.clear()
  }

});

document.getElementById('book-list').addEventListener('click', function (e) {
	e.preventDefault()
    
    const ui = new UI()

    ui.deleteBook(e.target)
    ui.showAlert('book removed!', 'succes')

})