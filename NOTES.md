# Assignment Notes

## Time taken:
- Thursday August 20 - 1hr reviewing code
- Friday Auguest 21 - 5hrs coding

## Front end chosen:
I chose Angular to use as a front-end framework

## Versions I used:
- Dotnet core - v3.1.401
- sqlite - v3.33.0
- nodejs - v12.16.3

## Notes regarding my code:
- I Added (Done) before todos that I've completed, so I could more easily search for incomplete TODOs without removing them entirely in case you wanted to use them to quickly navigate between code blocks I've added.
- I took some liberties with changing parameters and return types of some methods, such as using ActionResult to return data to the Front End.
- I installed jquery and popper.js as dependencies of bootstrap in order to be able to use a modal for editing a member and for a confirmation dialog.

## Issues: 
-

## Assumptions:
- I couldn't find a render function. I'm using Angular and I'm assuming that render() is for react and finishing the add-member.component.html file is the Angular equivalent.
- I assumed adding libraries wouldn't interfere with any tests you would be running

## Notes regarding assignment:
- The database has ID as TEXT meaning it's in the format '00000000000000000000000000000000'. The GUID object in C#, however, is in the format '00000000-0000-0000-0000-000000000000'. I'm not sure if this was intentional, but the workaround I used was formatting it using .ToString("N").

## Questions: 
- Does SQLite allow async execution in any form?
- Was I supposed to use GetMember()? I never saw an instance where I felt as though I needed it on the Front-End.

## Sugestions:
- I chose to include jquery and popper.js in my solution, but encouraging/requiring 3rd party library usage might be something straightforward that could be added.
- I felt that there wasn't much .css that needed to be done. Just a few things I thought might make it look nicer. Maybe there's some room to add css requirements in the assignment if you feel like it's worth spending the time on. 