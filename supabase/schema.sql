-- BCBR Quiz App: Supabase schema
-- Run this once in your Supabase project (SQL Editor -> New query -> Run).
--
-- Row level security is enabled at the end of this file with no policies, so the
-- tables are reachable only with the secret service_role key that the server uses
-- (SUPABASE_SERVICE_ROLE_KEY). Never put that key in a VITE_ variable or the repo.

create table if not exists users (
  id bigint generated always as identity primary key,
  username text not null unique,
  password_hash text not null,
  full_name text,
  college text,
  place text,
  qualification text,
  email text,
  has_accepted_disclaimer boolean not null default false,
  has_seen_ai_warning boolean not null default false,
  progress jsonb not null default '{}'::jsonb,
  score integer not null default 0,
  token_version integer not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists users_score_idx on users (score desc);

-- Cache of AI-generated explanations, shared by all users
create table if not exists explanations (
  id bigint generated always as identity primary key,
  cache_key text not null unique,
  explanation_text text not null,
  created_at timestamptz not null default now()
);

-- "Report a question" submissions
create table if not exists reports (
  id bigint generated always as identity primary key,
  username text,
  question_id text,
  assignment_id text,
  report_type text,
  description text,
  contact text,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

-- General feedback submissions
create table if not exists feedback (
  id bigint generated always as identity primary key,
  username text,
  type text,
  message text not null,
  contact text,
  created_at timestamptz not null default now()
);

-- Lock the tables to the server's service_role key (see supabase/enable-rls.sql)
alter table users        enable row level security;
alter table explanations enable row level security;
alter table reports      enable row level security;
alter table feedback     enable row level security;
revoke all on users, explanations, reports, feedback from anon, authenticated;

-- Bumped on logout to invalidate existing JWTs (idempotent for existing databases)
alter table users add column if not exists token_version integer not null default 0;
