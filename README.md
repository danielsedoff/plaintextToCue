# plainTextToCue 
 plainTextToCue v 0.1
 
 This small html/javascript page converts plain text files with HH:MM:SS or MM:SS track start times to a .cue file.

 An example of a plain text tracklist:

    00:00 Artist1 - Love Love Love
    05:30 Mr. Artist2 - Hate Hate Hate
    07:12 R. Tist - Dogs And Cats
 
 What you get in your CUE file:

    FILE "file.mp3" MP3
    TRACK 01 AUDIO
      REM NAME "Artist1 - Love Love Love"
      INDEX 01 00:00
    TRACK 02 AUDIO
      REM NAME "Mr. Artist2 - Hate Hate Hate"
      INDEX 01 05:30
    TRACK 03 AUDIO
      REM NAME "R. Tist - Dogs And Cats"
      INDEX 01 07:12

 After this you can software like [mp3splt](https://sourceforge.net/projects/mp3splt/) to cut the big MP3 into separate tracks.
