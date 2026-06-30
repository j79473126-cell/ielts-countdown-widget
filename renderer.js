const TARGET_DATE = new Date("2026-09-15T09:00:00");
const START_DATE = new Date("2026-05-01T00:00:00"); // prep boshlanish sanasi

const RING_CIRCUMFERENCE = 2 * Math.PI * 62;

const messages = [
  "⭐ Keep going, you're doing great!",
  "💪 Every day of prep counts!",
  "📚 Stay consistent, success is close!",
  "🔥 You're closer than you think!",
  "🎯 Focus today, shine on exam day!"
];

function formatNum(n) {
  return String(n).padStart(2, "0");
}

function update() {
  const now = new Date();
  let diff = TARGET_DATE - now;
  if (diff < 0) diff = 0;

  const totalDays = Math.floor(diff / 86400000);
  diff %= 86400000;
  const hours = Math.floor(diff / 3600000);
  diff %= 3600000;
  const minutes = Math.floor(diff / 60000);
  diff %= 60000;
  const seconds = Math.floor(diff / 1000);

  document.getElementById("days").innerText = totalDays;
  document.getElementById("hours").innerText = formatNum(hours);
  document.getElementById("minutes").innerText = formatNum(minutes);
  document.getElementById("seconds").innerText = formatNum(seconds);

  document.getElementById("examDate").innerText =
    TARGET_DATE.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  const totalSpan = TARGET_DATE - START_DATE;
  const elapsed = now - START_DATE;
  let fraction = totalSpan > 0 ? elapsed / totalSpan : 0;
  fraction = Math.max(0, Math.min(1, fraction));

  const offset = RING_CIRCUMFERENCE * (1 - fraction);
  const ring = document.getElementById("ringProgress");
  ring.style.strokeDasharray = RING_CIRCUMFERENCE;
  ring.style.strokeDashoffset = offset;

  const percent = Math.round(fraction * 100);
  document.getElementById("progressPercent").innerText = percent + "%";
  document.getElementById("progressFill").style.width = percent + "%";

  const msgIndex = totalDays % messages.length;
  document.getElementById("motivation").innerText = messages[msgIndex];
}

update();
setInterval(update, 1000);
