import React from 'react';

const SocialNetwork = () => {
  return (
    <div className="max-w-4xl p-6 mx-auto bg-white shadow-lg rounded-lg text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">Social Network for Students</h1>
      <p className="text-xl mb-4 font-bold">
        Design a social networking app for connecting students and professionals in India, focusing on career guidance and networking opportunities.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Clarifying Questions:</h2>
        <ul className="list-disc list-inside">
          <li><b>Target Audience:</b> Are we focusing on school or college students? This helps refine the product’s scope.</li>
          <li><b>Domain Focus:</b> Is the focus exclusively on STEM, or should we consider expanding to other domains?</li>
          <li><b>Mode of Delivery:</b> Will the product provide opportunities through online mediums, offline modes, or a hybrid approach?</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Problem Statement:</h2>
        <ul className="list-disc list-inside">
          <li><b>Limited Career Exposure:</b> Many students lack awareness of potential career paths within STEM.</li>
          <li><b>Absence of Guidance:</b> Students from remote areas often have no access to mentors or advisors.</li>
          <li><b>Networking Barriers:</b> Building connections with professionals in their desired careers is challenging.</li>
          <li><b>Limited Market Solutions:</b> Existing solutions often fail to address these issues comprehensively.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Market Research:</h2>
        <p>
          Conduct a detailed analysis of existing platforms. Understand their strengths, weaknesses, and success factors. Identify gaps that our product can fill to provide a unique value proposition.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Proposed Solutions:</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Comprehensive Career Exploration:</strong> Provide students with detailed insights into various STEM careers. Offer interactive content such as career videos, case studies, and real-life project examples.
          </li>
          <li>
            <strong>Personalized Recommendations:</strong> Use segmentation based on age, educational level, and interests to suggest relevant projects or content. Allow students to explore whether specific career paths suit them.
          </li>
          <li>
            <strong>AI-Driven Forums and Discussions:</strong> Integrate AI to create group discussions or forums where students can interact with industry experts. Enable Q&A sessions, webinars, and mentorship programs.
          </li>
          <li>
            <strong>Roadmap for Career Growth:</strong> Based on student interests, provide tailored roadmaps for acquiring entry-level jobs or internships. Include step-by-step guidance on acquiring relevant skills and certifications.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Metrics for Success:</h2>
        <ul className="list-disc list-inside">
          <li><b>Daily Active Users (DAU):</b> Monitor the number of users engaging daily to track product usage and engagement.</li>
          <li><b>User Acquisition Rate:</b> Measure the rate at which new users join the platform to evaluate growth.</li>
          <li><b>Churn Rate:</b> Track the percentage of users who stop using the product. Analyze reviews to identify pain points and iterate on the app’s features.</li>
          <li><b>Application and Completion Metrics:</b> Track how many users apply for internships or complete projects through the platform. Use this data to measure the platform’s impact on student career growth.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Next Steps:</h2>
        <ul className="list-disc list-inside">
          <li>Refine the scope based on clarifying answers.</li>
          <li>Conduct deeper market research and user interviews.</li>
          <li>Develop prototypes and test solutions with a focus group.</li>
          <li>Launch a pilot version to gather feedback and iterate on the product.</li>
        </ul>
      </section>
    </div>
  );
};

export default SocialNetwork;
