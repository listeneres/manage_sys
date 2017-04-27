import $ from 'jquery';
$(function(){
	$('.userdb').click(function(){
		console.log(222222);
		$(this).find('inpit').checked = !$(this).find('inpit').checked;
	})
})
