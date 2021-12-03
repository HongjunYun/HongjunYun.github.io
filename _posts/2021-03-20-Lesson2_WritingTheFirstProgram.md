---
title:  "Lesson 2. Writing The First Program"
date:   2021-03-20 21:42:00
categories:
- Learn Programming
- Programming
- 2021 Programming
tags:
- C
- Xcode
- Algorithm
- Grade 13
- Learn Programming
- Computer Science
---
# Overview
* Write your first C/C++ Program

# Before we start
I will be using Xcode 12.4 on macOS 11.2.3, running on intel-based MacBook Pro 13 inch 2019. Due to the odd nature of visual studio's C compiler, some codes might not work on them. I highly recommend using online IDE using gcc compiler.

# Start to code!
## Launch Xcode
When you launch Xcode, you will see the screen like this:
<img width="486" alt="Xcode 1" src="https://user-images.githubusercontent.com/46326335/110869105-c9aa8400-8297-11eb-9935-6e96eb99135d.png">

## Create a new Xcode project
When you press on "Create a new Xcode project", you will be asked to choose the type of the project. There is an option called "Command Line Tool" under macOS tab.
<img alt="Xcode 2" src="https://user-images.githubusercontent.com/46326335/110877785-f6669780-82a7-11eb-8de8-292b6933af18.png">
After that, name your new project and put Organization Identifier you want (I have it as "Personal"). Also you should select the programming language as C.

## Start coding
On the side bar, there will be a file called main.c. If you click on it, you will be able to start coding!
<img alt="Xcode 3" src="https://user-images.githubusercontent.com/46326335/110877951-4fcec680-82a8-11eb-9272-cf3abba876ef.png">

# Coding
## What are we going to make our program to do?
Since this would be the very first writing the C code, we will begin with printing something to the screen.

## Procedure
1. Erase everything from the screen
2. Type <script src="https://gist.github.com/andylang8445/a2af574639adfc6a78a45f2e79d93291.js"></script>
3. Press Build and Run button (It will look like a youtube logo but only with triangular part)
4. You will see text <i>Very first program I wrote in C!</i> at the bottom of the screen

## What just happened?
You have wrote your very first program!
Lets go line by line.

### First Line
```
#include<stdio.h>
```
This line is importing the header called stdio, which is containing the functions for <b>ST</b>andar<b>D</b> <b>I</b>nput <b>O</b>output.

### Second Line
```
int main(){
```
This is where you define the <i>main</i> function. It is the function that the compiler(computer) will be running the program from. This function will be ran initially from your code in every C program.

### Third Line
```
printf("Very first program I wrote in C!\n");
```
`printf` is the function included in stdio header. This function prints the text inputted to it on the screen. In this case, inputted text will be "Very first program I wrote in C!". You should remember to put the semicolon(;) at the end of each operation, since it is indicating that each command is finished. Lastly, <i>`\n`</i> will change line in the text.

### Fourth line
```
return 0;
```
When we stated the main function, we said `int main()` specifically. <i>int</i> in the front is telling that the main function's type is integer, meaning there should be an integer return value. In this line of code, we are returning the integer 0 to end the program. return statement in the main function will immediately terminate the program. When you see the output, it will say <i>Program ended with exit code: 0</i> at the end of it. This means the return value of the main function was 0.

### Last line
```
}
```
This line only means that main function's content is over.

# Task
Try to write a program which prints your name and today's date in separated lines. Also, you are asked to make the exit code as 8. For example, mine would look like:
```
andylang8445
11 March, 2021
Program ended with exit code: 8
```

The sample code of mine would be included below. I recommend trying this on your own and check my answer of mine.
<div>
<a onclick = "this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';" href = "javascript:void(0)">
<b><i>View Code</i></b>
</a><div style = "DISPLAY : none">
<script src="https://gist.github.com/andylang8445/489fcb6a0e0b922bd5b929e360a660c3.js"></script>
</div>
</div>

# Next Lesson
Next Lesson (Lesson 3) will be about input at handling data.
