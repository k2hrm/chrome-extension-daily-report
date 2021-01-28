window.onload = function() {
　　window.setTimeout(exec, 7*1000);
};

function exec(){
  var body = document.getElementsByClassName('stream-update__title');
  for(var i=0;i<body.length;i++){
    body[i].style.display = 'none';
  }
  var text = document.getElementsByClassName('stream-update__content-block');
  for(var i=0;i<text.length;i++){
    text[i].style.display = 'none';
  }
  var icon = document.getElementsByClassName('icon-button');
  for(var i=0;i<icon.length;i++){
    icon[i].style.display = 'none';
  }
  var wrap = document.getElementsByClassName('stream-update__wrap');
  for(var i=0;i<icon.length;i++){
    wrap[i].style.border = 'none';
  }
}