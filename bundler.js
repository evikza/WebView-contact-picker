const supportedContactsManager =
  'contacts' in navigator && 'ContactsManager' in window;

document.querySelector(
  '.android-supported-flag__container'
).innerHTML = `<p>Поддержка \`ContactsManager\`: <span boolean="${supportedContactsManager}">${supportedContactsManager}</span></p>`;

document
  .querySelector('.selected-contacts__btn')
  .addEventListener('click', getContacts);

async function getContacts() {
  const props = ['name', 'tel'];

  try {
    const contacts = await navigator.contacts.select(props, { multiple: true });
    document.querySelector(
      '.json-contacts__container'
    ).textContent = JSON.stringify(contacts);
  } catch (error) {
    alert(error);
  }
}
