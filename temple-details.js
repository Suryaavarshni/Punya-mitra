document.addEventListener('DOMContentLoaded', function () {
    const templeDetailsContainer = document.querySelector('.temple-details-container');
    const urlParams = new URLSearchParams(window.location.search);
    const templeName = urlParams.get('temple');

    const templeDetails = {
        'Thanjavur Brihadeeswarar': {
            fastFacts: 'Built in the 11th century by Raja Raja Chola I. Famous for its massive vimana and Chola-era sculptures.',
            openingHours: '06:00 AM - 12:00 PM, 04:00 PM - 08:00 PM',
            bestTime: 'October to March',
            nearby: ['Thanjavur Palace', 'Art Gallery', 'Local Handicraft Markets'],
            image: 'img/Thanjavur.jpg'
        },
        'Madurai Meenakshi': {
            fastFacts: 'A historic temple complex known for its sculpted towers and annual Meenakshi Tirukalyanam festival.',
            openingHours: '05:00 AM - 12:30 PM, 04:00 PM - 10:00 PM',
            bestTime: 'October to March',
            nearby: ['Thirumalai Nayakkar Palace', 'Meenakshi Amman Market'],
            image: 'img/Madurai.JPG'
        },
        'Tirupati Balaji': {
            fastFacts: 'One of the most visited pilgrimage sites in the world located atop Tirumala Hills.',
            openingHours: '02:30 AM - 01:00 PM, 03:00 PM - 08:00 PM (subject to sevas)',
            bestTime: 'September to March',
            nearby: ['Tirumala Footpath', 'Sri Venkateswara Museum'],
            image: 'img/Tirupathi.jpg'
        },
        'Harmandir Sahib (Golden Temple)': {
            fastFacts: 'The holiest Gurdwara of Sikhism, noted for its gold-plated sanctum and community langar serving thousands daily.',
            openingHours: '24 hours',
            bestTime: 'November to February',
            nearby: ['Jallianwala Bagh', 'Partition Museum'],
            image: 'img/HarmandirSahib.jpg'
        },
        'Vaishno Devi': {
            fastFacts: 'Cave shrine located in Trikuta Mountains; requires a trek for most pilgrims.',
            openingHours: '04:00 AM - 10:00 PM',
            bestTime: 'March to October (avoid heavy snowfall months)',
            nearby: ['Katra Market', 'Ardhkuwari'],
            image: 'img/Vaishnodevi.jpg'
        },
        'Kashi Vishwanath': {
            fastFacts: 'One of the twelve Jyotirlingas located on the banks of the Ganges in Varanasi.',
            openingHours: '04:00 AM - 11:00 PM',
            bestTime: 'October to March',
            nearby: ['Dashashwamedh Ghat', 'Sarnath (short trip)'],
            image: 'img/KashiVishwanath.jpg'
        },
        'Konark Sun Temple': {
            fastFacts: '13th-century Sun Temple famous for its chariot-shaped architecture and stone carvings.',
            openingHours: '06:00 AM - 06:00 PM',
            bestTime: 'October to February',
            nearby: ['Chandrabhaga Beach', 'Archaeological Museum (Konark)'],
            image: 'img/KonarkSun.jpg'
        },
        'Kedarnath': {
            fastFacts: 'High-altitude Himalayan shrine; part of Char Dham Yatra; often covered in snow in winters.',
            openingHours: 'Depends on season (closed in heavy winter)',
            bestTime: 'May to October',
            nearby: ['Gaurikund', 'Umbrella Hills'],
            image: 'img/Kedarnath.jpg'
        },
        'Jagannath Puri': {
            fastFacts: 'Famous for Rath Yatra; one of Char Dham pilgrimage sites with a large coastal temple town.',
            openingHours: '06:00 AM - 09:00 PM',
            bestTime: 'October to February',
            nearby: ['Puri Beach', 'Loknath Temple'],
            image: 'img/JagannathPuri.jpg'
        },
        'Somnath Temple': {
            fastFacts: 'One of the oldest temples on India’s western coast with a long history of reconstruction.',
            openingHours: '05:00 AM - 10:00 PM',
            bestTime: 'October to March',
            nearby: ['Triveni Sangam', 'Bhalka Tirtha'],
            image: 'img/SomnathTemple.jpg'
        }
    };

    if (templeName && templeDetails[templeName]) {
        const details = templeDetails[templeName];
        const nearbyList = details.nearby.map(place => `<li>${place}</li>`).join('');

        const templeDetailsContent = document.getElementById('temple-details-content');
        templeDetailsContent.innerHTML = `
            <div class="temple-details-header">
                <h1 class="temple-details-title">${templeName}</h1>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <img src="${details.image}" class="img-fluid rounded mb-4" alt="${templeName}">
                </div>
                <div class="col-md-6">
                    <div class="temple-details-card">
                        <h5>Fast Facts</h5>
                        <p>${details.fastFacts}</p>
                    </div>
                    <div class="temple-details-card">
                        <h5>Opening Hours</h5>
                        <p>${details.openingHours}</p>
                    </div>
                    <div class="temple-details-card">
                        <h5>Best Time to Visit</h5>
                        <p>${details.bestTime}</p>
                    </div>
                    <div class="temple-details-card">
                        <h5>Nearby Places</h5>
                        <ul>${nearbyList}</ul>
                    </div>
                </div>
            </div>
        `;

        const bookDarshanBtn = document.getElementById('bookDarshanBtn');
        bookDarshanBtn.href = `booking.html?temple=${encodeURIComponent(templeName)}`;
    } else {
        templeDetailsContainer.innerHTML = '<p class="text-center">Temple details not found.</p>';
    }
});
