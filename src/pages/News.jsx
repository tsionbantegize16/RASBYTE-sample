import React from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      title: "Rasbyte Launches New AI-Powered Security Platform",
      date: "March 15, 2024",
      category: "Company News",
      image: "/assets/images/news/ai-platform.jpg",
      excerpt: "Introducing our revolutionary AI-powered security platform that transforms how organizations protect their digital assets."
    },
    {
      title: "Rasbyte Achieves ISO 27001 Certification",
      date: "March 1, 2024",
      category: "Achievements",
      image: "/assets/images/news/iso-cert.jpg",
      excerpt: "We're proud to announce our ISO 27001 certification, demonstrating our commitment to information security excellence."
    },
    {
      title: "New Partnership with Global Tech Leader",
      date: "February 20, 2024",
      category: "Partnerships",
      image: "/assets/images/news/partnership.jpg",
      excerpt: "Strategic partnership announcement that will enhance our cybersecurity offerings and expand our global reach."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">Latest News & Updates</h1>
          <p className="text-lg text-primary-700 max-w-3xl mx-auto">
            Stay informed about our latest developments, achievements, and industry insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-primary-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{news.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{news.category}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  {news.title}
                </h3>
                <p className="text-primary-700 mb-4">{news.excerpt}</p>
                <button className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors">
            View All News
          </button>
        </div>
      </div>
    </div>
  );
};

export default News; 