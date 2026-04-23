// We create a function so it can be called whenever a page or a saved draft loads!
function injectBaharHeader() {
    const headerContainer = document.getElementById('bahar-document-header');
    
    // If the placeholder exists on this page, inject the HTML
    if (headerContainer) {
        headerContainer.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; position: relative; border-bottom: 4px solid #004b87; padding-bottom: 1rem; margin-bottom: 1.5rem; font-family: 'Poppins', sans-serif;">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Official_BPCL_LOGO.jpg" alt="BPCL" style="position: absolute; left: 0; top: 50%; transform: translateY(-50%); width: 80px; height: auto;">
                <div style="text-align: center; width: 100%; padding: 0 90px;">
                    <h1 style="margin:0; color: #004b87; font-size: 1.6rem; font-weight: 800; letter-spacing: 1px;">M/S. BAHAR SERVICE STATION</h1>
                    <p style="margin:4px 0 2px 0; font-weight: 700; font-size: 1rem; color: black;">DEALER: BHARAT PETROLEUM CORP LTD.</p>
                    
                    <p style="margin:2px 0; font-size: 0.85rem; color: #334155;">VILL-DEVOKE, P.O.MAMUDPUR, P.S.SHIBDASPUR, DIST-N24 PARGANAS,<br>PIN 743166, WB</p>
                    
                    <p style="margin:2px 0; font-size: 0.85rem; color: #334155;">CONTACT - 7018579966, 9088086294</p>
                    <p style="margin:2px 0; font-size: 0.85rem; color: #334155;">EMAIL - BAHARSERVICESTATION@GMAIL.COM</p>
                </div>
            </div>
        `;
    }
}

// Run the function automatically when any page loads
document.addEventListener("DOMContentLoaded", injectBaharHeader);