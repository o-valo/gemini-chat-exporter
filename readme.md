# Gemini Chat Exporter

Ein leichtgewichtiges Bookmarklet, um Gemini-Chatverläufe sauber als formatierte HTML-Dateien lokal zu speichern.

## Warum dieses Tool?

Die native Export-Funktion von Google Gemini ("In Google Docs exportieren") ist oft unzuverlässig. Häufig wird nur eine einzelne Seite übertragen, Formatierungen gehen verloren oder der Export bricht bei langen Konversationen einfach ab. Der offizielle Weg über Google Takeout ist für den schnellen täglichen Gebrauch zu umständlich.

**Gemini Chat Exporter** löst dieses Problem:
- **Vollständigkeit:** Exportiert den gesamten aktuell geladenen Chat.
- **Formatierung:** Behält Code-Blöcke (Dark-Mode Design) und die Chat-Struktur bei.
- **Privatsphäre:** Der Export findet rein lokal in deinem Browser statt (via JavaScript Blob). Es werden keine Daten an externe Server gesendet.

## Installation (Quickstart)

Um das Tool zu nutzen, musst du lediglich ein neues Lesezeichen (Bookmark) in deinem Browser erstellen:

1. Erstelle ein neues Lesezeichen in deiner Lesezeichenleiste.
2. Gib ihm einen Namen (z. B. `Gemini Export`).
3. Kopiere den folgenden Code und füge ihn in das Feld **URL** (oder Adresse) ein:

```javascript
javascript:(function(){let h="<html><head><meta charset='UTF-8'><style>body{font-family:sans-serif;line-height:1.6;padding:30px;max-width:900px;margin:auto;background:#f4f4f9;color:#333}.msg{margin-bottom:30px;padding:20px;border-radius:12px;box-shadow:0 2px 5px rgba(0,0,0,0.1)}.u{background:#fff;border-right:6px solid #2196f3}.g{background:#fff;border-left:6px solid #4caf50}pre{background:#2d2d2d;color:#ccc;padding:15px;overflow-x:auto;border-radius:6px;font-size:0.9em}code{background:rgba(0,0,0,0.05);padding:2px 4px;border-radius:3px;font-family:monospace}h3{margin-top:0;color:#555;font-size:0.8em;text-transform:uppercase;letter-spacing:1px}</style></head><body>";const getT=e=>{let t="";e.childNodes.forEach(n=>{if(n.nodeType===3)t+=n.textContent;else if(n.nodeType===1){if(n.tagName==="PRE"||n.tagName==="CODE")t+="<pre><code>"+n.innerText.trim()+"</code></pre>";else t+=getT(n)}});return t};document.querySelectorAll(".query-content,.model-response-text").forEach(e=>{let u=e.classList.contains("query-content"),r=u?"USER":"GEMINI",s=u?"u":"g";h+="<div class='msg "+s+"'><h3>"+r+"</h3>"+e.innerHTML+"</div>"});h+="</body></html>";const b=new Blob([h],{type:"text/html"}),u=URL.createObjectURL(b),a=document.createElement("a");a.href=u;a.download="Gemini_Export_"+new Date().toISOString().slice(0,10)+".html";document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(u);})();
```j
## Anwendung

    Öffne einen Chat bei Gemini.

    Klicke auf dein erstelltes Lesezeichen.

    Die HTML-Datei mit dem formatierten Chatverlauf wird sofort in deinen Download-Ordner heruntergeladen.

## Technische Details

Das Skript ist in reinem JavaScript geschrieben. Es nutzt:

    querySelectorAll, um die Nachrichten-Container (.query-content und .model-response-text) zu identifizieren.

    Blob und URL.createObjectURL, um die Datei im Speicher des Browsers zu generieren.

    Ein temporäres <a> Element, um den Download-Dialog des Betriebssystems (getestet unter Ubuntu/Linux) zu triggern.

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz veröffentlicht – fühl dich frei, es zu verbessern oder anzupassen!
