// Additional JavaScript for destination pages

document.addEventListener('DOMContentLoaded', function() {
    // Bookmark functionality
    const bookmarkButtons = document.querySelectorAll('.bookmark-btn');
    
    bookmarkButtons.forEach(button => {
        button.addEventListener('click', function() {
            const city = this.getAttribute('data-city');
            let bookmarks = JSON.parse(localStorage.getItem('travelBookmarks')) || [];
            
            if (bookmarks.includes(city)) {
                bookmarks = bookmarks.filter(item => item !== city);
                this.innerHTML = '<i class="far fa-bookmark"></i> Save';
                showNotification('Removed from saved destinations');
            } else {
                bookmarks.push(city);
                this.innerHTML = '<i class="fas fa-bookmark"></i> Saved';
                showNotification('Added to saved destinations');
            }
            
            localStorage.setItem('travelBookmarks', JSON.stringify(bookmarks));
        });
    });
    
    // Currency converter
    const currencyConverter = document.getElementById('currencyConverter');
    if (currencyConverter) {
        currencyConverter.addEventListener('submit', function(e) {
            e.preventDefault();
            const amount = parseFloat(this.querySelector('#amount').value);
            const fromCurrency = this.querySelector('#fromCurrency').value;
            const toCurrency = this.querySelector('#toCurrency').value;
            
            // Simplified conversion rates
            const rates = {
                'USD': 1,
                'EUR': 0.92,
                'GBP': 0.79,
                'JPY': 151,
                'AUD': 1.52,
                'CAD': 1.36,
                'AED': 3.67
            };
            
            if (rates[fromCurrency] && rates[toCurrency]) {
                const result = (amount / rates[fromCurrency]) * rates[toCurrency];
                document.getElementById('conversionResult').textContent = 
                    `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
            }
        });
    }
    
    // Image lightbox
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="close-lightbox">&times;</span>
                    <img src="${imgSrc}" alt="Gallery Image">
                </div>
            `;
            
            document.body.appendChild(lightbox);
            
            lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
                document.body.removeChild(lightbox);
            });
            
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    document.body.removeChild(lightbox);
                }
            });
        });
    });
    
    // Share functionality
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const url = window.location.href;
            const title = document.title;
            
            if (navigator.share) {
                navigator.share({
                    title: title,
                    url: url
                });
            } else {
                // Fallback for browsers without Web Share API
                navigator.clipboard.writeText(url).then(() => {
                    showNotification('Link copied to clipboard!');
                });
            }
        });
    });
    
    // Utility function for notifications
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Add CSS for lightbox and notification
    const style = document.createElement('style');
    style.textContent = `
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        }
        
        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        
        .lightbox-content img {
            max-width: 100%;
            max-height: 80vh;
            border-radius: 8px;
        }
        
        .close-lightbox {
            position: absolute;
            top: -40px;
            right: 0;
            color: white;
            font-size: 30px;
            cursor: pointer;
            background: none;
            border: none;
        }
        
        .notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--primary-color);
            color: white;
            padding: 15px 20px;
            border-radius: var(--radius);
            transform: translateY(100px);
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 10000;
            box-shadow: var(--shadow);
        }
        
        .notification.show {
            transform: translateY(0);
            opacity: 1;
        }
        
        .bookmark-btn, .share-btn {
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            padding: 8px 16px;
            border-radius: var(--radius);
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            margin: 10px 0;
        }
        
        .bookmark-btn:hover, .share-btn:hover {
            background: var(--border-color);
        }
    `;
    document.head.appendChild(style);
});