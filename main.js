home();

const body = document.querySelector("body"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode"
    }
    else {
        modeText.innerText = "Dark Mode"
    }
});

async function home() {
    const datalist = document.getElementById("container"),
        header = document.createElement("div"),
        content = document.createElement("div");

    datalist.innerHTML = "";

    header.className = "header";
    content.className = "content";

    datalist.appendChild(header);
    datalist.appendChild(content);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '997be82698msh67758aacc9dde19p109648jsn1f516cccc590',
            'X-RapidAPI-Host': 'news246.p.rapidapi.com'
        }
    };

    // ====== NEWS ======

    await fetch('https://news246.p.rapidapi.com/football', options)
        .then(response => response.json())
        .then(response => {

            const header_text = document.createElement("h1");
            header_text.textContent = "HOME";
            header.appendChild(header_text);

            const headerTamp = document.createElement("div");
            headerTamp.className = "header-text2";
            content.appendChild(headerTamp);

            const contentHeader = document.createElement("h3");
            contentHeader.textContent = "News";
            headerTamp.appendChild(contentHeader)


            for (let i = 0; i < 5; i++) {
                if (response[i].news.image == undefined) {
                    continue;
                }
                else {
                    const news = document.createElement("div");
                    news.classList = "news";
                    content.appendChild(news);

                    const image = document.createElement("img");
                    image.src = response[i].news.image;
                    news.appendChild(image);

                    const title = document.createElement("p");
                    title.textContent = response[i].news.title;
                    news.appendChild(title);

                    const link = document.createElement("a");
                    link.href = response[i].news.link;
                    link.textContent = "More....";
                    news.appendChild(link);
                }
            }
        })
        .catch(err => console.error(err));

    const options2 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '997be82698msh67758aacc9dde19p109648jsn1f516cccc590',
            'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
        }
    };

    // ====== HIGHLIGHT ======

    fetch('https://free-football-soccer-videos.p.rapidapi.com/', options2)
        .then(response => response.json())
        .then(response => {

            const headerTamp = document.createElement("div");
            headerTamp.className = "header-text2";
            content.appendChild(headerTamp);

            const contentHeader = document.createElement("h3");
            contentHeader.textContent = "Highlight";
            headerTamp.appendChild(contentHeader)

            const vidTamp = document.createElement("div");
            vidTamp.className = "video";
            content.appendChild(vidTamp);

            for (let i = 0; i < 5; i++) {

                const vid = document.createElement("div");
                vid.innerHTML = response[i].embed;
                vidTamp.appendChild(vid);
            }

            // ====== FIXTURE =======

            const headerTamp2 = document.createElement("div");
            headerTamp2.className = "header-text2";
            content.appendChild(headerTamp2);

            const contentHeader2 = document.createElement("h3");
            contentHeader2.textContent = "Fixture";
            headerTamp2.appendChild(contentHeader2)

            const fixture = document.createElement("div");
            fixture.className = "fixture";
            content.appendChild(fixture);

            var w = window.innerWidth;

            if (w == 280 || (w > 280 && w < 360)) {
                var row = `
                <iframe src="https://www.scorebat.com/embed/livescore/?token=MjE4NzhfMTY1OTQ1MTU4M18xNTYyMGMyN2U4MWQ5ZGJlNDA4NGQzNTFiZTE2NDRjOTZkZjhjMDhm" frameborder="0" allowfullscreen allow='autoplay; fullscreen' style="width:270px;height:760px;overflow:hidden;display:block;" class="_scorebatEmbeddedPlayer_" live></iframe><script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'scorebat-jssdk'));</script>
                `;
            }
            else if (w == 360 || (w > 360 && w < 390)) {
                var row = `
                <iframe src="https://www.scorebat.com/embed/livescore/?token=MjE4NzhfMTY1OTQ1MTU4M18xNTYyMGMyN2U4MWQ5ZGJlNDA4NGQzNTFiZTE2NDRjOTZkZjhjMDhm" frameborder="0" allowfullscreen allow='autoplay; fullscreen' style="width:290px;height:760px;overflow:hidden;display:block;" class="_scorebatEmbeddedPlayer_" live></iframe><script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'scorebat-jssdk'));</script>
                `;
            }
            else if (w == 390 || (w > 390 && w < 768)) {
                var row = `
                <iframe src="https://www.scorebat.com/embed/livescore/?token=MjE4NzhfMTY1OTQ1MTU4M18xNTYyMGMyN2U4MWQ5ZGJlNDA4NGQzNTFiZTE2NDRjOTZkZjhjMDhm" frameborder="0" allowfullscreen allow='autoplay; fullscreen' style="width:310px;height:760px;overflow:hidden;display:block;" class="_scorebatEmbeddedPlayer_" live></iframe><script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'scorebat-jssdk'));</script>
    `;
            }
            else if (w == 768 || (w > 768 && w < 1024)) {
                var row = `
                <iframe src="https://www.scorebat.com/embed/livescore/?token=MjE4NzhfMTY1OTQ1MTU4M18xNTYyMGMyN2U4MWQ5ZGJlNDA4NGQzNTFiZTE2NDRjOTZkZjhjMDhm" frameborder="0" allowfullscreen allow='autoplay; fullscreen' style="width:500px;height:760px;overflow:hidden;display:block;" class="_scorebatEmbeddedPlayer_" live></iframe><script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'scorebat-jssdk'));</script>
                `;
            }
            else if (w == 1024 || w > 1024) {
                var row = `
                <iframe src="https://www.scorebat.com/embed/livescore/?token=MjE4NzhfMTY1OTQ1MTU4M18xNTYyMGMyN2U4MWQ5ZGJlNDA4NGQzNTFiZTE2NDRjOTZkZjhjMDhm" frameborder="0" allowfullscreen allow='autoplay; fullscreen' style="width:600px;height:760px;overflow:hidden;display:block;" class="_scorebatEmbeddedPlayer_" live></iframe><script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'scorebat-jssdk'));</script>
                `;
            }

            fixture.innerHTML += row;
        })
        .catch(err => console.error(err));
}

