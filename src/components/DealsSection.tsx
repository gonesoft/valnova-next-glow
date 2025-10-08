import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Building2, Car, Home } from "lucide-react";

const DealsSection = () => {
  const deals = [
    {
      icon: Building2,
      client: "Instituto Materno Infantil SMDP",
      value: "US$7m+",
      description: "Expansion plan economic feasibility study and capital raising support. Selected as sole advisor to the clinic's Board of Directors.",
      category: "Healthcare",
    },
    {
      icon: DollarSign,
      client: "ARV Group",
      value: "US$12m+",
      description: "Sell-side valuation and negotiation support in the sale of a portfolio company. Selected as sole advisor to the family Board.",
      category: "Investment",
    },
    {
      icon: Car,
      client: "Undisclosed Client",
      value: "US$15m+",
      description: "Sell-side valuation and negotiation support in the sale of a car dealership. Services rendered in collaboration with Moonshot Advisory.",
      category: "Automotive",
    },
    {
      icon: Home,
      client: "Undisclosed Client",
      value: "US$50m+",
      description: "Real Estate business carve out analysis and debt restructuring. Services rendered in collaboration with Moonshot Advisory.",
      category: "Real Estate",
    },
  ];

  return (
    <section id="deals" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] font-bold text-primary mb-4">
            Selected Deals
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our track record of successful transactions and advisory engagements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {deals.map((deal, index) => (
            <Card
              key={index}
              className="border-0 shadow-medium hover:shadow-large transition-all duration-300 bg-gradient-card group hover:-translate-y-1 overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-gradient-accent flex items-center justify-center shadow-accent">
                      <deal.icon className="h-7 w-7 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-secondary uppercase tracking-wider mb-1">
                        {deal.category}
                      </p>
                      <h3 className="text-xl font-bold text-card-foreground">
                        {deal.client}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-3xl font-bold text-primary mb-2">{deal.value}</p>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {deal.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Our team has participated in many relevant M&A transactions across the Dominican Republic and Central America
          </p>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
