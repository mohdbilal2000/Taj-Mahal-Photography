import { ShieldCheck, Award, Camera, Clock } from 'lucide-react';

export default function AuthoritySection() {
  const features = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-gold-500" />,
      title: "Government Licensed",
      description: "Officially certified by the Ministry of Tourism after passing rigorous examinations."
    },
    {
      icon: <Award className="h-8 w-8 text-gold-500" />,
      title: "Authorized Access",
      description: "Legal permit holder allowed to conduct professional photography inside the premises."
    },
    {
      icon: <Camera className="h-8 w-8 text-gold-500" />,
      title: "Premium Equipment",
      description: "Shooting with top-tier full-frame cameras and professional prime lenses."
    },
    {
      icon: <Clock className="h-8 w-8 text-gold-500" />,
      title: "Fast Delivery",
      description: "High-resolution, professionally edited photos delivered within 48 hours."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 mb-4">Why Choose a Licensed Photographer?</h2>
          <p className="text-gray-600 leading-relaxed">
            Not everyone with a camera is allowed to shoot professionally inside the Taj Mahal. As a government-approved photographer, I ensure a seamless, legal, and premium experience without interruptions from security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-marble-200 rounded-lg text-center hover:shadow-lg transition-shadow bg-marble-50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-ink-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
