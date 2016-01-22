$(document).ready(function(){

	$('form').submit(function(e){
		e.preventDefault();

		var data = $(this).serializeArray();

		data.push({name:'tag', value: 'login'});

		$.ajax({

			url: 'process.php',
			type: 'post',
			dataType: 'json',
			data: data,
			beforeSend: function(){

				$('.fa').css('display','inline');


			}

		})

		.done(function(){

			$('span').html("Correcto");
		})

		.fail(function(){

			$('span').html("Incorrecto");
		})

		.always(function(){
			setTimeout(function(){

					$('.fa').hide();


			}, 1000);

		
		});

	})

})