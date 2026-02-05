CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    zip_code TEXT NOT NULL,
    household_income TEXT NOT NULL,
    health_status TEXT NOT NULL,
    date_of_birth TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    consent_given INTEGER NOT NULL DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);