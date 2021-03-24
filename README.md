# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Shreya Chitturi**

Time spent: **4.5** hours spent in total

Link to project: 

[Live Site](https://schit-memory-game.glitch.me)

[Code](https://glitch.com/edit/#!/schit-memory-game)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:


## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](Light&Sound(GameLose).gif)
![](Light&Sound(GameWin).gif)
![](Light&Sound(StartStop).gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

    [CSS Colors](https://www.w3schools.com/cssref/css_colors.asp)

    [JavaScript Syntax](https://www.w3schools.com/js/js_syntax.asp)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

  The biggest challenge that I encountered when creating this submission was at the end of step six. I implemented the code by following the 
  instructions, but when I was clicking on the start button, the stop button was not showing up. By the end of step 6, I should have been able 
  to see that the stop button replaces the start button when I click on start, however this was not the case. Both my start and stop buttons 
  completely disappeared. To help fix this issue, I traced through my code in all three files to ensure that this issue did not arise because of a
  spelling error. Once I checked everything, I did not see any issues. Next, I went through the instructions from the beginning while looking at my 
  code to make sure that I did not accidently miss a step. I realized that an issue could have arised in the differences between the variable or 
  function declarations and the usage of these declarations. Once again, I looked through the program and did not see any issues here. At this point,
  I realized that I may have spent too much time looking at my code and that it would become difficult for me to find the problem. I took a break for 
  the night and continued the next morning. In the time in between, I realized that I was not familiar with the Javascript language and that I may 
  have had a problem in the syntax. In the morning, I read up on Javascript syntax to make sure I understood the basics and looked through my program.
  I found a syntax issue and once I fixed this, the stop and start buttons were functioning as they should have been. After this issue, I understood 
  that when dealing with languages I have never dealt with, I should always do a little reading beforehand. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
  
  After finishing this submission, the biggest question I have on web development would be if there are a certain combination of languages that are best fit
  for web development and what are they. I do not have much experience with various languages so it was my first time learning how these languages could
  interact with one another. Are there some languages that should not be used for web development, or is there no limit? Also, after reading a little about the 
  Document Object Model (DOM), I was wondering if all common development languages have this feature? I could see how it would be useful for the languages to 
  communicate with each other. If most languages do have DOM, then is the syntax for accessing the elements similar for most of them to ensure that users do not
  have a hard time switching?
  
4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
  
  If I had more time to work on this project, I would like to add features that would allow the user to personalize the board a little more. If the user could
  have a drop down menu with options such as easy, medium, hard then it would make it more enjoyable. Based off the option the user picks, the size of the board 
  and the number of buttons in each pattern. For instance, if the user chooses easy mode, they could have four buttons and eight values in the pattern. If they chose
  medium, they would have six buttons with twelve values. Another feature we could add is only the sound playing or only the button being pressed showing. In this case,
  the user would have to rely on only one of their senses to make sure they get the combination right. This could again be an option that the user chooses from a menu. 



## License

    Copyright Shreya Chitturi

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.