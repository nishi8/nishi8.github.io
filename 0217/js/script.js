window.onload = function(){
  var zip = document.getElementById('zip');
  var btn = document.getElementById('find');
  var msg = document.getElementById('msg');

  btn.addEventListener('click',function(){
  //alert('hello');
  var req = new XMLHttpRequest();

  req.onload = function(){
    var json = JSON.parse(req.responseText);
    msg.innerHTML = json.data.fullAddress;
  }

  req.open('GET','http://api.zipaddress.net/?zipcode='+ zip.value, true);
  req.send();

  });

}
