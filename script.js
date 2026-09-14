const DATA = {
  tools: [
    { icon: "./images/tools/communication.png", hoverIcon: "./images/tools/communication-hover.png", name: "Communications" },
    { icon: "./images/tools/leadership.png", hoverIcon: "./images/tools/leadership-hover.png", name: "Leadership" },
    { icon: "./images/tools/public-speaking.png", hoverIcon: "./images/tools/public-speaking-hover.png", name: "Public Speaking" },
    { icon: "./images/tools/teamwork.png", hoverIcon: "./images/tools/teamwork-hover.png", name: "Teamwork" },
    { icon: "./images/tools/html.png", hoverIcon: "./images/tools/html-hover.png", name: "HTML CSS" },
    { icon: "./images/tools/linux.png", hoverIcon: "./images/tools/linux-hover.png", name: "Linux" },
    { icon: "./images/tools/nodejs.png", hoverIcon: "./images/tools/nodejs-hover.png", name: "NodeJS" },
    { icon: "./images/tools/react.png", hoverIcon: "./images/tools/react-hover.png", name: "React" },
    { icon: "./images/tools/electron.png", hoverIcon: "./images/tools/electron-hover.png", name: "Electron" },
    { icon: "./images/tools/mysql.png", hoverIcon: "./images/tools/mysql-hover.png", name: "MySQL" },
    { icon: "./images/tools/figma.png", hoverIcon: "./images/tools/figma-hover.png", name: "Figma" },
    { icon: "./images/tools/git.png", hoverIcon: "./images/tools/git-hover.png", name: "Git" }
  ],

  projects: [
    {
      title: "What's Now?",
      desc: "A self-initiated desktop application designed to help turn free time into meaningful activities. 'What's Now?' recommends activities based on the time available, connects them to personal goals, and provides a focused timer to help users get started.",
      tags: ["Electron", "Desktop Apps", "Personal"],
      img: "./images/whatsNow.png"
    },
    {
      title: "Interactive Exploration Game\n(Ucup Menjelajah Nusantara)",
      desc: "An interactive exploration game built with ReactJS where players navigate across multiple locations such as beaches, mountains, lakes, temples, and homes. The game integrates dynamic mechanics including character status management (hunger, energy, happiness, cleanliness), inventory systems, and time-based events. Players must balance resources while completing activities, exploring areas, and collecting items to achieve optimal daily scores.",
      tags: ["ReactJS", "JavaScript", "CSS", "Game Logic"],
      img: "./images/ucup.png"
    },
    {
      title: "Inventory Management System",
      desc: "A web-based inventory management system developed using Node.js and MySQL to manage products, suppliers, and transactions efficiently. The system includes features such as authentication, product management, transaction tracking (stock in/out), and real-time dashboard analytics. It also integrates Cloudinary for media handling and provides reporting features such as printable dashboards and transaction logs.",
      tags: ["NodeJS", "MYSQL", "Express.js", "Cloudinary"],
      img: "./images/inventory.png"
    },
    {
      title: "UMN ECO 2026",
      desc: "A collaborative event website developed for UMN ECO 2026, combining frontend development with an initial UI/UX concept. I worked on the website's visual direction, created supporting visual assets, and collaborated with the visual team to refine the final design.",
      tags: ["Frontend", "Team Collaboration", "UI/UX"],
      img: "./images/eco.png"
    },
    {
      title: "ReVamp RealBudget Application",
      desc: "RealBudget is a UI/UX redesign of a personal finance application, focused on improving usability and introducing an envelope budgeting approach. The redesign helps users plan their spending by allocating income into categories and clearly tracking the remaining budget for each category. Cr: RealBudget on PlayStore.",
      tags: ["UI/UX", "Figma", "Prototyping"],
      img: "./images/realBudget.png"
    },
    {
      title: "Mobile Banking UI/UX Design Re-Vamp\n(NFC-Based Interaction)",
      desc: "Designed a mobile banking UI/UX concept inspired by the OCTO app, focusing on seamless user flows and NFC-based interactions. The project includes key features such as login, balance checking, top-up, transfer simulation, and transaction summaries. Emphasis was placed on intuitive navigation, clean interface design, and consistent visual hierarchy to enhance usability and user experience.",
      tags: ["UI/UX", "Figma", "Prototyping"],
      img: "./images/softeng.png"
    },
    {
      title: "Birthday Interactive Web",
      desc: "A self-initiated interactive website created as a personalized birthday experience. I developed the project independently from concept to implementation and deployment, exploring how web development can be used to turn a simple idea into a more personal and interactive digital experience.",
      tags: ["Interactive", "Personal", "Web"],
      img: "./images/bday.png"
    }
  ],

  experiences: [
    {
      org: "Database Systems Laboratory Assistant",
      year: "2026",
      date: "Ags 26 – Present",
      role: "Laboratory Assistant",
      left: "Teach and guide 29 students through weekly database laboratory sessions, explaining database fundamentals and helping students apply database concepts to laboratory tasks and design.",
      right: "Strengthened my teaching, communication, and problem-solving skills by creating interactive learning materials, preparing quizzes, assessing assignments, and reporting grades to the lecturer." 
    },
    {
      org: "UMN ECO",
      year: "2026",
      date: "Mar 26 – Present",
      role: "Website Team Member",
      left: "Designed the UI/UX and developed the frontend for UMN ECO 2026’s event website. Worked on the main landing page and four event pages while maintaining a consistent visual style and user flow.",
      right: "Strengthened my skills in UI/UX design and frontend development through a real-world event website. Gained experience in translating designs into responsive pages and collaborating with the visual team."  
    },
    {
      org: "STUKM (Serah Terima Tahunan UKM)",
      year: "2026",
      date: "Mar 26 – Present",
      role: "Event Coordinator",
      left: "Coordinating the annual handover event for STUKM, overseeing the planning and preparation of the program while coordinating the event team.",
      right: "Strengthening my leadership, communication, and coordination skills by managing the team and ensuring the event is well-prepared through collaboration and problem-solving."
    },
    {
      org: "Data Structures & Algorithms Laboratory Assistant",
      year: "2026",
      date: "Feb 26 – June 2026",
      role: "Laboratory Assistant",
      left: "Assisted 40 students through weekly Data Structures and Algorithms laboratory sessions, guiding them through programming and data structure exercises and helping troubleshoot implementation errors.",
      right: "Strengthened my teaching, communication, and problem-solving skills by preparing and grading quizzes and assignments and compiling laboratory grades for the lecturer."
    },
    {
      org: "OMB UMN (Orientasi Mahasiswa Baru)",
      year: "2025",
      date: "Mar 25 – Aug 25",
      role: "Person In Charge",
      left: "Led the orientation program for 20+ new students, overseeing program planning, team coordination, and overall event execution.",
      right: "Strengthened my leadership, communication, and problem-solving skills by coordinating teams and ensuring the program ran smoothly under pressure."    },
    {
      org: "UMN Festival",
      year: "2025",
      date: "Mar 25 – Nov 25",
      role: "Accomodation Team Member",
      left: "Responsible for preparing and managing logistical needs for participants and committee members, ensuring all facilities and resources were properly arranged before and during the event.",
      right: "Strong coordination, problem-solving skills, gained experience in teamwork, time management, and ensuring operational readiness throughout the event."
    },
    {
      org: "Manifest & Mentoring UMN",
      year: "2024-2025",
      date: "Oct 24 – Oct 25",
      role: "Administration Team Member",
      left: "Started as part of the committee in MANIFEST 2024 and continued in the Mentoring Program under Student Development UMN in 2025. Responsible for supporting administrative coordination, managing participant data, organizing documentation, and assisting in maintaining the overall flow of the program.",
      right: "Demonstrated continuity and commitment by contributing across multiple program periods. Strengthened organizational, administrative, and data management skills while ensuring structured documentation and smooth program execution in a team-based environment."
    },
    {
      org: "Carrer Development Center UMN",
      year: "2024-2025",
      date: "Mar 25 – Nov 25",
      role: "Event Operator",
      left: "Responsible for preparing and managing logistical needs for participants and committee members, ensuring all facilities and resources were properly arranged before and during the event.",
      right: "Strong coordination, problem-solving skills, gained experience in teamwork, time management, and ensuring operational readiness throughout the event."
    },
  ],

  certificates: [
    { title: "HCIA-AI", issuer: "Issued by Huawei", img: "./images/certificates/HCIA-AI.png", link : "" },
    { title: "HCIA-Open Gauss",   issuer: "Issued by Huawei",  img: "./images/certificates/HCIA-openGauss.png", link : "" }
  ],

  contact: {
    github:    "clstalys",
    linkedin:  "lysia-callysta/",
    instagram: "@cltalys_",
    email:     "lysterine3@gmail.com",
    phone:     "081327858552"
  }
};

