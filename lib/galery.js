var c = document.getElementById('current');
var thumbs = document.getElementsByClassName('thumb');
var n = document.getElementById('name');


// for(var i = 0; i < thumbs.length; i++) {
// 	thumbs[i].addEventListener('click', display);
// }

// function display() {
// 	var src = this.getAttribute('src');
// 	// var id = this.getAttribute('id');
// 	current.setAttribute('src', src); 	 
// }

for(var i = 0; i < thumbs.length; i++) {
	thumbs[i].addEventListener('click', display_name);
}
function display_name() {
	var x = this.getAttribute('value');
	console.log(x);
	if (x == 1) {
		n.innerHTML = "<a href=Shen.html id=name>Shen</a>";
		c.src = '../images/galerija/Shen.jpg';
		c.onclick = function() {
         window.location.href = 'Shen.html';
		};
	}
	else if (x == 2) {
		n.innerHTML = "<a href=Darius.html id=name>Darius</a>";
		c.src = '../images/galerija/Darius.jpg';
		c.onclick = function() {
         window.location.href = 'Darius.html';
		};
	}
	else if (x == 3) {
		n.innerHTML = "<a href=Kled.html id=name>Kled</a>";
		c.src = '../images/galerija/Kled.jpg';
		c.onclick = function() {
         window.location.href = 'Kled.html';
		};
	}
	else if (x == 4) {
		n.innerHTML = "<a href=Akali.html id=name>Akali</a>";
		c.src = '../images/galerija/Akali.jpg';
		c.onclick = function() {
         window.location.href = 'Akali.html';
		};
	}
	else if (x == 5) {
		n.innerHTML = "<a href=Vladimir.html id=name>Vladimir</a>";
		c.src = '../images/galerija/Vladimir.jpg';
		c.onclick = function() {
         window.location.href = 'Vladimir.html';
		};
	}
	else if (x == 6) {
		n.innerHTML = "<a href=Katarina.html id=name>Katarina</a>";
		c.src = '../images/galerija/Katarina.jpg';
		c.onclick = function() {
         window.location.href = 'Katarina.html';
		};
	}
	else if (x == 7) {
		n.innerHTML = "<a href=Talon.html id=name>Talon</a>";
		c.src = '../images/galerija/Talon.jpg';
		c.onclick = function() {
         window.location.href = 'Talon.html';
		};
	}
	else if (x == 8) {
		n.innerHTML = "<a href=Kled.html id=name>Zed</a>";
		c.src = '../images/galerija/zed.jpg';
		c.onclick = function() {
         window.location.href = 'Kled.html';
		};
	}
	else if (x == 9) {
		n.innerHTML = "<a href=Kled.html id=name>Draven</a>";
		c.src = '../images/galerija/Draven.jpg';
		c.onclick = function() {
         window.location.href = 'Kled.html';
		};
	}
	else if (x == 10) {
		n.innerHTML = "<a href=Ekko.html id=name>Ekko</a>";
		c.src = '../images/galerija/Ekko.jpg';
		c.onclick = function() {
         window.location.href = 'Ekko.html';
		};
	}
	else if (x == 11) {
		n.innerHTML = "<a href=Kled.html id=name>Vi</a>";
		c.src = '../images/galerija/VI.jpg';
		c.onclick = function() {
         window.location.href = 'Kled.html';
		};
	}
	else if (x == 12) {
		n.innerHTML = "<a href=Kled.html id=name>Viktor</a>";
		c.src = '../images/galerija/Viktor.jpg';
		c.onclick = function() {
         window.location.href = 'Kled.html';
		};
	}
	else if (x == 13) {
		n.innerHTML = "<a href=Kled.html id=name>Jinx</a>";
		c.src = '../images/galerija/Jinx.jpg';
		c.onclick = function() {
         window.location.href = 'Kled.html';
		};
	}
	else if (x == 14) {
		n.innerHTML = "<a href=Kled.html id=name>Jayce</a>";
		c.src = '../images/galerija/Jayce.jpg';
		c.onclick = function() {
         window.location.href = 'Kled.html';
		};
	}
	else if (x == 15) {
		n.innerHTML = "<a href=Kled.html id=name>Caitlyn</a>";
		c.src = '../images/galerija/Caitlyn.jpg';
		c.onclick = function() {
         window.location.href = 'Kled.html';
		};
	}
	else if (x == 16) {
		n.innerHTML = "<a href=Darius.html id=name>Darius</a>";
		c.src = '../images/galerija/Darius.jpg';
		c.onclick = function() {
         window.location.href = 'Darius.html';
		};
	}
	else if (x == 17) {
		n.innerHTML = "<a href=Kled.html id=name>Kled</a>";
		c.src = '../images/galerija/Kled.jpg';
		c.onclick = function() {
         window.location.href = 'Kled.html';
		};
	}
	else if (x == 18) {
		n.innerHTML = "<a href=Akali.html id=name>Akali</a>";
		c.src = '../images/galerija/Akali.jpg';
		c.onclick = function() {
         window.location.href = 'Akali.html';
		};
	}
	else if (x == 19) {
		n.innerHTML = "<a href=Vladimir.html id=name>Vladimir</a>";
		c.src = '../images/galerija/Vladimir.jpg';
		c.onclick = function() {
         window.location.href = 'Vladimir.html';
		};
	}
	else if (x == 20) {
		n.innerHTML = "<a href=Katarina.html id=name>Katarina</a>";
		c.src = '../images/galerija/Katarina.jpg';
		c.onclick = function() {
         window.location.href = 'Katarina.html';
		};
	}
	else if (x == 21) {
		n.innerHTML = "<a href=Talon.html id=name>Talon</a>";
		c.src = '../images/galerija/Talon.jpg';
		c.onclick = function() {
         window.location.href = 'Talon.html';
		};
	}
	else if (x == 22) {
		n.innerHTML = "<a href=Kled.html id=name>Zed</a>";
		c.src = '../images/galerija/zed.jpg';
		c.onclick = function() {
         window.location.href = 'Kled.html';
		};
	}
	else if (x == 23) {
		n.innerHTML = "<a href=Kled.html id=name>Draven</a>";
		c.src = '../images/galerija/Draven.jpg';
		c.onclick = function() {
         window.location.href = 'Kled.html';
		};
	}
	else if (x == 24) {
		n.innerHTML = "<a href=Ekko.html id=name>Ekko</a>";
		c.src = '../images/galerija/Ekko.jpg';
		c.onclick = function() {
         window.location.href = 'Ekko.html';
		};
	}
	else if (x == 25) {
		n.innerHTML = "<a href=Kled.html id=name>Vi</a>";
		c.src = '../images/galerija/VI.jpg';
		c.onclick = function() {
         window.location.href = 'Kled.html';
		};
	}
	else if (x == 26) {
		n.innerHTML = "<a href=Kled.html id=name>Viktor</a>";
		c.src = '../images/galerija/Viktor.jpg';
		c.onclick = function() {
         window.location.href = 'Kled.html';
		};
	}
	else if (x == 27) {
		n.innerHTML = "<a href=Kled.html id=name>Jinx</a>";
		c.src = '../images/galerija/Jinx.jpg';
		c.onclick = function() {
         window.location.href = 'Kled.html';
		};
	}
	else if (x == 28) {
		n.innerHTML = "<a href=Kled.html id=name>Jayce</a>";
		c.src = '../images/galerija/Jayce.jpg';
		c.onclick = function() {
         window.location.href = 'Kled.html';
		};
	}
	else if (x == 29) {
		n.innerHTML = "<a href=Kled.html id=name>Caitlyn</a>";
		c.src = '../images/galerija/Caitlyn.jpg';
		c.onclick = function() {
         window.location.href = 'Kled.html';
		};
	}
	else if (x == 30) {
		n.innerHTML = "<a href=Kled.html id=name>Caitlyn</a>";
		c.src = '../images/galerija/Caitlyn.jpg';
		c.onclick = function() {
         window.location.href = 'Kled.html';
		};
	}
}


