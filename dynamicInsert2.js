function add (selector, html) {
    document.querySelector(selector).innerHTML += html;
    console.log("Insert: \n" + html);
}

let sidenav = `

    <h3>Section</h3>
    <nav>
        <ul>
            <!-- Rick rolls (pages) -->
            <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Page 1</a></li>
            <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Page 2</a></li>
        </ul>
    </nav>
    <br>
    <h3>Dark Theme</h3>
    <label class="switch">
    <input type="checkbox" id="dark" onclick="toggleDark()">
    <span class="slider round"></span>
    </label>

`;

add('.legend-card', sidenav);


function toggleDark () {
    if (document.querySelector("#dark").checked) {
        add("head", '<link id="darkThemeImport" href="darkTheme.css" rel="stylesheet" type="text/css">');
    } else {
        document.querySelector('#darkThemeImport').remove();
    }
}


let footer = `
<!-- Footer -->
<footer class="footer">
    <div class="container grid">
        <div class="logo">
            <h1>Azurite <span>Docs</span></h1>
            <p>Copyright &copy; 2021 MIT License</p>
        </div>
        <nav>
            <ul class="flexbox">
                <li><a href="index.html">Docs</a></li>
                <li><a href="tutorials-main.html">Tutorials</a></li>
            </ul>
        </nav>
    </div>
</footer>
`;

add("body", footer);


