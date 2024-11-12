"use client";

const generateInitialsAvatar = (index: number) => {
  const colors = [
    'from-blue-500 to-blue-600', 
    'from-emerald-500 to-emerald-600',
    'from-purple-500 to-purple-600',
    'from-amber-500 to-amber-600',
    'from-rose-500 to-rose-600',
    'from-cyan-500 to-cyan-600'
  ];
  const initials = ['JD', 'AR', 'MS', 'KL', 'RB', 'TC'];
  
  return (
    <div 
      className={`w-8 h-8 rounded-full bg-gradient-to-br ${colors[index]} flex items-center justify-center text-xs font-medium text-white shadow-lg ring-2 ring-background backdrop-blur-sm`}
    >
      {initials[index]}
    </div>
  );
};

export function AvatarStack() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div 
            key={i}
            className="relative transition-all duration-300 ease-out hover:scale-110 hover:z-10 hover:-translate-y-1"
            style={{ zIndex: 6 - i }}
          >
            {generateInitialsAvatar(i)}
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          10k+ Users
        </span>
        <span className="text-xs text-muted-foreground">
          Trust HouseVal
        </span>
      </div>
    </div>
  );
} 