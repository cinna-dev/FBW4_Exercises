const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];

////////////////////////  Sort Books  ///////////////////////////
books.sort(function(a,b){
  a = a.author.toLowerCase();
  b = b.author.toLowerCase();
  if (a < b) {return -1;}
  if (a > b) {return 1;}
  return 0
})  

console.table(books)
////////////////////////    Book List Style //////////////////
const bookList = document.getElementsByClassName('book-list')[0];
  bookList.style.listStyleType = 'none';

for(i=0;i<books.length;i++){
  ////////////////////////  Authors Naming  //////////////////////
  let naming = books[i].author.split(' ');
  naming = [naming[naming.length-1],naming[0]].toString().replace(',',' '),
  console.log(naming);

  /////////////////////////  Append  //////////////////////////
  bookList.innerHTML += `<li class='book'><img class='book-cover' src='${books[i].img}' ></img><br><div style=font-size:20px; >${books[i].title}</div><br><div style=color:grey>${naming}</div><br><div><span class='badge badge-secondary status'>To Read</span></div></li>`

  //////////////////////  Badge  ////////////////////////////
  if(books[i].alreadyRead){
  const badge = document.getElementsByClassName('badge')[i]
  badge.className = 'badge badge-success status';
  badge.innerText = 'Read';
  } 
}