const toolsGrid = document.getElementById('tools-grid');

DATA.tools.forEach(t => {
  toolsGrid.innerHTML += `
    <div class="tool-cell">
      <img class="icon" src="${t.icon}" data-hover="${t.hoverIcon}" alt="${t.name}">
      <span>${t.name}</span>
    </div>
  `;
});

document.querySelectorAll(".tool-cell").forEach(cell => {
  const img = cell.querySelector(".icon");
  const normal = img.src;
  const hover = img.dataset.hover;

  cell.addEventListener("mouseenter", () => {
    img.src = hover;
  });

  cell.addEventListener("mouseleave", () => {
    img.src = normal;
  });
});

document.querySelectorAll('#tools .tool-cell').forEach((element, index) => {
  element.style.transitionDelay = `${index * 0.05}s`;
});

const timeline = document.getElementById('exp-timeline');

DATA.experiences.forEach(e => {
  const div = document.createElement('div');
  div.className = 'exp-item';

  div.innerHTML = `
    <div>
      <span class="exp-org">${e.org}</span>
      <span class="exp-year">${e.year}</span>
    </div>

    <div class="exp-meta">
      <span class="exp-role">${e.role}</span>
      <span class="exp-date">${e.date}</span>
    </div>

    <div class="exp-grid">
      <span class="exp-col-label">${e.left}</span>
      <span class="exp-col-label">${e.right}</span>
    </div>
  `;

  timeline.appendChild(div);
});


