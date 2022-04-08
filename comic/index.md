---
layout: page
color: yellow
title: "Secret Bad Page"
---

View the whole comic at once!

<br /><br />
<div class="character__pages__thumbnails">
{% for comicpage in site.categories.comic %}
  {% include thumbnail-page.html %}
{% endfor %}
</div>