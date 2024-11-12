import Image from "next/image";

export function Integrations() {
  const technologies = [
    {
      name: "Python",
      icon: "/tech-logos/python.svg",
    },
    {
      name: "TensorFlow",
      icon: "/tech-logos/tensorflow.svg",
    },
    {
      name: "Scikit-learn",
      icon: "/tech-logos/scikit-learn.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://www.postgresql.org/media/img/about/press/elephant.png",
    },
    {
      name: "NumPy",
      icon: "https://numpy.org/images/logo.svg",
    },
  ];

  return (
    <section className="py-12 border-y border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground mb-8">
          Powered by Industry-Leading Technologies
        </p>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {technologies.map((tech) => (
            <div 
              key={tech.name} 
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-16 h-16 relative opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  fill
                  className="object-contain"
                  unoptimized // Since we're using external URLs
                />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 