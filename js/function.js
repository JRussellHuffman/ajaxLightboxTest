// for index.html
function lightboxClick () {
	$("div.thumb").click(function() {
		$("div.lightbox").fadeIn();
		$("body").css({
			"overflow" : "hidden",
		})
	})

	$("div.bg").click(function() {
		$("div.lightbox").fadeOut();
		revertURL();
		$("body").css({
			"overflow" : "auto",
		})
	})
}

function idClick () {
	$("div.thumb").click(function() {
		var thisID = $(this).attr("id")
		for (var i = 0; i < content.length; i++) {
			if (content[i].title == thisID) {
				$("h1.pop").html(content[i].header);
				$("p.pop").html(content[i].body)
			}
		};
		loadURL(thisID); //add the ID as a hash the new url
	})
}

function loadURL (hash) {
	window.history.pushState({
		"html": "/ajaxLightbox/index.html",
		"pageTitle": "something",
	},"","/ajaxLightbox/projects.html#" + hash);
}

function revertURL () {
	window.history.pushState({
		"html": "/ajaxLightbox/index.html",
		"pageTitle": "something",
	},"","/ajaxLightbox/index.html");
}

lightboxClick();
idClick();

//for thumb content 

function addThumb() {
	var contentThumbs = [];
	for (var i = 0; i < content.length; i++) {
		$("div.thumbContainer").append('<div class="thumb" data-id="'+ i + '">' + i + '</div>');
		contentThumbs[i] = new thumbnail(content[i].title, content[i].text, content[i].thumbType, i);
		contentThumbs[i].popThumb();
		contentThumbs[i].addImage();
	};
	lightboxClick();
	idClick();
}

addThumb();

// for next.html
var contentHash;

function checkHash() {
	if(window.location.hash) {
	  var withHash = window.location.hash;
	  contentHash = withHash.slice( 1 ); //remove the hash and store just the value
	  console.log(contentHash)
	} else {
	  console.log("no hash");
	}
}

function loadFromHash() {
	for (var i = 0; i < content.length; i++) {
		if (content[i].title == contentHash) {
			$("h1.pop").html(content[i].header);
			$("p.pop").html(content[i].body)
		}
	};
}

function goBack() {
	window.addEventListener("popstate", function(e) {
		console.log("popstate");
		window.history.go(0);
	});
}

goBack();

checkHash();
loadFromHash();