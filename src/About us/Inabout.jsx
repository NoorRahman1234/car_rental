
import React from "react";

const Breadcrumb = () => (
  <div className="text-center mt-2">
    <p className="text-xs text-gray-400">
      <a href="#" className="hover:text-indigo-600 transition-colors font-semibold">Home</a>
      <span className="mx-1">/</span>
      <span className="font-semibold text-gray-700">About Us</span>
    </p>
  </div>
);

const FeatureCard = ({ title, description }) => (
  <div>
    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm sm:text-base">{description}</p>
  </div>
);

const AboutUsSection = () => {
  const featuresData = [
    {
      title: "Variety Brands",
      description: "Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit quam natoque ornare cursus viverra odio.",
    },
    {
      title: "Maximum Freedom",
      description: "Diam quam gravida ultricies velit duis consequat integer. Est aliquam posuere vel rhoncus massa volutpat in",
    },
    {
      title: "Awesome Support",
      description: "Eget adipiscing augue sit quam natoque ornare cursus viverra odio. Diam quam gravida ultricies velit",
    },
    {
      title: "Flexibility On The Go",
      description: "Vitae pretium nulla sed quam id nisl semper. Vel non in proin egestas dis. Faucibus rhoncus. Laculis dignissim aenean pellentesque nisl",
    },
  ];

  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-left">
        <div className="text-center pb-4 sm:pb-6 mb-6">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight">About Us</h1>
          <Breadcrumb />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-gray-900 text-left">
              Where every drive feels extraordinary
            </h2>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {featuresData.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

