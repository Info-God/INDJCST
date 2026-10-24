import React from "react";
import MetaDataWrapper from "../../components/layout/MetaDataWrapper";
import CommonLayout from "../../components/layout/CommonLayout";

const CseJournalTopComputerScienceJournalsInIndiaIndjcst: React.FC = () => {
  return (
    <MetaDataWrapper
      titleDynamic="Top Computer Science Journals in India | UGC & Scopus Indexed"
      desciptionDynamic="Explore top computer science journals in India. UGC-approved and Scopus indexed journals for Indian researchers and scholars."
    >
      <CommonLayout>
        {/* About Section */}
        <section className="py-5">
          <h1 className="text-3xl font-bold mb-6">
            🟩 About INDJCST – Leading CSE Journal in India
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            The Indian Journal of Computer Science and Technology (INDJCST) is a
            top-tier CSE journal recognized among computer science journals in
            India for publishing high-quality research across all domains of
            Computer Science and Technology. Published three times a year,
            INDJCST offers an open-access, peer-reviewed platform for
            academicians, educators, researchers, engineers, and industry
            professionals to share innovative research and technological
            advancements.
          </p>
          <p className="mb-6">
            Adhering strictly to UGC-CARE guidelines, INDJCST ensures a robust
            peer-review process, maintaining the highest standards of academic
            integrity and credibility.
          </p>

          <h2 className="text-2xl font-semibold mb-4">🔹 Scope of the Journal</h2>
          <ul className="list-disc list-inside space-y-1 mb-8">
            <li>Artificial Intelligence & Machine Learning</li>
            <li>Data Science & Big Data Analytics</li>
            <li>Internet of Things (IoT)</li>
            <li>Cloud & Edge Computing</li>
            <li>Cybersecurity & Cryptography</li>
            <li>Software Engineering & Programming Languages</li>
            <li>Computer Networks & Network Security</li>
            <li>Image Processing & Computer Vision</li>
            <li>Natural Language Processing</li>
            <li>Human-Computer Interaction</li>
            <li>Web Technologies & Mobile Computing</li>
            <li>Blockchain Technology</li>
            <li>Robotics & Automation</li>
            <li>Embedded Systems</li>
            <li>Computational Intelligence</li>
            <li>Bioinformatics & Health Informatics</li>
            <li>Information Systems & Database Management</li>
          </ul>
          <p>
            INDJCST encourages interdisciplinary research and practical
            applications of computing technologies, making it one of the leading
            computer science journals in India.
          </p>
        </section>

        {/* Why Choose Section */}
        <section className="py-10 px-5 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">
            🟨 Why Choose INDJCST?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>⚡ Rapid Peer Review – Decisions within 3 days.</li>
            <li>🌐 Open Access – Immediate visibility worldwide.</li>
            <li>✅ Efficient Publication Process – Streamlined workflow ensures timely communication.</li>
            <li>🔒 Plagiarism Protection – Ensuring academic integrity with advanced tools.</li>
            <li>📜 COPE Compliance – Maintaining highest standards in publication ethics.</li>
            <li>🌟 Global Impact – Research that shapes policies and drives innovation.</li>
          </ul>
        </section>

        {/* Indexing Section */}
        <section className="py-10">
          <h2 className="text-2xl font-semibold mb-4">🟧 Indexing & Abstracting</h2>
          <p className="mb-4">
            INDJCST is indexed in major scholarly databases, improving visibility
            and credibility:
          </p>
          <p>
            Google Scholar • Scribd • ISSUU • Elsevier Mendeley • EuroPub • DRJI •
            Academic Keys • Edocr • I2OR • PDFSR • ResearchBIB • SSRN • WorldCAT •
            Exlibris (Clarivate) • Thomson Reuters Research ID • Semantic Scholar •
            Dimensions • PlumX
          </p>
        </section>

        {/* Publication Process */}
        <section className="py-10 px-5 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">🟥 Streamlined Publication Process</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>📩 Submit Online – 24/7 via editorial management system</li>
            <li>⏳ Initial Response – Within 12 hours</li>
            <li>👨🏫 Expert Peer Review – Completed within 2 days</li>
            <li>📢 Decision Notification – Acceptance/rejection within 3 days</li>
            <li>📜 Publication & Certificate – Instant PDF and digital certificate</li>
          </ul>
        </section>

        {/* Charges */}
        <section className="py-10">
          <h2 className="text-2xl font-semibold mb-4">🟦 Article Processing Charges</h2>
          <p className="mb-4">Open-access publication with minimal fees:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Indian Authors – Without DOI: ₹1200 + 18% GST</li>
            <li>Indian Authors – With DOI: ₹1400 + 18% GST</li>
            <li>International Authors – With DOI: $80 USD</li>
          </ul>
        </section>

        {/* Editorial System */}
        <section className="py-10 px-5 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">🟩 Advanced Editorial Management System</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Author Dashboard – Personalized submission history & status tracking</li>
            <li>Real-time Tracking – Monitor paper progress at every stage</li>
            <li>Automated Documents – Instant acceptance letters & copyright forms</li>
            <li>Easy Downloads – Certificates and published papers with a single click</li>
          </ul>
        </section>
      </CommonLayout>
    </MetaDataWrapper>
  );
};

export default CseJournalTopComputerScienceJournalsInIndiaIndjcst;
