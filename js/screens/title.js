game.TitleScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	

		me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('title')), -10);		 
 
  
	},
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		 
	}
});
