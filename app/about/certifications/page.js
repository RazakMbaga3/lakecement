import CertificationsClient from './page-client';

const certifications = [
  {
    category: "Quality Standards",
    items: [
      {
        image: "/images/certifications/iso-9001-logo.png",
        title: "ISO 9001:2008",
        downloadLink: "/docs/RENEWED DOCS/Latest ISO certificate- 2024 onwrad.pdf",
        alt: "ISO 9001 Logo",
        subItems: []
      },
      {
        image: "/images/certifications/tbs_logo.jpg",
        title: "TBS Licence",
        downloadLink: "/docs/RENEWED DOCS/TBS CERTIFICATE FROM 2024-07-02 TO 2025-07-01.pdf",
        alt: "TBS Logo",
        subItems: []
      }
    ]
  },
  {
    category: "Internal Test Results",
    items: [
      {
        title: "Internal 42.5 N test certificate",
        downloadLink: "/docs/RENEWED DOCS/TBS JUne 2024 42.5 N test results.pdf",
        subItems: []
      },
      {
        title: "Internal 42.5 R test certificate",
        downloadLink: "/docs/RENEWED DOCS/TBS 42.5 R JUne 2024 test results.pdf",
        subItems: []
      },
      {
        title: "Internal 32.5 N test certificate",
        downloadLink: "/docs/RENEWED DOCS/TBS JUNE 24 test report 32.5 N.pdf",
        subItems: []
      },
      {
        title: "Internal OPC test certificate",
        downloadLink: "/docs/RENEWED DOCS/TBS TEST REPORT NYATI CEMENT CEM I (OPC) 42.5N.pdf",
        subItems: []
      }
    ]
  },
  {
    category: "Other Certifications",
    items: [
      {
        image: "/images/certifications/tra.png",
        title: "VAT Certificate",
        downloadLink: "/docs/VAT CERTIFICATE.jpg",
        alt: "TRA LOGO",
        subItems: []
      },
      {
        image: "/images/certifications/tra.png",
        title: "TIN Certificate",
        downloadLink: "/docs/TIN CERTIFICATE.jpg",
        alt: "TRA LOGO",
        subItems: []
      },
      {
        title: "Business Licence",
        downloadLink: "/docs/RENEWED DOCS/Renewed business License - 2025.pdf",
        subItems: []
      },
      {
        title: "Material Safety Data Sheet - MSDS",
        downloadLink: "/docs/RENEWED DOCS/MSDS-LCL CEMENT.pdf",
        subItems: []
      }
    ]
  }
];

export default function CertificationsPage() {
  return <CertificationsClient certifications={certifications} />;
}