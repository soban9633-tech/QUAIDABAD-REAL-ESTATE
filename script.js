// Quaidabad Real Estate - Interactive Scripts & Production Features

// Mock Database of verified properties with rich details
const propertyDatabase = {
  'deal-1': {
    id: 'deal-1',
    title: '10 Marla Modern Luxury Designer Villa',
    category: 'houses',
    type: 'buy',
    size: '10-marla',
    locationCode: 'housing-colony',
    locationName: 'Gulberg Housing Scheme, Quaidabad',
    price: 'PKR 2.40 Crore',
    specs: '5 Beds • 6 Baths • 10 Marla',
    badge: 'Hot Deal',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop',
    description: 'An architectural double-unit masterpiece built with high-grade solid brick and imported Spanish porcelain tile finishes. Features 2 independent American kitchens, spacious drawing/dining hall, lush front lawn, servants quarter, and parking space for 3 cars. Complete legal registry and intiqal available for immediate mutation.',
    landmarks: [
      'Gulberg Main Commercial Center (2 Mins walk)',
      'Quaidabad Public High School (400 meters)',
      'DHQ Referral Hospital Quaidabad (5 Mins drive)',
      'Sargodha-Mianwali Highway Junction (1.2 km)'
    ],
    features: ['Spanish Tiles', 'Solar 10kW Ready', 'Imported Kitchens', 'Registry Intiqal', 'Sui Gas Approved', 'CCTV Security']
  },
  'deal-2': {
    id: 'deal-2',
    title: '1 Kanal Prime Corner Residential Plot',
    category: 'plots',
    type: 'plots',
    size: '1-kanal',
    locationCode: 'civil-lines',
    locationName: 'Model Town Block B, Quaidabad',
    price: 'PKR 75 Lac (Installments Available)',
    specs: 'Registry Intiqal • 60ft Road • 1 Kanal',
    badge: 'Installments Available',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
    description: 'Rare opportunity to acquire a double-front corner residential plot on a 60ft wide carpeted road in Model Town Block B. 100% developed with underground sewerage, high voltage electricity transformer installed, clean water supply, and immediate boundary demarcation. Offered with an easy 2.5-year quarterly installment plan.',
    landmarks: [
      'Model Town Central Community Park (Opposite)',
      'Jamia Masjid Bilal (150 meters)',
      'Tehsil Judicial Complex (3 Mins drive)',
      'General Bus Stand Quaidabad (4 Mins drive)'
    ],
    features: ['Corner Plot', '60ft Wide Front', 'Underground Utilities', 'Possession Ready', 'Quarterly Installments', 'East Open']
  },
  'deal-3': {
    id: 'deal-3',
    title: 'Ground Floor Running Commercial Shop',
    category: 'commercial',
    type: 'commercial',
    size: 'commercial-shop',
    locationCode: 'main-bazaar',
    locationName: 'Main Bazaar, Commercial Hub, Quaidabad',
    price: 'PKR 48 Lac (Urgent Sale)',
    specs: 'High ROI • Ground Floor • 2.5 Marla',
    badge: 'Urgent Sale',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800&auto=format&fit=crop',
    description: 'Fully operational commercial retail shop located right in the bustling Main Bazaar market of Quaidabad with steady footfall. Generating reliable monthly rental cashflow of PKR 35,000 from an established business tenant. Complete fard and registered sale deed. Ideal passive income asset.',
    landmarks: [
      'Main Bazaar Saraf Market Chowk (50 meters)',
      'National Bank of Pakistan Branch (100 meters)',
      'Railway Station Road Crossing (200 meters)',
      'Galla Mandi Quaidabad Entrance (2 Mins walk)'
    ],
    features: ['Rental Income', 'High Footfall Area', 'Rolling Glass Shutter', 'Commercial 3-Phase Meter', 'Direct Owner Sale']
  },
  'prop-1': {
    id: 'prop-1',
    title: '5 Marla Contemporary Double Story House',
    category: 'houses',
    type: 'buy',
    size: '5-marla',
    locationCode: 'civil-lines',
    locationName: 'Civil Lines, Quaidabad',
    price: 'PKR 1.15 Crore',
    specs: '3 Beds • 4 Baths • 5 Marla',
    badge: 'Verified Listing',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
    description: 'Brand new solid construction house in prestigious Civil Lines. Finished with fall ceiling, LED ambient mood lighting, solid ash-wood doors, 2 designer kitchens, and terrace garden. Independent meters for gas and electricity. Ready for immediate family move-in.',
    landmarks: [
      'Civil Club & Sports Ground (3 Mins walk)',
      'Government Degree College (600 meters)',
      'Civil Hospital Quaidabad (800 meters)',
      'Officers Colony Road (300 meters)'
    ],
    features: ['Brand New 2026', 'Ashwood Doors', 'Car Porch (Sedan)', 'Dual Kitchens', 'Balcony Terrace', 'Gas Meter Installed']
  },
  'prop-2': {
    id: 'prop-2',
    title: '5 Marla Developed Residential Plot',
    category: 'plots',
    type: 'plots',
    size: '5-marla',
    locationCode: 'housing-colony',
    locationName: 'Gulberg Housing Scheme, Quaidabad',
    price: 'PKR 28.5 Lac',
    specs: 'Direct Owner • East Open • 5 Marla',
    badge: 'Verified Listing',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
    description: 'Fully paid and demarcated 5 Marla plot situated on street 4 of Gulberg scheme. Fully paved 30ft street with active houses on both sides. Clean title, zero dispute guarantee, and direct owner registry transfer within 48 hours.',
    landmarks: [
      'Gulberg Sector B Family Park (80 meters)',
      'Allied School Campus (3 Mins walk)',
      'Sector Commercial Market (2 Mins)',
      'Main Sargodha Road (1 km)'
    ],
    features: ['Direct Owner', 'Clear Fard Intiqal', 'Street 30ft Paved', 'Immediate Construction', 'Water & Electric Lines']
  },
  'prop-3': {
    id: 'prop-3',
    title: 'Commercial Plaza First Floor Office Suite',
    category: 'commercial',
    type: 'commercial',
    size: 'commercial-plaza',
    locationCode: 'railway-road',
    locationName: 'Railway Road Business Hub, Quaidabad',
    price: 'PKR 1.65 Crore',
    specs: 'Lift Access • Dedicated Park • 6 Marla',
    badge: 'Verified Listing',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    description: 'Modern commercial first floor hall suitable for multinational microfinance institutions, call centers, corporate regional offices, or diagnostics laboratory. Equipped with passenger elevator, fire alarm systems, executive washrooms, and dedicated basement parking spots.',
    landmarks: [
      'Quaidabad Railway Junction (300 meters)',
      'Habib Bank & MCB Bank Branches (Neighboring)',
      'Post Office & Courier Hub (150 meters)',
      'Bazaar-e-Raza Trade Center (500 meters)'
    ],
    features: ['Dedicated Elevator', 'Basement Parking', 'Fire Safety NOC', 'Backup Generator Area', 'High Rental Potential']
  },
  'prop-4': {
    id: 'prop-4',
    title: '10 Marla Luxury Furnished Residence',
    category: 'houses',
    type: 'rent',
    size: '10-marla',
    locationCode: 'civil-lines',
    locationName: 'Model Town Executive Block, Quaidabad',
    price: 'PKR 85,000 / month',
    specs: '4 Beds • 5 Baths • 10 Marla',
    badge: 'For Rent',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop',
    description: 'Upscale fully furnished living in Quaidabad’s most peaceful executive gated sector. Includes split air conditioners, sofa sets, imported beds, refrigerator, solar inverter system, separate servant room, and 24/7 security patrolling.',
    landmarks: [
      'Executive Community Club (100 meters)',
      'City Model School (400 meters)',
      'Sargodha Road Main Gate (800 meters)',
      'Grocery & Pharmacy Mart (200 meters)'
    ],
    features: ['Furnished', '5kVA Solar Inverter', 'Air Conditioned', 'Security Guarded', 'Double Car Porch', 'Servant Quarter']
  },
  'prop-5': {
    id: 'prop-5',
    title: '10 Marla Main Boulevard Residential Plot',
    category: 'plots',
    type: 'plots',
    size: '10-marla',
    locationCode: 'sargodha-road',
    locationName: 'Sargodha Road Belt, Quaidabad',
    price: 'PKR 54 Lac',
    specs: 'Registry Intiqal • 50ft Front • 10 Marla',
    badge: 'Verified Listing',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop',
    description: 'Premium front boulevard plot with 50 feet road exposure. Highly recommended for long-term capital appreciation or building a magnificent executive residence. Sub-registrar registry verified.',
    landmarks: [
      'Sargodha-Mianwali Inter-District Highway (100 meters)',
      'Petroleum Station & Convenience Store (250 meters)',
      'Quaidabad Grain Market Hub (1.5 km)',
      'Motorway M-2 Link Connection (Accessible)'
    ],
    features: ['50ft Boulevard', 'Direct Mutation', 'Solid Earth Soil', 'High Appreciation Corridor', 'Underground Cable']
  },
  'prop-6': {
    id: 'prop-6',
    title: 'Prominent Highway Facing Commercial Shop',
    category: 'commercial',
    type: 'rent',
    size: 'commercial-shop',
    locationCode: 'mianwali-bypass',
    locationName: 'Mianwali Bypass Main Junction, Quaidabad',
    price: 'PKR 45,000 / month',
    specs: 'Main Front • 3-Phase Meter • 2 Marla',
    badge: 'For Rent',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop',
    description: 'Modern roadside showroom shop ideal for auto spare parts, agricultural machinery dealership, hardware mart, or logistics courier franchise. Broad 120ft bypass road visibility with extensive truck and car parking space in front.',
    landmarks: [
      'Bypass Heavy Toll Plaza (800 meters)',
      'Truck Freight Terminal Quaidabad (400 meters)',
      'Agri Trade Depot (600 meters)',
      'Main City Bypass Entrance (200 meters)'
    ],
    features: ['120ft Highway Frontage', 'Huge Vehicle Parking', 'Heavy Floor Load', 'Commercial Electricity', 'Immediate Handover']
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_NUMBER = '923143530776';
  let lastFocusedElement = null;

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (ch) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[ch]));
  }

  // Set minimum selectable date to today on date inputs
  const todayIso = new Date().toISOString().split('T')[0];
  ['visitDate', 'consultDate'].forEach((id) => {
    const input = document.getElementById(id);
    if (input) input.min = todayIso;
  });

  // Sticky Navbar Effect on Scroll (guarded)
  const navbar = document.getElementById('mainNavbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');

  window.closeMobileMenu = function() {
    if (!mobileDrawer || !mobileToggle) return;
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileToggle.setAttribute('aria-expanded', 'false');
    const icon = mobileToggle.querySelector('i');
    if (icon) {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  };

  window.toggleMobileMenu = function() {
    if (!mobileDrawer || !mobileToggle) return;
    const willOpen = !mobileDrawer.classList.contains('open');
    mobileDrawer.classList.toggle('open', willOpen);
    mobileDrawer.setAttribute('aria-hidden', String(!willOpen));
    mobileToggle.setAttribute('aria-expanded', String(willOpen));
    const icon = mobileToggle.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars', !willOpen);
      icon.classList.toggle('fa-xmark', willOpen);
    }
  };

  // Interactive Search Tabs
  const searchTabs = document.querySelectorAll('.tab-pill');
  let currentTab = 'buy';

  searchTabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      filterByTab(tab.dataset.tab, e);
    });
  });

  // Helper function to filter properties directly from Navbar links or search tabs
  window.filterByTab = function(tabName, triggerEvent) {
    currentTab = tabName || 'buy';
    searchTabs.forEach((t) => {
      const isMatch = t.dataset.tab === currentTab;
      t.classList.toggle('active', isMatch);
      t.setAttribute('aria-selected', String(isMatch));
    });
    updateFormOptions(currentTab);
    window.handleSearch();

    const propSection = document.getElementById('properties');
    if (propSection && triggerEvent && triggerEvent.type === 'click') {
      propSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  function updateFormOptions(tab) {
    const sizeSelect = document.getElementById('sizeSelect');
    if (!sizeSelect) return;

    if (tab === 'plots') {
      sizeSelect.innerHTML = `
        <option value="" selected>Any Plot Size</option>
        <option value="5-marla">5 Marla Plot</option>
        <option value="10-marla">10 Marla Plot</option>
        <option value="1-kanal">1 Kanal Plot</option>
      `;
    } else if (tab === 'commercial') {
      sizeSelect.innerHTML = `
        <option value="" selected>Any Commercial Type</option>
        <option value="commercial-shop">Commercial Shop</option>
        <option value="commercial-plaza">Commercial Plaza / Floor</option>
      `;
    } else {
      sizeSelect.innerHTML = `
        <option value="" selected>Any Size</option>
        <option value="5-marla">5 Marla</option>
        <option value="10-marla">10 Marla</option>
        <option value="1-kanal">1 Kanal</option>
        <option value="commercial-shop">Commercial Shop</option>
        <option value="commercial-plaza">Commercial Plaza / Floor</option>
      `;
    }
  }

  function matchesBudget(priceLacStr, budgetVal) {
    if (!budgetVal) return true;
    const priceLac = parseFloat(priceLacStr);
    if (Number.isNaN(priceLac)) return true;
    switch (budgetVal) {
      case 'under-30-lacs': return priceLac < 30;
      case '30-60-lacs': return priceLac >= 30 && priceLac <= 60;
      case '60-lacs-1-cr': return priceLac > 60 && priceLac <= 120;
      case '1.2-2.5-cr': return priceLac > 120 && priceLac <= 250;
      case '2.5-cr-plus': return priceLac > 250;
      default: return true;
    }
  }

  function setTrackFilteredMode(isFiltered, matchedCount) {
    const track = document.getElementById('featuredPropertiesGrid');
    const container = track ? track.closest('.marquee-slider-container') : null;
    const emptyState = document.getElementById('featuredEmptyState');

    if (track) {
      track.classList.toggle('filtered-static', isFiltered);
      track.querySelectorAll('.property-card[aria-hidden="true"]').forEach((clone) => {
        clone.style.display = isFiltered ? 'none' : 'flex';
      });
    }
    if (container) {
      container.classList.toggle('is-filtered', isFiltered);
      container.style.display = matchedCount === 0 ? 'none' : '';
    }
    if (emptyState) {
      emptyState.style.display = matchedCount === 0 ? 'block' : 'none';
    }
  }

  window.resetPropertyFilters = function() {
    const locationSelect = document.getElementById('locationSelect');
    const sizeSelect = document.getElementById('sizeSelect');
    const budgetSelect = document.getElementById('budgetSelect');
    const notification = document.getElementById('searchNotification');
    if (locationSelect) locationSelect.value = '';
    if (budgetSelect) budgetSelect.value = '';
    if (notification) notification.style.display = 'none';
    currentTab = 'buy';
    searchTabs.forEach((t) => {
      const isBuy = t.dataset.tab === 'buy';
      t.classList.toggle('active', isBuy);
      t.setAttribute('aria-selected', String(isBuy));
    });
    updateFormOptions('buy');
    if (sizeSelect) sizeSelect.value = '';

    document.querySelectorAll('.filter-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.filter === 'all');
    });
    document.querySelectorAll('#featuredPropertiesGrid .property-card').forEach((card) => {
      card.style.display = 'flex';
    });
    setTrackFilteredMode(false, 6);
  };

  // Smart Search: Filters Featured Properties & Smooth Scrolls
  window.handleSearch = function() {
    const locationVal = document.getElementById('locationSelect')?.value || '';
    const sizeVal = document.getElementById('sizeSelect')?.value || '';
    const budgetVal = document.getElementById('budgetSelect')?.value || '';
    const notification = document.getElementById('searchNotification');

    const originalCards = document.querySelectorAll('#featuredPropertiesGrid .property-card:not([aria-hidden="true"])');
    let matchedCount = 0;

    originalCards.forEach((card) => {
      const cardType = card.dataset.type;
      const cardSize = card.dataset.size;
      const cardLocation = card.dataset.location;
      const cardPriceLac = card.dataset.priceLac;

      const matchTab = (currentTab === 'buy' || currentTab === 'all') ? true : (cardType === currentTab);
      const matchSize = !sizeVal || (cardSize === sizeVal);
      const matchLocation = !locationVal || (cardLocation === locationVal);
      const matchBudget = matchesBudget(cardPriceLac, budgetVal);

      if (matchTab && matchSize && matchLocation && matchBudget) {
        card.style.display = 'flex';
        matchedCount++;
      } else {
        card.style.display = 'none';
      }
    });

    const isSubset = matchedCount < originalCards.length;
    setTrackFilteredMode(isSubset, matchedCount);

    document.querySelectorAll('.filter-btn').forEach((btn) => btn.classList.remove('active'));

    if (notification) {
      notification.innerHTML = `<i class="fa-solid fa-circle-check" aria-hidden="true"></i> Found <strong>${matchedCount}</strong> ${matchedCount === 1 ? 'property' : 'properties'} matching your criteria (${escapeHtml(currentTab.toUpperCase())}).`;
      notification.style.display = 'block';
      setTimeout(() => {
        notification.style.display = 'none';
      }, 7000);
    }

    showToast('Search Applied', `${matchedCount} ${matchedCount === 1 ? 'property matches' : 'properties match'} your filters.`);

    const propertiesSection = document.getElementById('properties');
    if (propertiesSection) {
      setTimeout(() => {
        propertiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 250);
    }
  };

  // Marquee Infinite Track Setup: Clone elements once for seamless 100% loop
  const marqueeTrack = document.getElementById('featuredPropertiesGrid');
  if (marqueeTrack) {
    const originalCards = Array.from(marqueeTrack.children);
    originalCards.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.querySelectorAll('button, a').forEach((el) => el.setAttribute('tabindex', '-1'));
      marqueeTrack.appendChild(clone);
    });
  }

  // Category Filter for Featured Properties
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.dataset.filter;
      const originalCards = document.querySelectorAll('#featuredPropertiesGrid .property-card:not([aria-hidden="true"])');
      let visibleCount = 0;

      originalCards.forEach((card) => {
        if (filterValue === 'all' || card.dataset.category === filterValue) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      setTrackFilteredMode(filterValue !== 'all', visibleCount);
    });
  });

  // Favorite Heart Toggle
  window.toggleFavorite = function(button) {
    button.classList.toggle('active');
    const icon = button.querySelector('i');
    if (button.classList.contains('active')) {
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid');
      showToast('Saved to Favorites', 'Property added to your wishlist.');
    } else {
      icon.classList.remove('fa-solid');
      icon.classList.add('fa-regular');
      showToast('Removed', 'Property removed from wishlist.');
    }
  };

  // Open Rich Property Details Modal by ID
  window.openPropertyDetailModalById = function(propId) {
    const prop = propertyDatabase[propId];
    if (!prop) return;

    const modal = document.getElementById('propertyDetailsModal');
    if (!modal) return;

    lastFocusedElement = document.activeElement;
    document.getElementById('modalPropertyImg').src = prop.image;
    document.getElementById('modalPropertyImg').alt = prop.title;
    document.getElementById('modalPropertyBadge').textContent = prop.badge;
    document.getElementById('modalPropertyTitle').textContent = prop.title;
    document.getElementById('modalPropertyLocation').innerHTML = `<i class="fa-solid fa-location-dot text-gold" aria-hidden="true"></i> ${escapeHtml(prop.locationName)}`;
    document.getElementById('modalPropertyPrice').textContent = prop.price;
    document.getElementById('modalPropertySpecs').textContent = prop.specs;
    document.getElementById('modalPropertyDesc').textContent = prop.description;

    // Populate Landmarks
    const landmarksList = document.getElementById('modalLandmarksList');
    landmarksList.innerHTML = prop.landmarks.map(lm => `<li><i class="fa-solid fa-location-arrow" aria-hidden="true"></i> ${escapeHtml(lm)}</li>`).join('');

    // Populate Features
    const featuresTags = document.getElementById('modalFeaturesTags');
    featuresTags.innerHTML = prop.features.map(feat => `<span class="tag"><i class="fa-solid fa-check text-gold" aria-hidden="true"></i> ${escapeHtml(feat)}</span>`).join('');

    // WhatsApp Action
    const whatsappMsg = encodeURIComponent(`Assalam-o-Alaikum, I am inquiring about '${prop.title}' (${prop.price}) at ${prop.locationName}. Please share further documents & visit details.`);
    document.getElementById('modalWhatsAppBtn').href = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`;

    // Store active property title in visit form
    modal.dataset.activeTitle = prop.title;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-close-btn')?.focus();
  };

  window.closeDetailsModal = function() {
    const modal = document.getElementById('propertyDetailsModal');
    if (modal && modal.classList.contains('open')) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    }
  };

  // Schedule a Visit Form Handler inside Details Modal
  window.handleVisitSubmit = function() {
    const name = document.getElementById('visitName').value.trim();
    const phone = document.getElementById('visitPhone').value.trim();
    const date = document.getElementById('visitDate').value;
    const time = document.getElementById('visitTime').value;
    const modal = document.getElementById('propertyDetailsModal');
    const propertyTitle = modal.dataset.activeTitle || 'Selected Property';

    closeDetailsModal();
    showToast('Visit Scheduled!', `Shukriya ${name}! Our representative will escort you to ${propertyTitle} on ${date} (${time}).`);

    // Pre-fill WhatsApp confirmation
    const visitMsg = encodeURIComponent(`Assalam-o-Alaikum Quaidabad Real Estate,
I would like to schedule an on-site visit:
Property: ${propertyTitle}
Name: ${name}
Phone: ${phone}
Date: ${date}
Time Slot: ${time}
Please confirm the escort officer.`);

    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${visitMsg}`, '_blank', 'noopener,noreferrer');
    }, 1200);

    document.getElementById('scheduleVisitForm').reset();
  };

  // Appointment / Consultation Modal Handlers
  window.openConsultationModal = function(triggerEl) {
    const modal = document.getElementById('consultationBookingModal');
    if (modal) {
      lastFocusedElement = triggerEl || document.activeElement;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      modal.querySelector('.modal-close-btn')?.focus();
    }
  };

  window.openProjectInquiryModal = function(projectTitle, projectLocation, projectPrice, triggerEl) {
    const notesInput = document.getElementById('consultNotes');
    if (notesInput) {
      notesInput.value = `Availability Inquiry: ${projectTitle} (${projectLocation}) — ${projectPrice}`;
    }
    window.openConsultationModal(triggerEl);
  };

  window.openServiceInquiryModal = function(serviceName, triggerEl) {
    const notesInput = document.getElementById('consultNotes');
    if (notesInput) {
      notesInput.value = `Service Inquiry: ${serviceName}`;
    }
    window.openConsultationModal(triggerEl);
  };

  window.closeConsultationModal = function() {
    const modal = document.getElementById('consultationBookingModal');
    if (modal && modal.classList.contains('open')) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    }
  };

  window.handleConsultationSubmit = function() {
    const name = document.getElementById('consultName').value.trim();
    const phone = document.getElementById('consultPhone').value.trim();
    const meetingType = document.getElementById('consultMeetingType').value;
    const date = document.getElementById('consultDate').value;
    const notes = document.getElementById('consultNotes').value.trim() || 'General Property Consultation';

    closeConsultationModal();
    showToast('Appointment Confirmed!', `Shukriya ${name}! Your consultation (${meetingType}) is booked for ${date}.`);

    const consultMsg = encodeURIComponent(`Assalam-o-Alaikum Quaidabad Real Estate,
I have booked an appointment:
Name: ${name}
Phone: ${phone}
Meeting Type: ${meetingType}
Date: ${date}
Notes: ${notes}
Please confirm the appointment slot.`);

    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${consultMsg}`, '_blank', 'noopener,noreferrer');
    }, 1200);

    document.getElementById('consultationBookingForm').reset();
  };

  // Lead Generation Callback Form Submission Handler
  window.handleLeadSubmit = function() {
    const name = document.getElementById('leadName')?.value.trim() || '';
    const contact = document.getElementById('leadContact')?.value.trim() || '';
    const interest = document.getElementById('leadInterest')?.value || '';
    const feedback = document.getElementById('leadFormFeedback');

    if (feedback) {
      feedback.innerHTML = `
        <i class="fa-solid fa-circle-check" aria-hidden="true"></i> Shukriya <strong>${escapeHtml(name)}</strong>! Your private callback request for <em>${escapeHtml(interest)}</em> has been registered.
      `;
      feedback.style.display = 'block';
    }

    showToast('Callback Request Confirmed', `Thank you ${name}! Our senior advisor will reach out at ${contact}.`);

    document.getElementById('leadGenerationForm').reset();

    setTimeout(() => {
      if (feedback) feedback.style.display = 'none';
    }, 7000);
  };

  // Toast Notification System
  window.showToast = function(title, message) {
    const toast = document.getElementById('toastNotification');
    const toastTitle = document.getElementById('toastTitle');
    const toastMsg = document.getElementById('toastMessage');

    if (!toast) return;

    toastTitle.textContent = title;
    toastMsg.textContent = message;

    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  };

  // Keyboard Escape Handler for All Modals & Mobile Drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDetailsModal();
      closeConsultationModal();
      closeMobileMenu();
    }
  });

  // Hero 5-Slide Interactive Showcase
  const heroSlides = [
    {
      eyebrow: 'MORE THAN PROPERTIES',
      lineDark: 'Find a Place',
      lineGold: 'to Call Home',
      subheadline: 'Discover modern homes, premium locations and a lifestyle you deserve.',
      ctaText: 'Explore Properties',
      ctaHref: '#properties',
      scrim: false
    },
    {
      eyebrow: 'SIGNATURE RESIDENCES',
      lineDark: 'Luxury Villas',
      lineGold: 'Built to Last',
      subheadline: "10 Marla & 1 Kanal Spanish-inspired designer homes in Quaidabad's finest blocks.",
      ctaText: 'View Luxury Villas',
      ctaHref: '#exclusive-portfolio',
      scrim: true
    },
    {
      eyebrow: '100% VERIFIED FARD & INTIQAL',
      lineDark: 'Prime Plots',
      lineGold: 'Clear Titles',
      subheadline: 'Secure corner and boulevard plots on easy installments with full Patwarkhana verification.',
      ctaText: 'Browse Plots',
      ctaHref: '#properties',
      scrim: true
    },
    {
      eyebrow: 'HIGH-YIELD COMMERCIAL',
      lineDark: 'Prime Plazas',
      lineGold: 'Smart Returns',
      subheadline: 'Main Bazaar shops and Railway Road office suites engineered for steady rental income.',
      ctaText: 'Explore Commercial',
      ctaHref: '#properties',
      scrim: true
    },
    {
      eyebrow: 'OVERSEAS & TURNKEY DESK',
      lineDark: 'Dream Homes',
      lineGold: 'Crafted End-to-End',
      subheadline: 'From TMA map approval to turnkey finishing — trusted by local and overseas Pakistanis.',
      ctaText: 'Our Services',
      ctaHref: '#services',
      scrim: true
    }
  ];

  const heroBgEls = document.querySelectorAll('#heroBgSlides .hero-bg-slide');
  const heroDots = document.querySelectorAll('.hero-dot');
  const heroScrim = document.getElementById('heroBgScrim');
  const heroContentBlock = document.getElementById('heroContentBlock');
  const heroEyebrow = document.getElementById('heroEyebrow');
  const heroLineDark = document.getElementById('heroLineDark');
  const heroLineGold = document.getElementById('heroLineGold');
  const heroSubheadline = document.getElementById('heroSubheadline');
  const heroCtaBtn = document.getElementById('heroCtaBtn');
  const heroCtaText = document.getElementById('heroCtaText');
  let activeHeroIndex = 0;
  let heroTimer = null;

  function setHeroSlide(index) {
    if (!heroBgEls.length) return;
    activeHeroIndex = (index + heroSlides.length) % heroSlides.length;
    const data = heroSlides[activeHeroIndex];

    heroBgEls.forEach((el, i) => el.classList.toggle('active', i === activeHeroIndex));
    heroDots.forEach((dot, i) => {
      const isAct = i === activeHeroIndex;
      dot.classList.toggle('active', isAct);
      dot.setAttribute('aria-selected', String(isAct));
    });
    if (heroScrim) heroScrim.classList.toggle('visible', data.scrim);

    if (heroContentBlock) {
      heroContentBlock.classList.add('is-switching');
      setTimeout(() => {
        if (heroEyebrow) heroEyebrow.textContent = data.eyebrow;
        if (heroLineDark) heroLineDark.textContent = data.lineDark;
        if (heroLineGold) heroLineGold.textContent = data.lineGold;
        if (heroSubheadline) heroSubheadline.textContent = data.subheadline;
        if (heroCtaText) heroCtaText.textContent = data.ctaText;
        if (heroCtaBtn) heroCtaBtn.setAttribute('href', data.ctaHref);
        heroContentBlock.classList.remove('is-switching');
      }, 140);
    }
  }

  function startHeroAutoplay() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    stopHeroAutoplay();
    heroTimer = setInterval(() => setHeroSlide(activeHeroIndex + 1), 5500);
  }

  function stopHeroAutoplay() {
    if (heroTimer) {
      clearInterval(heroTimer);
      heroTimer = null;
    }
  }

  heroDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      setHeroSlide(parseInt(dot.dataset.slide, 10));
      startHeroAutoplay();
    });
  });

  document.getElementById('heroPrevBtn')?.addEventListener('click', () => {
    setHeroSlide(activeHeroIndex - 1);
    startHeroAutoplay();
  });

  document.getElementById('heroNextBtn')?.addEventListener('click', () => {
    setHeroSlide(activeHeroIndex + 1);
    startHeroAutoplay();
  });

  startHeroAutoplay();

  // Interactive FAQ Accordion
  const faqTriggers = document.querySelectorAll('#faqAccordion .faq-trigger');
  faqTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const currentItem = trigger.closest('.faq-item');
      const currentPanel = document.getElementById(trigger.getAttribute('aria-controls'));
      const isOpening = !currentItem.classList.contains('open');

      document.querySelectorAll('#faqAccordion .faq-item').forEach((item) => {
        item.classList.remove('open');
        const btn = item.querySelector('.faq-trigger');
        const badge = item.querySelector('.faq-toggle-badge');
        const panel = btn ? document.getElementById(btn.getAttribute('aria-controls')) : null;
        if (btn) btn.setAttribute('aria-expanded', 'false');
        if (badge) badge.textContent = '+';
        if (panel) panel.hidden = true;
      });

      if (isOpening) {
        currentItem.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        const badge = currentItem.querySelector('.faq-toggle-badge');
        if (badge) badge.textContent = '−';
        if (currentPanel) currentPanel.hidden = false;
      }
    });
  });
});