async function news() {
    const datalist = document.getElementById("container"),
        header = document.createElement("div"),
        content = document.createElement("div");

    datalist.innerHTML = "";

    header.className = "header";
    content.className = "content";

    datalist.appendChild(header);
    datalist.appendChild(content);

    const header_text = document.createElement("h1");
    header_text.textContent = "NEWS";
    header.appendChild(header_text);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '997be82698msh67758aacc9dde19p109648jsn1f516cccc590',
            'X-RapidAPI-Host': 'news246.p.rapidapi.com'
        }
    };

    fetch('https://news246.p.rapidapi.com/football', options)
        .then(response => response.json())
        .then(response => {

            for (let i = 0; i < response.length; i++) {
                if (response[i].news.image == undefined) {
                    continue;
                }
                else {
                    const news = document.createElement("div");
                    news.classList = "news";
                    content.appendChild(news);

                    const image = document.createElement("img");
                    image.src = response[i].news.image;
                    news.appendChild(image);

                    const title = document.createElement("p");
                    title.textContent = response[i].news.title;
                    news.appendChild(title);

                    const link = document.createElement("a");
                    link.href = response[i].news.link;
                    link.textContent = "More....";
                    news.appendChild(link);
                }
            }
        })
        .catch(err => console.error(err));
}

