# Gemini Chat Exporter

Ein leichtgewichtiges Bookmarklet, um Gemini-Chatverläufe sauber als formatierte HTML-Dateien lokal zu speichern.

## 📌 Warum dieses Tool?

Die native Export-Funktion von Google Gemini ("In Google Docs exportieren") ist oft unzuverlässig:
- Es wird häufig nur eine einzige Seite übertragen.
- Formatierungen gehen verloren.
- Der Export bricht bei langen Konversationen ab.
- Google Takeout (Komplettexport) ist für den schnellen täglichen Gebrauch zu träge.

**Gemini Chat Exporter** bietet eine robuste Alternative:
- **Vollständigkeit:** Exportiert den gesamten aktuell im Browser geladenen Chat.
- **Design:** Behält Code-Blöcke (Dark-Style) und die optische Trennung der Sprecher bei.
- **Sicherheit:** Die Verarbeitung findet rein lokal via `Blob` statt. Es werden keine Daten an externe Server gesendet.

---

## ⚠️ Wichtiger Hinweis zu "Canvas"

Damit das Skript den Quelltext korrekt auslesen kann, darf **kein Canvas** (die interaktive Editor-Ansicht) verwendet werden. In der Canvas-Ansicht isoliert Gemini die Inhalte so, dass das Bookmarklet sie nicht erfassen kann.

**Lösung:** Weise die KI im Chat einfach an: 
> *"Bitte benutze kein Canvas für diese Ausgabe."* Sobald der Text wieder im normalen Chat-Fluss erscheint, funktioniert der Export einwandfrei.

---

## 🛠 Installation (Quickstart)

1. Erstelle ein neues Lesezeichen (Bookmark) in deiner Lesezeichenleiste.
2. Gib ihm einen Namen (z. B. `Gemini Export`).
3. Kopiere den folgenden Code und füge ihn komplett in das Feld **URL** (oder Adresse) ein:

```javascript
javascript:(function(){let h="<html><head><meta charset='UTF-8'><style>body{font-family:sans-serif;line-height:1.6;padding:30px;max-width:900px;margin:auto;background:#f4f4f9;color:#333}.msg{margin-bottom:30px;padding:20px;border-radius:12px;box-shadow:0 2px 5px rgba(0,0,0,0.1)}.u{background:#fff;border-right:6px solid #2196f3}.g{background:#fff;border-left:6px solid #4caf50}pre{background:#2d2d2d;color:#ccc;padding:15px;overflow-x:auto;border-radius:6px;font-size:0.9em}code{background:rgba(0,0,0,0.05);padding:2px 4px;border-radius:3px;font-family:monospace}h3{margin-top:0;color:#555;font-size:0.8em;text-transform:uppercase;letter-spacing:1px}</style></head><body>";const getT=e=>{let t="";e.childNodes.forEach(n=>{if(n.nodeType===3)t+=n.textContent;else if(n.nodeType===1){if(n.tagName==="PRE"||n.tagName==="CODE")t+="<pre><code>"+n.innerText.trim()+"</code></pre>";else t+=getT(n)}});return t};document.querySelectorAll(".query-content,.model-response-text").forEach(e=>{let u=e.classList.contains("query-content"),r=u?"USER":"GEMINI",s=u?"u":"g";h+="<div class='msg "+s+"'><h3>"+r+"</h3>"+e.innerHTML+"</div>"});h+="</body></html>";const b=new Blob([h],{type:"text/html"}),u=URL.createObjectURL(b),a=document.createElement("a");a.href=u;a.download="Gemini_Export_"+new Date().toISOString().slice(0,10)+".html";document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(u);})();
```
##
📂 Repository-Inhalt

    README.md: Diese Dokumentation und Schnellstartanleitung.

    gemini-exporter.v1.js: Der formatierte Quellcode für Entwickler und zur besseren Versionierung.

🚀 Anwendung

    Öffne einen Chat bei Gemini.

    Klicke auf dein erstelltes Lesezeichen.

    Die HTML-Datei wird sofort mit aktuellem Datum im Dateinamen heruntergeladen.

💻 Systemvoraussetzungen

    Getestet unter Ubuntu Linux (22.04 / 24.04 / ).

    Browser: Firefox, Chromium, Brave, Chrome (alle gängigen Browser mit JavaScript-Unterstützung).

⚖️ Lizenz

Dieses Projekt ist unter der MIT-Lizenz veröffentlicht – Open Source für die Community.

Dieser Code wurde mit Hilfe von KI erzeugt.
