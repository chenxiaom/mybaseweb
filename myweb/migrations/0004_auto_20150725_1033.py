# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myweb', '0003_delete_bj'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Person',
        ),
        migrations.DeleteModel(
            name='Test',
        ),
    ]
