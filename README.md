# Wanderlust Guide

## Collaborative GitHub Project – Simple Web Application

### Project Overview

Wanderlust Guide is a simple multi-page web application developed collaboratively using Git and GitHub. The project fully satisfies the requirements of the **Group Work Assignment: Collaborative Git Project**, where students work as a team to build and integrate multiple web pages into one complete system.

The application consists of **one landing page** created by the Group Leader and **nine additional pages**, each developed by a different group member. All pages are properly linked and integrated through GitHub collaboration.

---

## Project Objectives

* Demonstrate effective use of **Git and GitHub** for collaborative development
* Apply **HTML, CSS, and JavaScript** fundamentals
* Practice **branching, committing, pushing, and merging** workflows
* Produce a functional, structured, and well-documented web application

---

## Group Structure

* **Total Members:** 10
* **Group Leader:** 1
* **Group Members:** 9

---

## Roles and Responsibilities

### Group Leader Responsibilities

* Create a **public GitHub repository**
* Initialize the repository with a **master branch**
* Develop the **landing page (index.html)**
* Ensure the landing page contains **links to all 9 member pages**
* Push the landing page to the master branch
* Share the repository link with all group members
* Review, merge, and manage all member branches
* Resolve merge conflicts where necessary
* Ensure the final project runs correctly after integration

---

### Group Member Responsibilities

Each group member is responsible for:

* Cloning the repository
* Creating a **separate feature branch** using their name or feature title
* Developing **one unique web page**
* Linking their page correctly from the landing page
* Writing clear and meaningful commit messages
* Pushing changes to the remote repository
* Avoiding direct commits to the master branch

---

## Pages Implemented

* Landing Page (Home)
* Paris
* Tokyo
* New York
* Cape Town
* Sydney
* Rio de Janeiro
* Dubai
* Bali
* Rome

All pages are linked from the landing page and share consistent navigation.

---

## Project Structure

```bash
wanderlust-guide/
│
├── index.html        # Landing page (Group Leader)
├── style.css         # Main styles
├── script.js         # Main JavaScript
├── README.md
│
├── pages/
│   ├── paris.html
│   ├── tokyo.html
│   ├── newyork.html
│   ├── capetown.html
│   ├── sydney.html
│   ├── rio.html
│   ├── dubai.html
│   ├── bali.html
│   └── rome.html
│
└── assets/
    ├── css/
    ├── js/
    └── images/
```

---

## Design & Code Consistency Guidelines

To ensure all pages look uniform and professional, **all contributors must follow the same design rules** below. Any page that does not follow these guidelines may be requested for revision before merging.

---

### Color System

All pages must use the same color variables defined in `style.css`.

```css
:root {
  --primary-color: #2563eb;      /* Main buttons, links */
  --secondary-color: #7c3aed;    /* Highlights, badges */
  --accent-color: #10b981;       /* Success / emphasis */

  --text-dark: #1f2937;          /* Main text */
  --text-light: #6b7280;         /* Muted text */

  --bg-main: #ffffff;            /* Page background */
  --bg-secondary: #f9fafb;       /* Section background */
}
```

Do not introduce new colors unless approved by the Group Leader.

---

### Spacing & Padding Rules

Use consistent spacing across all pages.

```css
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 1.5rem;   /* 24px */
--space-lg: 2rem;     /* 32px */
--space-xl: 3rem;     /* 48px */
```

Rules:

* Section padding: `padding: var(--space-xl) 0;`
* Card padding: `padding: var(--space-md);`
* Do not use random pixel values

---

### Typography Rules

```css
font-family:
- Headings: 'Montserrat', sans-serif
- Body text: 'Poppins', sans-serif
```

* One `h1` per page only
* Section titles use `h2`
* Subsections use `h3`
* Body text size: `1rem`

---

### Layout Rules

* Use **container width max 1200px**
* Center content using margin auto
* Use Flexbox or Grid (no absolute positioning for layout)
* Mobile-first approach is mandatory

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}
```

---

### Navigation & Footer

* Navigation bar must be **identical on all pages**
* Footer must be reused without modification
* Do not rename navigation links

---

### JavaScript Rules

* Do not write page-specific JS in `script.js`
* Use `assets/js/pages.js` for destination-only logic
* Do not duplicate functions already written

---

### File Naming Rules

* All files use lowercase
* No spaces in filenames
* Example: `newyork.html`, not `New York.html`

---

### Before Submitting Your Work

Each contributor must confirm:

* Page follows color, spacing, and typography rules
* Navigation and footer are unchanged
* No console errors
* Page is responsive

---

## Starter Destination Page Template

All contributors must start from the template below to ensure uniform structure and styling. Copy this template when creating your destination page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Destination Name | Wanderlust Guide</title>
  <link rel="stylesheet" href="../style.css" />
  <link rel="stylesheet" href="../assets/css/pages.css" />
</head>
<body>

  <!-- Navigation (DO NOT MODIFY) -->
  <header>
    <nav class="navbar">
      <!-- same navigation as index.html -->
    </nav>
  </header>

  <main>
    <section class="page-header">
      <div class="container">
        <h1>Destination Name</h1>
        <p>Country or region</p>
      </div>
    </section>

    <section class="content-section">
      <div class="container grid-2">
        <article>
          <h2>Overview</h2>
          <p>Brief introduction of the destination.</p>

          <h2>Top Attractions</h2>
          <ul>
            <li>Attraction one</li>
            <li>Attraction two</li>
            <li>Attraction three</li>
          </ul>

          <h2>Food and Culture</h2>
          <p>Description of local cuisine and culture.</p>

          <h2>Travel Tips</h2>
          <p>Important tips for visitors.</p>
        </article>

        <aside>
          <h3>Quick Facts</h3>
          <ul>
            <li>Currency</li>
            <li>Language</li>
            <li>Best time to visit</li>
          </ul>
        </aside>
      </div>
    </section>
  </main>

  <!-- Footer (DO NOT MODIFY) -->
  <footer>
    <!-- same footer as index.html -->
  </footer>

  <script src="../script.js"></script>
  <script src="../assets/js/pages.js"></script>
</body>
</html>
```

---

## Contributor Checklist (Mandatory)

Before pushing your branch, confirm the following:

* Page created from the official template
* Colors and spacing follow defined variables
* Navigation and footer unchanged
* Page linked correctly from the landing page
* No HTML or JavaScript errors
* Responsive on mobile, tablet, and desktop
* Clear and meaningful commit messages

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Git
* GitHub

No external frameworks were used.

---

## Git Workflow

* One **master branch**
* Nine **feature branches** (one per member)
* Regular commits with meaningful messages
* Pull requests used for merging
* Merge conflicts resolved by the Group Leader

---

## Testing and Verification

* All pages load correctly
* All links from the landing page function as expected
* Project runs correctly after all merges
* Commit and merge history available via `git log`

---

## Submission Requirements Fulfilled

* Public GitHub repository
* Master branch with landing page and linked pages
* At least 10 branches (1 master + 9 feature branches)
* Clear commit history showing individual contributions
* Successful integration and merge history

---

## Marks Alignment Summary

* Individual contribution through branches and commits
* Proper Git workflow and collaboration
* Functional landing page and navigation
* Correct project structure and execution

---

## License

This project is for **educational purposes only** and was developed as part of a university group assignment.

---

## Maintainer

Group Leader

Status: Completed
