function add_todo() {
  let note = document.getElementById("todo-text").value;
  if (true) {
    let notes = document.getElementById("notes").innerHTML;
    new_notes =
      notes +
      `<div class="note">
        <p>` +
      note +
      `</p>
        <button class="btn remark">Done</button>
      </div>`;
    document.getElementById("notes").innerHTML = new_notes;
  }
}
