import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Database, TrendingUp, BarChart3, Building, Shield } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Corporate Finance Advisory",
      items: [
        "M&A Advisory: Valuation & Deals",
        "Capital Raising and Debt Structuring",
        "Real Estate Deals Structuring",
        "Portfolio Company Monitoring",
      ],
    },
    {
      icon: TrendingUp,
      title: "Investment Management",
      items: [
        "Family Office Management",
        "Investment Advisory Services",
        "Financial Strategic Planning",
        "Data-driven Capital Budgeting",
      ],
    },
    {
      icon: Database,
      title: "Data Science & Analytics",
      items: [
        "Big Data Analytics & Informatics",
        "Business Intelligence Support",
        "Tailored BI Dashboard Development",
        "Data Integration Consultancy",
      ],
    },
    {
      icon: BarChart3,
      title: "Research & Analysis",
      items: [
        "Secondary Analysis of Existing Data",
        "Data Quality Evaluations",
        "Research Planning & Design",
        "Data Management Infrastructure",
      ],
    },
  ];

  const industries = [
    { icon: Shield, name: "Healthcare" },
    { icon: Building, name: "Real Estate" },
    { icon: TrendingUp, name: "Banking" },
    { icon: Briefcase, name: "Insurance" },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] font-bold text-primary mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We combine business analytics, finance, and data science to drive value in our projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-medium hover:shadow-large transition-all duration-300 bg-gradient-card group hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-primary/5 group-hover:bg-secondary/10 flex items-center justify-center transition-colors">
                      <service.icon className="h-7 w-7 text-primary group-hover:text-secondary transition-colors" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-card-foreground mb-4">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industries */}
        <div className="bg-muted/30 rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl font-['Playfair_Display'] font-bold text-center text-primary mb-8">
            Key Industries Served
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-background transition-colors"
              >
                <industry.icon className="h-8 w-8 text-secondary" />
                <p className="text-sm font-medium text-foreground">{industry.name}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            And many more including Hospitality, Energy, Commerce, Retail & Food & Beverage
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
