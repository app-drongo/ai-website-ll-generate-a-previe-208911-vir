'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Zap,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
  Palette,
  Code2,
  Headphones,
  Lock,
} from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FEATURES = {
  badge: 'Core Features',
  mainTitle: 'Everything Your Small Business Needs',
  mainTitleHighlight: 'All in One Accounting Platform',
  mainDescription:
    'Streamline your finances with automated bookkeeping, real-time reporting, and tax preparation tools designed specifically for small businesses.',
  feature1Title: 'Automated Bookkeeping',
  feature1Description:
    'Connect your bank accounts and credit cards for automatic transaction categorization and reconciliation.',
  feature1Badge: 'Automation',
  feature2Title: 'Bank-Level Security',
  feature2Description:
    '256-bit SSL encryption and SOC 2 compliance to keep your financial data safe and secure.',
  feature2Badge: 'Security',
  feature3Title: 'Mobile Expense Tracking',
  feature3Description:
    'Snap photos of receipts on-the-go and automatically extract expense data with AI-powered scanning.',
  feature3Badge: 'Mobile',
  feature4Title: 'Multi-Entity Management',
  feature4Description:
    'Manage multiple businesses or locations from one dashboard with separate books and reporting.',
  feature4Badge: 'Multi-Business',
  feature5Title: 'Real-Time Financial Reports',
  feature5Description:
    'Generate profit & loss, balance sheets, and cash flow statements instantly with live data updates.',
  feature5Badge: 'Reporting',
  feature6Title: 'Custom Chart of Accounts',
  feature6Description:
    'Set up industry-specific account structures with automated journal entries and workflows.',
  feature6Badge: 'Customization',
  feature7Title: 'QuickBooks & Xero Sync',
  feature7Description:
    'Seamlessly import data from existing accounting software or integrate with 200+ business apps.',
  feature7Badge: 'Integration',
  feature8Title: 'Expert CPA Support',
  feature8Description:
    'Get help from certified accountants via chat, email, or phone with unlimited consultations.',
  feature8Badge: 'Support',
  feature9Title: 'Tax-Ready Reports',
  feature9Description:
    'Automatically organize transactions for tax season with Schedule C and 1099 preparation tools.',
  feature9Badge: 'Tax Prep',
  ctaQuestion: 'Ready to simplify your small business accounting?',
  primaryCTA: 'Start Free 30-Day Trial',
  primaryCTAHref: '/',
  secondaryCTA: 'Book a Demo',
  secondaryCTAHref: '/',
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();

  const features = [
    {
      icon: Zap,
      title: config.feature1Title,
      description: config.feature1Description,
      badge: config.feature1Badge,
    },
    {
      icon: Shield,
      title: config.feature2Title,
      description: config.feature2Description,
      badge: config.feature2Badge,
    },
    {
      icon: Smartphone,
      title: config.feature3Title,
      description: config.feature3Description,
      badge: config.feature3Badge,
    },
    {
      icon: Globe,
      title: config.feature4Title,
      description: config.feature4Description,
      badge: config.feature4Badge,
    },
    {
      icon: BarChart3,
      title: config.feature5Title,
      description: config.feature5Description,
      badge: config.feature5Badge,
    },
    {
      icon: Palette,
      title: config.feature6Title,
      description: config.feature6Description,
      badge: config.feature6Badge,
    },
    {
      icon: Code2,
      title: config.feature7Title,
      description: config.feature7Description,
      badge: config.feature7Badge,
    },
    {
      icon: Headphones,
      title: config.feature8Title,
      description: config.feature8Description,
      badge: config.feature8Badge,
    },
    {
      icon: Lock,
      title: config.feature9Title,
      description: config.feature9Description,
      badge: config.feature9Badge,
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <span data-editable="badge">{config.badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{config.mainTitle}</span>
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable="mainDescription">{config.mainDescription}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient - pointer-events-none allows clicks to pass through */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      <span data-editable={`feature${index + 1}Badge`}>{feature.badge}</span>
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    <span data-editable={`feature${index + 1}Title`}>{feature.title}</span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    <span data-editable={`feature${index + 1}Description`}>
                      {feature.description}
                    </span>
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border - pointer-events-none allows clicks to pass through */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            <span data-editable="ctaQuestion">{config.ctaQuestion}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="px-6 py-3"
              onClick={() => navigate(config.primaryCTAHref)}
              data-editable-href="primaryCTAHref"
              data-href={config.primaryCTAHref}
            >
              <span data-editable="primaryCTA">{config.primaryCTA}</span>
            </Button>
            <Button
              variant="outline"
              className="px-6 py-3"
              onClick={() => navigate(config.secondaryCTAHref)}
              data-editable-href="secondaryCTAHref"
              data-href={config.secondaryCTAHref}
            >
              <span data-editable="secondaryCTA">{config.secondaryCTA}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
