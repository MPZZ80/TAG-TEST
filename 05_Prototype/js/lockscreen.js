/*
 * Script: lock screen, the messages that reach the commuter when the product is closed, as on a phone's lock screen
 * (SPEC-01, Architecture; Marco's choice of 2026-11-21: the messages are not simulated on the pages).
 * The configurator stays on top; each message opens its page. Uses the component <lock-phone> (with <message-preview>).
 */
(function () {
  Proto.configBar();
  document.querySelector("main").appendChild(document.createElement("lock-phone"));
})();