const c = DATA.contact;

document.getElementById('connect-grid').innerHTML = `
  <a href="https://github.com/${c.github}" target="_blank" class="connect-icon-btn">
    <img src="images/github.png" alt="GitHub">
  </a>

  <a href="https://linkedin.com/in/${c.linkedin}" target="_blank" class="connect-icon-btn">
    <img src="images/linkedin.png" alt="LinkedIn">
  </a>

  <a href="https://instagram.com/${c.instagram.replace('@','')}" target="_blank" class="connect-icon-btn">
    <img src="images/instagram.png" alt="Instagram">
  </a>

  <a href="mailto:${c.email}" class="connect-icon-btn">
    <img src="images/email.png" alt="Email">
  </a>

  <a href="https://wa.me/${c.phone.replace(/[^0-9]/g,'')}" target="_blank" class="connect-icon-btn">
    <img src="images/whatsapp.png" alt="WhatsApp">
  </a>
`;


(function () {
  const track   = document.getElementById('proj-track');
  const dotsEl  = document.getElementById('proj-dots');
  const prevBtn = document.getElementById('proj-prev');
  const nextBtn = document.getElementById('proj-next');

  // ===== RENDER CARDS =====
  DATA.projects.forEach((p, i) => {
    track.innerHTML += `
      <div class="proj-card" data-card="${i}" data-pos="0">
        <div class="proj-img">
          ${p.img ? `<img src="${p.img}" alt="${p.title}">` : ''}
        </div>
      </div>`;
  });

  DATA.projects.forEach((_, i) => {
    dotsEl.innerHTML += `<div class="dot" data-i="${i}"></div>`;
  });

  const dots = dotsEl.querySelectorAll('.dot');

  let current = Math.floor(DATA.projects.length / 2);

  const cards = track.querySelectorAll('[data-card]');

  function updateInfo() {
    const panel = document.querySelector('.proj-info-panel');

    const title = document.getElementById('proj-title-display');
    const tags = document.getElementById('proj-tags-display');
    const desc = document.getElementById('proj-desc-display');

    const p = DATA.projects[current];

    panel.classList.add('changing');

    setTimeout(() => {
      title.textContent = p.title;

      tags.innerHTML =
        p.tags.map(t => `<span class="tag">${t}</span>`).join('');

      desc.textContent = p.desc;

      panel.classList.remove('changing');
    }, 200);
  }

  function go(idx) {
    const total = DATA.projects.length;

    current = ((idx % total) + total) % total;

    const half = Math.floor(total / 2);

    cards.forEach((card, i) => {
      let pos = i - current;

      if (pos > half) pos -= total;
      if (pos < -half) pos += total;

      pos = Math.max(-2, Math.min(2, pos));

      card.dataset.pos = pos;
    });

    dots.forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });

    updateInfo();
  }

  prevBtn.addEventListener('click', () => go(current - 1));
  nextBtn.addEventListener('click', () => go(current + 1));

  dots.forEach(d => {
    d.addEventListener('click', () => go(+d.dataset.i));
  });

  cards.forEach((card, i) => {
    card.addEventListener('click', () => {
      if (items[i].img) {
        window.open(items[i].img, '_blank');
      }
    });
  });

  let startX = 0;

  track.addEventListener('mousedown', e => {
    startX = e.clientX;
  });

  track.addEventListener('mouseup', e => {
    const dx = e.clientX - startX;
    if (dx < -40) go(current + 1);
    if (dx > 40) go(current - 1);
  });

  track.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (dx < -40) go(current + 1);
    if (dx > 40) go(current - 1);
  });
  go(current);

})();