async function competitions() {
    const datalist = document.getElementById("container"),
        header = document.createElement("div"),
        content = document.createElement("div");

    datalist.innerHTML = "";

    header.className = "header";
    content.className = "content";

    datalist.appendChild(header);
    datalist.appendChild(content);

    const header_text = document.createElement("h1");
    header_text.textContent = "COMPETITIONS";
    header.appendChild(header_text);

    // ====== FILTER ======

    const buttonFilter = document.createElement("div");
    buttonFilter.classList = "button-filter";
    content.appendChild(buttonFilter);

    const toggle = `
        <button onclick="togglePopup()"><i class="fa-solid fa-filter"></i></button>
    `;
    buttonFilter.innerHTML += toggle;

    // ====== POP-UP ======

    const popup = document.createElement("div");
    popup.classList = "popup";
    popup.id = "poppop";
    content.appendChild(popup);

    const overlay = document.createElement("div");
    overlay.classList = "overlay";
    popup.appendChild(overlay);

    const contentt = document.createElement("div");
    contentt.classList = "contentt";
    popup.appendChild(contentt);

    const close = document.createElement("div");
    close.classList = "close-button";
    close.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    close.onclick = function () {
        document.getElementById("poppop").classList.remove("active");
    }
    contentt.appendChild(close);

    const titlePop = document.createElement("h2");
    titlePop.textContent = "filter";
    contentt.appendChild(titlePop);

    // ====== FORM PILIH ======

    const form = document.createElement("form");
    form.method = "post";
    form.id = "pilih";
    contentt.appendChild(form);

    var selectCountry = document.createElement("select");
    selectCountry.name = "myCountry";
    form.appendChild(selectCountry);

    var selectType = document.createElement("select");
    selectType.name = "myType";
    form.appendChild(selectType);

    const submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "submit";
    form.appendChild(submit);

    const reset = document.createElement("input");
    reset.type = "reset";
    reset.value = "reset";
    form.appendChild(reset);

    const firstOptionCountry = `
        <option selected hidden disabled>Select Country</option>
    `;

    const firstOptionType = `
        <option value="League">League</option>
        <option value="Cup">Cup</option>
    `;

    selectCountry.innerHTML += firstOptionCountry;
    selectType.innerHTML += firstOptionType;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '997be82698msh67758aacc9dde19p109648jsn1f516cccc590',
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
        }
    };

    await fetch('https://api-football-beta.p.rapidapi.com/countries', options)
        .then(response => response.json())
        .then(response => {

            for (let i = 0; i < response.response.length; i++) {
                const option1 = document.createElement("option");
                option1.value = response.response[i].name;
                option1.textContent = response.response[i].name;
                selectCountry.appendChild(option1);
            }
        })
        .catch(err => console.error(err));

    var show = document.getElementById("pilih");

    var table = document.createElement("table");
    table.classList = "myLeague";
    content.appendChild(table);

    // ====== TAMPILAN DEFAULT ======

    const options2 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '997be82698msh67758aacc9dde19p109648jsn1f516cccc590',
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
        }
    };

    fetch('https://api-football-beta.p.rapidapi.com/leagues?type=league&country=England', options2)
        .then(response => response.json())
        .then(response => {

            const thead1 = document.createElement("th");
            thead1.textContent = "NO";
            table.appendChild(thead1);

            const thead2 = document.createElement("th");
            thead2.textContent = "LEAGUES";
            table.appendChild(thead2);

            const thead3 = document.createElement("th");
            thead3.textContent = "COUNTRY";
            table.appendChild(thead3);

            for (let i = 0; i < response.response.length; i++) {
                const row = `
                <tr>
                    <td>${i + 1}</td>
                    <td class="league-name">
                        <img src="${response.response[i].league.logo}" class="logo-league">
                        ${response.response[i].league.name}
                    </td>
                    <td>
                        <img src="${response.response[i].country.flag}" class="logo-league">
                        ${response.response[i].country.name}
                    </td>
                </tr>
           `;

                table.innerHTML += row;
            }
        })
        .catch(err => console.error(err));

    // ====== SUBMIT ======

    show.addEventListener("submit", (show) => {
        table.innerHTML = "";

        document.getElementById("poppop").classList.remove("active");

        show.preventDefault();
        const country = new FormData(show.target);
        const type = new FormData(show.target);

        const options3 = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '997be82698msh67758aacc9dde19p109648jsn1f516cccc590',
                'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
            }
        };

        fetch('https://api-football-beta.p.rapidapi.com/leagues?type=' + `${type.get("myType")}` + '&country=' + `${country.get("myCountry")}`, options3)
            .then(response => response.json())
            .then(response => {

                const thead1 = document.createElement("th");
                thead1.textContent = "NO";
                table.appendChild(thead1);

                if (`${type.get("myType")}` == "League") {
                    const thead2 = document.createElement("th");
                    thead2.textContent = "LEAGUES";
                    table.appendChild(thead2);
                }
                else {
                    const thead2 = document.createElement("th");
                    thead2.textContent = "CUPS";
                    table.appendChild(thead2);
                }

                const thead3 = document.createElement("th");
                thead3.textContent = "COUNTRY";
                table.appendChild(thead3);

                for (let i = 0; i < response.response.length; i++) {
                    const row = `
                    <tr>
                        <td>${i + 1}</td>
                        <td class="league-name">
                            <img src="${response.response[i].league.logo}" class="logo-league">
                            ${response.response[i].league.name}
                        </td>
                        <td>
                            <img src="${response.response[i].country.flag}" class="logo-league">
                            ${response.response[i].country.name}
                        </td>
                    </tr>
               `;

                    table.innerHTML += row;
                }
            })
            .catch(err => console.error(err));
    });
}

