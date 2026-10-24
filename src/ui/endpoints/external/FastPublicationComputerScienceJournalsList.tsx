import React from "react";
import MetaDataWrapper from "../../components/layout/MetaDataWrapper";
import CommonLayout from "../../components/layout/CommonLayout";

const FastPublicationComputerScienceJournalsList: React.FC = () => {
  return (
    <MetaDataWrapper
      titleDynamic="Fast Publication Computer Science Journals List | Quick Review"
      desciptionDynamic="Find fast publication computer science journals with quick review and acceptance. Ideal for researchers seeking faster visibility."
    >
      <CommonLayout>
        {/* About Section */}
        <section className="py-5">
          <h1 className="text-3xl font-bold mb-6">🟩 About INDJCST</h1>
          <p className="text-lg leading-relaxed mb-6">
            The Indian Journal of Computer Science and Technology (INDJCST) is a
            leading CSE journal and a top choice in the fast publication computer
            science journals list. Our journal publishes high-quality research
            papers across all domains of Computer Science and Technology. Published
            three times a year, INDJCST provides a trusted platform for
            academicians, researchers, educators, engineers, and industry
            professionals to share innovative research and contribute to
            technological advancement.
          </p>
          <p className="mb-6">Topics Covered:</p>
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
        </section>

        {/* Why Choose Section */}
        <section className="py-10 px-5  bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">
            🟨 Why Choose INDJCST – Your Trusted CSE Journal?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              ⚡ Rapid Peer Review – Get decisions within 3 days, featured in the
              fast publication computer science journals list.
            </li>
            <li>
              🌍 Open Access – Immediate global reach for policymakers,
              researchers, and industry leaders.
            </li>
            <li>
              ✅ Efficient Publication Process – Quick responses at every stage
              from submission to publication.
            </li>
            <li>
              🔒 Plagiarism Protection – Ensuring academic integrity with advanced
              screening systems.
            </li>
            <li>
              📜 COPE Compliance – Maintains highest standards of publication
              ethics.
            </li>
            <li>
              🌐 Global Impact – Research that influences policies, practices, and
              technological innovation worldwide.
            </li>
          </ul>
        </section>

        {/* Indexing Section */}
        <section className=" ">
          <h2 className="text-2xl font-semibold mb-4">🟧 Indexing & Abstracting</h2>
          <p className="mb-4">
            INDJCST is indexed in leading research platforms and publication sites:
          </p>
          <p>
            Google Scholar • Scribd • ISSUU • Elsevier Mendeley • EuroPub • DRJI •
            Academic Keys • Edocr • I2OR • PDFSR • ResearchBIB • SSRN • WorldCAT •
            Exlibris (Clarivate) • Thomson Reuters Research ID • Semantic Scholar •
            Dimensions • PlumX
          </p>
        </section>

        {/* Publication Process */}
        <section className="py-10 px-5  bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">
            🟥 Streamlined Publication Process
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>📩 Submit Online – 24/7 via our editorial management system</li>
            <li>⏳ Initial Response – Within 12 hours</li>
            <li>👨🏫 Expert Review – Completed in 2 days</li>
            <li>📢 Decision Notification – Acceptance/rejection within 3 days</li>
            <li>
              📜 Publication & Certificate – Instant PDF and digital certificate
            </li>
          </ul>
        </section>

        {/* Charges */}
        <section className=" ">
          <h2 className="text-2xl font-semibold mb-4">
            🟦 Article Processing Charges
          </h2>
          <p className="mb-4">
            Open-access publication with minimal fees after acceptance:
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
            <li>Author Dashboard – Track submission history & status</li>
            <li>Real-time Tracking – Monitor progress at every stage</li>
            <li>
              Automated Documents – Acceptance letters & copyright forms instantly
              generated
            </li>
            <li>
              Easy Downloads – Certificates and published papers with a single
              click
            </li>
          </ul>
        </section>
      </CommonLayout>
    </MetaDataWrapper>
  );
};

export default FastPublicationComputerScienceJournalsList;
