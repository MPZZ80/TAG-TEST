/*
 * Dataset: stations
 * What it holds: the state of the stations on the trip at the hour of travel (SPEC-14): parking and bike places,
 *   staff, light on the walk, lifts; each as a fact with its source and age.
 * Used by: station.html
 * Fields: stations[{id, name, hour, parking[], bikes[], staff[], light[], lifts[]}], each fact {label, value, source, time, status}
 * Source: mock
 * Updated: 2026-11-16
 */
window.DATA = window.DATA || {};
DATA.stations = [
  { id: "VRPN", name: "Verona Porta Nuova", hour: "07:30",
    parking: [{ label: "Station car park", value: "42 places free, € 8 a day", source: "Car park operator", time: "07:10", status: "confirmed" }],
    bikes:   [{ label: "Covered bike park", value: "About 15 places free", source: "Other travellers, 2 reports", time: "06:55", status: "reported" }],
    staff:   [{ label: "Ticket office and staff", value: "Open 06:00 – 21:00", source: "Schedule", time: "—", status: "planned" }],
    light:   [{ label: "Walk to the car park", value: "Lit", source: "Operator, live", time: "06:30", status: "confirmed" }],
    // where the state of facilities comes from is OQ-28
    lifts:   [{ label: "Lift to platform 4", value: "Working", source: "Operator, live", time: "06:30", status: "confirmed" }] },
  { id: "MICE", name: "Milano Centrale", hour: "09:00",
    parking: [],
    bikes:   [{ label: "Shared bikes at the east exit", value: "11 bikes", source: "Bike sharing operator", time: "07:15", status: "confirmed" }],
    staff:   [{ label: "Staff at the help point", value: "Open 06:00 – 23:00", source: "Schedule", time: "—", status: "planned" }],
    light:   [{ label: "Walk to the underground", value: "Indoor, lit", source: "Schedule", time: "—", status: "planned" }],
    lifts:   [{ label: "Lift from platform 21", value: "Out of service since yesterday", source: "Operator, live", time: "07:02", status: "confirmed" },
              { label: "Lift to the M3", value: "Working", source: "Other travellers, 1 report", time: "06:40", status: "reported" }] }
];
