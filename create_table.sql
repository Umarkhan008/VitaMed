-- Create the posts table
create table public.posts (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  content text,
  excerpt text,
  image text,
  author text,
  tag text,
  date timestamp with time zone default timezone('utc'::text, now()) not null,
  views integer default 0,
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Enable Row Level Security (RLS)
alter table public.posts enable row level security;

-- Create policy to allow everyone to read posts (SELECT)
create policy "Enable read access for all users"
on public.posts for select
to anon
using (true);

-- Create policy to allow everyone (or authenticated users) to insert/update/delete
-- NOTE: for simplicity with 'anon' key in this public demo, we allow all.
-- In production, you might restrict this to authenticated users only.
create policy "Enable insert for all users"
on public.posts for insert
to anon
with check (true);

create policy "Enable update for all users"
on public.posts for update
to anon
using (true);

create policy "Enable delete for all users"
on public.posts for delete
to anon
using (true);
