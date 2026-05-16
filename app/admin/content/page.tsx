import { AdminShell } from "@/components/admin/AdminShell";
import { HeroEditor } from "@/components/admin/HeroEditor";
import { TestimonialEditor } from "@/components/admin/TestimonialEditor";
import { getHeroContent, getTestimonials } from "@/lib/marketing-content";

export default async function AdminContentPage() {
  const [hero, testimonials] = await Promise.all([
    getHeroContent(),
    getTestimonials(),
  ]);

  return (
    <AdminShell title="Content">
      <div className="space-y-12">
        <HeroEditor hero={hero} />
        <section>
          <h2 className="mb-6 font-cormorant text-2xl text-ink">Testimonials</h2>
          <p className="mb-6 font-outfit text-sm text-muted">
            Placeholder quotes are flagged until Carol replaces them with real
            couple stories.
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialEditor key={t.id} testimonial={t} />
            ))}
          </div>
        </section>
      </div>
    </AdminShell>
  );
}
