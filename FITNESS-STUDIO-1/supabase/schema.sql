-- Example Supabase schema for the fitness studio project

-- Members table: people who have memberships
create table if not exists public.members (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text unique not null,
  phone text,
  created_at timestamptz default now()
);

-- Trainers table
create table if not exists public.trainers (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  bio text,
  specialty text,
  created_at timestamptz default now()
);

-- Classes table
create table if not exists public.classes (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  difficulty text,
  trainer_id uuid references public.trainers(id) on delete set null,
  start_time timestamptz,
  end_time timestamptz,
  created_at timestamptz default now()
);

-- Membership plans
create table if not exists public.membership_plans (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  price_monthly numeric(10,2) not null,
  description text,
  created_at timestamptz default now()
);

-- Member subscriptions to plans
create table if not exists public.member_memberships (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references public.members(id) on delete cascade,
  plan_id uuid references public.membership_plans(id) on delete restrict,
  started_at timestamptz default now(),
  ends_at timestamptz,
  active boolean default true,
  created_at timestamptz default now()
);

-- Contact messages from the website contact form
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz default now()
);


