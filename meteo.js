async function ChargerData(){
    try {
        const reponse = await fetch('conf.json');
        const config = await reponse.json();

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${config.defaultCity}&appid=${config.apiKey}&units=${config.units}&lang=fr`;
        
        const MeteoReponse = await fetch(url);
        const MeteoDonnes = await MeteoReponse.json();
        console.log("Données météo :", MeteoDonnes);

        // Affichage du texte
        document.getElementById('city-name').innerText = MeteoDonnes.name;
        document.getElementById('temperature').innerText = `${Math.round(MeteoDonnes.main.temp)}°C`;
        document.getElementById('description').innerText = MeteoDonnes.weather[0].description;
        document.getElementById('humidity').innerText = `Humidité : ${MeteoDonnes.main.humidity}%`;

        // --- CHANGEMENT DE FOND DYNAMIQUE AVEC URLS STABLES ---
        const condition = MeteoDonnes.weather[0].main.toLowerCase(); // ex: 'rain', 'clear', 'clouds'
        
        // Image par défaut (paysage neutre et stylé)
        let imageUrl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600"; 
        
        if (condition.includes('rain')) {
            // Pluie
            imageUrl = "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=1600";
        } else if (condition.includes('clear')) {
            // Grand soleil
            imageUrl = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600";
        } else if (condition.includes('cloud')) {
            // Nuages
            imageUrl = "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=1600";
        }

        // On applique l'image en fond du corps de la page
        document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${imageUrl}')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";

    } catch(error) {
        console.error("Erreur lors du chargement :", error);
    }
}

ChargerData();