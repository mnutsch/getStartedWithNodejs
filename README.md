## Getting Started: Javascript Backend with Node.js
#### By Matt Nutsch

[Watch the videos](https://cdnapisec.kaltura.com/html5/html5lib/v2.72/mwEmbedFrame.php/p/391241/uiconf_id/22119142?wid=0_l8r17y2w&iframeembed=true&playerId=kaltura_player_5c2538da15457&flashvars[playlistAPI.kpl0Id]=0_i5jnykgl&flashvars[playlistAPI.autoContinue]=true&flashvars[playlistAPI.autoInsert]=true&flashvars[ks]=&flashvars[localizationCode]=en&flashvars[imageDefaultDuration]=30&flashvars[leadWithHTML5]=true&flashvars[forceMobileHTML5]=true&flashvars[nextPrevBtn.plugin]=true&flashvars[sideBarContainer.plugin]=true&flashvars[sideBarContainer.position]=left&flashvars[sideBarContainer.clickToClose]=true&flashvars[chapters.plugin]=true&flashvars[chapters.layout]=vertical&flashvars[chapters.thumbnailRotator]=false&flashvars[streamSelector.plugin]=true&flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&flashvars[dualScreen.plugin]=true)

### A. Introduction to the Tutorial<br/>
  In this tutorial we will look at how to get started using Node.js for backend development. Backend development is the process of developing software that runs on a server, rather than on an internet browser. Node.js is a framework that was created to adapt the popular JavaScript language for backend purposes.<br/><br/>
  
### B. Install Visual Studio Code<br/>
  In order to begin programming, we should install an IDE, or Integrated Development Environment. An IDE is software application designed to make it easy to write software. My preferred IDE is Visual Studio Code. You may sometimes here this referred to as "VS Code". Note that "Visual Studio Code" is different from "Visual Studio". Visual Studio Code is easier to install and geared more towards web development. Let's install Visual Studio Code on your computer.<br/>
  <ol>
  <li>First open a web browser and navigate to: https://code.visualstudio.com/</li>
  <li>Click on the download link to begin downloading the application.</li>
  <li>After the download finishes, open the Downloads directory on your computer.</li>
  <li>Double click on the "Visual Studio Code" file that was downloaded.</li>
  <li>Click Open in the pop up dialog.</li>
  <li>Follow any additional prompts to finish installing Visual Studio Code on your computer.</li>
  <li>Once the installation completes, you will be able to find the Visual Studio Code application by searching for "Visual Studio" in the search box.</li>
  </ol><br/>
  
### C. Install Node.js<br/>
  In order to begin developing in Node.js, we need to have the Node.js runtime installed on our computer. Follow these steps to install Node.js.<br/>
  <ol>
  <li>First open a web browser and navigate to: https://nodejs.org/en/download/</li>
  <li>Click on the download link that is marked "Recommended For Most Users". This will start the download of the latest stable release of Node.js.</li>
  <li>After the download finishes, open the Downloads directory on your computer.</li>
  <li>Double click on the Node.js installation file. For me this file is named "node-v10.14.2-x64.msi".</li>
  <li>Click Next.</li>
  <li>Read and agree to the License.</li>
  <li>Keep the default installation path.</li>
  <li>If prompted, enter your user credentials to begin the installation.</li>
  <li>Once the installation is finished click Close.</li>
  <li>The installer will ask if you want to move the downloaded file to the Trash. Click Move to Trash to accept. This just helps clean up space in your Downloads folder.</li>
  <li>You can confirm that Node.js installed successfully by checking the current version number. To do this, open the Command Prompt application. Then type "node --version". My computer responds with "v10.14.1", which is the version that we just installed.</li>
  </ol><br/>
  
### D. Starting a Node.js Project<br/>
  We are going to start a new Node.js project. We will do this with Node Package Manager (npm). We 
  <ol>
  <li>Open Command Prompt.</li>
  <li>Create a new folder to store your project: "mkdir myProject"</li>
  <li>Enter the new folder: "cd myproject"</li>
  <li>Run "npm init".</li>
  <li>Enter a package name: "myproject"</li>
  <li>Enter a version: "1.0.0"</li>
  <li>Enter a description: "This is a sample Node.js project."</li>
  <li>Enter the entry point. "index.js"</li>
  <li>Leave the test command blank now.</li>
  <li>Leave the git repository blank for now.</li>
  <li>Leave keywords blank.</li>
  <li>Enter your name as author: "John Doe"</li>
  <li>Enter a license: "UNLICENSED"</li>
  <li>Review the settings that you input and then enter "yes".</li>
  <li>A package.json file has now been created. This tells Node Package Manager (npm) what node modules to install whenever the command "npm install" gets run.</li>
  </ol><br/>
  For more information about NPM package.json files, see: https://docs.npmjs.com/files/package.json.<br/>
  <br/><br/>
  
### E. Variables, Operations, and Objects<br/>
  In the previous section we learned how to start a new Node.js project using the NPM utility. In this section we will add our first javascript file to the project, learn about variables, learn about operations, and learn about objects.<br/>
  <ol>
  <li>Open Visual Studio Code by first searching for it and then clicking on the application's name.</li>
  <li>Once Visual Studio Code opens, open the project folder that we previously created. We do this first by clicking on File. Then we select Open Folder. Finally, we select the folder and click Open. The folder we created in the previous section was called "myProject".</li>
  <li>At this point we should only see a file called "package.json". To start coding, we need to first create a file called "index.js". Select "File" from the menu. Choose "New File". Then choose "File" from the menu again. This time choose "Save As" and name the file "index.js". Be sure to set the File Type as either "all files" or "Javascript".</li>
  <li>We now have an "index.js" file in the directory, but there is nothing in the file. Let's make the file do something. Add the following text to the first line of the file: 
  
  ```
  console.log('Hello world.');
  ```
  
  <li>This will output a string of text to the Command Prompt when the app runs.</li>
  <li>Now save the file by selecting "File" from the menu and then clicking "Save". </li>
  <li>Let's test it out. Open Command Prompt. Navigate to the "myProject" folder. Type "node index.js". You should see the text "Hello World" appear in Command Prompt.</li>
  <li>We may want to dynamically change what text appears. Lets add a line of code that defines a variable. A variable is something which stores information. In Visual Studio code add the following line of code to the top of the file (before the console.log): 
  
  ```
  var myAction = 'Finding the smallest distance:';
  ```
  
  </li>
  <li>Edit the console.log line of code. Delete the "'Hello World.'" text and replace it with "myAction". The code in Visual Studio should now look like the following: 
  
  ```
  var myAction = 'Finding the smallest distance:';
  console.log(myAction);
  ```
  
  <li>If you call "node index.js" in Command Prompt, then you should now see the following in Command Prompt: "Finding the smallest distance:"</li>
  <li>Information can be stored in different formats. Let's create an array. An array is a list of values. Lets pretend that this array stores the distances from our location to a list of places. In Visual Studio Code add the following line of code to the bottom of the index.js file: 
	  
```
  var distances = [33, 12, 520];
```

  </li>
  <li>We want to find which value in this array is the smallest. To do this we are going to iterate through the array and check if each value is the smallest. Add the following snippet of code to the bottom of the index.js file in Visual Studio Code:<br/>
  
  ```
var smallestDistance = 99999999999;  
distances.forEach((distance) => {
  if(distance < smallestDistance) {
    smallestDistance = distance;
  }
});
console.log(smallestDistance);
```

  The first line of that block defines a variable to store the smallest distance.<br/>
  The next line checks each value in the "distances" array and does something with that value, where the value is made available as "distance".<br/>
  The if statement checks if the current "distance" value from the array is less than what is stored in the variable "smallestDistance".<br/>
  If the "distance" value currently being looked at is less than the smallestDistance so far, then the value of smallestDistance is updated to use this new value.<br/>
  (On a quick side note, there are faster/more efficient ways of finding the smallest value in an array. We are keeping it simple here because this tutorial is focused on getting started with Node.js rather than data structures or algorithms.)</li>
  <li>The code in index.js should now look like the following:
	
```
var myAction = 'Finding the smallest distance:';
console.log(myAction);
var distances = [33, 12, 520];
var smallestDistance = 99999999999;  
distances.forEach((distance) => {
  if(distance < smallestDistance) {
    smallestDistance = distance;
  }
});
console.log(smallestDistance);
```

If you run the command "node index.js" in the Command Prompt, then the output should look as follows:
"Finding the smallest distance:
12"
  </li>
  <li>At this point, we have learned some basics of saving information to variables and using those variables. Let's now learn a little bit about objects. An object is like a collection of related variables.<br/>
  Let's create an object. Add the following snippet of code to the top of the index.js file using Visual Studio Code:
  
``` 
var myLocation = {}
myLocation.latitude = 32.75;
myLocation.longitude = -97.3326;
```

  <br/>
  That snippet of code creates an object called "myLocation". It adds two values stored in it: "latitude" and "longitude".</li>
  <li>If you add the following snippet of code, then the app will output the contents of myLocation when you run "node index.js" in Command Prompt.
  
  ```
  console.log('My Location is: ' + JSON.stringify(myLocation));
  ```
  
  Note: JSON.stringify() is a built in function of Javascript. It tells the processor that we want to see the contents of "myLocation" as a string. This data will be displayed in a format called JSON. We will learn more about JSON in a later section.</li>
  <li>It is also possible to declare an array of objects. Add the following snippet of code before the "myLocation" snippet to create an array of objects:
  
  ```
  var placesList = []; // declare the array
  var tempObject = {}; // create an empty object
  tempObject.name = 'Plano, TX, USA'; // add a "name" to the object
  tempObject.latitude = '33.020810'; // add a "latitude" to the object
  tempObject.longitude = '-96.698387'; // add a "longitude" to the object
  placesList.push(tempObject); // add the object to the array
  tempObject = {}; // empty the object, so that we can reuse it
  tempObject.name = 'Dallas, TX, USA';
  tempObject.latitude = '32.776120';
  tempObject.longitude = '-96.797440';
  placesList.push(tempObject);
  tempObject = {};
  tempObject.name = 'Fort Worth, TX, USA';
  tempObject.latitude = '32.757330';
  tempObject.longitude = '-97.331510';
  placesList.push(tempObject);
  ```
  
  That snippet of code created an array of objects. The array was named "placesList". It has three objects stored in it. Each of those objects contains three values: "name", "latitude" and "longitude".</li>
  <li>If you add the following snippet of code, then the app will output the contents of the array "placesList" when you run the command "node index.js" from the Command Prompt.
  
  ```
  console.log('List of places is: ' + JSON.stringify(placesList));
  ```
  
  </li>
  <li>The code in your index.js file should look like the following:
	
```
var myLocation = {}
myLocation.latitude = 32.75;
myLocation.longitude = -97.3326;
console.log('My Location is: ' + JSON.stringify(myLocation));

var placesList = []; // declare the array
var tempObject = {}; // create an empty object
tempObject.name = 'Plano, TX, USA'; // add a "name" to the object
tempObject.latitude = '33.020810'; // add a "latitude" to the object
tempObject.longitude = '-96.698387'; // add a "longitude" to the object
placesList.push(tempObject); // add the object to the array
tempObject = {}; // empty the object, so that we can reuse it
tempObject.name = 'Dallas, TX, USA';
tempObject.latitude = '32.776120';
tempObject.longitude = '-96.797440';
placesList.push(tempObject);
tempObject = {};
tempObject.name = 'Fort Worth, TX, USA';
tempObject.latitude = '32.757330';
tempObject.longitude = '-97.331510';
placesList.push(tempObject);
console.log('List of places is: ' + JSON.stringify(placesList));

var myAction = 'Finding the smallest distance:';
console.log(myAction);
var distances = [33, 12, 520];
var smallestDistance = 99999999999;  
distances.forEach((distance) => {
  if(distance < smallestDistance) {
    smallestDistance = distance;
  }
});
console.log(smallestDistance);
```

  </li>
  </ol>
  In this section we learned how to declare a variable, declare an array of variables, create an object, and how to create an array of objects. We also learned how to iterate through an array and do a basic operation with an if statement. There is a lot more to learn about variables, objects, and operations. In the next section we will introduction functions to our code.<br/><br/> 
  
  For more in depth information about these topics check the Mozilla Foundation's developer reference guide for Javascript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference<br/><br/>
  
### F. Node Modules and Using Functions<br/>
  In the previous section we learned about variables, objects, and operations. In this section we will learn how to install Node modules. Node modules make it easy to add functionality to our application. In this section we will also learn how to use functions. Functions make it easier to write complicated code.<br/>
  <ol>
  <li>Let's add a module to our application. We might for example want to find the distance between two sets of coordinates. Due to the unique way the Earth is shaped and differences between latitude and longitude this calculation could be complicated. Luckily somebody else has already published a Node module which will find the distance between two sets of coordinates. Let's install the Node module "turf". Open the Command Prompt and type the following in the project directory:
	  
```
npm install @turf/turf
```
	
  </li>
  <li>This command installed a Node module called "turf". If you look at the package.json file, you will notice that module is now listed in it. You will also notice that there is now a folder called "node_modules". In the "node_modules" folder, there is a sub-folder with the turf code.
	Note - See the following URL for more information about this particular Node module: https://www.npmjs.com/package/@turf/turf</li>
	<li>To use a module, we have to declare a variable which instantiates the module. Add the following code to the top of the index.js file:
	
```
var turf = require('@turf/turf');
```
	
  This loads the turf code using the name "turf".
  </li>
  <li>The documentation for the turf library shows us examples of how to use it. The following code is an example of how to calculate the distance between two cities using the turf module:
	
```
var Dallas = turf.point([32.776120, -96.797440]);
var FortWorth = turf.point([32.757330, -97.331510]);
var options = {units: 'miles'};
var distance = turf.distance(Dallas, FortWorth, options);
console.log('distance == ' + distance);
```
	
  </li>

  <li>We want to iterate through the array of objects and check the distance from the our location to each of the locations.<br/>
  Add the following code to the index.js file using Visual Studio Code:
	
```
var options = {units: 'miles'};
var myLocationCoordinates = turf.point([myLocation.latitude, myLocation.longitude]);
placesArray.forEach((place) => {
var placeEvaluated = turf.point([place.latitude, place.longitude]);
var distance = turf.distance(myLocationCoordinates, placeEvaluated, options);
console.log('The distance from my location to ' + place.name + ' is ' + distance + ' miles.');
});
```

  </li>
  <li>If you now call run "node index.js" from Command Prompt, then the app will output the following:

```
The distance from my location to Plano, TX, USA is 43.87937708987967 miles.
The distance from my location to Dallas, TX, USA is 36.97669973078005 miles.
The distance from my location to Fort Worth, TX, USA is 0.09924395395960382 miles.
```

  </li>
  <li>It's great that the app tells us the distance to each location. However, we want to find the closest location. Let's combine our early code to find the shortest distance, with the code that calculates the distance for each location:

```
var smallestDistance = 99999999999;  
var closestLocation = "";
var options = {units: 'miles'};
var myLocationCoordinates = turf.point([myLocation.latitude, myLocation.longitude]);
placesArray.forEach((place) => {
  var placeEvaluated = turf.point([place.latitude, place.longitude]);
  var distance = turf.distance(myLocationCoordinates, placeEvaluated, options);
  console.log('The distance from my location to ' + place.name + ' is ' + distance + ' miles.');
  if(distance < smallestDistance) {
    smallestDistance = distance;
    closestLocation = place.name;
  }
});
console.log('The closest location is ' + closestLocation + ' at ' + smallestDistance + ' miles away.');
```

</li>
  <li>Let's introduce functions. A function is a block of code which can be called from a single line of code. A function accepts some information as inputs, called parameters. A function will do something with those inputs and then output something else, called the return value.</li>
  <li>Some functions are built into JavaScript. An example of a built in function is "Math.round()". If you put a number inside the parentheses, then the function will return the rounded value of the parameter. The number of miles shown in our distance results show lots of decimal places. Let's round the values, so that they are easier to read. Modify the previous code block to look like the following:
	
```
var smallestDistance = 99999999999;  
var closestLocation = "";
var options = {units: 'miles'};
var myLocationCoordinates = turf.point([myLocation.latitude, myLocation.longitude]);
placesArray.forEach((place) => {
  var placeEvaluated = turf.point([place.latitude, place.longitude]);
  var distance = turf.distance(myLocationCoordinates, placeEvaluated, options);
  console.log('The distance from my location to ' + place.name + ' is ' + Math.round(distance) + ' miles.');
  if(distance < smallestDistance) {
    smallestDistance = distance;
    closestLocation = place.name;
  }
});
console.log('The closest location is ' + closestLocation + ' at ' + Math.round(smallestDistance) + ' miles away.');
```

</li>
  <li>Run the app from Command Prompt by calling "node index.js". The output should now look like the following:

```
The distance from my location to Plano, TX, USA is 44 miles.
The distance from my location to Dallas, TX, USA is 37 miles.
The distance from my location to Fort Worth, TX, USA is 0 miles.
The closest location is Fort Worth, TX, USA at 0 miles away.
```

</li>
  <li>This looks better, but it doesn't look quite right for a distance to show up as 0 miles. It would be better if we could round the value to two digits. One way that we might do round to two digits is to: multiply a value by 100, round it, and then divide it by 100. The way that this might look is instead of writing "Math.round(distance)", we might write "(Math.round((distance * 100))) / 100". That looks complicated though. Something we can do is write our own function to simplify the code. Add the following code to create a custom function:

```
const roundTwoDecimals = function(inputValue) {
  return (Math.round((inputValue * 100))) / 100;
}
```

</li>
  <li>The code we added created a new function named "roundTwoDecimals". We can now use our new function to easily round the values to two decimal places. Replace "Math.round()" with "roundTwoDecimals()". The code block should now look like the following:

```
var smallestDistance = 99999999999;  
var closestLocation = "";
var options = {units: 'miles'};
var myLocationCoordinates = turf.point([myLocation.latitude, myLocation.longitude]);
placesArray.forEach((place) => {
  var placeEvaluated = turf.point([place.latitude, place.longitude]);
  var distance = turf.distance(myLocationCoordinates, placeEvaluated, options);
  console.log('The distance from my location to ' + place.name + ' is ' + roundTwoDecimals(distance) + ' miles.');
  if(distance < smallestDistance) {
    smallestDistance = distance;
    closestLocation = place.name;
  }
});
console.log('The closest location is ' + closestLocation + ' at ' + roundTwoDecimals(smallestDistance) + ' miles away.');
```

</li>
  <li>If we run the app from Command Prompt by calling "node index.js", then we will see output rounded to two decimal places. It should look like the following:

```
The distance from my location to Plano, TX, USA is 43.88 miles.
The distance from my location to Dallas, TX, USA is 36.98 miles.
The distance from my location to Fort Worth, TX, USA is 0.1 miles.
The closest location is Fort Worth, TX, USA at 0.1 miles away.
```

</li>
  <li>Finally, let's wrap all of this code into a new function. That way it is easy to call and reuse. 
	
```
const findClosest = function(placesArray) {
  var smallestDistance = 99999999999;  
  var closestLocation = "";
  var options = {units: 'miles'};
  var myLocationCoordinates = turf.point([myLocation.latitude, myLocation.longitude]);
  placesArray.forEach((place) => {
    var placeEvaluated = turf.point([place.latitude, place.longitude]);
    var distance = turf.distance(myLocationCoordinates, placeEvaluated, options);
    console.log('The distance from my location to ' + place.name + ' is ' + roundTwoDecimals(distance) + ' miles.');
    if(distance < smallestDistance) {
      smallestDistance = distance;
      closestLocation = place.name;
    }
  });
  console.log('The closest location is ' + closestLocation + ' at ' + roundTwoDecimals(smallestDistance) + ' miles away.');
  return closestLocation;
}

findClosest(placesList); // This is where we call the function.
```
	
  </li>
  <li>In our function we used return to send a value back. This is the most basic and common method for returning data from a function. In Node.js there are several different ways to return information. These methods include using callbacks and promises. Each method is best for certain situations and includes unique syntax. We will learn more about callbacks and promises in a later section.</li>
  </ol>
  In this section we learned how to include Node modules. We also learned how to create and use our own functions.<br/><br/>

### G. Intro to JSON<br/>
  JSON is a format for organizing information. In this section we will learn about JSON by creating a file containing a JSON object.<br/>
  <ol>
  <li>Using Visual Studio Code, create a new file called "coordinates.json".</li>
  <li>Start Visual Studio Code from the search box.</li>
  <li>Select "File".</li>
  <li>Choose "New File".</li>
  <li>Copy and paste the following JSON into the new file:<br/>
  {
	"coordinates": [{
			"name": "Sundance Square",
			"latitude": 32.753970,
			"longitude": -97.332490
		},
		{
			"name": "Watergardens",
			"latitude": 32.758490,
			"longitude": -97.332860
		},
		{
			"name": "Fort Worth Convention Center",
			"latitude": 32.749950,
			"longitude": -97.328080
		}]
}</li>
  <li>Select "File".</li>
  <li>Choose "Save As".</li>
  <li>Select the "myProject" folder.</li>
  <li>Create and then select a folder called "JSON".</li>
  <li>Name the file "coordinates.json".</li>
  <li>Click "Save".</li>
  </ol>
  We've now created a file called coordinates.json. That file also contains a JSON object called "coordinates". The "coordinates" object is an array of three other objects. Each of the three objects has a name, a latitude, and a longitude. In a later section we will learn how to read and use the contents of this file.<br/>
  Note: For more information about JSON see: https://www.json.org/<br/>
  Note: You can test the layout of JSON using an online tool like JSONLine: https://jsonlint.com/<br/><br/>
  
### H. Read Data From a File<br/>
  See the following for an example: https://stackoverflow.com/questions/10058814/get-data-from-fs-readfile<br/>
  In the previous section we created a file containing information in JSON format. In this section we will learn how to read that file and use it in our code.<br/>
  <ol>
  <li>In order to read files, we are going to use the "fs" module of Node. This module does not need to be installed, because it comes with all Node installations. Add the following line to the top of the file:
	  
	```
	var fs = require('fs');
	```
	
  </li>
  <li>To read the contents of a file we are going to use the function fs.readFile(). This function returns data differently than the previous functions we looked at. This function uses a callback. A function with a callback has an extra parameter, called a callback, in the function definition. When calling this type of function, we do not send a value for the callback parameter. When using a callback function, we can call the callback parameter as if it is a fuction. Using the callback function as if it is a function ends the function. This is useful for when code needs to wait for something to finish (like reading the contents of a file).</li>
  <li>When calling a callback function it's also possible to add an anonymous function where the callback parameter would otherwise go. When the callback function finishes, the anonymous function will run.</li>
  <li>The way that we use FS to read a file is to call the callback fuction "fs.readFile()". We are going to add an anonymous function that will run after the file is read. Add the following segment of code:

```
fs.readFile('coordinates.json', function (err, data) {
  if (err) throw err;
  console.log(data);
});
```
</li>
  <li>If you open Command Prompt and run "node index.js", then the app will output a something like the following: 

```
<Buffer 7b 0d 0a 09 22 63 6f 6f 72 64 69 6e 61 74 65 73 22 3a 20 5b 7b 0d 0a 09 09 09 22 6e 61 6d 65 22 3a 20 22 53 75 6e 64 61 6e 63 65 20 53 71 75 61 72 65 ... >
```
This is the file data in a buffer format. We want it in a JSON format, so that we can use it. Wrap the "data" value from console.log in JSON.parse(). This will convert the file contents into JSON. The function to read the file should now look like the following:

```
fs.readFile('coordinates.json', function (err, data) {
  if (err) throw err;
  console.log(JSON.parse(data));
});
```
</li>
  <li>When we read a file, we probably want to do something with it. So far in this example, we simply logged the contents of the file to the console. However, what we really want to do is pass the contents of that file to the findClosest() function that we created in an earlier section. Replace the "console.log()" with "findClosest()". We have to also add a ".coordinates" to our parameter, because the array from the file is stored inside an object called "coordinates". Your code should now look like the following:

  ```
  fs.readFile('coordinates.json', function (err, data) {
    if (err) throw err;
    findClosest(JSON.parse(data).coordinates);
  });
  ```
  </li>
  <li>If you open Command Prompt and run "node index.js", then you should see the following output:

  ```
  My Location is: {"latitude":32.75,"longitude":-97.3326}
  The distance from my location to Sundance Square is 0.04 miles.
  The distance from my location to Watergardens is 0.08 miles.
  The distance from my location to Fort Worth Convention Center is 0.31 miles.
  The closest location is Sundance Square at 0.04 miles away.
  ```
  Our code read the list of possible locations from the coordinates.json file. It then evaluated each location and determined which location is the closest. 
  </li>
  </ol>
  In this section we learned how to use functions with callbacks. We also learned how to read the contents of a file.<br/><br/>
  
### I. Summary<br/>
  In this tutorial we went over a basic introduction to using Node.js for backend development. We learned that backend development is the process of developing software that runs on a server, rather than on an internet browser. We went through the processes of installing Visual Studio Code (an IDE) and installing Node.js. We learned how to start a Node.js project. We learned a little bit about variables, operations, and objects. In the tutorial we introduced installing Node modules, calling functions, creating functions, and the syntax of JSON. Finally, we learned how to read the contents of a file and use a function with a callback. I hope that you enjoyed learning about Node.js.
<br/><br/><br/>
For more tutorials like this, visit: https://www.mattnutsch.com/#tutorials
<br/><br/>
Copyright &copy; 2018-2019 Matt Nutsch 
