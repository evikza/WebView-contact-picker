// const isAndroid = () => {
//   return navigator.userAgent.toLowerCase().indexOf('android') > -1;
// };

const supportedContactsManager =
  'contacts' in navigator && 'ContactsManager' in window;

document.querySelector(
  '.android-supported-flag__container'
).innerHTML = `<p>Поддержка \`ContactsManager\`: <span boolean="${supportedContactsManager}">${supportedContactsManager}</span></p>`;

const props = ['name', 'email', 'tel', 'address', 'icon'];
const opts = { multiple: true };

try {
  const contacts = await navigator.contacts.select(props, opts);
  const props = ['name', 'email', 'tel', 'address', 'icon'];
  const opts = { multiple: true };
  handleResults(contacts);
} catch (e) {}
