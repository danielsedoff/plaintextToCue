# plainTextToCue 
 plainTextToCue v 0.1
 
 Sometimes you can run into a long track which has a list of titles available but you need to make a cue sheet by hand to split it into separate MP3 files.
 
 This script converts plain text files with HH:MM:SS or MM:SS track start times to an MP3 cue file.

 An example of a plain text tracklist:

    00:00 Artist1 - Good Track Name
    05:30 Mr. Artist2 - An Even Better One
    07:12 R. Tist - The Best Song Here
 
 What you get in your CUE file:

    FILE "file.mp3" MP3
    TRACK 01 AUDIO
      REM NAME "Artist1 - Good Track Name"
      INDEX 01 00:00
    TRACK 02 AUDIO
      REM NAME "Mr. Artist2 - An Even Better One"
      INDEX 01 05:30
    TRACK 03 AUDIO
      REM NAME "R. Tist - The Best Song Here"
      INDEX 01 07:12

 After this you can use, e.g., [mp3splt](https://sourceforge.net/projects/mp3splt/) to cut the big MP3 into separate tracks.

 plainTextToCue needs [Node.js](https://nodejs.org/) to run. If you don't have Node.js please install it first.
 
 USAGE:
 
    node plainTextToCue.js mytextfile.txt > mycuefile.cue
 
 You can also change the file and use it in the browser if you like. The function which converts your plain text to CUE is  plainTextToCue.
 
 
