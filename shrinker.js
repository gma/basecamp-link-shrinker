(function () {
  var containers = document.getElementsByClassName('formatted_text_body');
  for (var i = containers.length - 1; i >= 0; i--) {
    links = containers[i].getElementsByTagName('a');
    for (var j = links.length - 1; j >= 0; j--) {
      var link_text = links[j].firstChild.nodeValue;
      if (link_text.length > 60) {
        if (! links[j].title) {
          links[j].title = link_text;
        }
        links[j].firstChild.nodeValue = link_text.slice(0, 60) + '\u2026';
      }
    };
  };
})();
