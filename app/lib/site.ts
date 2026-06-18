// Verified facts only (Google Places + search aggregation). No invented prices.
// PIN = 676701 (last 6 digits of the real phone), handled by bookkeeping, not rendered.
export const SITE = {
  name: "Phone Booth",
  tagline: "Get connected on Main Street.",
  phone: "(973) 676-0701",
  phoneHref: "tel:+19736760701",
  address: "325 Main St",
  city: "City of Orange",
  state: "NJ",
  zip: "07050",
  facebook: "https://www.facebook.com/phonebooth325/",
  mapsQuery: "Phone+Booth+325+Main+St+City+of+Orange+NJ+07050",
};

export const HOURS: { day: string; range: string; short: string }[] = [
  { day: "Monday", range: "10:00 AM to 7:00 PM", short: "Mon" },
  { day: "Tuesday", range: "10:00 AM to 7:00 PM", short: "Tue" },
  { day: "Wednesday", range: "10:00 AM to 7:00 PM", short: "Wed" },
  { day: "Thursday", range: "10:00 AM to 7:00 PM", short: "Thu" },
  { day: "Friday", range: "10:00 AM to 7:00 PM", short: "Fri" },
  { day: "Saturday", range: "10:00 AM to 7:00 PM", short: "Sat" },
  { day: "Sunday", range: "10:00 AM to 5:00 PM", short: "Sun" },
];

// Open status helper (America/New_York). Returns label string.
export function openStatus(now: Date): { open: boolean; label: string } {
  // Convert to ET
  const et = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
  const day = et.getDay(); // 0 = Sun
  const mins = et.getHours() * 60 + et.getMinutes();
  const close = day === 0 ? 17 * 60 : 19 * 60; // Sun 5pm else 7pm
  const open = 10 * 60;
  const isOpen = mins >= open && mins < close;
  if (isOpen) {
    const closeLabel = day === 0 ? "5:00 PM" : "7:00 PM";
    return { open: true, label: `Open now · until ${closeLabel}` };
  }
  return { open: false, label: "Closed now · opens 10:00 AM" };
}
