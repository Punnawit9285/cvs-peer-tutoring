/* Shared registry for both pages (deck + tutor notes). */
window.CVS = {
  sections: [],
  add: function (sec) { this.sections.push(sec); },
  /* plot a function into an SVG path. f(t) returns [x,y] */
  path: function (f, t0, t1, n) {
    var d = '';
    for (var i = 0; i <= n; i++) {
      var t = t0 + (t1 - t0) * i / n;
      var p = f(t);
      d += (i ? ' L' : 'M') + p[0].toFixed(1) + ',' + p[1].toFixed(1);
    }
    return d;
  }
};
