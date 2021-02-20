/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html.  You are not allowed to simply set the innerHTML of the <div> to the entire html document. 
*/
  

const injectDiv = document.querySelector('#inject');
const center = document.createElement('center');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const hr = document.createElement('hr');
const p = document.createElement('p');
const ol = document.createElement('ol');
const hr2 = document.createElement('hr2');
const p2 = document.createElement('p2');
const h1b = document.createElement('h1b');
const p3 = document.createElement('p3');


injectDiv.appendChild(center); 

center.appendChild(h1);
center.appendChild(h2);
injectDiv.appendChild(hr);
injectDiv.appendChild(p);
injectDiv.appendChild(ol);
injectDiv.appendChild(hr2);
injectDiv.appendChild(p2);
injectDiv.appendChild(h1b);
injectDiv.appendChild(p3);


h1.innerHTML = '<i>HTML Practice Exercise TEKcamp.</i>';
h2.innerHTML = '<a href="">TEKsystems "TEKcamp"</a>';
p.innerHTML = 'I love <i>HTML</i> for the following reasons:';
ol.innerHTML = '<li>I learned it quickly.</li><li>I can make web pages using </li><li> It’s fun.</li>';
p2.innerHTML = 'My instructor’s email address is: <a href="mailto:ayunas@teksystems.com">ayunas@teksystems.com</a>.';
h1b.innerHTML = 'Have a great day!';
p3.innerHTML = 'I really look forward to learning how to code!  Have a great day.  -[Team "Git\'er Done"]';
