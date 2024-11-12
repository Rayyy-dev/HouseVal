"use client";

const generateInitialsAvatar = (index: number) => {
  const colors = [
    'bg-blue-500', 'bg-emerald-500', 'bg-purple-500', 
    'bg-amber-500', 'bg-rose-500', 'bg-cyan-500'
  ];
  const initials = ['JD', 'AR', 'MS', 'KL', 'RB', 'TC'];
  
  return (
    <div 
      className={`w-8 h-8 rounded-full ${colors[index]} flex items-center justify-center text-xs font-medium text-white ring-2 ring-background`}
    >
      {initials[index]}
    </div>
  );
};

export function AvatarStack() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex -space-x-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div 
            key={i}
            className="relative transition-transform hover:scale-110 hover:z-10"
            style={{ zIndex: 6 - i }}
          >
            {generateInitialsAvatar(i)}
          </div>
        ))}
      </div>
      <span className="text-sm font-medium bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        10k+ Users
      </span>
    </div>
  );
} 