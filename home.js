document.addEventListener('DOMContentLoaded', function() {
    const userString = sessionStorage.getItem('punyatra_user');
    if (userString) {
        const user = JSON.parse(userString);
        const userId = user._id;

        fetch(`http://localhost:3000/api/bookings/recent/${userId}`)
            .then(response => response.json())
            .then(bookings => {
                const recentBookingsList = document.getElementById('recentBookingsList');
                const noBookingsMessage = document.getElementById('noBookingsMessage');
                const recentBookingsTable = document.querySelector('.booking-table');

                if (bookings.length > 0) {
                    recentBookingsTable.style.display = 'table';
                    noBookingsMessage.style.display = 'none';

                    bookings.forEach(booking => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>#${booking._id}</td>
                            <td>${booking.bookingDetails.temple || 'N/A'}</td>
                            <td>${new Date(booking.bookingDetails.date).toLocaleDateString()}</td>
                            <td><span class="badge bg-success">Confirmed</span></td>
                        `;
                        recentBookingsList.appendChild(row);
                    });
                } else {
                    recentBookingsTable.style.display = 'none';
                    noBookingsMessage.style.display = 'block';
                }
            })
            .catch(error => {
                console.error('Error fetching recent bookings:', error);
                const recentBookingsTable = document.querySelector('.booking-table');
                const noBookingsMessage = document.getElementById('noBookingsMessage');
                recentBookingsTable.style.display = 'none';
                noBookingsMessage.style.display = 'block';
            });
    } else {
        const recentBookingsSection = document.getElementById('recentBookings').closest('.section');
        if(recentBookingsSection) {
            recentBookingsSection.style.display = 'none';
        }
    }
});