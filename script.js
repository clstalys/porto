const DATA = {
  tools: [
    { icon: "...", name: "Communications" },
    { icon: "...", name: "Leadership" },
    { icon: "...", name: "Public Speaking" },
    { icon: "...", name: "Teamwork" },
    { icon: "...", name: "HTML" },
    { icon: "...", name: "CSS" },
    { icon: "...", name: "NodeJS" },
    { icon: "...", name: "React" },
    { icon: "...", name: "Electron" },
    { icon: "...", name: "MySQL" },
    { icon: "...", name: "Figma" },
    { icon: "...", name: "Git" },
  ],

  projects: [
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
      title: "Mobile Banking UI/UX Design Re-Vamp\n(NFC-Based Interaction)",
      desc: "Designed a mobile banking UI/UX concept inspired by the OCTO app, focusing on seamless user flows and NFC-based interactions. The project includes key features such as login, balance checking, top-up, transfer simulation, and transaction summaries. Emphasis was placed on intuitive navigation, clean interface design, and consistent visual hierarchy to enhance usability and user experience.",
      tags: ["UI/UX", "Figma", "Prototyping"],
      img: "./images/softeng.png"
    },
    {
      title: "HCI????",
      desc: "apa buat project lagi ya pake electron yang bagus!!! buat.",
      tags: ["yes", "hallo", "mau kaya"],
      img: ""
    },
    {
      title: "Web ECO?",
      desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      tags: ["help", "hehe", "lol"],
      img: ""
    },
  ],

  experiences: [
    {
      org: "UMN ECO",
      year: "2026",
      date: "Mar 26 – Now",
      role: "Website Team Member",
      left: "Responsible for designing UI/UX and developing the frontend for an organization’s event website. Handled a total of four event pages along with one main landing page, ensuring consistent design and smooth user experience across all sections.",
      right: "Successfully delivered multiple event pages with cohesive design and responsive layouts. Strengthened skills in UI/UX design, frontend development, and maintaining design consistency across different pages. Gained experience in handling multi-page projects and optimizing user flow for event-based platforms. ya bacot dl la"
    },
    {
      org: "OMB UMN",
      year: "2025",
      date: "Mar 25 – Aug 25",
      role: "Person In Charge",
      left: "Leading the orientation program for new students. Responsible for planning and coordinating program activities, managing teams, and ensuring smooth execution of the overall event.",
      right: "Strengthened leadership, communication, and coordination skills by managing teams under pressure. Successfully ensured the program ran smoothly through effective collaboration and problem-solving during execution."
    },
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
      role: "Your role / position here",
      left: "Responsible for preparing and managing logistical needs for participants and committee members, ensuring all facilities and resources were properly arranged before and during the event.",
      right: "Strong coordination, problem-solving skills, gained experience in teamwork, time management, and ensuring operational readiness throughout the event."
    },
  ],

  certificates: [
    { title: "HCIA-AI", issuer: "Issued by Huawei", img: "", link : "" },
    { title: "HCIA-Open Gauss",   issuer: "Issued by Huawei",  img: "", link : "" },
    { title: "Third Certificate",     issuer: "aaaaaaaaaaaaaaa", img: "", link : "" },
    { title: "Fourth Certificate",    issuer: "helppppppppppp",     img: "", link : "" },
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
  toolsGrid.innerHTML += `<div class="tool-cell"><span class="icon">${t.icon}</span>${t.name}</div>`;
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
    <img src="icons/github.png" alt="GitHub">
  </a>

  <a href="https://linkedin.com/in/${c.linkedin}" target="_blank" class="connect-icon-btn">
    <img src="icons/linkedin.png" alt="LinkedIn">
  </a>

  <a href="https://instagram.com/${c.instagram.replace('@','')}" target="_blank" class="connect-icon-btn">
    <img src="icons/instagram.png" alt="Instagram">
  </a>

  <a href="mailto:${c.email}" class="connect-icon-btn">
    <img src="icons/email.png" alt="Email">
  </a>

  <a href="https://wa.me/${c.phone.replace(/[^0-9]/g,'')}" target="_blank" class="connect-icon-btn">
    <img src="icons/whatsapp.png" alt="WhatsApp">
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
    const p = DATA.projects[current];
    document.getElementById('proj-title-display').textContent = p.title;
    document.getElementById('proj-tags-display').innerHTML =
      p.tags.map(t => `<span class="tag">${t}</span>`).join('');
    document.getElementById('proj-desc-display').textContent = p.desc;
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
    card.addEventListener('click', () => go(i));
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
  items.forEach((item, i) => { track.innerHTML += renderCard(item, i); });

  // render dots dynamically after the buttons
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'cert-dots';
  track.closest('section').querySelector('.carousel-btns').after(dotsContainer);
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