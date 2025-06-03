let currentIndex = null;

function openUpdateForm(index) {
  currentIndex = index;
  document.getElementById("revisiBaru").value = documents[index][3];
  document.getElementById("tanggalBaru").value = documents[index][4];
  document.getElementById("updateForm").classList.remove("hidden");
  document.getElementById("updateForm").classList.add("flex");
}

function closeUpdateForm() {
  document.getElementById("updateForm").classList.add("hidden");
  document.getElementById("updateForm").classList.remove("flex");
}

function submitUpdate() {
  const revisiBaru = document.getElementById("revisiBaru").value;
  const tanggalBaru = document.getElementById("tanggalBaru").value;

  if (!revisiBaru || !tanggalBaru) {
    alert("Harap isi semua data!");
    return;
  }

  documents[currentIndex][3] = revisiBaru;
  documents[currentIndex][4] = tanggalBaru;

  closeUpdateForm();
  renderTable(); // refresh tampilan
}
