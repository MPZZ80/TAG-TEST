/*
 * Script: index, the starting point of the prototype: a notification from the app arrives on the phone,
 * as in DATA.notifications; opening it lands on the Run page in its scenario (SPEC-02). Below, all screens, for review.
 * Uses the component <screen-index>.
 */
(function () {
  document.querySelector("main").appendChild(document.createElement("screen-index"));
})();
