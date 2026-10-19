// Landing language campaign: 2026-10-19 through 2026-11-30, UTC+09:00.
// Runs in the document head before the Korean landing page is displayed.
(function () {
  if (window.location.pathname !== "/") return;
  var preferred = null;
  try { preferred = window.localStorage.getItem("dgo-language"); } catch (_) {}
  var validPreference = preferred === "ko" || preferred === "ja" || preferred === "en";
  var now = Date.now();
  var campaignActive = now >= Date.parse("2026-10-19T00:00:00+09:00") &&
    now < Date.parse("2026-12-01T00:00:00+09:00");
  var locale = validPreference ? preferred : campaignActive ? "ja" : "ko";
  if (locale !== "ko") {
    // Automatic campaign selection does not persist as a manual preference.
    document.documentElement.style.visibility = "hidden";
    window.location.replace("/" + locale + "/" + window.location.search + window.location.hash);
  }
})();
