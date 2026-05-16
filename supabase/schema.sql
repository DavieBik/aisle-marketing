-- Contact form submissions
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'replied', 'archived')),
  read_at TIMESTAMPTZ,
  replied_at TIMESTAMPTZ
);

-- Replies sent from /admin/inbox
CREATE TABLE replies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id UUID REFERENCES contact_submissions(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  sent_by TEXT NOT NULL,
  body TEXT NOT NULL,
  resend_message_id TEXT
);

-- Editable testimonials shown on the home page
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  display_order INTEGER NOT NULL,
  quote TEXT NOT NULL,
  author_name TEXT NOT NULL,
  author_role TEXT,
  author_photo_url TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  updated_by TEXT
);

-- Editable hero content (single row, id always 1)
CREATE TABLE hero_content (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  headline TEXT NOT NULL,
  subhead TEXT NOT NULL,
  image_url TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  updated_by TEXT
);

-- Seed hero
INSERT INTO hero_content (id, headline, subhead, image_url)
VALUES (
  1,
  'Your wedding''s beautiful home.',
  'A boutique home for every guest, gift, ceremony, and quiet moment of your wedding. From engagement to thank-you cards, in one beautifully designed place.',
  '/images/hero-rings.jpg'
);

-- Seed three placeholder testimonials (Carol replaces post-launch)
INSERT INTO testimonials (display_order, quote, author_name, author_role) VALUES
  (1, 'It held our wedding the way a good friend would. Quietly, completely, without drama.', 'Amelia and Jonah', 'Married Dec 2026'),
  (2, 'My mother could finally help without us losing track of what she said yes to. That alone was worth it.', 'Priya and Daniel', 'Married Feb 2027'),
  (3, 'We had family on three continents and an app that somehow made it feel small. We kept everything, even the thank-you notes.', 'Sofia and Marco', 'Married May 2027');

-- Supabase Storage bucket for hero image and testimonial photos
INSERT INTO storage.buckets (id, name, public) VALUES ('marketing-assets', 'marketing-assets', true);
