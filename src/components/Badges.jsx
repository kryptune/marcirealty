export default function Badges() {
  const baseBadges = ["equal-house", "pahrump-valley", "realtor", "ridge1"];
  const badges = Array(6).fill(baseBadges).flat();
  const badgesElement = badges.map((badge, index) => (
    <img
      key={index}
      src={`/logo/realty/${badge}.webp`}
      alt="Badge logo"
      className="w-12 h-12 md:w-auto md:h-auto"
    />
  ));
  return (
    <div className="overflow-hidden whitespace-nowrap group bg-white p-8 md:p-12">
      <div className="flex animate-scroll group-hover:[animation-play-state:paused] gap-8 md:gap-20">
        {badgesElement}
      </div>
    </div>
  );
}
