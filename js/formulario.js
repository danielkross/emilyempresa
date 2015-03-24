var $form = $('#formulario');
	$titulo = $('#titulo');
	$url = $('#url');
	$button = $('#mostrar_form');
	$list = $('#contenido');
	$post = $('.item').first();


function mostrarFormulario(){
	$form.slideToggle();
	return false;
}

function agregarPost(){
	var url = $url.val()
	titulo = $titulo.val(),
	$clone = $post.clone();

	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	$clone.hide();

	$list.prepend($clone);

	$clone.fadeIn();

	return false;

}

//eventos
$button.click( mostrarFormulario );
$form.on('submit', agregarPost );

<script type="text/javascript">

$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});
</script>