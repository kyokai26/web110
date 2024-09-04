function showAlert() {  
    
    if (!document.getElementById('myAlert')) {
       
        const alertContainer = document.createElement('div');
        alertContainer.id = 'myAlert';
        alertContainer.style.position = 'fixed';
        alertContainer.style.top = '50%';
        alertContainer.style.left = '50%';
        alertContainer.style.transform = 'translate(-50%, -50%)';
        alertContainer.style.backgroundColor = '#fff';
        alertContainer.style.border = '1px solid #ccc';
        alertContainer.style.borderRadius = '8px';
        alertContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        alertContainer.style.padding = '20px';
        alertContainer.style.textAlign = 'center';
        alertContainer.style.zIndex = '1000';   
        alertContainer.style.display = 'none'; 
        alertContainer.innerHTML = `
            <p>Debugged by <b>Marde</b>. To remove this message, simply disconnect this JS file from your HTML. It can be deleted. <span>If you'd like to support my coding journey, a follow on GitHub or a coffee would be greatly appreciated. ❤️😁</span></p>
            <button id="redirect-button">Visit My GitHub</button>
            <button id="close-button">Maybe Later 😥</button>
        `;    
        document.body.appendChild(alertContainer);

        
        document.getElementById('redirect-button').addEventListener('click', redirect);
        document.getElementById('close-button').addEventListener('click', closeAlert);
    }
   
    document.getElementById('myAlert').style.display = 'block';
}

function closeAlert() {
   
    document.getElementById('myAlert').style.display = 'none';
}

function redirect() {
   
    window.location.href = 'https://github.com/TheStrongestAlgorithm'; 
}

function initialize() {
    showAlert(); 
   
}

window.onload = function() {
    initialize();
};
