// temporal-cheatsheet.js

const { Temporal } = require('@js-temporal/polyfill');

// CURRENT TIME
const now = Temporal.Now.zonedDateTimeISO('Asia/Kolkata');
console.log("Now:", now.toString());

// CREATE DATE
const date = new Temporal.PlainDate(2026, 2, 19);

// ADD / SUBTRACT
const nextWeek = date.add({ weeks: 1 });
const lastMonth = date.subtract({ months: 1 });

console.log(nextWeek.toString());
console.log(lastMonth.toString());

// PARSE
const parsed = Temporal.PlainDate.from('2026-02-19');
console.log(parsed.toString());

// DIFFERENCE
const d1 = Temporal.PlainDate.from('2026-01-01');
const d2 = Temporal.PlainDate.from('2026-02-19');

const diff = d1.until(d2, { largestUnit: 'days' });
console.log("Days:", diff.days);

// TIMEZONE
const instant = Temporal.Instant.fromEpochMilliseconds(Date.now());
const zoned = instant.toZonedDateTimeISO('Asia/Kolkata');

console.log(zoned.toString());

// COMPARE
console.log(Temporal.PlainDate.compare(d1, d2)); // -1

// IMMUTABLE UPDATE
const updated = date.with({ month: 12 });
console.log(updated.toString());
