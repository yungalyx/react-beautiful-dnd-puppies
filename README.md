<h2> How to run </h2>

After extracting from zip file or cloning the repo, navigate the project folder with command lines 
 
    cd Desktop
    cd puppy-app
    npm install 
    npm start

it will take a little while(~30sec) to build. (node and their dependecies, not me!)

<h3> Challenges I ran into and how I fixed them </h3>

**Challenge #1**: Redefining data structure
<p> When I made the fetch call from the API, I had initially stored the data (dog breeds) into an array. This made the most sense as I could rank the breed based on index, however, this lead to additional problems when I needed to reorder breeds in the list with beautiful-react-dnd. One of the challnges was persisting an ID for each <Draggable> element that doesn't change... as the lists rerender everytime we move breeds around, this meant we also set new ids for each breed on the array. Redefining my data structure into an array of objects allowed me to maintain a unique ID. </p>
    
    originalArray = ['borzoi', 'cockapoo', 'poodle', 'bullterrier' ...];

    revisedArray = [
      0: {id: 1, name: "borzoi "}
      1: {id: 2, name: "cockapoo "}
      2: {id: 3, name: "poodle "}
      3: {id: 4, name: "bullterrier "}
      ...];

**Challenge #2**: Not allowed to pass key as props
 <p> react.js doesn't actually allow passing of props designated as keys, which became a big issue when I keep trying to access key values for Draggable's unique id. (Thought I would be killling two birds with one stone by only needing to pass a single prop) this issue was solved by passing an additional prop labeled as something else. I know this sounds like an easy fix, but I literally couldn't figure out what the issue was for a few hours. 
 </p>
 
        <ComponentA id={val.id} name={val.name} key={index} />   // accessing key as a prop would return NaN, which didn't TRIGGER any ERROrs or warnings.
        
        <ComponentA id={val.id} name={val.name} key={index} useableprop={index} />   // instead of accessing key, i can access useableprop.
        
 **Challenge #3:** conflicts between react-styling, styled-components, css stylesheets:
<p> aside from learning quite a lot about styling, javascript box models, and layouts. I learned about styling conflicts... which are going to be invisable and frustrating if you haven't added color swatches. This debug was only possible as I learned more and more about css styling conventions. </p>
