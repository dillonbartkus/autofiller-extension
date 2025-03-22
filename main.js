async function handleChange(evt) {
  chrome.storage.local.set({ [evt.target.id]: evt.target.value });
}

async function getInputValuesFromStorage(inputTypes) {
  for (const inputType of inputTypes) {
    const previousValue = await chrome.storage.local.get(inputType);

    const inputEl = document.getElementById(inputType);

    inputEl.value = previousValue[inputType];
  }
}

getInputValuesFromStorage(["first-name", "last-name", "email"]);

const emailInput = document.getElementById("email");
emailInput.addEventListener("input", handleChange);

const firstNameInput = document.getElementById("first-name");
firstNameInput.addEventListener("input", handleChange);

const lastNameInput = document.getElementById("last-name");
lastNameInput.addEventListener("input", handleChange);