async function teams() {
    const datalist = document.getElementById("container"),
        header = document.createElement("div"),
        content = document.createElement("div");

    datalist.innerHTML = "";

    header.className = "header";
    content.className = "content";

    datalist.appendChild(header);
    datalist.appendChild(content);

    const header_text = document.createElement("h1");
    header_text.textContent = "TEAMS";
    header.appendChild(header_text);

    // ====== FILTER ======

    const buttonFilter = document.createElement("div");
    buttonFilter.classList = "button-filter";
    content.appendChild(buttonFilter);

    const toggle = `
        <button onclick="togglePopup()"><i class="fa-solid fa-filter"></i></button>
    `;
    buttonFilter.innerHTML += toggle;

    // ====== POP-UP ======

    const popup = document.createElement("div");
    popup.classList = "popup";
    popup.id = "poppop";
    content.appendChild(popup);

    const overlay = document.createElement("div");
    overlay.classList = "overlay";
    popup.appendChild(overlay);

    const contentt = document.createElement("div");
    contentt.classList = "contentt";
    popup.appendChild(contentt);

    const close = document.createElement("div");
    close.classList = "close-button";
    close.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    close.onclick = function () {
        document.getElementById("poppop").classList.remove("active");
    }
    contentt.appendChild(close);

    const titlePop = document.createElement("h2");
    titlePop.textContent = "filter";
    contentt.appendChild(titlePop);

    // ====== FORM PILIH ======

    const form = document.createElement("form");
    form.method = "post";
    form.id = "pilih";
    contentt.appendChild(form);

    var selectCountry = document.createElement("select");
    selectCountry.name = "myCountry";
    selectCountry.id = "myCountry";
    form.appendChild(selectCountry);

    var selectLeague = document.createElement("select");
    selectLeague.name = "myLeague";
    selectLeague.id = "myLeague";
    form.appendChild(selectLeague);

    var selectSeason = document.createElement("select");
    selectSeason.name = "mySeason";
    form.appendChild(selectSeason);

    const submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "submit";
    form.appendChild(submit);

    const reset = document.createElement("input");
    reset.type = "reset";
    reset.value = "reset";
    form.appendChild(reset);

    // ====== OPTION SELECTED ======

    const firstOptionCountry = `
        <option selected hidden disabled>Select Country</option>
    `;

    const firstOptionLeague = `
        <option selected hidden disabled>Select League</option>
    `;

    const firstOptionSeason = `
        <option selected hidden disabled>Select Season</option>
    `;

    selectCountry.innerHTML += firstOptionCountry;
    selectLeague.innerHTML += firstOptionLeague;
    selectSeason.innerHTML += firstOptionSeason;

    // ====== MENGAMBIL DATA COUNTRY ======

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '997be82698msh67758aacc9dde19p109648jsn1f516cccc590',
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
        }
    };

    await fetch('https://api-football-beta.p.rapidapi.com/countries', options)
        .then(response => response.json())
        .then(response => {

            for (let i = 0; i < response.response.length; i++) {
                const option1 = document.createElement("option");
                option1.value = response.response[i].name;
                option1.textContent = response.response[i].name;
                selectCountry.appendChild(option1);
            }
        })
        .catch(err => console.error(err));

    // ====== MENGAMBIL DATA LEAGUE ======

    var country = document.getElementById("myCountry");

    country.addEventListener("change", (send) => {
        selectLeague.innerHTML = "";

        selectLeague.innerHTML += firstOptionLeague;

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '997be82698msh67758aacc9dde19p109648jsn1f516cccc590',
                'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
            }
        };

        fetch('https://api-football-beta.p.rapidapi.com/leagues?country=' + send.target.value, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);

                for (let i = 0; i < response.response.length; i++) {
                    const option1 = document.createElement("option");
                    option1.value = response.response[i].league.id;
                    option1.textContent = response.response[i].league.name;
                    selectLeague.appendChild(option1);
                }
            })
            .catch(err => console.error(err));
    });

    // ====== MENGAMBIL DATA SEASONS ======

    var League = document.getElementById("myLeague");

    League.addEventListener("change", (send) => {
        selectSeason.innerHTML = "";

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '997be82698msh67758aacc9dde19p109648jsn1f516cccc590',
                'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
            }
        };

        fetch('https://api-football-beta.p.rapidapi.com/leagues?id=' + send.target.value, options)
            .then(response => response.json())
            .then(response => {

                for (let i = 0; i < response.response[0].seasons.length; i++) {
                    const option1 = document.createElement("option");
                    option1.value = response.response[0].seasons[i].year;
                    option1.textContent = response.response[0].seasons[i].year;
                    selectSeason.appendChild(option1);
                }
            })
            .catch(err => console.error(err));
    });

    var show = document.getElementById("pilih");

    var table = document.createElement("table");
    table.classList = "myTeams";
    content.appendChild(table);

    // ====== TAMPILAN DEFAULT ======

    const options2 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '997be82698msh67758aacc9dde19p109648jsn1f516cccc590',
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
        }
    };

    fetch('https://api-football-beta.p.rapidapi.com/teams?league=274&season=2022', options2)
        .then(response => response.json())
        .then(response => {

            const thead1 = document.createElement("th");
            thead1.textContent = "NO";
            table.appendChild(thead1);

            const thead2 = document.createElement("th");
            thead2.textContent = "TEAMS";
            table.appendChild(thead2);

            const thead3 = document.createElement("th");
            thead3.textContent = "COUNTRY";
            table.appendChild(thead3);

            for (let i = 0; i < response.response.length; i++) {
                const row = `
                    <tr>
                        <td>${i + 1}</td>
                        <td class="league-name">
                            <img src="${response.response[i].team.logo}" class="logo-league">
                            ${response.response[i].team.name}
                        </td>
                        <td>
                        ${response.response[i].team.country}
                        </td>
                    </tr>
               `;

                table.innerHTML += row;
            }
        })
        .catch(err => console.error(err));

    // ====== SUBMIT ======

    show.addEventListener("submit", (show) => {
        table.innerHTML = "";

        document.getElementById("poppop").classList.remove("active");

        show.preventDefault();
        const league = new FormData(show.target);
        const season = new FormData(show.target);

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '997be82698msh67758aacc9dde19p109648jsn1f516cccc590',
                'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
            }
        };

        fetch('https://api-football-beta.p.rapidapi.com/teams?league=' + `${league.get("myLeague")}` + '&season=' + `${season.get("mySeason")}`, options)
            .then(response => response.json())
            .then(response => {

                const thead1 = document.createElement("th");
                thead1.textContent = "NO";
                table.appendChild(thead1);

                const thead2 = document.createElement("th");
                thead2.textContent = "TEAMS";
                table.appendChild(thead2);

                const thead3 = document.createElement("th");
                thead3.textContent = "COUNTRY";
                table.appendChild(thead3);

                for (let i = 0; i < response.response.length; i++) {
                    const row = `
                    <tr>
                        <td>${i + 1}</td>
                        <td class="league-name">
                            <img src="${response.response[i].team.logo}" class="logo-league">
                            ${response.response[i].team.name}
                        </td>
                        <td>
                        ${response.response[i].team.country}
                        </td>
                    </tr>
               `;

                    table.innerHTML += row;
                }
            })
            .catch(err => console.error(err));

    });

    show.addEventListener("reset", (change) => {
        selectLeague.innerHTML = "";
        selectLeague.innerHTML += firstOptionLeague;
        selectSeason.innerHTML = "";
        selectSeason.innerHTML += firstOptionSeason;
    });
}

