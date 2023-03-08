// Create a simple application which displays two counts:Local Score, Session Score and a button to increment these counts. Local score must persist in Local Storage and Session score must persist in Session Storage and must reset on closing the session.

 // Get the local and session scores from storage, or set them to 0 if they don't exist yet
 let localScore = parseInt(localStorage.getItem("localScore")) || 0;
 let sessionScore = parseInt(sessionStorage.getItem("sessionScore")) || 0;
 
 // Update the UI with the initial scores
 document.getElementById("localScore").textContent = localScore;
 document.getElementById("sessionScore").textContent = sessionScore;
 
 function incrementScores() {
   // Increment the local and session scores
   localScore++;
   sessionScore++;
   
   // Update the UI
   document.getElementById("localScore").textContent = localScore;
   document.getElementById("sessionScore").textContent = sessionScore;
   
   // Store the updated scores in storage
   localStorage.setItem("localScore", localScore);
   sessionStorage.setItem("sessionScore", sessionScore);
 }