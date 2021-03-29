import React from "react";
// , { useState , useEffect, useRef }

export default function Dropdown({ title = "", options = [] }) {

  function showCheckboxes() {
    let expanded = false;
    let checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
      checkboxes.style.display = "block";
      expanded = true;
    } else {
      checkboxes.style.display = "none";
      expanded = false;
    }
  }

  return (
    <form>
      <div class="multiselect">
        <div class="selectBox" onClick={showCheckboxes}>
          <select>
            <option>{title}</option>
          </select>
          <div class="overSelect"></div>
        </div>
        <div id="checkboxes">
          {options.map((option) => (
          <label for={option} key={option}>
            <input type="checkbox" id={option} value={option}/>{option}
          </label>
          ))}
        </div>
      </div>
    </form>
  )

}


