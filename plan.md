# Double Pendulum (Flask + Canvas)

This simulation was created to be used as skeleton code as part of Hack Club's Accelerate Program.

## Project Structure
- `app.py` — Flask app, `DoublePendulum` class, background simulation, routes
- `templates/index.html` — Canvas animation and polling logic
- `requirements.txt` — Python dependencies


## Quickstart

### 1) Create & activate a virtual environment (Windows PowerShell)
```powershell
py -m venv .venv; .\.venv\Scripts\Activate.ps1
```

### 2) Install dependencies
```powershell
pip install -r requirements.txt
```

### 3) Run the server
```powershell
$env:FLASK_APP = "app"
flask run
```
Then open http://127.0.0.1:5000 in your browser.

## Troubleshooting
- If you see ImportErrors, ensure you installed from `requirements.txt` into the active venv.
- If animation stutters, lower `dt`, increase poll frequency, or reduce `MAX_TRAIL`.

## License
MIT — see project materials.
