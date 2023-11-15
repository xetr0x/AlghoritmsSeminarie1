"use strict"
import fs from 'fs';
import readline from 'readline';

console.log("module alive!");

export function collectNum(){
   
    const OrgArray = [];


    const fileName = 'C:/alghoritms/AlghoritmsSeminarie1/randomNumbers.txt';
    const fileStream = fs.createReadStream(fileName);

    const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity, 
  });
  
  
  rl.on('line', (line) => {
    OrgArray.push(line);
  });
  
  rl.on('close', () => {
    console.log('Lines:', OrgArray);

  });
}



//Alghoritms: quicksort both recursive and iterative, 
    //median-of-three pivot, 
    //random pivot, pivot = array[0], 
    //insertionSort(...).  
    // running alghoritms is gonna be easy but analysising is the hard part
    // using recursion and iterations 
    // keep it simple, first general, then specific. Data should answer the research question. Text, Tables, Graphics. 
    // The random numbers will be obtained from randomNumbers.txt
    // Write a report on all this shit (like 20 pages goddamn)
    // 
    //ex on iteration 
    // x = 1
    // while () {
        
    // }


    // ex on recursion: 

    //function recurse(){
    //     recurse()
    // }
    // recurse()


    // TODO: 
    //TODO: Create alghoritms and run the computations
    //TODO: then do analysis
    //Make a menu, using html, css and javascript.PS. MAKE JAVASCRIPT SCRIPT GENERATING THE HTML PAGE.
    //TODO: Menu where you can click on one of the alghoritms and its doing the alghoritm,
    //Prints time taken etc. etc.
    // TODO: MAke menu in illustrator (2h MAX)
    // TODO:  




    //-----------------------------------NOTES-----------------------------------------------------

    //make graphs that require minimum efford from reader
    // Don't put to many aternatives on a single chart. (MAx 5 to 7 alternatives.)
    // non-zeo origins, Three quarter high-rule height/width
    // DOn't use broken scales in column charts. 

    //How to anylyse results_
     // Average case: O(NlogN)
     // Worst case: O(N^2)

     //MEthods with calculations from the table:
     // Input increases 10 times


     //Make a big diagram with all of the alghoritms seeing their time as a graf, and their relation to each other. 
     // You can design it in illustrator. 
     // On seminar you will talk about results, which is better one and why (CAuses: Computer, programming language, etc.)
     // Example of a graf on canvas. 
     // Converting input data to graf in kalkyl. Watch video. See if you can do it in illustrator. 

// var win = window.open() // make so it starts a website. 