function makeCarousel({ trackId, prevId, nextId, items, renderCard }) {
  const track   = document.getElementById(trackId);
  const prevBtn = document.getElementById(prevId);
  const nextBtn = document.getElementById(nextId);

  // render cards
  items.forEach((item, i) => {
    track.innerHTML += renderCard(item, i);
  });

  track.querySelectorAll('.cert-card').forEach((card, i) => {
    card.addEventListener('click', () => {
      window.open(items[i].img, '_blank');
    });
  });

  // render dots dynamically after the buttons
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'cert-dots';
  track.closest('section').querySelector('.carousel-btns').before(dotsContainer);
  items.forEach((_, i) => {
    dotsContainer.innerHTML += `<div class="dot${i === 0 ? ' active' : ''}" data-i="${i}"></div>`;
  });
  const dots = dotsContainer.querySelectorAll('.dot');

  const total = items.length;
  let current = 0;
  const cards = track.querySelectorAll('[data-card]');

  function go(idx) {
    current = ((idx % total) + total) % total;

    cards.forEach((card, i) => {
      let pos = i - current;
      if (pos > Math.floor(total / 2))  pos -= total;
      if (pos < -Math.floor(total / 2)) pos += total;
      // only show -1, 0, 1 — hide the rest
      if (pos > 1)  pos = 2;   // hidden right
      if (pos < -1) pos = -2;  // hidden left
      card.dataset.pos = pos;
    });

    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  prevBtn.addEventListener('click', () => go(current - 1));
  nextBtn.addEventListener('click', () => go(current + 1));
  dots.forEach(d => d.addEventListener('click', () => go(+d.dataset.i)));
  cards.forEach((card, i) => card.addEventListener('click', () => go(i)));

  let startX = 0;
  track.addEventListener('mousedown',  e => { startX = e.clientX; });
  track.addEventListener('mouseup',    e => { const dx = e.clientX - startX; if (dx < -40) go(current+1); else if (dx > 40) go(current-1); });
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => { const dx = e.changedTouches[0].clientX - startX; if (dx < -40) go(current+1); else if (dx > 40) go(current-1); });

  go(0);
}

makeCarousel({
  trackId: 'cert-track', prevId: 'cert-prev', nextId: 'cert-next',
  items: DATA.certificates,
  renderCard: (cert, i) => `
    <div class="cert-card" data-card="${i}">
      <div class="cert-img">
        ${cert.img ? `<img src="${cert.img}" alt="${cert.title}" />` : 'certificate image'}
      </div>
      <div class="cert-info">
        <div class="cert-title">${cert.title}</div>
        <div class="cert-issuer">${cert.issuer}</div>
        ${cert.link ? `<a href="${cert.link}" target="_blank" rel="noopener" class="cert-link-btn">View Certificate ↗</a>` : ''}
      </div>
    </div>`
});

/* ── SCROLL REVEAL ── */

const revealElements = document.querySelectorAll(
  'section:not(#about) .section-title, ' +
  '.about-section, ' +
  '#tools .tool-cell, ' +
  '.projects-container, ' +
  '#experiences .exp-item, ' +
  '#certificates .carousel-wrap, ' +
  '#certificates .carousel-btns, ' +
  '#contact'
);

revealElements.forEach((element) => {
  element.classList.add('reveal');
});

// Contact langsung tampil tanpa transisi
const contact = document.querySelector('#contact');
contact.classList.add('show');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.target === contact) return;

      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

/* =========================
   LOADING + HERO ANIMATION
   ========================= */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
    document.body.classList.add("hero-loaded");
  }, 900);
});