$(document).ready(function(){
	$('input[type=radio][name=borderi]').on('click', function(){
		if (this.value === '1') {
			$('#okvir').addClass('silver').removeClass('platinum').removeClass('gold');
			$('#current').addClass('silver1').removeClass('platinum1').removeClass('gold1');
		}
		else if (this.value === '2') {
			$('#okvir').addClass('gold').removeClass('platinum').removeClass('silver');
			$('#current').addClass('gold1').removeClass('platinum1').removeClass('silver1');
		}
		else if (this.value === '3') {
			$('#okvir').addClass('platinum').removeClass('silver').removeClass('gold');
			$('#current').addClass('platinum1').removeClass('silver1').removeClass('gold1');
		}
	});
	});

console.log($('#okvir'));



// var img = $('img');
// var current = $('#current');
// var ime = $('#ime');
// var name = 'Jinx';
// var grad = 'grad';

// img.on('click', function(){
// 	ime.html('');
// 	current.html('');
// 	var self = $(this);

// 	var copy = self.clone();
// 		copy.css({
// 			position : 'absolute',
// 			width : self.width(),
// 			height : self.height,
// 			top : self.offset().top,
// 			left : self.offset().left
// 		});
// 		copy.animate({
// 			top : current.offset().top,
// 			left : current.offset().left,
// 			width : current.width(),
// 			height : current.height()
// 		}, 2000, function(){
// 			if (img == 1) {
// 				ime.append(name);
// 			}
// 			else if (img == 2){
// 				ime.append(grad);
// 			}
// 		});
// 	$('#current').append(copy);
// });