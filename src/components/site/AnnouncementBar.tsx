const message = "FREE DELIVERY ON ORDERS ABOVE ₦50,000";
const message2 = "SHOP THE LATEST DROP";

export function AnnouncementBar() {
  const items = Array.from({ length: 6 }).flatMap(() => [message, message2]);

  return (
    <div className="surface-pink relative overflow-hidden text-primary-foreground">
      <div className="flex w-max animate-marquee items-center gap-10 py-2.5">
        {[...items, ...items].map((text, i) => (
          <span key={i} className="label-eyebrow flex shrink-0 items-center gap-10 opacity-95">
            {text}
            <span className="text-[0.5rem]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
