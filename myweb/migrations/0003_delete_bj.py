# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myweb', '0002_bj'),
    ]

    operations = [
        migrations.DeleteModel(
            name='bj',
        ),
    ]
