python -m venv venv 

.\venv\Scripts\activate.ps1 для powershell и \venv\Scripts\activate.bat для cmd

pip install -r requirements.txt

python manage.py makemigrations

python manage.py migrate

python manage.py runserver

python manage.py crearesuperuser если надо создать админа

если не работает python использовать python3 или добавить python в path
