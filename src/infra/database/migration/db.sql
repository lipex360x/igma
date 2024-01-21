DROP schema IF EXISTS igma CASCADE;

CREATE schema igma;

CREATE TABLE igma.account (
  account_id uuid PRIMARY KEY,
	name text NOT NULL,
	cpf text NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
