document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('mobileToggle');
  const nav = document.getElementById('navLinks');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('show'));
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => nav.classList.remove('show'));
    });
  }

  const slider = document.getElementById('trimSlider');
  const outputName = document.getElementById('sliderTrimName');
  const outputRole = document.getElementById('sliderTrimRole');
  const outputImg = document.getElementById('sliderTrimImage');
  const outputDesc = document.getElementById('sliderTrimDesc');
  const towBar = document.getElementById('towMeter');
  const luxuryBar = document.getElementById('luxuryMeter');
  const offroadBar = document.getElementById('offroadMeter');

  const trims = [
    {
      name:'XL',
      role:'Work-truck value',
      img:'images/xl.jpg',
      desc:'XL is the straightforward starting point: simple, useful, and focused on getting truck jobs done without extra flash.',
      tow:55, luxury:20, offroad:25
    },
    {
      name:'XLT',
      role:'Best all-around value',
      img:'images/xlt.jpg',
      desc:'XLT is the safest pick for most buyers because it adds better styling, better comfort, and strong everyday versatility.',
      tow:68, luxury:38, offroad:32
    },
    {
      name:'Lariat',
      role:'Premium daily driver',
      img:'images/lariat.jpg',
      desc:'Lariat steps into a more premium feel with stronger comfort, technology, and a polished overall personality.',
      tow:82, luxury:72, offroad:40
    },
    {
      name:'King Ranch',
      role:'Distinctive luxury',
      img:'images/kingranch.jpg',
      desc:'King Ranch mixes high-end comfort with a western-inspired design identity that stands out from the rest of the lineup.',
      tow:82, luxury:82, offroad:40
    },
    {
      name:'Platinum',
      role:'Modern luxury',
      img:'images/platinum.jpg',
      desc:'Platinum is the clean, upscale, tech-focused premium F-150 for buyers who want refinement without losing truck capability.',
      tow:82, luxury:88, offroad:38
    },
    {
      name:'Limited',
      role:'Flagship comfort',
      img:'images/limited.jpg',
      desc:'Limited leans into a loaded, top-spec feel for buyers who want most of the premium equipment already included.',
      tow:78, luxury:92, offroad:30
    },
    {
      name:'Tremor',
      role:'Off-road all-rounder',
      img:'images/tremor.jpg',
      desc:'Tremor brings real off-road attitude while still feeling like a usable daily truck instead of a full specialty machine.',
      tow:72, luxury:58, offroad:80
    },
    {
      name:'Raptor',
      role:'Extreme off-road performance',
      img:'images/raptorr.jpg',
      desc:'Raptor is the aggressive showpiece of the lineup with the boldest stance, the strongest off-road vibe, and the most performance character.',
      tow:70, luxury:70, offroad:98
    }
  ];

  function updateSlider(index){
    const trim = trims[index];
    if(!trim || !outputName) return;
    outputName.textContent = trim.name;
    outputRole.textContent = trim.role;
    outputImg.src = trim.img;
    outputImg.alt = trim.name + ' image';
    outputDesc.textContent = trim.desc;
    towBar.style.width = trim.tow + '%';
    luxuryBar.style.width = trim.luxury + '%';
    offroadBar.style.width = trim.offroad + '%';
  }

  if (slider) {
    updateSlider(Number(slider.value));
    slider.addEventListener('input', (e) => updateSlider(Number(e.target.value)));
  }
});