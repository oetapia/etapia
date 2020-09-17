from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'zh2v*fe5c&2ofpd=5t2tf@i$t%pkxc0(g*(bch@(myao*+(^y@'

# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = ['172.104.82.51','localhost'] 

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': os.environ.get('SQL_DATABASE', 'db_wagtail'),
        'USER': os.environ.get('SQL_USER', 'llama'),
        'PASSWORD': os.environ.get('SQL_PASSWORD', 'monkeymagician'),
        'HOST': os.environ.get('SQL_HOST', 'localhost'),
        'PORT': os.environ.get('SQL_PORT', '5432'),
    }
}

try:
    from .local import *
except ImportError:
    pass
