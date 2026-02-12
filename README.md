# aerial-damage-assessment
Automated Disaster Damage Assessment from Aerial Imagery

## Structure
- frontend: React + Vite + Tailwind + shadcn/ui starter
- backend: FastAPI starter

## Frontend setup
```bash
cd frontend
npm install
npm run dev
```

## Backend setup
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

## Health check
Open http://localhost:8000/health to verify the API is running.
