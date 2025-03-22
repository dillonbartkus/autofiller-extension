const autofillForm = async () => {
  const emailInput =
    document.querySelector('input[id="email"]') ||
    document.querySelector('input[name="email"]');

  if (emailInput) {
    const emailValue = await chrome.storage.local.get("email");
    emailInput.value = emailValue.email;
  }

  const firstNameValue = await chrome.storage.local.get("first-name");
  const lastNameValue = await chrome.storage.local.get("last-name");

  console.log(firstNameValue);

  const firstNameInput =
    document.querySelector('input[id="first-name"]') ||
    document.querySelector('input[name="first-name"]');

  if (firstNameInput) {
    firstNameInput.value = firstNameValue["first-name"];
  }

  const lastNameInput =
    document.querySelector('input[id="last-name"]') ||
    document.querySelector('input[name="last-name"]');

  if (lastNameInput) {
    lastNameInput.value = lastNameValue["last-name"];
  }

  const fullNameInput =
    document.querySelector('input[id="name"]') ||
    document.querySelector('input[name="name"]');

  if (fullNameInput) {
    fullNameInput.value = `${firstNameValue["first-name"]} ${lastNameValue["last-name"]}`;
  }
};

autofillForm();
