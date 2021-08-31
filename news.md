---
layout: default
title: News
---

# News

{% for post in site.categories.news %}

### [{{post.title}}]({{post.url}})

{{post.content}}
{% endfor %}

