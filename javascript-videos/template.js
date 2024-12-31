function generateMadLib() {
    const noun = document.getElementById('noun').value.toLowerCase().trim();
    const verb = document.getElementById('verb').value.toLowerCase().trim();
    const adjective = document.getElementById('adjective').value.toLowerCase().trim();

    if (!noun || !verb || !adjective) {
        alert("Please fill in all fields with appropriate words.");
        return; 
    }

    const vowelSound = ['a', 'e', 'i', 'o', 'u'].includes(adjective.charAt(0));
    const article = vowelSound ? 'an' : 'a';

    const madLib = `The ${adjective} ${noun} began to ${verb}.`;
    
    document.getElementById('madLibOutput').innerHTML = madLib;

    // Select the modal and close button correctly
    const modal = document.getElementById("myModal");
    const closeBtn = document.getElementsByClassName("close")[0];
    
    modal.style.display = "block";

    closeBtn.onclick = function() {
        modal.style.display = "none"; 
    }

    // Close the modal when the user clicks anywhere outside the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}