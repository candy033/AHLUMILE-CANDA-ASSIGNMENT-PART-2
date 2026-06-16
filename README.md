# Hlumis' Imfundo Foundation Website - Development Documentation
This repository documents the complete development journey of the web application for the Hlumis' Imfundo Foundation, a multi-page academic project built to showcase clean structure, semantic layout design, user interactivity, and modern front-end development practices.
##  Project History & Implementation Steps
###  Structural Foundations & Semantic HTML
Multi-Page Layout Creation: Developed five distinct pages to support the organization's structure: `index.html` (Home), `about.html` (About Us), `services.html` (Services), `enquiry.html` (Enquiry Form), and `contact.html` (Contact Details).
Navigation Architecture:Linked a global semantic navigation bar (`<nav>`) across all project files to provide intuitive user routing.
  Administrative Details: Added critical location and communication blocks, including phone references, official organizational emails, and an interactive embedded Google Map iframe mapping the foundation's headquarters in Gqeberha, Eastern Cape.
### 2. Media Optimization & Styling Architecture
Centralized CSS Integration:Connected a global external stylesheet (`CSS/style.css`) across all components to manage responsive container alignment, clear layout formatting, and uniform typeface hierarchies.
  Image Assets Path Resolution:Formatted and optimized functional image files inside a dedicated `IMAGES/` asset folder.
  Debugging Filename Spaces: Found and fixed broken image elements (such as changing space-separated files like `image 4.jpg` to compact formats like `image4.jpg`) ensuring error-free browser rendering.
### JavaScript Interaction & Form Security (Latest Step)Interactive Services Accordion:
 Built custom vanilla JavaScript mechanisms targeting container modules (Tutoring, Mentorship, Workshops) on the `services.html` view page, adding smooth height expansion toggles to refine information scanning.
Client-Side Validation Controls: Bound rigorous functional verification loops inside `script.js` to catch submission events on both the contact and enquiry forms. The rules automatically assess user entry lengths, intercept blank forms, validate structural email symbols using Regular Expressions, and enforce standard 10-digit formats for local phone fields.
  Asynchronous AJAX Interceptor State: Inhibited typical browser window updates using custom event handlers, simulating a live data channel process by displaying inline activity indicators and injecting dedicated confirmation success banners upon complete client verification.
## Search Engine Optimization (SEO) Summary
Title and Descriptive Tagging:Assigned page-specific `<title>` tags across documents to maximize identification profiles.
Visual Alternate Contexts: Attached contextual `alt` string descriptions to active visual layout components for modern access standards.
