document.addEventListener("DOMContentLoaded", () => {
    const panelContainer = document.getElementById('bahar-control-panel');
    if (!panelContainer) return;

    const moduleType = panelContainer.getAttribute('data-module');
    
    // Read the URL to see if we are in Temp mode
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode'); 

    let leftControls = '';
    let rightControls = '';

    if (moduleType === 'letter') {
        if (mode === 'temp') {
            // TEMPORARY MODE: No save buttons
            leftControls = `<span class="panel-branding" style="color: #f59e0b;"><i class="fa-solid fa-file-pen"></i> Temporary Letter Mode (Unsaved)</span>`;
            rightControls = `
                <a href="letter-templates.html" class="btn-ui btn-secondary" style="text-decoration:none;"><i class="fa-solid fa-arrow-left"></i> Back</a>
                <button class="btn-ui btn-danger" onclick="clearLetter()"><i class="fa-solid fa-trash"></i> Clear</button>
                <button class="btn-ui btn-primary" onclick="window.print()"><i class="fa-solid fa-print"></i> Print Letter</button>
            `;
        } else {
            // TEMPLATE MODE: Removed the input box! Just the title now.
            leftControls = `
                <span class="panel-branding"><i class="fa-solid fa-folder-open"></i> Template Editor</span>
            `;
            rightControls = `
                <a href="letter-templates.html" class="btn-ui btn-secondary" style="text-decoration:none;"><i class="fa-solid fa-arrow-left"></i> Cancel</a>
                <button class="btn-ui btn-danger" onclick="clearLetter()"><i class="fa-solid fa-trash"></i> Clear</button>
                <button class="btn-ui btn-success" onclick="saveTemplate()"><i class="fa-solid fa-bookmark"></i> Save Template</button>
                <button class="btn-ui btn-primary" onclick="window.print()"><i class="fa-solid fa-print"></i> Print Letter</button>
            `;
        }
    } 
    else if (moduleType === 'fuel' || moduleType === 'stamping') {
        let brandingIcon = moduleType === 'fuel' ? 'fa-gas-pump' : 'fa-file-invoice-dollar';
        let brandingText = moduleType === 'fuel' ? 'Fuel Billing' : 'Stamping Invoice';

        leftControls = `
            <span class="panel-branding"><i class="fa-solid ${brandingIcon}"></i> ${brandingText}</span>
            <input type="text" id="filenameInput" class="panel-input" placeholder="File Name..." />
        `;
        rightControls = `
            <button class="btn-ui btn-secondary" onclick="window.print()"><i class="fa-solid fa-print"></i> Print</button>
            <button class="btn-ui btn-success" onclick="saveInvoice()" id="saveBtn"><i class="fa-solid fa-floppy-disk"></i> Save Draft</button>
            <button class="btn-ui btn-danger" onclick="clearInvoice()"><i class="fa-solid fa-rotate-right"></i> Reset</button>
        `;
        
        if (moduleType === 'fuel') {
             // UPDATED: This now triggers the Preview Modal instead of direct download
             rightControls += `<button class="btn-ui btn-primary" onclick="viewInvoicePreview()" id="shareBtn"><i class="fa-solid fa-expand"></i> View & Download</button>`;
        }
    }

    panelContainer.innerHTML = `
        <div class="control-panel">
            <div class="control-panel-inner">
                <div class="panel-group">${leftControls}</div>
                <div class="panel-group">${rightControls}</div>
            </div>
        </div>
    `;
});