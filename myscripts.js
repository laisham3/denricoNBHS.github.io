var i = 0;
var images =['https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/1200px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg','https://az616578.vo.msecnd.net/files/2016/04/02/635952199123766174883211376_maxresdefault.jpg','https://i.pinimg.com/736x/80/ab/3c/80ab3c4f3408140fa33a7eb5b5c7c34f--graduation-makeup-for-brown-eyes-prom-makeup-for-brown-eyes-gold.jpg','http://cjonline.com/sites/default/files/styles/slideshow__640x360/public/images/3965946_web1_top_new090817_Sephora4.jpg?itok=euBIve4B','https://i.pinimg.com/originals/3d/55/7c/3d557c66fdc9d8e125a7e61a4095d7b2.jpg','https://static.vecteezy.com/system/resources/thumbnails/000/031/144/original/modern-music-notes-vector-pack.jpg']
$("#slideshow img").attr("src", images[0]);
$("#next").click(function(){
  i = (i+1) % images.length;
  $("#slideshow img").attr("src", images[i]);
})
$("#prev").click(function (){
  i = (i+2) % images.length;
  $("#slideshow img").attr("src", images[i])
})
