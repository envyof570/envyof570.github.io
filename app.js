const links = [
    {name: 'Apple Music', url: 'https://music.apple.com/us/artist/teejay-royal/1667072862'},
    {name: 'YouTube', url: 'https://www.youtube.com/channel/UCgM31ObMVL9WT0xBUIo7-HA?themeRefresh=1'},
    {name: 'Deezer', url: 'https://www.deezer.com/us/artist/198269617'},
    {name: 'Amazon Music', url: 'https://music.amazon.com/artists/B0BSRYTBY7'},
    {name: 'Tidal', url: 'https://listen.tidal.com/artist/36890320'}
];

const linksList = document.getElementById('links-list');

links.forEach(link => {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.href = link.url;
    anchor.textContent = link.name;
    anchor.target = '_blank';
    listItem.appendChild(anchor);
    linksList.appendChild(listItem);
});
