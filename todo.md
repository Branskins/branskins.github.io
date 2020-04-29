---
layout: default
title: TODO
---

{% for item in site.data.todo %}
  {% assign todo = item[1] %}
  - [{{todo.completed}}] {{ todo.content }}
{% endfor %}
