import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Nicolas Diaz Garelli",
      title: "Partner",
      credentials: "CFA",
      bio: "Nicolas is an economist specializing in Corporate Finance and Asset Management. He has more than 12 years of experience in private equity deals, valuation, investment structuring, project finance and value-based management. He holds the CFA designation (Chartered Financial Analyst), globally recognized as the gold standard in the investment management profession. He is the co-founder of two fast-growing companies in the healthcare industry in the Dominican Republic.",
      highlights: ["CFA Institute Member", "12+ Years Experience", "Healthcare Entrepreneur"],
    },
    {
      name: "Franck Diaz Garelli",
      title: "Partner",
      credentials: "PhD",
      bio: "Franck is an assistant professor of health informatics analytics focused on translating research into applications that support business development and healthcare operations improvement through advanced data analytics. His work supports the development of learning health systems worldwide. Franck has conducted world-class research including the development of new data science methodologies for data quality assessment.",
      highlights: ["PhD in Health Informatics", "AMIA Member", "EPIC EHR Certified"],
    },
  ];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-['Playfair_Display'] font-bold text-primary mb-4">
            Our Team
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our partners were professionally trained in France, USA, and Canada
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {team.map((member, index) => (
            <Card
              key={index}
              className="border-0 shadow-medium hover:shadow-large transition-all duration-300 bg-gradient-card group"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center shadow-accent">
                      <GraduationCap className="h-10 w-10 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-card-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-secondary mb-1">
                      {member.title} | {member.credentials}
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-2">
                  {member.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-primary/5 rounded-full text-xs font-medium text-primary"
                    >
                      <Award className="h-3 w-3" />
                      {highlight}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Affiliations */}
        <div className="bg-muted/30 rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl font-['Playfair_Display'] font-bold text-center text-primary mb-8">
            Affiliations & Accreditations
          </h3>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-bold text-foreground mb-2">CFA Institute</h4>
              <p className="text-sm text-muted-foreground">
                Bound to CFA Institute Code of Ethics and Standards of Professional Conduct
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-foreground mb-2">AMIA</h4>
              <p className="text-sm text-muted-foreground">
                American Medical Informatics Association member
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-foreground mb-2">EPIC EHR</h4>
              <p className="text-sm text-muted-foreground">
                Certified in health information management and data analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
