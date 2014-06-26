$(document).on('ready', function() {
  console.log("hello world from on.ready")

  var counter = 0
  //listen for click events on <button>
  $('button').on('click', function(){
  	// test functionality with a console log
  	console.log('hello from button.click', counter)
  	// When a button is clicked, increase counter by 1
  	counter++
  })

  // listen for clicks on #my-button
  $('#my-button').on('click', function(){
  	console.log('test')
  })

  //This is valid too, but they prefer not to use the shortand because of something we'll learn later
  $('button').click(function(eventArgs){
 	//Print all the arguments passed to this function
 	console.log(arguements)
 	// print out the named alias for the first argument
  	console.log(eventArgs)
  })

  //Prevent anchor tags from navigating
  $('a').on('click', function(e){
  	console.log('clicked anchor')

  	// "this" refers to the DOM element that was clicked
  	console.log(this)

  	//We can convert that DOM element into a jQuery object
  	// by passing it to the $()
  	$(this).css('color', 'red')
  	$(this).text('clicked')

  	//Event-way to prevent the default behavior
  	// like navigating to a page when clicking an <a> tag
  	e.preventDefault()

  	return false
  })

});