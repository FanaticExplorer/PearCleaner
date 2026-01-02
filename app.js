const homeFixes = [
    { id: "chips", label: "Hide all mood/activity chips", css: `ytmusic-chip-cloud-renderer { display: none !important; }` }
];

const navFixes = [
    { id: "arrows", label: "Hide 'Go to previous/next page' arrows", css: `.right-content > div:has([tab-id]) { display: none !important; }` }
];

const shareFixes = [
    { id: "shareTargets", label: "Hide social media targets", css: `.ytmusic-popup-container yt-third-party-network-section-renderer #share-targets { display: none !important; }` },
    { id: "shareMargin", label: "Remove top margin", css: `yt-copy-link-renderer.yt-third-party-network-section-renderer { margin-top: 0px !important; }`, isSub: true },
    { id: "startAt", label: "Hide 'Start at:' checkbox", css: `.ytmusic-popup-container yt-third-party-network-section-renderer #start-at { display: none !important; }` }
];

const menuFixes = [
    { id: "download", label: "Hide Premium Download option", css: `ytmusic-menu-service-item-download-renderer { display: none !important; }` },
    { id: "stats", label: "Hide Stats for nerds", css: `ytmusic-menu-service-item-renderer:has(> yt-icon > span > div > svg > path[d^="M15.153 1.508"]) { display: none !important; }` },
    { id: "pin", label: "Hide Pin to Listen again", css: `ytmusic-toggle-menu-service-item-renderer:has(> yt-icon > span > div > svg > path[d^="M15.755 4.724"]) { display: none !important; }` },
    { id: "report", label: "Hide Report", css: `ytmusic-menu-service-item-renderer:has(> yt-icon > span > div > svg > path[d^="m3 2.25"]) { display: none !important; }` },
    { id: "likes", label: "Hide liked songs (both states)", css: `ytmusic-toggle-menu-service-item-renderer:has(> yt-icon > span > div > svg > path[d^="m7.748.854"]),\nytmusic-toggle-menu-service-item-renderer:has(> yt-icon > span > div > svg > path[d^="M8.041 1.635"]) { display: none !important; }` },
    { id: "startMix", label: "Hide Start mix", css: `ytmusic-menu-navigation-item-renderer:has(> a > yt-icon > span > div > svg > path[d^="M3.166 3.161"]) { display: none !important; }` },
    { id: "playNext", label: "Hide Play next", css: `ytmusic-menu-service-item-renderer:has(> yt-icon > span > div > svg > path[d^="M6 2.86V5"]) { display: none !important; }` },
    { id: "addQueue", label: "Hide Add to queue", css: `ytmusic-menu-service-item-renderer:has(> yt-icon > span > div > svg > path[d^="M21 6.998"]) { display: none !important; }` },
    { id: "savePlaylist", label: "Hide Save to playlist", css: `ytmusic-menu-navigation-item-renderer:has(> a > yt-icon > span > div > svg > path[d^="M14.25 11.25"]) { display: none !important; }` },
    { id: "removeQueue", label: "Hide Remove from queue", css: `ytmusic-menu-service-item-renderer:has(> yt-icon > span > div > svg > g[clip-path] > path[d^="M9 .75a8.25 8.25"]) { display: none !important; }` },
    { id: "shareMenu", label: "Hide Share", css: `ytmusic-menu-navigation-item-renderer:has(> a > yt-icon > span > div > svg > path[d^="M7.5 2.369"]) { display: none !important; }` },
    { id: "dismissQueue", label: "Hide Dismiss queue", css: `ytmusic-menu-service-item-renderer:has(> yt-icon > span > div > svg > path[d^="M15.97 11.47"]) { display: none !important; }` }
];

const allCategories = [
    { data: homeFixes, container: "home-options" },
    { data: navFixes, container: "nav-options" },
    { data: shareFixes, container: "share-options" },
    { data: menuFixes, container: "menu-options" }
];

function render() {
    allCategories.forEach(cat => {
        const container = document.getElementById(cat.container);
        cat.data.forEach(fix => {
            const label = document.createElement("label");
            label.className = "option-item" + (fix.isSub ? " sub-option" : "");
            
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = fix.id;
            checkbox.className = "css-option";
            checkbox.onchange = updateCSS;
            
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(fix.label));
            container.appendChild(label);
        });
    });
}

function updateCSS() {
    const output = document.getElementById("output");
    let generated = "";
    
    [...homeFixes, ...navFixes, ...shareFixes, ...menuFixes].forEach(fix => {
        if (document.getElementById(fix.id).checked) {
            generated += `/* ${fix.label} */\n${fix.css}\n\n`;
        }
    });

    output.value = generated.trim();
    output.style.height = 'auto'; 
    output.style.height = (output.scrollHeight) + 'px';
}

function toggleAll(master) {
    document.querySelectorAll('.css-option').forEach(cb => cb.checked = master.checked);
    updateCSS();
}

function copyCSS() {
    const output = document.getElementById("output");
    if (!output.value) return;
    output.select();
    navigator.clipboard.writeText(output.value).then(() => {
        const btn = document.getElementById('copyBtn');
        btn.textContent = "Copied!";
        btn.style.background = "#28a745";
        setTimeout(() => {
            btn.textContent = "Copy to Clipboard";
            btn.style.background = "#222";
        }, 1500);
    });
}

render();
