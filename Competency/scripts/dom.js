 console.dir(document);
 console.log(document.domain);
 console.log(document.URL);
 console.log(document.title);
 console.log(document.doctype);
 console.log(document.head);
 console.log(document.body);
 console.log(document.all);
 console.log(document.all[10]);
 console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

 

 var items = document.getElementsByClassName('list-group-item');
 console.log(items);
 console.log(items[1]);



 for(var i = 0; i < items.length; i++){
   items[i].style.backgroundColor = '#f4f4f4';
 }

  
 var li = document.getElementsByTagName('li');
 console.log(li);
 console.log(li[1]);

 for(var i = 0; i < li.length; i++){
   li[i].style.backgroundColor = '#f4f4f4';
 }
 
 var header = document.querySelector('#main-header');

 var odd = document.querySelectorAll('li:nth-child(odd)');
 var even= document.querySelectorAll('li:nth-child(even)');

 for(var i = 0; i < odd.length; i++){
   odd[i].style.backgroundColor = '#f4f4f4';
  
 }

