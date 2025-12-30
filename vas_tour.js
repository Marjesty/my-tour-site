// // Define the HTML for each page
// const pages = {
//     home: `
//       <section class="hero">
//         <video autoplay muted loop playsinline poster="images/10 Best Places To visit In Ghana.mp4" class="hero-video">
//           <source src="images/10 Best Places To visit In Ghana.mp4" type="video/mp4">
//           Your browser does not support the video tag.
//         </video>
//         <div class="hero-overlay">
//           <h1>Discover Ghana with VAS TOUR</h1>
//           <p>Travel Now, We don’t just offer trips; we craft unforgettable experiences that bring you closer to the soul of Ghana.</p>
//           <div class="hero-actions">
//             <a href="#" class="btn primary">Travel Now, Pay Later</a>
//             <a href="#" class="btn secondary">Chat with Us</a>
//           </div>
//           <form class="quick-search">
//             <input type="text" placeholder="Search by destination, activity, price...">
//             <button type="submit">Search</button>
//           </form>
//         </div>
//       </section>
//       <!-- Add your home page sections here (featured destinations, trending tours, etc.) -->
//     `,
//     sites: `
//       <section class="tourist-sites-page">
//         <h2>Tourist Sites</h2>
//         <div class="sites-list">
//           <div class="site-card">
//             <img src="castle.jpg" alt="Cape Coast">
//             <h3>Cape Coast</h3>
//             <p>Walk through centuries of powerful history.</p>
//           </div>
//           <div class="site-card">
//             <img src="highest.jpg" alt="Mountain Afajato">
//             <h3>Mountain Afajato</h3>
//             <p>Conquer Ghana’s highest peak and embrace nature’s splendor.</p>
//           </div>
//           <div class="site-card">
//             <img src="lalabanga.jpg" alt="Lalabanga Mosque">
//             <h3>Lalabanga Mosque</h3>
//             <p>Experience the spiritual heart of the north, standing tall since the 1400s.</p>
//           </div>
//         </div>
//       </section>
//     `,
//     packages: `
//       <section class="tour-packages-page">
//         <h2>Tour Packages</h2>
//         <div class="packages-list">
//           <div class="package-card">
//             <h4>Family Fun</h4>
//             <p>Perfect for solo travelers, couples, families, and groups.</p>
//           </div>
//           <div class="package-card">
//             <h4>Adventure</h4>
//             <p>From weekend escapes to week-long expeditions</p>
//           </div>
//           <div class="package-card">
//             <h4>Our Heritage</h4>
//             <p>Experience Ghana your way — culture, history, adventure, and pure relaxation.</p>
//           </div>
//         </div>
//       </section>
//     `,
//     destinations: `
//       <section class="destinations-page">
//         <h2>Destinations</h2>
//         <ul>
//           <li>Cape Coast</li>
//           <li>Mountain Afajato</li>
//           <li>Lalabanga Mosque</li>
//           <li>Mole National Park</li>
//           <li>Kakum National Park</li>
//         </ul>
//       </section>
//     `,
//     contact: `
//       <section class="contact-page">
//         <h2>Contact Us</h2>
//         <p>Phone: +233 54 927 8230</p>
//         <p>Email: vastour@mail.com</p>
//         <form>
//           <input type="text" placeholder="Your Name" required><br>
//           <input type="email" placeholder="Your Email" required><br>
//           <textarea placeholder="Your Message" required></textarea><br>
//           <button type="submit">Send</button>
//         </form>
//       </section>
//     `,
//     about: `
//       <section class="about-page">
//         <h2>About Us</h2>
//         <p>VAS TOUR is your trusted travel partner in Ghana. We offer curated experiences, expert guides, and unforgettable memories.</p>
//       </section>
//     `,
//     login: `
//       <section class="login-page">
//         <h2>Login / Signup</h2>
//         <form>
//           <input type="email" placeholder="Email" required><br>
//           <input type="password" placeholder="Password" required><br>
//           <button type="submit">Login</button>
//         </form>
//         <p>Don't have an account? <a href="#">Sign up</a></p>
//       </section>
//     `
// };

// // Helper to load a page
// function loadPage(page) {
//     const main = document.getElementById('main-content');
//     main.innerHTML = pages[page] || pages['home'];
// }

// // Set up navigation
// document.addEventListener('DOMContentLoaded', function() {
//     // Initial load
//     loadPage('home');

//     // Map nav text to page keys
//     const navMap = {
//         'Home': 'home',
//         'Tourist Sites': 'sites',
//         'Tour Packages': 'packages',
//         'Destinations': 'destinations',
//         'Contact Us': 'contact',
//         'About Us': 'about',
//         'Login / Signup': 'login'
//     };

//     // Attach click listeners
//     document.querySelectorAll('.nav-links a').forEach(link => {
//         link.addEventListener('click', function(e) {
//             const text = link.textContent.trim();
//             if (navMap[text]) {
//                 e.preventDefault();
//                 loadPage(navMap[text]);
//                 window.scrollTo(0, 0);
//             }
//         });
//     });
// });