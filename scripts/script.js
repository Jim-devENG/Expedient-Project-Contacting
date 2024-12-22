// JSON-LD for structured data
/*const jsonLd = `
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.trueservices.ca/",
      "url": "https://www.trueservices.ca/",
      "name": "True Services Inc. - Commercial and Industrial Contractor Services",
      "isPartOf": { "@id": "https://www.trueservices.ca/#website" },
      "datePublished": "2021-01-27T17:02:54+00:00",
      "dateModified": "2022-09-07T17:44:17+00:00",
      "description": "True Services is the leader in commercial and industrial contractor services, providing trusted quality no matter the job size.",
      "breadcrumb": { "@id": "https://www.trueservices.ca/#breadcrumb" },
      "inLanguage": "en-US",
      "potentialAction": [
        {
          "@type": "ReadAction",
          "target": ["https://www.trueservices.ca/"]
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.trueservices.ca/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home" }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.trueservices.ca/#website",
      "url": "https://www.trueservices.ca/",
      "name": "True Services Inc.",
      "description": "Commercial and Industrial Contractor Services",
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.trueservices.ca/?s={search_term_string}"
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            "valueRequired": true,
            "valueName": "search_term_string"
          }
        }
      ],
      "inLanguage": "en-US"
    }
  ]
}
`;

*/

const jsonLd = `
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.expedientprojectcontracting.com/",
      "url": "https://www.expedientprojectcontracting.com/",
      "name": "Expedient Project Contracting - Excellence in Contracting Services",
      "isPartOf": { "@id": "https://www.expedientprojectcontracting.com/#website" },
      "datePublished": "2023-12-01T00:00:00+00:00",
      "dateModified": "2023-12-14T00:00:00+00:00",
      "description": "Expedient Project Contracting provides top-tier commercial and industrial contracting services tailored to your needs.",
      "breadcrumb": { "@id": "https://www.expedientprojectcontracting.com/#breadcrumb" },
      "inLanguage": "en-US",
      "potentialAction": [
        {
          "@type": "ReadAction",
          "target": ["https://www.expedientprojectcontracting.com/"]
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.expedientprojectcontracting.com/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home" }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.expedientprojectcontracting.com/#website",
      "url": "https://www.expedientprojectcontracting.com/",
      "name": "Expedient Project Contracting",
      "description": "We deliver excellence in project contracting, providing reliable solutions for commercial and industrial needs.",
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.expedientprojectcontracting.com/?s={search_term_string}"
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            "valueRequired": true,
            "valueName": "search_term_string"
          }
        }
      ],
      "inLanguage": "en-US"
    }
  ]
}
`;

/*
// Add JSON-LD to the page dynamically
const scriptTag = document.createElement("script");
scriptTag.type = "application/ld+json";
scriptTag.innerHTML = jsonLd;
document.head.appendChild(scriptTag);

// Emoji settings
window._wpemojiSettings = {
  baseUrl: "https://s.w.org/images/core/emoji/15.0.3/72x72/",
  ext: ".png",
  svgUrl: "https://s.w.org/images/core/emoji/15.0.3/svg/",
  svgExt: ".svg",
  source: {
    concatemoji: "https://www.trueservices.ca/wp-includes/js/wp-emoji-release.min.js?ver=6.7.1",
  },
};

// Google Analytics setup
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-1F2TJ89L34", {
  cookie_domain: "www.trueservices.ca",
  cookie_flags: "samesite=none;secure",
  allow_google_signals: true,
});

// AJAX URL for dynamic data
var sbiajaxurl = "https://www.trueservices.ca/wp-admin/admin-ajax.php";

// Contact Form 7 settings
var wpcf7 = {
  api: {
    root: "https://www.trueservices.ca/wp-json/",
    namespace: "contact-form-7/v1",
  },
  cached: 1,
};

// Drag and Drop uploader configuration
var dnd_cf7_uploader = {
  ajax_url: "https://www.trueservices.ca/wp-admin/admin-ajax.php",
  ajax_nonce: "cd90446c88",
  drag_n_drop_upload: {
    tag: "h3",
    text: "Drag & Drop Files Here",
    or_separator: "or",
    browse: "Browse Files",
    server_max_error:
      "The uploaded file exceeds the maximum upload size of your server.",
    large_file: "Uploaded file is too large",
    inavalid_type: "Uploaded file is not allowed for file type",
    max_file_limit:
      "Note : Some of the files are not uploaded (Only %count% files allowed)",
    required: "This field is required.",
    delete: { text: "deleting", title: "Remove" },
  },
};

// Recaptcha settings
var wpcf7_recaptcha = {
  sitekey: "6LfGOBAmAAAAABfOhfMGHqWi2sGoAQcmfhSytdg9",
  actions: {
    homepage: "homepage",
    contactform: "contactform",
  },
};

// Localization variables
const localizedVar = {
  homeURL: "https://www.expedientprojectcontracting.com",
  logo: '<img width="225" height="59" src="uploads/Logo_mobile-02.svg" class="menu-logo-img" alt="True Services Inc." decoding="async" />',
};

*/

// Add JSON-LD to the page dynamically




const scriptTag = document.createElement("script");
scriptTag.type = "application/ld+json";
scriptTag.innerHTML = jsonLd;
document.head.appendChild(scriptTag);


// Emoji settings
window._wpemojiSettings = {
  baseUrl: "https://s.w.org/images/core/emoji/15.0.3/72x72/",
  ext: ".png",
  svgUrl: "https://s.w.org/images/core/emoji/15.0.3/svg/",
  svgExt: ".svg",
  source: {
    concatemoji: "https://www.expedientprojectcontracting.com/wp-includes/js/wp-emoji-release.min.js",
  },
};

// Google Analytics setup
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-XXXXXXX", {  // Replace "G-XXXXXXX" with your actual Google Analytics ID
  cookie_domain: "www.expedientprojectcontracting.com",
  cookie_flags: "samesite=none;secure",
  allow_google_signals: true,
});

// AJAX URL for dynamic data
var sbiajaxurl = "https://www.expedientprojectcontracting.com/wp-admin/admin-ajax.php";

// Contact Form 7 settings
var wpcf7 = {
  api: {
    root: "https://www.expedientprojectcontracting.com/wp-json/",
    namespace: "contact-form-7/v1",
  },
  cached: 1,
};

// Drag and Drop uploader configuration
var dnd_cf7_uploader = {
  ajax_url: "https://www.expedientprojectcontracting.com/wp-admin/admin-ajax.php",
  ajax_nonce: "cd90446c88", // Update this if your system uses a different nonce
  drag_n_drop_upload: {
    tag: "h3",
    text: "Drag & Drop Files Here",
    or_separator: "or",
    browse: "Browse Files",
    server_max_error:
      "The uploaded file exceeds the maximum upload size of your server.",
    large_file: "Uploaded file is too large",
    inavalid_type: "Uploaded file is not allowed for file type",
    max_file_limit:
      "Note : Some of the files are not uploaded (Only %count% files allowed)",
    required: "This field is required.",
    delete: { text: "deleting", title: "Remove" },
  },
};

// Recaptcha settings
var wpcf7_recaptcha = {
  sitekey: "Your-Recaptcha-Site-Key", // Replace with your actual reCAPTCHA site key
  actions: {
    homepage: "homepage",
    contactform: "contactform",
  },
};

// Localization variables
const localizedVar = {
  homeURL: "https://www.expedientprojectcontracting.com",
  logo: '<img width="225" height="59" src="uploads/Logo_mobile-02.svg" class="menu-logo-img" alt="Expedient Project Contracting" decoding="async" />',
};

