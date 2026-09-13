(function () {
  var NAV = [
    { href: "index.html", label: "Rithika Manna" },
    { href: "about-me.html", label: "About Me" },
    { section: "Research Work", href: "research-work.html" },
    { href: "graduate-thesis-work.html", label: "Graduate Thesis Work", sub: true },
    { href: "life-after-the-thesis.html", label: "Life After the Thesis", sub: true },
    { href: "memories-with-furniture.html", label: "Memories with Furniture", sub: true },
    { href: "revealing-footprints.html", label: "Revealing Footprints", sub: true },
    { section: "Design Work", href: "design-work.html" },
    { href: "high-rise-landscaping.html", label: "High-rise Landscaping", sub: true },
    { href: "kindergarten-playarea.html", label: "Kindergarten Playarea", sub: true },
    { href: "small-space-designs.html", label: "Small space Designs", sub: true },
    { href: "vertical-garden.html", label: "Vertical garden", sub: true }
  ];

  function currentFile() {
    var path = window.location.pathname.split("/").pop();
    return path === "" ? "index.html" : path;
  }

  function render() {
    var root = document.getElementById("nav-root");
    if (!root) return;

    var current = currentFile();
    var html = "";

    html += '<button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu"><span></span><span></span><span></span></button>';
    html += '<a href="index.html"><img class="nav-logo" src="assets/images/logo.png" alt="Rithika Manna"></a>';
    html += '<ul class="nav-links" id="nav-links">';

    NAV.forEach(function (item) {
      if (item.section) {
        var active = item.href === current ? " active" : "";
        html += '<li class="nav-top-level"><a class="' + active.trim() + '" href="' + item.href + '">' + item.section + "</a></li>";
        return;
      }
      var isActive = item.href === current;
      var cls = (item.sub ? "nav-sub" : "nav-top-level") + (item.href === "index.html" ? " site-title" : "");
      html += '<li class="' + cls + '"><a class="' + (isActive ? "active" : "") + '" href="' + item.href + '">' + item.label + "</a></li>";
    });

    html += "</ul>";
    root.innerHTML = html;

    var hamburger = document.getElementById("nav-hamburger");
    var links = document.getElementById("nav-links");
    hamburger.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  function initScrollTop() {
    var btn = document.createElement("button");
    btn.className = "scroll-top";
    btn.setAttribute("aria-label", "Scroll to top");
    btn.innerHTML = "&uarr;";
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.body.appendChild(btn);

    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    render();
    initScrollTop();
  });
})();
