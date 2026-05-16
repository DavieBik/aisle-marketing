import Link from "next/link";

export default function AdminUnauthorizedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      <h1 className="font-cormorant text-4xl text-ink">Not authorised</h1>
      <p className="mt-4 max-w-md font-outfit text-sm text-muted">
        This admin area is only for authorised The Aisle App team members. If
        you believe you should have access, contact hello@theaisleapp.com.
      </p>
      <Link
        href="/admin/login"
        className="mt-8 font-outfit text-sm text-brass hover:text-brass-dark"
      >
        Back to sign in
      </Link>
    </div>
  );
}
