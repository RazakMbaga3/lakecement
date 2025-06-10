import CertificationsClient from './page-client';

const certifications = [
  {
    category: "Quality Standards",
    items: [
      {
        image: "/images/certifications/9001.png",
        title: "ISO 9001:2015 - Quality Management System",
        downloadLink: "/docs/RENEWED DOCS/Latest ISO certificate- 2024 onwrad.pdf",
        alt: "ISO 9001 Logo",
        subItems: []
      },
   
      { 
        image: "/images/certifications/14001.png",
        title: "ISO 14001:2015 – Environmental Management System",
        downloadLink: "/docs/RENEWED DOCS/Cert Lake Cement TZ24-31101B.PDF",
        subItems: []
      },
      { image: "/images/certifications/45001.png",              
        title: "ISO 45001:2018 – Occupational Health & Safety Management System",
        downloadLink: "/docs/RENEWED DOCS/Cert Lake Cement TZ24-31101C.PDF",
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
        downloadLink: "/docs/16-W,NO-42.5N-28DAYS.pdf",
        subItems: []
      },
      {
        title: "Internal 42.5 R test certificate",
        downloadLink: "/docs/16-WNO-42.5R-28DAYS.pdf",
        subItems: []
      },
      {
        title: "Internal 32.5 N test certificate",
        downloadLink: "/docs/16-W,NO-32.5N-28DAYS.pdf",
        subItems: []
      },
      {
        title: "Internal OPC test certificate",
        downloadLink: "/docs/16-W,NO-CEM I-42.5N-28DAYS.pdf",
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
        image: "/images/certifications/OSHA.png",
        title: "OSHA REGISTRATION Certificate",
        downloadLink: "/docs/OSHA REGISTRATION CERTIFICATE.pdf",
        alt: "OSHA logo",
        subItems: []
      },
      {
        title: "Head Office Business Licence",
        downloadLink: "/docs/RENEWED DOCS/Renewed business License - 2025.pdf",
        subItems: []
      },
      {
        title: "Factory Business Licence",
        downloadLink: "/docs/RENEWED DOCS/Lake Cement Kimbiji Business License 2025.pdf",
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
