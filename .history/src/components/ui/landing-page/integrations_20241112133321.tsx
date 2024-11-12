import Image from "next/image";

export function Integrations() {
  const technologies = [
    { name: "Python", icon: "/icons/python.svg" },
    { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
    { name: "Scikit-learn", icon: "/icons/scikit.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "NumPy", icon: "/icons/numpy.svg" }
  ];

  return (
    <section className="py-12 border-y border-border/40">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground mb-8">
          Powered by Industry-Leading Technologies
        </p>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 relative grayscale hover:grayscale-0 transition-all">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-muted-foreground">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 