# Assignment Notes

## Time taken:
Thursday August 20 - 1hr reviewing code
Friday Auguest 21 - 4hr coding

## Front end chosen:
I chose Angular to use as a front-end framework

## Versions I used:
Dotnet core - v3.1.401
sqlite - v3.33.0
nodejs - v12.16.3

## Notes regarding my code:
- I Added (Done) before todos that I've completed, so I could more easily search for incomplete TODOs without removing them entirely in case you wanted to use them to quickly navigate between code blocks I've added.
- I took some liberties with changing parameters and return types of some methods, such as using ActionResult to return data to the Front End.
- I installed jquery and popper.js as dependencies of bootstrap in order to be able to use a modal for editing a member.

## Issues: 
-

## Assumptions:
- I couldn't find a render function. I'm using Angular and I'm assuming that render() is for react and finishing the add-member.component.html file is the Angular equivalent.

## Notes regarding assignment:
- The database has ID as TEXT meaning it's in the format '00000000000000000000000000000000'. The GUID object in C#, however, is in the format '00000000-0000-0000-0000-000000000000'. I'm not sure if this was intentional, but the workaround I used was formatting it using .ToString("N").

## Questions: 
- Does SQLite allow async execution in any form?

## Sugestions:
- Maybe require some libraries to be used. I chose to include jquery and popper.js in my solution, but encouraging 3rd party library usage might be something that could be added.