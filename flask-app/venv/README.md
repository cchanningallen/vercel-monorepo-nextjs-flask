```
. venv/bin/activate
cd venv
export FLASK_APP=index.py
export FLASK_ENV=development
export PYTHONPATH="$PYTHONPATH:./lib/python3.9/site-packages" && flask run
```
