# PGfinder

Find and compare Paying Guest (PG) accommodations — search listings, view details, and contact owners.  
This repository is organized into two top-level folders: `Backend/` (API) and `Frontend/` (web app).

Status
- Prototype / initial scaffold
- Language: JavaScript
- Structure: Backend/ and Frontend/
- Last updated: 2026-01-04

Table of contents
- About
- Features
- Tech stack
- Repo layout
- Quick start
  - Prerequisites
  - Run Backend
  - Run Frontend
- Example API (quick)
- Development workflow
- Contributing
- Roadmap
- License

About
PGfinder is a small project to help people discover paying-guest (PG) accommodations. The goal is to provide a searchable directory of PG listings with filters for location, price, amenities, and contact options for owners.

Features
- Search listings by city/area
- Filter by price, amenities, occupancy, and gender preference
- View listing details and owner contact information
- Admin interface (planned) to add/manage listings

Tech stack (suggested)
- Backend: Node.js + Express (or your preferred framework)
- Frontend: React (create-react-app / Vite) or plain HTML/CSS/JS
- Database: MongoDB / PostgreSQL / SQLite (choose as needed)
- Optional: Docker for local development, GitHub Actions for CI

Repository layout
- Backend/ — API server (routes, controllers, models)
- Frontend/ — Web application (UI, components, services)
- .gitignore
- README.md (this file)

Quick start

Prerequisites
- Node.js (>= 16) and npm or yarn
- (Optional) MongoDB, PostgreSQL, or SQLite depending on your choice
- Git

Clone the repo
```bash
git clone https://github.com/Adityashukla9115/PGfinder.git
cd PGfinder
```

Run Backend (example)
1. Open a terminal and go to Backend/
```bash
cd Backend
```
2. Install dependencies
```bash
npm install
# or
yarn
```
3. Configure environment variables
Create a `.env` file (example)
```
PORT=4000
DATABASE_URL=mongodb://localhost:27017/pgfinder
JWT_SECRET=replace-with-a-strong-secret
```
4. Start the server
```bash
npm start
# or for development with auto-reload:
npm run dev
```
The API should be available at `http://localhost:4000` (or the port you configured).

Run Frontend (example)
1. Open a separate terminal and go to Frontend/
```bash
cd Frontend
```
2. Install dependencies
```bash
npm install
# or
yarn
```
3. Configure environment variables (if needed)
Create `.env` with the API base URL, for example:
```
VITE_API_BASE_URL=http://localhost:4000
```
4. Start the dev server
```bash
npm start
# or
npm run dev
```
Visit `http://localhost:3000` (or the port used by your frontend tooling).

Example API (quick reference)
Note: Update this section to match your actual implementation.

- GET /api/listings
  - Query params: q, city, minPrice, maxPrice, amenities
  - Returns: list of PG listings

- GET /api/listings/:id
  - Returns: detail for a listing

- POST /api/listings
  - Body: listing data (protected / admin)
  - Creates a new listing

- POST /api/auth/login
  - Body: { email, password }
  - Returns: auth token

Development workflow
- Branching
  - Use feature branches named `feat/<name>` or `fix/<name>`
  - Open pull requests against `main`
- Coding style
  - Use ESLint + Prettier (recommended)
- Tests
  - Add unit tests for backend and frontend components
- CI
  - Add GitHub Actions for linting, testing, and build checks

Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a branch: `git checkout -b feat/my-feature`
3. Make changes and add tests
4. Commit and push
5. Open a Pull Request describing your changes

If you plan to contribute code, please open an issue first describing the feature or bug so we can discuss the approach.

Roadmap
Planned items:
- [ ] Implement core Backend API and database models
- [ ] Implement Frontend search and listing pages
- [ ] Authentication + owner dashboards
- [ ] Tests + CI (GitHub Actions)
- [ ] Docker compose for local dev
- [ ] Deployment guide (Vercel / Heroku / DigitalOcean)

License
Add a LICENSE file (recommended: MIT) to make it clear how others may use the project.

Contact / Author
Adityashukla9115 — https://github.com/Adityashukla9115

Acknowledgements
- Built as a prototype and learning project.
- Contributions and feedback are appreciated.

Notes
This README is a scaffold. Replace example commands, variables, and API endpoints with the real details once you add the Backend and Frontend code. If you’d like, I can also:
- create the README file in the repo,
- add a LICENSE file,
- or scaffold minimal Backend/Frontend starter files (package.json, simple server, simple React app).

```
