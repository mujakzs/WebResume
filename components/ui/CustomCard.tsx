'use client';

import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { Card as ShadcnCard, CardHeader, CardTitle, CardContent, CardAction } from './card';
import { Button } from './button';

interface CustomCardProps {
  children: React.ReactNode;
  title?: string;
  icon?: LucideIcon;
  className?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonHref?: string;
  buttonVariant?: React.ComponentProps<typeof Button>['variant'];
}

const CustomCard: React.FC<CustomCardProps> = ({ 
  children, 
  title, 
  icon: Icon, 
  className = "", 
  buttonText, 
  onButtonClick,
  buttonHref,
  buttonVariant,
}) => (
  <ShadcnCard className={className}>
    {title && (
      <CardHeader>
        <div className="flex items-center justify-between w-full">
          <CardTitle className="flex items-center">
            {Icon && <Icon className="w-5 h-5 mr-2 text-muted-foreground" />}
            {title}
          </CardTitle>
          {buttonText && (
            <CardAction>
              {buttonHref ? (
                <Button asChild variant={buttonVariant ?? 'link'} size="sm">
                  <Link href={buttonHref}>{buttonText} →</Link>
                </Button>
              ) : (
                <Button variant={buttonVariant ?? 'ghost'} size="sm" onClick={onButtonClick}>
                  {buttonText} →
                </Button>
              )}
            </CardAction>
          )}
        </div>
      </CardHeader>
    )}
    <CardContent className="space-y-4">
      {children}
    </CardContent>
  </ShadcnCard>
);

export default CustomCard;
