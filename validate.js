function checkSID() {
  let sid = (document.getElementById("sid").value).trim();
  if (sid.length == 10) {
    return true;
  } else {
    return false;
  }
}

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();
  if (isNaN(candi) || candi < 1) {
    return false;
  } else {
    return true;
  }
}

function validateForm(){
	const studentId = document.getElementById("sid").value;
	const candidateNo = document.getElementById("candi").value;

	if (!/^\d{10}$/.test(studentId)) {
        alert("Student ID must be a 10-digit number.");
        return false;
    }
		if (!/^\d{10}$/.test(studentId)) {
			alert("Student ID must be a 10-digit number.");
			return false;
		}
	
		if (candidateNo < 1 || candidateNo > 10) {
			alert("Candidate No. must be between 1 and 10.");
			return false;
		}
		return true;
	}
