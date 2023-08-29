import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {
  getDatabase,
  ref,
  push,
  onValue,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

const appSettings = {
  databaseURL: 'https://realtime-database-f5f37-default-rtdb.firebaseio.com/',
};

const app = initializeApp(appSettings);
const database = getDatabase(app);

const championMessageInDB = ref(database, 'championMessage');
const championFromInDB = ref(database, 'championFrom');
const championToInDB = ref(database, 'championTo');

const userMessageEl = document.querySelector('#message');
const userFromEl = document.querySelector('#from');
const userToEl = document.querySelector('#to');
const buttonEl = document.querySelector('button');

const oldMessage = document.querySelector('.output');

buttonEl.addEventListener('click', function () {
  let messageSent = userMessageEl.value;
  let fromUser = userFromEl.value;
  let toUser = userToEl.value;

  if (messageSent && fromUser && toUser) {
    push(championMessageInDB, messageSent);
    push(championToInDB, toUser);
    push(championFromInDB, fromUser);
  }
  location.reload();
});

const fromFinal = [];
const messageFinal = [];
const toFinal = [];

onValue(championFromInDB, function (snapshot) {
  let fromArray = Object.values(snapshot.val());
  clearInner();
  for (let i = 0; i < fromArray.length; i++) {
    fromFinal.push(fromArray[i]);
  }
  for (let i = 0; i < fromFinal.length; i++) {
    appendMessage(toFinal[i], messageFinal[i], fromFinal[i]);
  }
});

onValue(championMessageInDB, function (snapshot) {
  let messageArray = Object.values(snapshot.val());
  clearInner();
  for (let i = 0; i < messageArray.length; i++) {
    messageFinal.push(messageArray[i]);
  }
  for (let i = 0; i < messageFinal.length; i++) {
    appendMessage(toFinal[i], messageFinal[i], fromFinal[i]);
  }
});

onValue(championToInDB, function (snapshot) {
  let toArray = Object.values(snapshot.val());
  clearInner();
  for (let i = 0; i < toArray.length; i++) {
    toFinal.push(toArray[i]);
  }

  for (let i = 0; i < toFinal.length; i++) {
    appendMessage(toFinal[i], messageFinal[i], fromFinal[i]);
  }
});

function appendMessage(to, message, from) {
  //   clearInner();
  const output = document.querySelector('h2');
  const newMessage = document.createElement('div');

  newMessage.className = 'result';

  //   Adding inner html to the new class

  clearInputField();

  if (from && to) {
    newMessage.innerHTML = `<p class="to-person">To ${to}</p>
    <p class="user-message">${message}</p>
    <div class="end">
      <p class="from-person">From ${from}</p>
      `;
    output.append(newMessage);
  }
}

function clearInputField() {
  userMessageEl.value = '';
  userFromEl.value = '';
  userToEl.value = '';
}

function clearInner() {
  oldMessage.innerHTML = `<h2>-Endorsements -</h2>`;
}

console.log((oldMessage.innerHTML = `<h2>-Endorsements -</h2>`));
