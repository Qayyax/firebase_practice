# firebase_practice
 Implementing real time database with Firebase

This is a solo project from **Srimba Frontend Career Path Course** 

It introduces the concept of **Real time database** with **Firebase**

> link to deployed site

https://fredietribute.netlify.app/

## What I learnt

- I learnt how to use real time database with firebase
- I learnt how to use the `push`, `onValue`, `ref`, `remove` and `getDatabase` function for Firebase
- I learnt how to also convert `objects` to `array` using the `Object.value()`, `Object.key()` and `Object.entries()` functions.
- I learnt how to use `.append()` and `.createElement()` function in the DOM, which I used together with `.innerHTML` and `.className` function

## What I need to learn

- How to clear old entries without having to refresh the page to update the DOM.
  ```js
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
  ```
<hr>

> Thank you for following my progress
