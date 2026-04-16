/**
 * Gemini Chat Exporter Bookmarklet
 * Version: 1.0.0
 * Hostname: Ubot / GitHub
 */

javascript:(function(){
    // 1. HTML Header und CSS Styles Definition
    let h = "<html><head><meta charset='UTF-8'><style>" +
            "body{font-family:sans-serif;line-height:1.6;padding:30px;max-width:900px;margin:auto;background:#f4f4f9;color:#333}" +
            ".msg{margin-bottom:30px;padding:20px;border-radius:12px;box-shadow:0 2px 5px rgba(0,0,0,0.1)}" +
            ".u{background:#fff;border-right:6px solid #2196f3}" +
            ".g{background:#fff;border-left:6px solid #4caf50}" +
            "pre{background:#2d2d2d;color:#ccc;padding:15px;overflow-x:auto;border-radius:6px;font-size:0.9em}" +
            "code{background:rgba(0,0,0,0.05);padding:2px 4px;border-radius:3px;font-family:monospace}" +
            "h3{margin-top:0;color:#555;font-size:0.8em;text-transform:uppercase;letter-spacing:1px}" +
            "</style></head><body>";

    // 2. Helper Funktion für Text-Extraktion (rekursiv)
    const getT = e => {
        let t = "";
        e.childNodes.forEach(n => {
            if (n.nodeType === 3) {
                t += n.textContent;
            } else if (n.nodeType === 1) {
                if (n.tagName === "PRE" || n.tagName === "CODE") {
                    t += "<pre><code>" + n.innerText.trim() + "</code></pre>";
                } else {
                    t += getT(n);
                }
            }
        });
        return t;
    };

    // 3. Chat-Elemente selektieren und HTML generieren
    document.querySelectorAll(".query-content, .model-response-text").forEach(e => {
        let isUser = e.classList.contains("query-content");
        let label = isUser ? "USER" : "GEMINI";
        let styleClass = isUser ? "u" : "g";
        
        // Wir nutzen hier innerHTML, um die Formatierung (Links, Listen) von Gemini beizubehalten
        h += "<div class='msg " + styleClass + "'><h3>" + label + "</h3>" + e.innerHTML + "</div>";
    });

    h += "</body></html>";

    // 4. Download-Prozess einleiten
    const blob = new Blob([h], {type: "text/html"});
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    
    anchor.href = url;
    anchor.download = "Gemini_Export_" + new Date().toISOString().slice(0,10) + ".html";
    
    document.body.appendChild(anchor);
    anchor.click();
    
    // 5. Cleanup
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
})();

#EOF
