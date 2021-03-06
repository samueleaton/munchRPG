var munch = new Munch();
munch.player = new Player(document.body);

munch.animationPreloader = new Preloader(function(){ 
	munch.init();
});




	munch.player.sprint = new Animation("football_sprite_11.png",36,64,munch.animationPreloader.success);
		munch.player.sprint.preloader(munch.animationPreloader);
		munch.player.sprint.addFrame(432,0, 36,64); // 0
		munch.player.sprint.addFrame(468,0,36,64); // 1
		munch.player.sprint.addFrame(504,0,36,64); // 2
		munch.player.sprint.addFrame(540,0,36,64); // 3
		munch.player.sprint.addFrame(576,0,36,64); // 4
		munch.player.sprint.addFrame(612,0,36,64); // 5
		munch.player.sprint.addFrame(648,0,36,64); // 6
		munch.player.sprint.addFrame(684,0,36,64); // 7
		munch.player.sprint.setFrameOrder([0,1,2,3,4,5,6,7]);
		munch.player.sprint.divideFpsFrequency(2);

	munch.player.walk = new Animation("football_sprite_11.png",36,64,munch.animationPreloader.success);
		munch.player.walk.preloader(munch.animationPreloader);
		munch.player.walk.addFrame(0,0, 36,64); // 0
		munch.player.walk.addFrame(36,0,36,64); // 1
		munch.player.walk.addFrame(72,0,36,64); // 2
		munch.player.walk.addFrame(108,0,36,64); // 3
		munch.player.walk.addFrame(144,0,36,64); // 4
		munch.player.walk.addFrame(180,0,36,64); // 5
		munch.player.walk.addFrame(216,0,36,64); // 6
		munch.player.walk.addFrame(252,0,36,64); // 7
		munch.player.walk.setFrameOrder([0,1,2,3,4,5,6,7]);
		munch.player.walk.divideFpsFrequency(4);

	munch.player.idle = new Animation("football_sprite_11.png",36,64,munch.animationPreloader.success);
		munch.player.idle.preloader(munch.animationPreloader);
		munch.player.idle.addFrame(288,0,36,64); // 0
		munch.player.idle.addFrame(324,0,36,64); // 1
		munch.player.idle.addFrame(360,0,36,64); // 2
		munch.player.idle.setFrameOrder([0,1,2,1]);
		munch.player.setCurrentAnimation(munch.player.idle);
		munch.player.idle.divideFpsFrequency(12);

	munch.player.jump = new Animation("football_sprite_11.png",36,64,munch.animationPreloader.success);
		munch.player.jump.preloader(munch.animationPreloader);
		munch.player.jump.addFrame(720,0,36,64); // 0
		munch.player.jump.addFrame(756,0,36,64); // 1
		munch.player.jump.setFrameOrder([0,1]);
		munch.player.jump.divideFpsFrequency(6);

	munch.player.walkDown = new Animation("football_sprite_11.png",36,64,munch.animationPreloader.success);
		munch.player.walkDown.preloader(munch.animationPreloader);
		munch.player.walkDown.addFrame(792,0,36,64); // 0
		munch.player.walkDown.addFrame(828,0,36,64); // 1
		munch.player.walkDown.addFrame(864,0,36,64); // 1
		munch.player.walkDown.setFrameOrder([0,1,0,2]);
		munch.player.walkDown.divideFpsFrequency(6);

munch.player.fixedXAxis(true);
munch.player.fixedYAxis(true);

munch.init = function(){
	setTimeout(munch.loop, 250);
};

munch.update = function(){
	munch.player.update();
};

munch.draw = function(){
	munch.player.draw();
};

munch.player.update = function() {

	if(keystate[munch.ctrls.space] || ( (keystate[munch.ctrls.A]||keystate[munch.ctrls.D])&&keystate[munch.ctrls.space]) ){ //jump key pressed
		munch.player.setCurrentAnimation(munch.player.jump);
	}
	else if((keystate[munch.ctrls.A]||keystate[munch.ctrls.D])&&keystate[84]){ // if T is pressed, do turbo
		munch.player.setCurrentAnimation(munch.player.sprint);
		if(keystate[munch.ctrls.A]){ munch.player.flipHorizontal(true) }
		else if(keystate[munch.ctrls.D]){ munch.player.flipHorizontal(false); }
	} else if(keystate[munch.ctrls.A]||keystate[munch.ctrls.D]){
		munch.player.setCurrentAnimation(munch.player.walk);
		if(keystate[munch.ctrls.A]){ munch.player.flipHorizontal(true) }
		else if(keystate[munch.ctrls.D]){ munch.player.flipHorizontal(false); }
	} 
	else if(keystate[munch.ctrls.S]){
		munch.player.setCurrentAnimation(munch.player.walkDown);
		munch.player.flipHorizontal(false)
	} 
	else{
		if(munch.player.flipHorizontal()){munch.player.flipHorizontal(true);}
		else { munch.player.flipHorizontal(false); }
		munch.player.setCurrentAnimation(munch.player.idle);
	}



	munch.player.loopFrames();
};






