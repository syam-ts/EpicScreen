  fetch('../components/nav.html')
        .then(res => res.text())
        .then(html => {
            document.getElementById('navbar').innerHTML = html;
        });