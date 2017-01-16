$('#sidebar').affix({
      offset: {
        top: $('#viz').height() + 300
      }
});

var $body   = $(document.body);
var navHeight = 80;

$body.scrollspy({
	target: '#leftCol',
	offset: navHeight
});
