# Welcome to Bug Wrangler Ranch

This first self-assessment is for you to hone several Core Skills that you need as a software developer.

Taking your time now to be thorough, reflective, patient and curious will give you the foundation to be successful throughout the rest of this course and your career.

If you rush this, or think of it as a test to be "passed", then you will already be on the wrong path.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Description

Slim Jenkins offers a vacation package for people who have always wanted to join a cattle driving team across the American Midwest.

He calls it the **Kansas Slim's Cattle Adventure**.

People join a team of experienced drovers who will train them in the basics of herding cattle and driving them across hundreds of miles to their destination at Old Red's Ranch.

Unfortunately, someone gained access to the code that produces an outline of the adventure to the paying customers, so Slim has hired you to examine and fix the code.

## Learning Objectives

Here are your learning objectives for this self-assessment.

1. Able to use the debugger to step through existing code to discover root causes of bugs.
2. Drawing a sequence diagram for a project.
   > Use the [sequencediagram.org](https://sequencediagram.org/) site to generate your sequence diagram. Make sure you save your work as you go.
3. Demonstrate learning efficiency by researching concepts you haven't seen before using your peers, mentors, and the World Wide Web as resources.
4. Awareness of when you need help, and then seeking it out.

## Example Output

If you are able to fix all of the bugs, you will output similar to what is below. It will not be identical, but similar.

```sh
************************************************
**  K A N S A S   S L I M ' S   C A T T L E   **
************************************************

\|/         (__)
     '------(oo)
       ||   (__)               \|/
       ||w--||     \|/
   \|/
            \|/                     (__)
                             '------(oo)
                               ||   (__)
                               ||w--||     \|/

You will be accompanying 5 drovers as they drive 50 cattle to Old Red's Ranch for grazing

The herd is made of up the following types of cattle:
Ankole-Watusi,Brown Swiss,Brown Swiss,American Angus,Brown Swiss,
Ankina,American Angus,Ankina,Brown Swiss,Ankole-Watusi,Brown Swiss,
Brown Swiss,American Angus,Ankina,Ankole-Watusi,Brown Swiss,Brown Swiss,
Ankina,Brown Swiss,Ankina,Ankole-Watusi,Brown Swiss,Brown Swiss,
Ankole-Watusi,American Angus,Brown Swiss,American Angus,Ankole-Watusi,
Ankole-Watusi,American Angus,Ankina,Ankina,Ankina,Ankole-Watusi,
American Angus,Brown Swiss,American Angus,Brown Swiss,American Angus,
American Angus,Ankina,Brown Swiss,American Angus,Ankina,Brown Swiss,
American Angus,Ankole-Watusi,Ankina,American Angus,Brown Swiss

Here is the team of drovers you will be joining
        * Melvyn Hethron
        * Yancy Gresley
        * Willabella Attarge
        * Ynes Gyenes
        * Farlie Spere


Your journey will take you through the wildness of the American Midwest and across the following terrain
        * forest
        * plain
        * river
        * mountain
```

1. In the **main** module, one of the first lines of code is `const drovers = hireDrovers(cattleToDrive)`. Explain what the value of the `drovers` variable is when that line of code runs.
   > When the drovers variable is declared, we are using the Callback feature of Javascript as it allows us to call the hireDrovers function with a variable of cattleToDrive.  This is a much cleaner way to call complex code to the output page as opposed to having lines and lines of code that are accomplishing a whole host of calculations in the background.  In this case when the cattleToDrive variable is fed into the hireDrovers function, we end up with a calculation for how many drovers are needed which then ultimately feeds into a loop to figure out who the drovers are, and then the drovers are returned within the scope of the function.  That whole process then feeds back into the main.js tab and ultimately ends up feeding the "team of drovers" who will be joining the trip.

2. At the bottom of the main module, you will see the following code - `for (const drover of drovers)`. Explain what the values of both the `drover` and the `drovers` variables are.
   > Both drover and drovers are key parameters of this for loop.   the drover piece is simply a variable declaration that is telling javascript that we have to cycle through the drovers database to output the first name and the last name of some number of drovers.  the total number of drovers are determined on the drovers tab that utilizes the cattleToDrive variable and the numberneeded calculation.  Once the numberneeded calculation is complete, the for loop on the drovers tab counts up to the numberneeded value and assigns that amount of drovers to be sent back to the main.js tab.  Each iteration of the main.js tab will return a different set of drovers.

3. In the **journey** module, there is a `journeyMaker()` function. In that function, there is a variable named `areas` which will have the value of an object. Use your debugger to show what the value of each key is on that object. Use [Loom](https://www.loom.com) to record your session.
   > [Your public Loom URL here](https://www.loom.com/share/a8affa4b39284ce7be81e1ec7ce734df)

4. Also in the **journey** module, there is the following code:
   ```js
   for (let forestNumber = 0; forestNumber < areas.forests; forestNumber++) {
      journey.push("forest")
   }
   ```
   Explain this code with your best vocabulary.
   > This is the most basic form of a for loop.  It has three distinct components that are separated by a semi-colon.  the first piece "let forestNumber = 0;" is the initialization that says our starting point for this calculation will be 0.  Whatever calculations we do, they will be built upon the starting value of 0.  Next we have the stopping condition of "forestNumber< areas.forests".  A few key things to note here, first and foremost this is the piece of the code that stops the loop from running for infinite iterations.  Next, more specifically we are telling the computer to only run the loop for as many iterations as there are forests within the areas object.  Finally we have the iteration statement which in this case is "forestNumber++".  That will result in the code starting from our initialized value of zero and incrementing up by 1 until we reach the maximum iterations as dictated by the stopping condition.

5. Explain the value of the `database` variable in the **database** module. Be as comprehensive as possible.
   The database variable presents a few different value add features, from a presentation standpoint and from a coding standpoint.  First of all the database variable in this case is being used to store two objects which each have their respective arrays.  In the code we have used thus far in book 2, objects and arrays (not always mutually exclusive) have sat on their own without being grouped.  Furthermore, because we have a lot of data, the database variable allows us to cleanly store the data as we can collapse the individual keys and corresponding values until unless we specifically need to see them.  For example one of the debugging issues with this code involved fixing the key syntax for the drovers database.  It was hidden inside the database variable and required to be dropped down using the arrows on the left column.  Finally, by consolidating all the objects/arrays inside a database variable, we are able to cleanly export the module using the module.exports function to the specific tab the whole package needs to go to.  Otherwise, if we were not using the database variable, we would have to individually declare the cattleTypes and drovers objects for export.

6. In the **drovers** module, there is a `hireDrovers()` function. You will notice the following code on that line - `(herdSize)`. What is that defining, and where does it get its value?
   In this instance herdSize is the parameter for the hireDrovers function.  It defines the function as having a singular parameter that can be inserted whenever this function is called.  For example the hireDrovers function is called with one parameter cattleToDrive and that is fed back through the logic on the drovers tab to return the values and calculations needed to fill out the output on main.js.  Details around how the drovers tab calculations work were also discussed in question #2.

## When You Are Done

After you have answered all the questions above, you need to push all of your code back up to Github. Follow these instructions.

1. Be in the `bug-wrangler-ranch` directory.
2. `git add --all`
3. `git commit -m "Code complete"`
4. `git push origin main`

Then go to the Learning Platform and click the **Self-assessment Complete** button.
