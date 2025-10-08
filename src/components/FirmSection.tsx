import { Card, CardContent } from "@/components/ui/card";
import { Building2, TrendingUp, Users, Award } from "lucide-react";

const FirmSection = () => {
  const highlights = [
    {
      icon: Building2,
      title: "Boutique Expertise",
      description: "Based in Santo Domingo, founded in September 2019",
    },
    {
      icon: TrendingUp,
      title: "Value Creation",
      description: "Creating and delivering value in every project and mission",
    },
    {
      icon: Users,
      title: "Long-term Focus",
      description: "Building lasting relationships for continuous stakeholder success",
    },
    {
      icon: Award,
      title: "Highest Standards",
      description: "Operating under the highest ethical and professional standards",
    },
  ];

  return (
    <section id="firm" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] font-bold text-primary mb-4">
            Our Firm
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a boutique advisory firm specializing in corporate finance advisory,
            investment management, and innovation through data science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-card group hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/5 group-hover:bg-secondary/10 transition-colors mb-4">
                  <item.icon className="h-8 w-8 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values Grid */}
        <div className="bg-primary/5 rounded-2xl p-8 sm:p-12">
          <h3 className="text-3xl font-['Playfair_Display'] font-bold text-center text-primary mb-12">
            Our Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Independence",
              "Creativity",
              "Excellence",
              "Objectivity",
              "Agility",
              "Innovation",
              "Entrepreneurship",
              "Confidentiality",
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg hover:bg-background transition-colors"
              >
                <p className="text-lg font-semibold text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirmSection;
