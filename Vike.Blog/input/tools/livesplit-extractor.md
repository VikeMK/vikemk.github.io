Title: LiveSplit Segment Time Extractor
NavbarTitle: LiveSplit Extractor
ShowInNavDropdown: false
---

<div class="custom-file mb-3">
  <input type="file" class="custom-file-input" id="livesplitFile" accept=".lss" onchange="onFile()">
  <label class="custom-file-label" for="livesplitFile" id="livesplitFileLabel">Select the LiveSplit file</label>
</div>

<div>
<table class="table table-sm">
<thead>
<tr>
<th scope="col">Segment Name</th>
<th scope="col">Segment Time</th>
</tr>
</thead>
<tbody id="splitsList">
<tr><td colspan="2">No file selected</td></tr>
</tbody>
</table>
</div>

<style>
.text-monospaced {
    font-family: "Lucida Console", "Menlo", "Monaco", "Courier", monospace;
}
</style>

<script>
function onFile() {
    var fileInput = document.getElementById("livesplitFile");
    var fileInputLabel = document.getElementById("livesplitFileLabel");
    if (fileInput.files.length == 1) {
        var file = fileInput.files[0];
        fileInputLabel.innerText = file.name;
        file.text().then(onFileText);
    }
}

function onFileText(text) {
    var splitsFile = new DOMParser().parseFromString(text, "text/xml");
    
    var gameTimes = splitsFile.getElementsByTagName("AttemptHistory")[0].getElementsByTagName("GameTime");
    var bestRun = null;
    var bestId = -1;
    for (let gameTime of gameTimes) {
        var gameTimeValue = gameTime.innerHTML;
        if (bestRun === null || gameTimeValue < bestRun) {
            bestRun = gameTimeValue;
            bestId = gameTime.parentElement.attributes["id"].value;
        }
    }

    var segments = splitsFile.getElementsByTagName("Segment");
    var table = document.createElement("table");
    var splitsListDiv = document.getElementById("splitsList");
    while (splitsListDiv.firstChild) {
        splitsListDiv.removeChild(splitsListDiv.lastChild);
    }

    for (let segment of segments) {
        var row = document.createElement("tr");

        window.lastSegment = segment;
        var segmentName = segment.getElementsByTagName("Name")[0].innerHTML;
        var segmentTime = null;
        for (let timeElement of segment.getElementsByTagName("Time")) {
            if (timeElement.attributes["id"].value == bestId) {
                segmentTime = timeElement.getElementsByTagName("GameTime")[0].innerHTML;
                break;
            }
        }

        if (segmentTime.startsWith("00:"))
            segmentTime = segmentTime.slice(3);

        var decimalPlaces = segmentTime.length - segmentTime.lastIndexOf('.') - 1;
        segmentTime = segmentTime.slice(0, segmentTime.length - (decimalPlaces - 3));

        var nameColumn = document.createElement("td");
        nameColumn.innerText = segmentName;
        row.appendChild(nameColumn);

        var timeColumn = document.createElement("td");
        timeColumn.innerText = segmentTime;
        timeColumn.classList.add("text-monospaced");
        row.appendChild(timeColumn);

        splitsListDiv.appendChild(row);
    }
}
</script>