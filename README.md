# Drugs and Wires

New site build for [Drugs and Wires](https://www.drugsandwires.fail) webcomic built in Jekyll.

## Convert XML to markup

(in order)

title, link and content:

```
<title><!\[CDATA\[(.+?)\]\]><\/title>\n\s+?<link>(.+?)<\/link>\n\s+?<pubDate>.*?<\/pubDate>\n\s+?<dc:creator>.+?<\/dc:creator>\n\s+?<guid.+?<\/guid>\n\s+?<description.+?<\/description>\n\s+?<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>\n\s+?<excerpt.+?<\/excerpt:encoded>

\n---\ntitle: $1\nredirect: $2\n---\n\n$3\n\n
```

date:

```
<wp:post_date><!\[CDATA\[(.+?) .+?<\/wp:post_date>

\n\ndate: $1\n\n
```

remove pingbacks:

```
<wp:comment>[\n\s\S]+?<!\[CDATA\[pingback\]\]>[\s\S]+?<\/wp:comment>
```

comments:

```
<wp:comment>\n\s+<wp:comment_id>(.+?)<\/wp:comment_id>\n\s+<wp:comment_author><!\[CDATA\[(.+?)\]\]><\/wp:comment_author>\n\s+<wp:comment_author_email><!\[CDATA\[(.+?)\]\]><\/wp:comment_author_email>\n\s+<wp:comment_author_url>(.*?)<\/wp:comment_author_url>[\s\S]+?<wp:comment_date><!\[CDATA\[(.*?)\]\]><\/wp:comment_date>[\s\S]+?<wp:comment_content><!\[CDATA\[([\s\S]*?)\]\]><\/wp:comment_content>[\s\S]+?<wp:comment_parent>(.*?)<\/wp:comment_parent>[\s\S]+?<\/wp:comment>

\nCOMMENT\nwordpress_id: $1\nauthor: $2\nauthor_email: $3\nauthor_url: $4\ndate: $5\ncontent: $6\nparent: $7\n
```

categories:

```
<category.+?nicename="(.+?)".+?<\/category>
category: $1
```

OR
storylines:

```
<category.+?domain="webcomic1_storyline".+?nicename="(.+?)".+?<\/category>
category: $1
```

AND
characters:

```
<category.+?domain="webcomic1_character".+?nicename="(.+?)".+?<\/category>
\ncharacter: $1\n
```

other wp data:

```
<wp.+?>.*?<\/wp:.+?>
```

remove html comments:

```
<!-- .+? -->([\s\S]+?)<!-- \/.+? -->
$1
```

figure images:

```
<figure.+?><a href="(.+?)".*?><img src="(.+?)".*?alt="(.*?)".*?><\/a><\/figure>

{% include newsimage.html imageurl="$1" imageurl2="$2" alt="$3" %}
```

link images:

```
<a href="(.+?)".*?><img.+?src="(.+?)".*?alt="(.+?)".*?>(.*?)<\/a>

{% include newsimage.html imageurl="$1" imageurl2="$2" alt="$3" caption="$4" %}
```

plain images:

```
<img.+?src="(.+?)".+?alt="(.*?)".*?>
\n\n{% include newsimage.html imageurl="$1" alt="$2" %}\n\n
```

replace italic links:

```

<em><a href="(.+?)".*?>(.+?)<\/a></em>
[_$2_]($1)

```

replace links:

```
<a href="(.+?)".*?>(.+?)<\/a>
[$2]($1)
```

replace italics:

```
<em>( *?)(.*?)( *?)</em>
$1_$2_$3
```

replace strong:

```
<strong>( *?)(.*?)( *?)</strong>
$1**$2**$3
```

replace headers:

```
<h2>(.+?)</h2>
## $1
```

remove uls:

```
<ul>\n*?([\s\S]+?)\n*?</ul>
\n\n$1\n\n

```

replace lis:

```
\s*?<li>(.+?)</li>
\n- $1
```
