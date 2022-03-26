---
layout: default
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

<div class="comic__info">
<div class="comic__info__meta">
   <h3 class="comic__info__title">{{page.title}}</h3>
   <p class="comic__info__date">
      {{page.date | date: "%B %d"}}, {{page.date | date: "%Y"}}
   </p></div>
   <div class="comic__info__text">{{page.content}}</div>
   {% include tags.html %}
</div>

<div id="hyvor-talk-view"></div>
<script type="text/javascript">
    var HYVOR_TALK_WEBSITE = 6020;
    var HYVOR_TALK_CONFIG = {
        url: false,
        id: "{{ page.alias }}"
    };
</script>
<script async type="text/javascript" src="//talk.hyvor.com/web-api/embed.js"></script>

{% include comments.html %}

{% endfor %}

<div id="hw-jumpbar"></div>
<script src="https://cdn.hiveworkscomics.com/jumpbar.js"></script>

<div class="news__latest">
<h2 class="news__latest__title">Latest News</h2>

{% for post in site.categories.news  limit:3 %}

{% include newsitem.html %}

{% endfor %}

<a href="/news" class="news__latest__button"><button>More news >>></button></a>

</div>
