"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/cinematic-logo-cloud-utils/marquee";

export type LogoCloudClient = {
  name: string;
  slug?: string;
  logo?: string;
  text?: boolean;
  className?: string;
  nameClassName?: string;
  invertDark?: boolean;
};

export interface CinematicLogoCloudProps {
  clients: LogoCloudClient[];
  variant?: "grid" | "marquee" | "marquee-named";
  className?: string;
  eyebrow?: string;
  description?: string;
}

export function CinematicLogoCloud({
  clients,
  variant = "grid",
  className,
  eyebrow = "Organizations We Have Worked With",
  description = "Our experience includes client, technology, delivery, and business relationships across different industries.",
}: CinematicLogoCloudProps) {
  const renderClient = (client: LogoCloudClient, size: "lg" | "sm" = "lg") => {
    if (client.logo) {
      return (
        <img
          src={client.logo}
          alt={client.name}
          className={cn(
            size === "lg" 
              ? "h-7 sm:h-8 max-w-[130px] w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
              : "h-6 sm:h-7 max-w-[110px] w-auto object-contain",
            client.className,
          )}
          loading="lazy"
        />
      );
    }
    if (client.text) {
      return (
        <span
          className={cn(
            size === "lg"
              ? "text-base sm:text-lg font-bold text-black"
              : "text-sm font-semibold text-black",
            client.className,
          )}
        >
          {client.name}
        </span>
      );
    }
    return (
      <img
        src={`https://cdn.simpleicons.org/${client.slug}`}
        alt={client.name}
        className={cn(
          size === "lg" ? "h-6 sm:h-7 w-auto" : "h-5 sm:h-6 w-auto",
          client.invertDark && "dark:invert",
        )}
        loading="lazy"
      />
    );
  };

  if (variant === "marquee") {
    return (
      <div className={cn("w-full py-8", className)}>
        <h2 className="mb-2 text-center text-xl sm:text-2xl font-bold tracking-tight text-black">
          {eyebrow}
        </h2>
        {description && (
          <p className="mb-8 text-center text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        <Marquee speed={35}>
          {clients.map((brand) => (
            <div
              key={brand.name}
              className="flex shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-xs mx-2.5"
            >
              {renderClient(brand, "sm")}
            </div>
          ))}
        </Marquee>
      </div>
    );
  }

  if (variant === "marquee-named") {
    return (
      <div className={cn("w-full py-8", className)}>
        <h2 className="mb-2 text-center text-xl sm:text-2xl font-bold tracking-tight text-black">
          {eyebrow}
        </h2>
        {description && (
          <p className="mb-8 text-center text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        <Marquee speed={40}>
          {clients.map((brand) => (
            <div
              key={brand.name}
              className="flex shrink-0 items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-4 py-2.5 shadow-xs mx-2"
            >
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className={cn(
                    "h-5 max-w-[85px] w-auto shrink-0 object-contain",
                    brand.className,
                  )}
                  loading="lazy"
                />
              ) : brand.slug ? (
                <img
                  src={`https://cdn.simpleicons.org/${brand.slug}`}
                  alt={brand.name}
                  className={cn("h-4 w-4 shrink-0", brand.invertDark && "dark:invert")}
                  loading="lazy"
                />
              ) : null}
              <span className={cn("text-xs font-medium text-black", brand.nameClassName)}>
                {brand.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        
        {/* Crisp black heading with reduced size */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-black mb-2">
          {eyebrow}
        </h2>
        
        {description && (
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            {description}
          </p>
        )}

        {/* Spread horizontally across max width with smaller, balanced logo sizes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.04 } },
            hidden: {},
          }}
          className="flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-12 md:gap-x-14 lg:gap-x-16 gap-y-6 sm:gap-y-8 max-w-6xl mx-auto px-4"
        >
          {clients.map((brand) => (
            <motion.div
              key={brand.name}
              variants={{
                hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="group flex items-center justify-center shrink-0 px-2 transition-transform duration-200"
            >
              {renderClient(brand, "lg")}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default CinematicLogoCloud;
