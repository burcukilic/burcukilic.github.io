---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<script>
  if (localStorage.getItem("theme") === null && typeof setThemeSetting === "function") {
    setThemeSetting("light");
  }
</script>

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
