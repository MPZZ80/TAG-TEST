/* Screen: when to tell the commuter. Shows SPEC-04. */
const app = document.getElementById("app");
const alerts = DATA.commuter.alerts;

app.append(el("p", "muted", t("alerts_intro")));

// shortcut: choices are not saved; add localStorage if a test needs them to persist.
[["days", "alerts_days"], ["moments", "alerts_moments"], ["channels", "alerts_channels"], ["events", "alerts_events"]].forEach(([group, heading]) => {
  const fieldset = el("fieldset", "card");
  fieldset.append(el("legend", null, t(heading)));
  alerts[group].forEach(option => {
    const label = el("label", "check");
    const input = el("input");
    input.type = "checkbox";
    input.checked = option.on;
    label.append(input, " " + option.label);
    fieldset.append(label);
  });
  app.append(fieldset);
});

// What would reach the commuter now, in the current scenario.
const preview = el("section", "card");
preview.append(el("h2", null, t("alerts_preview")));
preview.append(scenario.alert_message ? answerBox(scenario.alert_message, scenario.answer.tone) : el("p", "muted", t("alerts_nothing")));
app.append(preview);
