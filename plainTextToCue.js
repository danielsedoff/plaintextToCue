/* plainTextToCue v 0.1
 * Converts a generic plain text tracklist to a .cue file
 * author: danielsedoff@gmail.com
 * github.com/danielsedoff
 */

var getElemVal = function(id){
    elem = document.getElementById(id);
    return elem.value;
};

var plainTextToCue = function(filename, list) {
  //start by making the filename header
  result = "FILE \"" + filename + "\"\n";
  list = list.replace(/\r\n|\n\r|\r/g, "\n")
  list = list.split("\n");

  //process every item to get the time and track name
  for (var i = 0; i < list.length; ++i) {
    //ignore empty strings
    if (list[i] == "") continue;

    var item = list[i];
    var time = "";
    //acquire the time
    var time3 = item.match(/\d\d:\d\d:\d\d/);
    var time2 = item.match(/\d\d:\d\d/);
    if (time2 == null)
      return "ERROR: Line " + i + ": no time found. Line contents:\n" + item;

    var writeTime = "";

    if (time2.length > 0) {
      time = time2[0];
    }

    if (null != time3) {
      // In the CUE format, 01:01:01 means 01 min 01 s + 0.01 s
      time = time3[0];
      let hrs = time.substring(0, 2),
        min = time.substring(3, 5),
        sec = time.substring(6, 8);
      min = Number(hrs) * 60 + Number(min);
      writeTime = "".concat(min, ":", sec);
    } else {
      writeTime = time;
    }

    //separate the time from the track name
    var timeStart = item.indexOf(time);
    var timeEnd = timeStart + time.length;
    var name =
      item.substring(0, timeStart) + " " + item.substring(timeEnd, item.length);
    name = name
      .replace(/[\[|\(]\s+[\]|\)]/g, "")
      .replace(/[\*\?\:\"\'\\\/]/g, " ")
      .trim();
    result +=
      track.trackhead(i + 1) +
      track.trackname(name) +
      track.index(writeTime, i + 1);
  }
  return result;
};

var track = {
  trackhead: function(num) {
    if (Number(num) < 10) num = "0".concat(num);
    return "  TRACK " + num + " AUDIO" + "\n";
  },
  trackname: function(name) {
    return '    REM NAME "' + name + '"\n';
  },
  index: function(time) {
    return "    INDEX 01 " + time + "\n";
  }
};

var downloadFile= function(){
    filename = getElemVal("inputFileName") + ".cue";
    text = getElemVal("outputText");
    
    blob = new Blob([text], { type: 'text/plain' }),
    anchor = document.createElement('a');
    anchor.download = filename;
    anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
    anchor.dataset.downloadurl = ['text/plain', anchor.download, anchor.href].join(':');
    anchor.click();
};

var processText = function(){
    result =  plainTextToCue(getElemVal("inputFileName"), getElemVal("inputText"));
    document.getElementById("outputText").value = result;
};