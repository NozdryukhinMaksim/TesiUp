<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package TESI_triennale
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<div id="page" class="site">
		<a class="skip-link screen-reader-text" href="#primary">
			<?php esc_html_e('Skip to content', 'tesi-triennale'); ?>
		</a>
		<header id="first-header" class="first-header">
			<div class="container">
				<nav class="main-navigation">
					<ul class="header-row">
						<li class="phone-number">
							<div class="icon_menu">
								<img src="/wp-content/themes/tesi-triennale/src/img/icons/phone_icon.svg">
								<a href="tel:#" class="single-nav-text">+49 30 223-898-45</a>
							</div>
						</li>
						<li class="work-time">
							<p class="single-nav-text">09:00 - 20:00 Lun - Ven</p>
						</li>
						<li class="whatsapp-number">
							<div class="icon_menu">
								<img src="/wp-content/themes/tesi-triennale/src/img/icons/whatsapp_icon.svg">

								<a href="" class="single-nav-text submenu-link">WhatsApp</a>
							</div>
							<ul class="submenu">
								<li><a href="">+49 30 223-898-45</a></li>
							</ul>

						</li>
						<li class="email-nav">
							<div class="icon_menu">
								<img src="/wp-content/themes/tesi-triennale/src/img/icons/letter_icon.svg">
								<a href="" class="single-nav-text submenu-link">E-Mail</a>
							</div>
							<ul class="submenu">
								<li><a href="">info@tesiup.com</a></li>

							</ul>
						</li>
					</ul>
					<div class="header-right-sect">
						<?php
						wp_nav_menu(
							array(
								'theme_location' => 'menu-1',
								'menu_id' => 'primary-menu',
							)
						);
						?>
						<ul class="social-icons-list">
							<li class="social-icon">
								<a href="#">
									<img src="/wp-content/themes/tesi-triennale/src/img/icons/facebook_icon.svg">
								</a>
							</li>
							<li class="social-icon">
								<a href="#">
									<img src="/wp-content/themes/tesi-triennale/src/img/icons/inst_icon.svg">
								</a>
							</li>
							<li class="social-icon">
								<a href="#">
									<img src="/wp-content/themes/tesi-triennale/src/img/icons/linkedin_icon.svg">
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
		<header id="masthead" class="second-header">


			<div class="container header-container">
				<div class="header__logo">
					<img src="/wp-content/themes/tesi-triennale/src/img/icons/Tesiup_logo.svg" />
				</div>
				

<?php wp_nav_menu( array(
	'menu'              => '', // ID, имя или ярлык меню
	'menu_class'        => 'header__menu', // класс элемента <ul>
	'menu_id'           => 'menu-header-menu', // id элемента <ul>
	'container'         => false, // тег контейнера или false, если контейнер не нужен
	'echo'              => true, // вывести или вернуть
	
) );?> 
				
					
				<div class="searching">
					<form role="search" method="get" id="searchform" action="https://tesiup.it/">
						<label class="screen-reader-text" for="s"></label>
						<input type="text" value="" name="s" id="s" placeholder="Ricerca..." />
						<input type="submit" id="searchsubmit" value="" />
					</form>
				</div>
				<a href="#" class="header__button">RICHIESTA SENZA IMPEGNO</a>
				<div class="header__burger">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>


			<!--<nav id="site-navigation" class="float-navigation">
				<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
					<?php esc_html_e('Primary Menu', 'tesi-triennale'); ?>
				</button>
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'menu-1',
						'menu_id' => 'primary-menu',
					)
				);
				?>
			</nav> #site-navigation -->
		</header><!-- #masthead -->