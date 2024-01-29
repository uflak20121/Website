// JavaScript to fetch and display Discord presence
window.addEventListener('load', function() {
    fetch('https://lanyard.cnrad.dev/api/1174089902833537084')
        .then(response => response.json())
        .then(data => {
            const discordPresenceElement = document.getElementById('discord-presence');
            const presence = data?.data;
            if (presence) {
                discordPresenceElement.innerHTML = `
                    <a href="https://discord.com/users/${presence.discord_user.id}">
                        <img src="${presence.discord_user.avatar_url}" alt="Discord Avatar" width="30">
                        <span>${presence.discord_user.username}</span>
                        <span>#${presence.discord_user.discriminator}</span>
                    </a>
                    <p>Currently ${presence.listening_to_spotify ? 'listening to Spotify' : 'not listening to Spotify'}</p>
                `;
            } else {
                discordPresenceElement.innerHTML = 'Discord presence data not available.';
            }
        })
        .catch(error => {
            console.error('Error fetching Discord presence:', error);
            const discordPresenceElement = document.getElementById('discord-presence');
            discordPresenceElement.innerHTML = 'Error fetching Discord presence data.';
        });
});
