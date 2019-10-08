  import { render } from './renderer.js';
  import * as bikes from './bikes.json';


  function getThingTemplate(thing){
    return `<li>Name: ${thing.name}</li> <p>colour: ${thing.colour} - cleanliness: ${thing.cleanliness}</p>`
  }

  function sortMyStuff(first, second){
    if(first.rating > second.rating ){
    return -1;
  }
    else if(first.rating < second.rating) {
      return 1;
    }
    else {
      return 0;
    }
  }

  const things = bikes.results.sort(sortMyStuff);
  let content = `<ul>`

  for(let i=0; i<things.length; i += 1){
    console.log(things[i]);
    content += getThingTemplate(things[i]);
  }
  content += `</ul>`;

  render(content);
