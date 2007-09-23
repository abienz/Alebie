/**
 * @author Alexander Bienz
 * @classDescription Global functions
 */
window.addEvent('domready', function() {
  
  var toggler_headers = $$("h2 a");
  
  for(i=0;i<toggler_headers.length;i++){
    var current_link = toggler_headers[i]
      
    current_link.onclick = function() {
      this.blur();
      return false;
    }
  }
  
});