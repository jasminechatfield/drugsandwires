---
layout: home
title: "Home"
---

{% for page in site.categories.comic  limit:1 %}

{% for post in site.categories.comic %}
{% if post.url == page.url %}
{% assign post_index0 = forloop.index0 %}
{% assign post_index1 = forloop.index %}
{% endif %}
{% endfor %}
{% for post in site.categories.comic %}
{% if post_index0 == forloop.index %}
{% assign next_post = post.url %}
{% endif %}
{% if post_index1 == forloop.index0 %}
{% assign prev_post = post.url %}
{% endif %}
{% endfor %}

{% capture prev %}{{prev_post}}{% endcapture %}

{% capture next %}{{next_post}}{% endcapture %}

{% if page.layout == "comictwopage" %}
{% else %}
{% endif %}

{% if prev_post %}
{% if next_post %}
{% if page.layout == "comictwopage" %}
{% include two-pages-with-nav.html first_or_last=first_or_last  prev=prev %}
{% else %}
{% include page-with-nav.html first_or_last=first_or_last  prev=prev %}
{% endif %}
{% else %}
{% if page.layout == "comictwopage" %}
{% include two-pages-with-nav.html first_or_last=first_or_last prev=prev %}
{% else %}
{% include page-with-nav.html first_or_last=first_or_last prev=prev %}{% endif %}
{% endif %}
{% else %}
{% if next_post %}
{% if page.layout == "comictwopage" %}
{% include two-pages-with-nav.html first_or_last=first_or_last next=next %}
{% else %}
{% include page-with-nav.html first_or_last=first_or_last next=next %}
{% endif %}
{% endif %}
{% endif %}

{{page.content}}
{{page.url}}
{% include comments.html %}

{% endfor %}

## Latest News

{% for post in site.categories.news  limit:1 %}

### [{{post.title}}]({{post.url}})

<strong>{{post.date | date: "%b %e %Y"}}</strong>
{{post.content}}
{% endfor %}
