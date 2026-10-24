import React from "react";
import MetaDataWrapper from "../../components/layout/MetaDataWrapper";
import CommonLayout from "../../components/layout/CommonLayout";

const TopComputerScienceJournalsList: React.FC = () => {
  return (
    <MetaDataWrapper
      titleDynamic="Top Computer Science Journals List | Indexed Research"
      desciptionDynamic="Access the top computer science journals list for publishing high-quality research. Peer-reviewed, indexed, and globally recognized."
    >
      <CommonLayout>
        {/* About Section */}
        <section className="py-5">
          <h1 className="text-3xl font-bold mb-6">
            🟩 Top Computer Science Journals List – INDJCST
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            The Indian Journal of Computer Science and Technology (INDJCST) is a
            top-tier CSE journal featured in the computer science journals list
            for high-quality research publications. Published three times a year,
            INDJCST provides an open-access, peer-reviewed platform for
            academicians, researchers, educators, engineers, and industry
            professionals to share innovative findings across all domains of
            Computer Science and Technology.
          </p>
          <p className="mb-6">
            Adhering to UGC-CARE guidelines, the journal follows a rigorous
            peer-review process to maintain the highest standards of scholarly
            excellence and publishing integrity.
          </p>

          <h2 className="text-2xl font-semibold mb-4">🔹 Areas of Publication</h2>
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
            We encourage interdisciplinary studies and practical applications of
            computing technologies in diverse domains.
          </p>
        </section>

        {/* Why Choose Section */}
        <section className="py-10 px-5  bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">
            🟨 Why Choose INDJCST – A Leading CSE Journal?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              ⚡ Rapid Peer Review – Decisions within 3 days, making us one of
              the fastest computer science journals.
            </li>
            <li>🌐 Open Access – Global visibility for your research immediately after publication.</li>
            <li>✅ Efficient Process – Quick responses at every stage from submission to publication.</li>
            <li>🔒 Plagiarism Protection – Maintaining academic integrity with advanced screening tools.</li>
            <li>📜 COPE Compliance – Following the highest standards of publication ethics.</li>
            <li>🌟 Impactful Research – Work that shapes policies, drives innovation, and advances computing knowledge.</li>
          </ul>
        </section>

        {/* Indexing Section */}
        <section className=" ">
          <h2 className="text-2xl font-semibold mb-4">🟧 Indexing & Abstracting</h2>
          <p className="mb-4">
            INDJCST is indexed in major scholarly databases, ensuring maximum
            reach and credibility:
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
          <h2 className="text-2xl font-semibold mb-4">🟥 Streamlined Publication Process</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>📩 Submit Online – 24/7 via our editorial system</li>
            <li>⏳ Initial Response – Within 12 hours</li>
            <li>👨🏫 Peer Review – Completed in 2 days</li>
            <li>📢 Decision Notification – Acceptance/rejection within 3 days</li>
            <li>📜 Publication & Certificate – Instant PDF and digital certificate</li>
          </ul>
        </section>

        {/* Charges */}
        <section className=" ">
          <h2 className="text-2xl font-semibold mb-4">🟦 Article Processing Charges</h2>
          <p className="mb-4">
            Open-access journal with minimal publication fees:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Indian Authors – Without DOI: ₹1200 + 18% GST</li>
            <li>Indian Authors – With DOI: ₹1400 + 18% GST</li>
            <li>International Authors – With DOI: $80 USD</li>
          </ul>
        </section>

        {/* Editorial System */}
        <section className="py-10 px-5  bg-gray-50">
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

export default TopComputerScienceJournalsList;
