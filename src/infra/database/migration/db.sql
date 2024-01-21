DROP schema IF EXISTS igma CASCADE;

CREATE schema igma;

CREATE TABLE igma.accounts (
  account_id uuid PRIMARY KEY,
	name text NOT NULL,
	cpf text NOT NULL,
	birth_date TIMESTAMP NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
