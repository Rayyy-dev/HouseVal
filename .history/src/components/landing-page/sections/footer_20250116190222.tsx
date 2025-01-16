"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Mail, ChevronRight } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "API", href: "#" },
    { label: "Documentation", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-primary/[0.02]">
      {/* Modern Geometric Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full bg-[linear-gradient(to_right,transparent_0%,primary/5_50%,transparent_100%)] animate-aurora" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_500px_at_50%_200px,primary/30,transparent)]" />
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-50" />
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-50" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-50" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-50" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <h4 className="text-2xl font-bold text-primary">HouseVal</h4>
              </motion.div>
              <div className="absolute -inset-1 bg-primary/10 blur-lg rounded-full opacity-50" />
            </div>
            
            <p className="text-muted-foreground/80">
              AI-powered house price predictions for the modern real estate market.
            </p>

            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative h-10 w-10 rounded-xl hover:bg-primary/10 hover:scale-110 transition-all duration-300 group"
                  >
                    <Icon className="h-5 w-5 text-primary/60 group-hover:text-primary transition-colors" />
                    <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {Object.entries({ Product: footerLinks.product, Company: footerLinks.company, Legal: footerLinks.legal }).map(([title, links], idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
            >
              <h4 className="font-semibold mb-6 text-foreground/90">{title}</h4>
              <ul className="space-y-4">
                {links.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * (i + 1) }}
                  >
                    <a
                      href={link.href}
                      className="group flex items-center text-muted-foreground/70 hover:text-primary transition-colors"
                    >
                      <ChevronRight className="h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      <span>{link.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-primary/10"
        >
          <div className="text-center text-sm text-muted-foreground/70">
            <p className="relative inline-block">
              © 2024 HouseVal. All rights reserved.
              <div className="absolute -inset-1 bg-primary/5 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 