// This function gets a text input from the textarea element and update the notes

function add_todo() {
  // get note from textarea element
  let note = document.getElementById("todo-text").value;
  if (true) {
    // get bunch of notes from the notes
    let notes = document.getElementById("notes").innerHTML;

    // add the new note to the previous notes
    new_notes =
      notes +
      `<div class="note">
        <p>` +
      note +
      `</p>
        <button class="btn remark">Done</button>
      </div>`;

    // Update notes
    document.getElementById("notes").innerHTML = new_notes;

    // Delete everything from the textarea input making it ready for the next input
    document.getElementById("todo-text").value = "";
  }
}

// TODO
// When button done is pressed remove the item from the notes list
