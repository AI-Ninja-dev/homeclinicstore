import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

type ActionProps = {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  light?: boolean;
};

export function HomeAction({ href, children, secondary, light }: ActionProps) {
  return (
    <Link href={href} className={`hcs-action${secondary ? ' hcs-action-secondary' : ''}${light ? ' hcs-action-light' : ''}`}>
      {children}<ArrowUpRight size={17} aria-hidden="true" />
    </Link>
  );
}

export function SectionHeading({ eyebrow, title, children }: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="hcs-section-heading">
      <div><span className="hcs-eyebrow">{eyebrow}</span><h2>{title}</h2></div>
      {children && <p>{children}</p>}
    </div>
  );
}
