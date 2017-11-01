<?php

add_theme_support( 'menus' );

function enqueue_styles() {
	wp_enqueue_style( 'whitesquare-style', get_stylesheet_uri());
	// wp_enqueue_style( 'style', get_stylesheet_uri().'/css/style.css');
	wp_register_style('font-style', 'http://fonts.googleapis.com/css?family=Oswald:400,300');
	wp_enqueue_style( 'font-style');
	wp_register_style('style', get_template_directory_uri().'/css/style.css');
	wp_enqueue_style( 'style');
	wp_register_style('font-awesome', get_template_directory_uri().'/fonts/font-awesome-4.7.0/css/font-awesome.min.css');
	wp_enqueue_style( 'font-awesome');
}
add_action('wp_enqueue_scripts', 'enqueue_styles');

function enqueue_scripts () {
	wp_register_script('html5-shim', 'https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js');
	wp_enqueue_script('html5-shim');
	wp_register_script('bundle',  get_template_directory_uri().'/js/bundle.js', '', '1.1', true);
	wp_enqueue_script('bundle');
}
add_action('wp_enqueue_scripts', 'enqueue_scripts');

include_once('../../../../wp-config.php' ); //locate the wp-config.php so we can start to use global variable $wpdb to get database connection and other wp functions
global $wpdb;

remove_filter( 'the_content', 'wpautop' );// для контента
remove_filter( 'the_excerpt', 'wpautop' );// для анонсов
remove_filter( 'comment_text', 'wpautop' );// для комментарий

function prefix_send_email_to_admin() {
    /**
     * At this point, $_GET/$_POST variable are available
     *
     * We can do our normal processing here
     */ 

    // Sanitize the POST field
    // Generate email content
    // Send to appropriate email
    $_POST = json_decode(file_get_contents('php://input'), true);

    $frm_name  = "VkusArom";
		$to = "vfxq@rambler.ru";
		$sitename  = "SweetFeel.su";
		$subject   = "Новая заявка с сайта \"$sitename\"";
		
		$name = trim(sanitize_text_field($_POST["name"]));
		$email = trim(is_email($_POST["email"]));
		$message = trim(sanitize_text_field ($_POST["message"]));
		
		$message = "
		E-mail: $email <br>
		Имя: $name <br>
		Сообщение: $message
		";
			
		
		if (isset($name) && isset($email) && isset($message)){
			wp_mail($to, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "		Content-type: text/html; charset=\"utf-8\"");
		}
}

add_action( 'admin_post_nopriv', 'prefix_send_email_to_admin' );
add_action( 'admin_post', 'prefix_send_email_to_admin' );