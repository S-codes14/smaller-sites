$(document).ready(function() 
{
	//if url has #no-right-panel set one panel demo
	if (window.location.hash.indexOf("no-right-panel") != -1)
	{
		$("#smaller-builder").addClass("no-right-panel");
		$(".component-properties-tab").show();
		Smaller.Components.componentPropertiesElement = "#left-panel .component-properties";
	} else
	{
		$(".component-properties-tab").hide();
	}

	Smaller.Builder.init('demo/narrow-jumbotron/index.html', function() {
		//run code after page/iframe is loaded
	});

	Smaller.Gui.init();
	Smaller.FileManager.init();
	Smaller.SectionList.init();
	Smaller.FileManager.addPages(
	[
		
	{
		name: "about-us",
		title: "about-us",
		url: "demo/templates/about-us-page-template/index.html",
		file: "demo/templates/about-us-page-template/index.html",
		folder: "templates"
	}, {
		name: "agency",
		title: "agency",
		url: "demo/templates/agency-template/index.html",
		file: "demo/templates/agency-template/index.html",
		folder: "templates"
	}, {
		name: "application",
		title: "application",
		url: "demo/templates/application-template/index.html",
		file: "demo/templates/application-template/index.html",
		folder: "templates"
	}, {
		name: "best-bootstrap",
		title: "best-bootstrap",
		url: "demo/templates/best-bootstrap-templates/index.html",
		file: "demo/templates/best-bootstrap-templates/index.html",
		folder: "templates"
	}, {
		name: "bootstrap-basic",
		title: "bootstrap-basic",
		url: "demo/templates/bootstrap-basic-template/index.html",
		file: "demo/templates/bootstrap-basic-template/index.html",
		folder: "templates"
	}, {
		name: "bootstrap-design",
		title: "bootstrap-design",
		url: "demo/templates/bootstrap-design-templates/index.html",
		file: "demo/templates/bootstrap-design-templates/index.html",
		folder: "templates"
	}, {
		name: "bootstrap-ecommerce",
		title: "bootstrap-ecommerce",
		url: "demo/templates/bootstrap-ecommerce-template/index.html",
		file: "demo/templates/bootstrap-ecommerce-template/index.html",
		folder: "templates"
	}, {
		name: "bootstrap-landing-page",
		title: "bootstrap-landing-page",
		url: "demo/templates/bootstrap-landing-page-template/index.html",
		file: "demo/templates/bootstrap-landing-page-template/index.html",
		folder: "templates"
	}, {
		name: "bootstrap-layout",
		title: "bootstrap-layout",
		url: "demo/templates/bootstrap-layout-templates/index.html",
		file: "demo/templates/bootstrap-layout-templates/index.html",
		folder: "templates"
	}, {
		name: "bootstrap-login-page",
		title: "bootstrap-login-page",
		url: "demo/templates/bootstrap-login-page-template/index.html",
		file: "demo/templates/bootstrap-login-page-template/index.html",
		folder: "templates"
	}, {
		name: "bootstrap-one-page",
		title: "bootstrap-one-page",
		url: "demo/templates/bootstrap-one-page-template/index.html",
		file: "demo/templates/bootstrap-one-page-template/index.html",
		folder: "templates"
	}, {
		name: "bootstrap-page",
		title: "bootstrap-page",
		url: "demo/templates/bootstrap-page-templates/index.html",
		file: "demo/templates/bootstrap-page-templates/index.html",
		folder: "templates"
	}, {
		name: "bootstrap-portfolio",
		title: "bootstrap-portfolio",
		url: "demo/templates/bootstrap-portfolio-template/index.html",
		file: "demo/templates/bootstrap-portfolio-template/index.html",
		folder: "templates"
	}, {
		name: "bootstrap-website",
		title: "bootstrap-website",
		url: "demo/templates/bootstrap-responsive-website-templates/index.html",
		file: "demo/templates/bootstrap-responsive-website-templates/index.html",
		folder: "templates"
	}, {
		name: "bootstrap-sample",
		title: "bootstrap-sample",
		url: "demo/templates/bootstrap-sample-template/index.html",
		file: "demo/templates/bootstrap-sample-template/index.html",
		folder: "templates"
	}, {
		name: "bootstrap-single-page",
		title: "bootstrap-single-page",
		url: "demo/templates/bootstrap-single-page-template/index.html",
		file: "demo/templates/bootstrap-single-page-template/index.html",
		folder: "templates"
	}, {
		name: "bootstrap-starter",
		title: "bootstrap-starter",
		url: "demo/templates/bootstrap-starter-template/index.html",
		file: "demo/templates/bootstrap-starter-template/index.html",
		folder: "templates"
	}, {
		name: "bootstrap-template",
		title: "bootstrap-template",
		url: "demo/templates/bootstrap-templates-examples/index.html",
		file: "demo/templates/bootstrap-templates-examples/index.html",
		folder: "templates"
	}, {
		name: "bootstrap-theme",
		title: "bootstrap-theme",
		url: "demo/templates/bootstrap-theme-template/index.html",
		file: "demo/templates/bootstrap-theme-template/index.html",
		folder: "templates"
	}, {
		name: "business-template",
		title: "business-template",
		url: "demo/templates/business-template/index.html",
		file: "demo/templates/business-template/index.html",
		folder: "templates"
	}, {
		name: "coming-soon-template",
		title: "coming-soon-template",
		url: "demo/templates/coming-soon-template/index.html",
		file: "demo/templates/coming-soon-template/index.html",
		folder: "templates"
	}, {
		name: "corporate-template",
		title: "corporate-template",
		url: "demo/templates/corporate-template/index.html",
		file: "demo/templates/corporate-template/index.html",
		folder: "templates"
	}, {
		name: "flower-template",
		title: "flowers-template",
		url: "demo/templates/download-bootstrap-template/index.html",
		file: "demo/templates/download-bootstrap-template/index.html",
		folder: "templates"
	}, {
		name: "education-template",
		title: "education-template",
		url: "demo/templates/education-template/index.html",
		file: "demo/templates/education-template/index.html",
		folder: "templates"
	}, {
		name: "error-template",
		title: "error-template",
		url: "demo/templates/error-template/index.html",
		file: "demo/templates/error-template/index.html",
		folder: "templates"
	}, {
		name: "event-template",
		title: "event-template",
		url: "demo/templates/event-template/index.html",
		file: "demo/templates/event-template/index.html",
		folder: "templates"
	}, {
		name: "html5-template",
		title: "html5-template",
		url: "demo/templates/html5/index.html",
		file: "demo/templates/html5/index.html",
		folder: "templates"
	}, {
		name: "homepage-template",
		title: "homepage-template",
		url: "demo/templates/homepage-template/index.html",
		file: "demo/templates/homepage-template/index.html",
		folder: "templates"
	}, {
		name: "hotel-template",
		title: "hotel-template",
		url: "demo/templates/hotel-template/index.html",
		file: "demo/templates/hotel-template/index.html",
		folder: "templates"
	}, {
		name: "landing-template",
		title: "landing-template",
		url: "demo/templates/landing-template/index.html",
		file: "demo/templates/landing-template/index.html",
		folder: "templates"
	}, {
		name: "magazine-template",
		title: "magazine-template",
		url: "demo/templates/magazine-template/index.html",
		file: "demo/templates/magazine-template/index.html",
		folder: "templates"
	}, {
		name: "news-template",
		title: "news-template",
		url: "demo/templates/news-template/index.html",
		file: "demo/templates/news-template/index.html",
		folder: "templates"
	}, {
		name: "personal-website",
		title: "personal-website",
		url: "demo/templates/personal-website-template",
		file: "demo/templates/personal-website-template/index.html",
		folder: "templates"
	}, {
		name: "photography",
		title: "photography",
		url: "demo/templates/photography-template",
		file: "demo/templates/photography-template/index.html",
		folder: "templates"
	}, {
		name: "premium-bootstrap",
		title: "premium-bootstrap",
		url: "demo/templates/premium-bootstrap-templates",
		file: "demo/templates/premium-bootstrap-templates/index.html",
		folder: "templates"
	}, {
		name: "profile",
		title: "profile",
		url: "demo/templates/profile-template",
		file: "demo/templates/profile-template/index.html",
		folder: "templates"
	}, {
		name: "real-estate",
		title: "real-estate",
		url: "demo/templates/real-estate-template",
		file: "demo/templates/real-estate-template/index.html",
		folder: "templates"
	}, {
		name: "restaurant",
		title: "restaurant",
		url: "demo/templates/restaurant-template",
		file: "demo/templates/restaurant-template/index.html",
		folder: "templates"
	}, {
		name: "simple-bootstrap",
		title: "simple-bootstrap",
		url: "demo/templates/simple-bootstrap-template",
		file: "demo/templates/simple-bootstrap-template/index.html",
		folder: "templates"
	}, {
		name: "store",
		title: "store",
		url: "demo/templates/store-template",
		file: "demo/templates/store-template/index.html",
		folder: "templates"
	}, {
		name: "travel",
		title: "travel",
		url: "demo/templates/travel-template",
		file: "demo/templates/travel-template/index.html",
		folder: "templates"
	}, {
		name: "web-application",
		title: "web-application",
		url: "demo/templates/web-application-template",
		file: "demo/templates/web-application-template/index.html",
		folder: "templates"
	}, {
		name: "wedding",
		title: "wedding",
		url: "demo/templates/wedding-template",
		file: "demo/templates/wedding-template/index.html",
		folder: "templates"
	},


	{name:"narrow-jumbotron", title:"Jumbotron",  url: "demo/narrow-jumbotron/index.html", file: "demo/narrow-jumbotron/index.html", assets: ['demo/narrow-jumbotron/narrow-jumbotron.css']},
		{name:"album", title:"Album",  url: "demo/album/index.html", file: "demo/album/index.html", folder:"content", assets: ['demo/album/album.css']},
		{name:"blog", title:"Blog",  url: "demo/blog/index.html", file: "demo/blog/index.html", folder:"content", assets: ['demo/blog/blog.css']},
		{name:"carousel", title:"Carousel",  url: "demo/carousel/index.html",  file: "demo/carousel/index.html", folder:"content", assets: ['demo/carousel/carousel.css']},
		{name:"offcanvas", title:"Offcanvas",  url: "demo/offcanvas/index.html", file: "demo/offcanvas/index.html", folder:"content", assets: ['demo/offcanvas/offcanvas.css','demo/offcanvas/offcanvas.js']},
		
		//uncomment php code below and rename file to .php extension to load saved html files in the editor
		/*
		<?php 
		   $htmlFiles = glob('{my-pages/*.html,demo/*\/*.html, demo/*.html}',  GLOB_BRACE);
		   foreach ($htmlFiles as $file) { 
			   if (in_array($file, array('new-page-blank-template.html', 'editor.html'))) continue;//skip template files
			   $pathInfo = pathinfo($file);
			   $filename = $pathInfo['filename'];
			   $folder = preg_replace('@/.+?$@', '', $pathInfo['dirname']);
			   $subfolder = preg_replace('@^.+?/@', '', $pathInfo['dirname']);
			   if ($filename == 'index' && $subfolder) {
				   $filename = $subfolder;
			   }
			   $url = $pathInfo['dirname'] . '/' . $pathInfo['basename'];
		?>
		{name:"<?php echo ucfirst($filename);?>", file:"<?php echo ucfirst($filename);?>", title:"<?php echo ucfirst($filename);?>",  url: "<?php echo $url;?>", folder:"<?php echo $folder?>"},
		<?php } ?>
		*/
	]);
	
    function randomArrayShuffle(array) {
		var currentIndex = array.length,
			temporaryValue, randomIndex;
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array[0];
	}
	var names = ["new-page", "agency", "best-bootstrap", "bootstrap-basic", "bootstrap-design", "bootstrap-ecommerce", "bootstrap-landing-page", "bootstrap-layout", "bootstrap-one-page", "bootstrap-page", "bootstrap-portfolio", "bootstrap-website", "bootstrap-sample", "bootstrap-single-page", "bootstrap-starter", "bootstrap-template", "business-template", "coming-soon-template", "corporate-template", "flower-template", "education-template", "error-template", "html5-template", "homepage-template", "hotel-template", "landing-template", "magazine-template", "news-template", "personal-website", "photography", "premium-bootstrap", "profile", "real-estate", "restaurant", "simple-bootstrap", "store", "travel", "wedding"];

	var loadPage = randomArrayShuffle(names);

	 Smaller.FileManager.loadPage(loadPage);
	 Smaller.Breadcrumb.init();
});