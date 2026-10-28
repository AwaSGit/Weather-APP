# Weather App

Petite application météo en HTML, CSS et JavaScript. Elle affiche la météo actuelle d'une ville et adapte son image de fond aux conditions météo.
Via projet Technique.

## Fonctionnalités

- Affiche la ville, la température, la description météo et l'humidité.
- Récupère les données météo actuelles avec l'API OpenWeatherMap.
- Change l'image de fond selon la météo (pluie, ciel dégagé ou nuages).

## Prérequis

- Un navigateur web récent.
- Une connexion Internet.
- Une clé API OpenWeatherMap.
- Python pour utiliser le serveur local intégré, ou l'extension Live Server de VS Code.

## Configuration

Créez `conf.json` à partir de `conf.example.json`, puis ajoutez votre clé API :

```json
{
  "apiKey": "votre_cle_api",
  "defaultCity": "Paris",
  "units": "metric"
}
```

La valeur `metric` affiche la température en degrés Celsius. Vous pouvez remplacer `Paris` par une autre ville.

Le fichier `conf.json` est exclu de Git par `.gitignore` afin de ne pas envoyer votre clé au dépôt. Le modèle sans clé réelle `conf.example.json` peut être partagé.

> **Sécurité :** l'application est exécutée dans le navigateur. Même si `conf.json` n'est pas envoyé au dépôt, une clé utilisée par une application publiée au navigateur peut être récupérée par les visiteurs. Pour un déploiement public, utilisez un serveur intermédiaire qui garde la clé privée.

## Lancer l'application

`fetch()` ne peut pas charger correctement `conf.json` si vous ouvrez directement `index.html` depuis le disque (`file://`). Il faut servir les fichiers via un serveur local.

### Avec Python

Ouvrez un terminal dans le dossier du projet et exécutez :

```powershell
py -m http.server 8000
```

Puis ouvrez [http://localhost:8000](http://localhost:8000) dans votre navigateur. Laissez le terminal ouvert pendant l'utilisation ; faites `Ctrl+C` dans ce terminal pour arrêter le serveur.

Si la commande `py` n'est pas disponible, essayez :

```powershell
python -m http.server 8000
```

### Avec Live Server dans VS Code

Installez l'extension **Live Server**, ouvrez le dossier du projet dans VS Code, puis faites un clic droit sur `index.html` et choisissez **Open with Live Server**.

## Fichiers du projet

- `index.html` : structure de la page.
- `style.css` : mise en forme.
- `meteo.js` : chargement des données météo et choix de l'image de fond.
- `conf.example.json` : modèle de configuration à copier vers `conf.json`.
- `conf.json` : configuration locale avec la clé API (non versionnée).

## Dépannage

- Si les données ou le fond ne s'affichent pas, vérifiez la console du navigateur avec `F12`.
- Vérifiez que le serveur local est lancé et que `conf.json` est accessible.
- Vérifiez que la clé OpenWeatherMap est valide et que la connexion Internet fonctionne.
- Les photos de fond sont hébergées sur Unsplash ; leur chargement nécessite également une connexion Internet.(Lol)
  Aperçu:

  <img width="1831" height="825" alt="image_2026-10-28_190550100" src="https://github.com/user-attachments/assets/4cb70460-03e2-4502-9c3b-b05327857371" />


Enjoy
