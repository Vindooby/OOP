function photo (filePath,location,name){
  this.filePath = filePath;
  this.location= location;
  }
function Album(){
  this.photo= [];
}

album.prototype.addPic = function(photo){
  this.photos.push(photo)
}

var newPhoto= new photo("London.png","London","castle")
var newPic= new photo ("Boston.png","Providence.png")
var newPic1= new photo ("Dallas.png","LosAngeles.png")



photo.prototype.pic= function(){
  return "This photos name is: +" + this.name
  // return "This photo was taken in" + this.location
  // return "The File Path is" + this.filePath

}

var album = new Album ()
album.addPic (newPhoto)
console.log(album)
