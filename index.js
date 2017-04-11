var rightKey, leftKey, topKey, bottomKey;

$(document).ready(function () {

	//Set up the triggers for the arrow keys
	$(document).keydown(function(e){
		if (e.keyCode == 37 && typeof leftKey === 'function') {
			leftKey();
		} else if(e.keyCode == 38 && typeof topKey === 'function') {
			topKey();
		} else if(e.keyCode == 39 && typeof rightKey === 'function') {
			rightKey();
		} else if(e.keyCode == 40 && typeof bottomKey === 'function') {
			bottomKey();
		}
	});

	parallax.add($("#features"))
			.add($("#index"))
			.add($("#photo"))
			.add($("#freelance1"))
			.add($("#freelance2"))
			.add($("#freelance3"))
			.add($("#freelance4"))
			.add($("#personal1"))
			.add($("#personal2"))
			.add($("#personal3"))
			.add($("#personal4"));


	parallax.background = $("body");

	//Clears each page navigation on load
	parallax.preload = function(){
		rightKey = leftKey = topKey = bottomKey = "";
		$(".control").hide();
	};


	//Setting up page navigation
	parallax.index.onload=function(){
		setTop("photo", "Photography");
		setRight("personal1", "Artistic Life");
		setLeft("freelance1","Freelance Life");
	};

	parallax.freelance1.onload=function(){
		setLeft("freelance2","DexterMilano");
		setRight("index","Home");
	};
	parallax.freelance2.onload=function(){
		setLeft("freelance3","Rossana Orlandi");
		setRight("freelance1","Figissimo");
	};
	parallax.freelance3.onload=function(){
		setLeft("freelance4","Sale&Pepe");
		setRight("freelance2","DexterMilano");
	};
	parallax.freelance4.onload=function(){
		setRight("freelance3","Rossana Orlandi");
		setLeft("index","Home");
	};


	parallax.personal1.onload=function(){
		setLeft("index", "Home");
		 setRight("personal2", "Walk on the digital side");
	};
	parallax.personal2.onload=function(){
		setLeft("personal1", "Fornace");
		 setRight("personal3", "Ombre di se");
	};

	parallax.personal3.onload=function(){
			setLeft("personal2", "Walk on the digital side");
			setRight("personal4", "Pop the movie");
	};
	parallax.personal4.onload=function(){
			setLeft("personal3", "Ombre di se");
			setRight("index", "Home");
	};

	parallax.photo.onload=function(){
		setBottom("index", "Home");

	};


	//Sets the correct triggers for the arrows, plus arrow keys
	function setRight(page, text){
		$("#rightText").text(text);
		$("#rightControl").show().unbind('click').click(function(){
			parallax[page].right();
		});
		rightKey = function(){
			parallax[page].right();
		};
	}

	function setLeft(page, text){
		$("#leftText").text(text);
		$("#leftControl").show().unbind('click').click(function(){
			parallax[page].left();
		});
		leftKey = function(){
			parallax[page].left();
		};
	}

	function setTop(page, text){
		$("#topText").text(text);
		$("#topControl").show().unbind('click').click(function(){
			parallax[page].top();
		});
		topKey = function(){
			parallax[page].top();
		};
	}

	function setBottom(page, text){
		$("#bottomText").text(text);
		$("#bottomControl").show().unbind('click').click(function(){
			parallax[page].bottom();
		});
		bottomKey = function(){
			parallax[page].bottom();
		};
	}

	//The fadey bits
	$("#bottomControl").mouseenter(function(){
		$("#bottomArrow").fadeTo(500,1);
		$("#bottomText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#bottomArrow").stop().fadeTo(500,0.2);
		$("#bottomText").stop().fadeTo(500,0);
	});

	$("#leftControl").mouseenter(function(){
		$("#leftArrow").fadeTo(500,1);
		$("#leftText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#leftArrow").stop().fadeTo(500, 0.2);
		$("#leftText").stop().fadeTo(500,0);
	});

	$("#rightControl").mouseenter(function(){
		$("#rightArrow").fadeTo(500,1);
		$("#rightText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#rightArrow").stop().fadeTo(500, 0.2);
		$("#rightText").stop().fadeTo(500,0);
	});

	$("#topControl").mouseenter(function(){
		$("#topArrow").fadeTo(500,1);
		$("#topText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#topArrow").stop().fadeTo(500, 0.2);
		$("#topText").stop().fadeTo(500,0);
	});


	$(".control").hide();
	parallax.index.show();

});
