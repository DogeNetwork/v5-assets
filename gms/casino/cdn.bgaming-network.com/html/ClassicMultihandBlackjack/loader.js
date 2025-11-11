(() => {
  var a;
  try {
    a = window.localStorage
  } catch (t) {
    console.log("LocalStorage is unavailable!")
  }
  window.GAME_GROUP = "casual";
  var i = window.SKIN_DIRS || {},
    e = "ClassicMultihandBlackjack",
    o = "ClassicMultihandBlackjack",
    n = new URL(window.__OPTIONS__.resources_path).origin + "/games-aux",
    s = `${n}/rules/${window.__OPTIONS__.locale}/${o}.json`,
    _ = `${n}/translations/${e}`;

  function r(i) {
    var e = (i.ui.skin || "basic").toLocaleLowerCase(),
      o = window.location.search.match(new RegExp("[?&]skin=([^&]*)(&?)", "i")),
      n = o ? o[1] : null;
    if (!a) return n || e;
    var s = `lastApiSkin_${i.cache_id}`,
      _ = `userSkin_${i.cache_id}`;
    return n ? a.setItem(_, n) : n = a.getItem(_), a.getItem(s) === e && n ? n : (a.removeItem(_), a.setItem(s, e), e)
  }
  window.__OPTIONS__.rules_url = s, window.__OPTIONS__.localization_url = _, window.initializeCasinoOptions = a => {
    var e = r(a),
      {
        root: o,
        res: n = "v0.0.86_casual-v14.15.6"
      } = i[e] || i.basic || {};
    a.ui.applied_skin = o, a.resources_root_path = a.resources_path + (o ? `/${o}` : ""), a.resources_path += `/${n}`, a.game_bundle_source = a.resources_path + "/bundle.js", window.__OPTIONS__ = a
  }, window.initializeCasinoOptions(window.__OPTIONS__)
})();