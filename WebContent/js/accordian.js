/**
 * @author Alex
 * @classDescription Accordian creator
 */
window.addEvent('domready', function(){

	var accordion = new Accordion('h2.atStart', 'div.atStart', {
		opacity: false,
		onActive: function(toggler, element){
			toggler.setStyle('color', '#ff3300');
		},
	 
		onBackground: function(toggler, element){
			toggler.setStyle('color', '#222');
		}
	});
});