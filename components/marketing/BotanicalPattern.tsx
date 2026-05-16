export function BotanicalPattern({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M100 20c-8 30-40 50-40 80 0 20 15 35 40 40 25-5 40-20 40-40 0-30-32-50-40-80z"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.6"
      />
      <path
        d="M100 140v40M85 155h30"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.5"
      />
      <path
        d="M40 60c15 10 25 25 25 45M160 60c-15 10-25 25-25 45"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.4"
      />
    </svg>
  );
}
