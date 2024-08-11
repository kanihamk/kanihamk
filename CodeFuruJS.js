
const alertsApi = 'https://example.com/alerts-api';
const resourcesApi = 'https://example.com/resources-api';
const forumApi = 'https://example.com/forum-api';


async function fetchAlerts() {
    try {
        const response = await fetch(alertsApi);
        
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        updateAlertList(data.alerts);
        
    } catch (error) {
        console.error('Failed to fetch alerts:', error);
        displayFetchError('alert-list', 'Failed to load alerts. Please try again later.');
    }
}


function updateAlertList(alerts) {
    const alertList = document.getElementById('alert-list');
    alertList.innerHTML = ''; // Clear any existing alerts

    if (alerts && alerts.length > 0) {
        alerts.forEach(alert => {
            const listItem = document.createElement('li');
            listItem.textContent = alert.message; // Assuming each alert has a "message" property
            alertList.appendChild(listItem);
        });
    } else {
        alertList.innerHTML = '<li>No alerts at the moment.</li>';
    }
}


function displayFetchError(elementId, message) {
    const element = document.getElementById(elementId);
    element.innerHTML = `<li>${message}</li>`;
}


fetchAlerts();
