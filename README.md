<h2> How to run </h2>

After extracting from zip file or cloning the repo, navigate the project folder with command lines 
 
    // method 1: running from zip 
    cd Desktop // unless you put it somewhere else
    cd puppy-app // this might be called something different so 
    npm install 
    npm start
    
    // method 2: cloning to IDE (open a new integrated terminal in the IDE and it will automatically path to this project)
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
        
 **Challenge #3:** conflicts between react-styling, styled-components, css stylesheets
<p> aside from learning quite a lot about styling, javascript box models, and layouts. I learned about styling conflicts... which are going to be invisible and frustrating if you haven't added color swatches. This debug was only possible as I learned more and more about css styling conventions. </p>

<h3> Areas of strength </h3> 

**Strength #1:** Manipulating / iterating over lists
<p> Parsing the json data from fetch api, manipulating them so React components can be built with them(see Challenge# 1), and finally mapping an array into another json object for download. There was a lot of mistakes that could be made while going through these iterations but I was able to overcome these challenges by breaking up the reordering process into multiple helper functions, console.logging the results, and making sure I 'copied' data before mutating them. </p>

    // API gave names in keys
    {"message":
       {"affenpinscher":[],
        "african":[],
        "airedale":[],
        ...}}
        
     // i parsed the data into this for easier access and manipulation
     state = {
           loading: true, 
           list1: [...],
           list2: [ {id: 1, name: "affenpinscher"},
                    {id: 2, name: "african"},
                    ...]};
                    
      // and reordering to this form everytime 'save' is pressed, required multiple map functions
      “dogBreeds”: {
         “breed1Total”: {this.state.list1.length}
         “breed2Total”: {this.state.list2.length},
         “breed1Rank”: { 
               “rank1”: {...
     

