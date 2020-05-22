<h2> How to run </h2>

After extracting from zip file or cloning the repo, navigate the project folder with command lines 
 
    cd Desktop
    cd puppy-app
    npm install 
    npm start

it will take a little while(~30sec) to build. (node and their dependecies, not me!)

<h4> Challenges I ran into and how I fixed them </h4>

Challenge #1: Redefining data structure
<p> When I made the fetch call from the API, I had initially stored the data (dog breeds) into an array. This made the most sense as I could rank the breed based on index, however, this lead to additional problems when I needed to reorder breeds in the list with beautiful-react-dnd. One of the challnges was persisting an ID for each <Draggable> element that doesn't change... as the lists rerender everytime we move breeds around, this meant we also set new ids for each breed on the array.</p>
    
    originalArray = ['borzoi', 'cockapoo', 'poodle', 'bullterrier' ...];

    
    revisedArray = [
      0: {id: 1, name: "borzoi "}
      1: {id: 2, name: "cockapoo "}
      2: {id: 3, name: "poodle "}
      3: {id: 4, name: "bullterrier "}
      ...];




 </p>
