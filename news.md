---
layout: page
title: News
color: pink
titleimage: /site/menu_news_hover.png
---

{% for post in site.categories.news %}

<div class="news__item">
<div class="news__item__image">
{% if post.image %}
<img src="/assets/img/news/{{post.image}}" />
{% endif %}
</div>
<div class="news__item__info">
<h3 class="news__item__title"><a href="{{post.url}}">{{post.title}}</a></h3>

<!-- <strong>{{post.date | date: "%b %e %Y"}}</strong> -->

<p class="news__item__summary">{{post.summary}}</p>

<a href="{{post.url}}" class="news__item__button"><button>Read more ></button></a>

</div>
</div>

{% endfor %}
