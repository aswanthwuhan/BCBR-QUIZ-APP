-- BCBR Quiz App: Supabase schema
-- Run this once in your Supabase project (SQL Editor -> New query -> Run).
--
-- The server talks to these tables with SUPABASE_ANON_KEY, so row level security
-- is left off. Keep SUPABASE_ANON_KEY server-side only (never in a VITE_ variable).

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
