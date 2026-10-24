import React from "react";
import MetaDataWrapper from "../../components/layout/MetaDataWrapper";
import CommonLayout from "../../components/layout/CommonLayout";

const BestComputerScienceJournals: React.FC = () => {
  return (
    <MetaDataWrapper
      titleDynamic="Best Computer Science Journals | Indexed & Trusted"
      desciptionDynamic="Discover the best computer science journals for research publication. Indexed, peer-reviewed, and recognized by global scholars."
    >
      <CommonLayout>
        {/* About Section */}
        <section className="py-5">
          <h1 className="text-3xl font-bold mb-6">
            🟩 About INDJCST
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            The Indian Journal of Computer Science and Technology (INDJCST) is a
            premier CSE journal and one of the best computer science journals
            dedicated to publishing high-quality research papers across all
            domains of Computer Science and Technology. Published three times a
            year, INDJCST provides a trusted platform for academicians,
            researchers, educators, engineers, and industry professionals to
            share innovative research and practical computing solutions.
          </p>
          <p className="mb-6">
            The journal covers a wide array of topics including:
          </p>
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
            INDJCST encourages interdisciplinary research and submissions
            demonstrating real-world applications of computing technologies.
            Every paper undergoes a rigorous peer-review process to maintain
            quality and academic integrity.
          </p>
        </section>

        {/* Why Choose Section */}
        <section className="py-10 px-5  bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">
            🟨 Why Choose INDJCST CSE Journal?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>⚡ Rapid Peer Review – Decisions within 3 days.</li>
            <li>🌍 Open Access Policy – Immediate online availability.</li>
            <li>✅ Efficient Process – Saves time from submission to publication.</li>
            <li>🔒 Plagiarism Protection – Ensures integrity with thorough checks.</li>
            <li>📜 COPE Compliance – Fully aligned with ethical publishing standards.</li>
            <li>🌐 Impact Beyond Academia – Research that shapes policy & industry.</li>
          </ul>
        </section>

        {/* Indexing Section */}
        <section className=" ">
          <h2 className="text-2xl font-semibold mb-4">🟧 Indexing & Abstracting</h2>
          <p className="mb-4">
            Our CSE journal is indexed in leading research paper publication
            sites ensuring visibility and credibility:
          </p>
          <p>
            Google Scholar • Scribd • ISSUU • Elsevier Mendeley • EuroPub • DRJI
            • Academic Keys • Edocr • I2OR • PDFSR • ResearchBIB • SSRN •
            WorldCAT • Exlibris (Clarivate) • Thomson Reuters Research ID •
            Semantic Scholar • Dimensions • PlumX
          </p>
        </section>

        {/* Publication Process */}
        <section className="py-10 px-5  bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">
            🟥 Streamlined Publication Process
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>📩 Submit Online – 24/7 through the editorial system</li>
            <li>⏳ Initial Response – Acknowledgment within 12 hours</li>
            <li>👨🏫 Expert Review – Completed in 2 days</li>
            <li>📢 Decision Notification – Acceptance/rejection in 3 days</li>
            <li>📜 Publication & Certificate – Instant PDF & digital certificate</li>
          </ul>
        </section>

        {/* Charges */}
        <section className=" ">
          <h2 className="text-2xl font-semibold mb-4">
            🟦 Article Processing Charges
          </h2>
          <p className="mb-4">
            Open-access publication ensures research is freely available online.
            Minimal fees apply after acceptance:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Indian Authors – Without DOI: ₹1200 + 18% GST</li>
            <li>Indian Authors – With DOI: ₹1400 + 18% GST</li>
            <li>International Authors – With DOI: $80 USD</li>
          </ul>
        </section>

        {/* Editorial System */}
        <section className="py-10 px-5  bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">
            🟩 Advanced Editorial Management System
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Author Dashboard – Submission history & status updates</li>
            <li>Real-time Tracking – Monitor progress at every stage</li>
            <li>Automated Documents – Instant acceptance letters & copyright forms</li>
            <li>Easy Downloads – One-click access to certificates & published papers</li>
          </ul>
        </section>
      </CommonLayout>
    </MetaDataWrapper>
  );
};

export default BestComputerScienceJournals;
