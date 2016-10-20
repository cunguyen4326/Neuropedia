
        var x = 1;
       document.onpaste = function (event) {
         
  // use event.originalEvent.clipboard for newer chrome versions
  var items = (event.clipboardData  || event.originalEvent.clipboardData).items;
  console.log(JSON.stringify(items)); // will give you the mime types
  // find pasted image among pasted items
  var blob = null;
  for (var i = 0; i < items.length; i++) {
    if (items[i].type.indexOf("image") === 0) {
      blob = items[i].getAsFile();
    }
  }
  // load image if there is a pasted image
  if (blob !== null) {
    var reader = new FileReader();
    reader.onload = function(event) {
      console.log(event.target.result); // data url!
       
        document.getElementById("image" + x).style.backgroundImage = "url(" + event.target.result + ")";
   x++;
    
    };
    reader.readAsDataURL(blob);
  }
}
    
    
  