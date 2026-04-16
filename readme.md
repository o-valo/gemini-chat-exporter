# Gemini Chat Exporter

A lightweight bookmarklet to save Gemini chat histories as clean, formatted HTML files locally.

## 📌 Why this tool?

The native "Export to Google Docs" feature in Gemini is often unreliable:
- It frequently exports only a single page or fragment.
- Formatting is often lost or broken.
- Exports may fail during long conversations.
- Google Takeout is too cumbersome for quick, daily backups.

**Gemini Chat Exporter** provides a robust alternative:
- **Completeness:** Exports the entire currently loaded chat session.
- **Design:** Preserves code blocks (Dark-style) and maintains visual separation between User and AI.
- **Privacy:** Processing happens entirely locally via `Blob` in your browser. No data is sent to external servers.

---

## ⚠️ Important Note on "Canvas"

## For the script to correctly parse the chat, **Canvas** (Gemini's interactive editor view) must be disabled. The script cannot capture content inside the Canvas interface due to its isolated DOM structure.


---

## 🛠 Installation (Quickstart)

1. Create a new bookmark in your browser's bookmark bar.
2. Give it a name (e.g., `Gemini Export`).
3. Copy the following code and paste it entirely into the **URL** (or Address) field:

```javascript
javascript:(function(){let h="<html><head><meta charset='UTF-8'><style>body{font-family:sans-serif;line-height:1.6;padding:30px;max-width:900px;margin:auto;background:#f4f4f9;color:#333}.msg{margin-bottom:30px;padding:20px;border-radius:12px;box-shadow:0 2px 5px rgba(0,0,0,0.1)}.u{background:#fff;border-right:6px solid #2196f3}.g{background:#fff;border-left:6px solid #4caf50}pre{background:#2d2d2d;color:#ccc;padding:15px;overflow-x:auto;border-radius:6px;font-size:0.9em}code{background:rgba(0,0,0,0.05);padding:2px 4px;border-radius:3px;font-family:monospace}h3{margin-top:0;color:#555;font-size:0.8em;text-transform:uppercase;letter-spacing:1px}</style></head><body>";const getT=e=>{let t="";e.childNodes.forEach(n=>{if(n.nodeType===3)t+=n.textContent;else if(n.nodeType===1){if(n.tagName==="PRE"||n.tagName==="CODE")t+="<pre><code>"+n.innerText.trim()+"</code></pre>";else t+=getT(n)}});return t};document.querySelectorAll(".query-content,.model-response-text").forEach(e=>{let u=e.classList.contains("query-content"),r=u?"USER":"GEMINI",s=u?"u":"g";h+="<div class='msg "+s+"'><h3>"+r+"</h3>"+e.innerHTML+"</div>"});h+="</body></html>";const b=new Blob([h],{type:"text/html"}),u=URL.createObjectURL(b),a=document.createElement("a");a.href=u;a.download="Gemini_Export_"+new Date().toISOString().slice(0,10)+".html";document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(u);})();

```



📂 Repository Content

    README.md: Documentation and quickstart guide.

    gemini-exporter.v1.js: Formatted source code for developers and versioning.

🚀 How to Use

    Open a chat on Gemini.

    Click your created bookmark.

    The HTML file will be downloaded immediately, including the current date in the filename.

💻 System Requirements

    Tested on Ubuntu Linux (22.04 / 24.04 / 25.10).

    Browser: Firefox, Chromium, Brave, Chrome, and other major browsers with JavaScript support.

⚖️ License

This project is released under the MIT License - open source for the community.

Powerd by ai 
