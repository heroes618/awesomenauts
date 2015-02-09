game.PlayScreen = me.ScreenObject.extend({
	/**
	 *  action to perform on state change
	 */
	onResetEvent: function() {
		me.audio.playTrack("one");
		// reset the score
		game.data.score = 0;

		me.levelDirector.loadLevel("level01"); // this code here loads up our tile set up.

		var player = me.pool.pull("player" , 0, 420, {});
		me.game.world.addChild(player, 5);

		var gamemanager = me.pool.pull("GameManger", 0, 0, {});
		me.game.world.addChild(gamemanager, 0);

		me.input.bindKey (me.input.KEY.RIGHT, "right");
		me.input.bindKey(me.input.KEY.S, "attack");
		me.input.bindKey(me.input.KEY.LEFT, "left");
		me.input.bindKey(me.input.KEY.SPACE, "jump");


		
		// add our HUD to the game world
		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
	},


	/**
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		me.audio.stopTrack();
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);
	}
});
 