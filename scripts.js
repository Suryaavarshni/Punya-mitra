(function(){
    try{
        const userString = sessionStorage.getItem('punyatra_user');
        if (userString) {
            const user = JSON.parse(userString);
            const name = user.name;

            if(name && name.trim().length>0){
                var navDropdown = document.getElementById('navUserDropdown');
                var navUserName = document.getElementById('navUserName');
                if(navDropdown && navUserName){ navUserName.textContent = name; navDropdown.style.display = 'block'; }
                var loginBtn = document.getElementById('navLoginBtn'); if(loginBtn){ loginBtn.style.display = 'none'; }

                // Wire logout action
                var logoutBtn = document.getElementById('logoutBtn');
                if(logoutBtn){
                    logoutBtn.addEventListener('click', function(ev){ ev.preventDefault(); try{ sessionStorage.removeItem('punyatra_user'); }catch(e){}; location.href='login.html'; });
                }

                // Display greeting message on home page
                var greeting = document.getElementById('heroGreeting');
                if(greeting){
                    greeting.innerHTML = `Welcome back, <span style="color:var(--primary);">${name}</span>! Your next spiritual journey awaits.`;
                }
            }
        }
    }catch(e){ /* ignore storage errors */ }
})();

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
    });
});
