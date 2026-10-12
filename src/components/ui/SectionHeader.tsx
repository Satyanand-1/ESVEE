import React from 'react';

interface SectionHeaderProps {
  label?: string;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  icon,
  title,
  description,
  centered = true,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${centered ? 'text-center mx-auto' : ''} ${className}`}>
      {label && (
        <span className="eyebrow mb-4">
          {icon}
          {label}
        </span>
      )}
      <h2 className="heading-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-lg text-body leading-relaxed ${centered ? 'max-w-2xl mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