function togglePopup() {
    document.getElementById("poppop").classList.add("active");
}

async function standings() {
    const datalist = document.getElementById("container"),
        header = document.createElement("div"),
        content = document.createElement("div");

    datalist.innerHTML = "";

    header.className = "header";
    content.className = "content";

    datalist.appendChild(header);
    datalist.appendChild(content);

    const header_text = document.createElement("h1");
    header_text.textContent = "STANDINGS";
    header.appendChild(header_text);

    // ====== FILTER ======

    const buttonFilter = document.createElement("div");
    buttonFilter.classList = "button-filter";
    content.appendChild(buttonFilter);

    const toggle = `
        <button onclick="togglePopup()"><i class="fa-solid fa-filter"></i></button>
    `;
    buttonFilter.innerHTML += toggle;

    // ====== POP-UP ======

    const popup = document.createElement("div");
    popup.classList = "popup";
    popup.id = "poppop";
    content.appendChild(popup);

    const overlay = document.createElement("div");
    overlay.classList = "overlay";
    popup.appendChild(overlay);

    const contentt = document.createElement("div");
    contentt.classList = "contentt";
    popup.appendChild(contentt);

    const close = document.createElement("div");
    close.classList = "close-button";
    close.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    close.onclick = function () {
        document.getElementById("poppop").classList.remove("active");
    }
    contentt.appendChild(close);

    const titlePop = document.createElement("h2");
    titlePop.textContent = "filter";
    contentt.appendChild(titlePop);

    // ====== FORM PILIH ======

    const form = document.createElement("form");
    form.method = "post";
    form.id = "pilih";
    contentt.appendChild(form);

    var selectCountry = document.createElement("select");
    selectCountry.name = "myCountry";
    selectCountry.id = "myCountry";
    form.appendChild(selectCountry);

    var selectLeague = document.createElement("select");
    selectLeague.name = "myLeague";
    selectLeague.id = "myLeague";
    form.appendChild(selectLeague);

    var selectSeason = document.createElement("select");
    selectSeason.name = "mySeason";
    form.appendChild(selectSeason);

    const submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "submit";
    form.appendChild(submit);

    const reset = document.createElement("input");
    reset.type = "reset";
    reset.value = "reset";
    form.appendChild(reset);

    // ====== OPTION SELECTED ======

    const firstOptionCountry = `
        <option selected hidden disabled>Select Country</option>
    `;

    const firstOptionLeague = `
        <option selected hidden disabled>Select League</option>
    `;

    const firstOptionSeason = `
        <option selected hidden disabled>Select Season</option>
    `;

    selectCountry.innerHTML += firstOptionCountry;
    selectLeague.innerHTML += firstOptionLeague;
    selectSeason.innerHTML += firstOptionSeason;

    // ====== MENGAMBIL DATA COUNTRY ======

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '997be82698msh67758aacc9dde19p109648jsn1f516cccc590',
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
        }
    };

    await fetch('https://api-football-beta.p.rapidapi.com/countries', options)
        .then(response => response.json())
        .then(response => {

            for (let i = 0; i < response.response.length; i++) {
                if (response.response[i].name == "World") {
                    continue;
                }
                else {
                    const option1 = document.createElement("option");
                    option1.value = response.response[i].name;
                    option1.textContent = response.response[i].name;
                    selectCountry.appendChild(option1);
                }
            }
        })
        .catch(err => console.error(err));

    // ====== MENGAMBIL DATA LEAGUE ======

    var country = document.getElementById("myCountry");

    country.addEventListener("change", (send) => {
        selectLeague.innerHTML = "";

        selectLeague.innerHTML += firstOptionLeague;

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '997be82698msh67758aacc9dde19p109648jsn1f516cccc590',
                'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
            }
        };

        fetch('https://api-football-beta.p.rapidapi.com/leagues?country=' + send.target.value, options)
            .then(response => response.json())
            .then(response => {

                for (let i = 0; i < response.response.length; i++) {
                    if (`${response.response[i].league.type}` == "Cup") {
                        continue;
                    }
                    else {
                        const option1 = document.createElement("option");
                        option1.value = response.response[i].league.id;
                        option1.textContent = response.response[i].league.name;
                        selectLeague.appendChild(option1);
                    }
                }
            })
            .catch(err => console.error(err));
    });

    // ====== MENGAMBIL DATA SEASONS ======

    var League = document.getElementById("myLeague");

    League.addEventListener("change", (send) => {
        selectSeason.innerHTML = "";

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '997be82698msh67758aacc9dde19p109648jsn1f516cccc590',
                'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
            }
        };

        fetch('https://api-football-beta.p.rapidapi.com/leagues?id=' + send.target.value, options)
            .then(response => response.json())
            .then(response => {

                for (let i = 0; i < response.response[0].seasons.length; i++) {
                    const option1 = document.createElement("option");
                    option1.value = response.response[0].seasons[i].year;
                    option1.textContent = response.response[0].seasons[i].year;
                    selectSeason.appendChild(option1);
                }
            })
            .catch(err => console.error(err));
    });

    var show = document.getElementById("pilih");

    var table = document.createElement("table");
    table.classList = "standings";
    content.appendChild(table);

    // ====== TAMPILAN DEFAULT ======

    const options2 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '997be82698msh67758aacc9dde19p109648jsn1f516cccc590',
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
        }
    };

    fetch('https://api-football-beta.p.rapidapi.com/standings?season=2022&league=274', options2)
        .then(response => response.json())
        .then(response => {

            const thead1 = document.createElement("th");
            thead1.textContent = "NO";
            table.appendChild(thead1);

            const thead2 = document.createElement("th");
            thead2.textContent = "TEAMS";
            table.appendChild(thead2);

            const thead3 = document.createElement("th");
            thead3.textContent = "W";
            table.appendChild(thead3);

            const thead4 = document.createElement("th");
            thead4.textContent = "D";
            table.appendChild(thead4);

            const thead5 = document.createElement("th");
            thead5.textContent = "L";
            table.appendChild(thead5);

            const thead6 = document.createElement("th");
            thead6.textContent = "Pt";
            table.appendChild(thead6);

            for (let i = 0; i < response.response[0].league.standings[0].length; i++) {
                const row = `
                    <tr>
                        <td>${response.response[0].league.standings[0][i].rank}</td>
                        <td class="league-name">
                            <img src="${response.response[0].league.standings[0][i].team.logo}" class="logo-league">
                            ${response.response[0].league.standings[0][i].team.name}
                        </td>
                        <td>
                            ${response.response[0].league.standings[0][i].all.win}
                        </td>
                        <td>
                            ${response.response[0].league.standings[0][i].all.draw}
                        </td>
                        <td>
                            ${response.response[0].league.standings[0][i].all.lose}
                        </td>
                        <td>
                            ${response.response[0].league.standings[0][i].points}
                        </td>
                    </tr>
               `;

                table.innerHTML += row;
            }
        })
        .catch(err => console.error(err));

    // ====== SUBMIT ======

    show.addEventListener("submit", (show) => {
        table.innerHTML = "";

        document.getElementById("poppop").classList.remove("active");

        show.preventDefault();
        const league = new FormData(show.target);
        const season = new FormData(show.target);

        const options2 = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '997be82698msh67758aacc9dde19p109648jsn1f516cccc590',
                'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
            }
        };

        fetch('https://api-football-beta.p.rapidapi.com/standings?season=' + `${season.get("mySeason")}` + '&league=' + `${league.get("myLeague")}`, options2)
            .then(response => response.json())
            .then(response => {

                if (response.response[0] == null) {
                    alert("DATA NOT FOUND");
                }
                else {
                    for (let i = 0, x = 1; i < response.response[0].league.standings.length; i++) {
                        const thead = `
                            <tr>
                            <th colspan="6">${response.response[0].league.standings[i][x].group}</th>
                            </tr>
                            `;

                        table.innerHTML += thead;

                        const thead1 = document.createElement("th");
                        thead1.textContent = "NO";
                        table.appendChild(thead1);

                        const thead2 = document.createElement("th");
                        thead2.textContent = "TEAMS";
                        table.appendChild(thead2);

                        const thead3 = document.createElement("th");
                        thead3.textContent = "W";
                        table.appendChild(thead3);

                        const thead4 = document.createElement("th");
                        thead4.textContent = "D";
                        table.appendChild(thead4);

                        const thead5 = document.createElement("th");
                        thead5.textContent = "L";
                        table.appendChild(thead5);

                        const thead6 = document.createElement("th");
                        thead6.textContent = "Pt";
                        table.appendChild(thead6);


                        for (let j = 0; j < response.response[0].league.standings[i].length; j++) {

                            const row = `
                            <tr>
                                <td>${response.response[0].league.standings[i][j].rank}</td>
                                <td class="league-name">
                                    <img src="${response.response[0].league.standings[i][j].team.logo}" class="logo-league">
                                    ${response.response[0].league.standings[i][j].team.name}
                                </td>
                                <td>
                                    ${response.response[0].league.standings[i][j].all.win}
                                </td>
                                <td>
                                    ${response.response[0].league.standings[i][j].all.draw}
                                </td>
                                <td>
                                    ${response.response[0].league.standings[i][j].all.lose}
                                </td>
                                <td>
                                    ${response.response[0].league.standings[i][j].points}
                                </td>
                            </tr>
                                `;

                            table.innerHTML += row;
                        }
                    }
                }
            })
            .catch(err => console.error(err));
    });

    show.addEventListener("reset", (change) => {
        selectLeague.innerHTML = "";
        selectLeague.innerHTML += firstOptionLeague;
        selectSeason.innerHTML = "";
        selectSeason.innerHTML += firstOptionSeason;
    });
}

function video() {
    const datalist = document.getElementById("container"),
        header = document.createElement("div"),
        content = document.createElement("div");

    datalist.innerHTML = "";

    header.className = "header";
    content.className = "content";

    datalist.appendChild(header);
    datalist.appendChild(content);

    const header_text = document.createElement("h1");
    header_text.textContent = "VIDEOS";
    header.appendChild(header_text);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '997be82698msh67758aacc9dde19p109648jsn1f516cccc590',
            'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
        }
    };

    fetch('https://free-football-soccer-videos.p.rapidapi.com/', options)
        .then(response => response.json())
        .then(response => {

            const vidTamp = document.createElement("div");
            vidTamp.className = "video";
            content.appendChild(vidTamp);

            for (let i = 0; i < 15; i++) {

                const vid = document.createElement("div");

                vid.innerHTML = response[i].embed;
                vidTamp.appendChild(vid);
            }
        });
}