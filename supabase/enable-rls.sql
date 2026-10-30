-- Lock down the database: turn on row level security (RLS) for every app table.
--
-- With RLS off, anyone who has the project's public anon/publishable key can read
-- and change these tables directly through Supabase's REST API, bypassing the app.
-- With RLS on and no policies, only the secret service_role key (used by the server)
-- can access them.
--
-- ORDER MATTERS on a live site:
--   1. Set SUPABASE_SERVICE_ROLE_KEY on the server (Vercel env vars) and redeploy.
--   2. Then run this file in Supabase -> SQL Editor.
-- Running it before step 1 makes login and progress saving fail until step 1 is done.

alter table public.users        enable row level security;
alter table public.explanations enable row level security;
alter table public.reports      enable row level security;
alter table public.feedback     enable row level security;

-- Remove any policies that open these tables to the public anon/authenticated roles.
do $$
declare p record;
begin
  for p in
    select schemaname, tablename, policyname from pg_policies
    where schemaname = 'public' and tablename in ('users', 'explanations', 'reports', 'feedback')
  loop
    execute format('drop policy if exists %I on %I.%I', p.policyname, p.schemaname, p.tablename);
  end loop;
end $$;

-- Belt and braces: the public roles get no direct table privileges at all.
revoke all on public.users, public.explanations, public.reports, public.feedback from anon, authenticated;

-- Check: every row should show rowsecurity = true
select tablename, rowsecurity from pg_tables
where schemaname = 'public' and tablename in ('users', 'explanations', 'reports', 'feedback');
