// Дождемся полной загрузки DOM перед выполнением скрипта
document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт EuropeGAS загружен!');
    
    // Инициализация мобильного меню
    initMobileMenu();
    
    // Плавная прокрутка для навигационных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            // Закрываем мобильное меню при клике на ссылку
            const nav = document.querySelector('nav');
            const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
            nav.classList.remove('open');
            mobileMenuToggle.classList.remove('active');
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Функция инициализации мобильного меню
    function initMobileMenu() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const nav = document.querySelector('nav');
        
        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', function() {
                this.classList.toggle('active');
                nav.classList.toggle('open');
            });
        }
        
        // Закрываем меню при клике вне его
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                nav.classList.remove('open');
                mobileMenuToggle.classList.remove('active');
            }
        });
        
        // Обработка изменения размера окна
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                nav.classList.remove('open');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
    
    // Анимация для логотипа при прокрутке
    const logoImage = document.querySelector('.logo-image');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            logoImage.style.transform = 'scale(0.9) rotate(-5deg)';
        } else {
            logoImage.style.transform = 'scale(1) rotate(0)';
        }
    });
    
    // Анимация появления элементов при прокрутке с улучшенными эффектами
    const animateElements = function() {
        const elements = document.querySelectorAll('.benefit-card, .product-card, .contact-card, h2, .hero-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Добавляем стили для анимации с улучшенными эффектами
    const style = document.createElement('style');
    style.innerHTML = `
        .benefit-card, .product-card, .contact-card, h2, .hero-content {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1), 
                        transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        
        h2 {
            transform: translateY(20px);
        }
        
        .hero-content {
            transform: translateY(40px);
        }
        
        .animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .benefit-card:nth-child(1) { transition-delay: 0.1s; }
        .benefit-card:nth-child(2) { transition-delay: 0.2s; }
        .benefit-card:nth-child(3) { transition-delay: 0.3s; }
        .benefit-card:nth-child(4) { transition-delay: 0.4s; }
        
        .product-card:nth-child(1) { transition-delay: 0.1s; }
        .product-card:nth-child(2) { transition-delay: 0.2s; }
        .product-card:nth-child(3) { transition-delay: 0.3s; }
        .product-card:nth-child(4) { transition-delay: 0.4s; }
        
        .contact-card:nth-child(1) { transition-delay: 0.1s; }
        .contact-card:nth-child(2) { transition-delay: 0.2s; }
        .contact-card:nth-child(3) { transition-delay: 0.3s; }
        .contact-card:nth-child(4) { transition-delay: 0.4s; }
        
        /* Добавляем анимацию для карточек */
        @keyframes floatAnimation {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
        }
        
        .benefit-card, .product-card, .contact-card {
            animation: floatAnimation 6s ease-in-out infinite;
            animation-play-state: paused;
        }
        
        .benefit-card:hover, .product-card:hover, .contact-card:hover {
            animation-play-state: running;
        }
        
        /* Анимация для иконок */
        @keyframes iconPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.08); }
            100% { transform: scale(1); }
        }
        
        .benefit-icon, .product-icon, .contact-icon {
            animation: iconPulse 4s ease-in-out infinite;
        }
        
        /* Эффект свечения для кнопок */
        @keyframes glowEffect {
            0% { box-shadow: 0 0 5px rgba(65, 105, 225, 0.4); }
            50% { box-shadow: 0 0 15px rgba(65, 105, 225, 0.6); }
            100% { box-shadow: 0 0 5px rgba(65, 105, 225, 0.4); }
        }
        
        /* Анимация для кнопки звонка */
        @keyframes callButtonPulse {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(65, 105, 225, 0.7); }
            70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(65, 105, 225, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(65, 105, 225, 0); }
        }
        
        .btn {
            animation: glowEffect 4s infinite;
        }
        
        .hero .btn {
            animation: callButtonPulse 2s infinite;
        }
        
        /* Добавляем иконку телефона к кнопке звонка */
        .hero .btn::before {
            content: '\\f095';
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
            margin-right: 8px;
        }
        
        /* Общая анимация пульсации для продуктов и контактов */
        @keyframes cardPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .product-card, .contact-card {
            animation: cardPulse 8s ease-in-out infinite;
            animation-play-state: paused;
        }
        
        .product-card:hover, .contact-card:hover {
            animation-play-state: running;
        }
    `;
    document.head.appendChild(style);
    
    // Запускаем анимацию при прокрутке
    window.addEventListener('scroll', animateElements);
    animateElements(); // Запускаем один раз при загрузке
    
    // Активное состояние для пунктов меню при прокрутке с плавным переходом
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Изменение фона шапки при прокрутке с плавным переходом
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
        }
    });
    
    // Улучшенный параллакс эффект для фона героя
    window.addEventListener('scroll', function() {
        const hero = document.querySelector('.hero');
        const scrollPosition = window.pageYOffset;
        
        if (scrollPosition <= hero.offsetHeight) {
            hero.style.backgroundPositionY = scrollPosition * 0.4 + 'px';
            
            // Добавляем эффект параллакса для текста
            const heroContent = document.querySelector('.hero-content');
            heroContent.style.transform = `translateY(${scrollPosition * 0.15}px)`;
            
            // Эффект параллакса для градиента
            hero.style.backgroundSize = `${100 + scrollPosition * 0.03}% ${100 + scrollPosition * 0.03}%`;
        }
    });
    
    // Расширенная анимация для иконок при наведении
    const icons = document.querySelectorAll('.benefit-icon, .product-icon, .contact-icon');
    
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.15) rotate(5deg)';
            this.style.textShadow = '0 0 15px rgba(65, 105, 225, 0.7)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0)';
            this.style.textShadow = '0 0 10px rgba(65, 105, 225, 0.3)';
        });
    });
    
    // Общие анимации для иконок продуктов и контактов
    const productAndContactIcons = document.querySelectorAll('.product-icon, .contact-icon');
    
    productAndContactIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(65, 105, 225, 0.2)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Специальная анимация для контактных иконок
    const contactIcons = document.querySelectorAll('.contact-icon');
    
    contactIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            // Находим родительскую карточку
            const card = this.closest('.contact-card');
            // Находим параграф с контактной информацией
            const contactInfo = card.querySelector('p');
            
            // Анимируем иконку и текст
            this.style.transform = 'scale(1.3) translateY(-15px)';
            contactInfo.style.transform = 'scale(1.1) translateY(5px)';
            contactInfo.style.color = 'var(--accent-color)';
        });
        
        icon.addEventListener('mouseleave', function() {
            const card = this.closest('.contact-card');
            const contactInfo = card.querySelector('p');
            
            this.style.transform = '';
            contactInfo.style.transform = '';
            contactInfo.style.color = '';
        });
    });
    
    // Добавляем анимацию для кнопки с эффектом свечения
    const ctaButton = document.querySelector('.btn');
    
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
            this.style.boxShadow = '0 15px 30px rgba(65, 105, 225, 0.5)';
            this.style.animationPlayState = 'paused';
        });
        
        ctaButton.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            this.style.animationPlayState = 'running';
        });
    }
    
    // Специальная анимация для кнопки звонка
    const callButton = document.querySelector('.hero .btn');
    
    if (callButton) {
        // Добавляем отслеживание клика для аналитики
        callButton.addEventListener('click', function() {
            console.log('Звонок на номер +998772017778');
            // Здесь можно добавить код для отслеживания конверсий
        });
    }
    
    // Добавляем эффект пульсации для точки в логотипе
    const logoStyle = document.createElement('style');
    logoStyle.innerHTML = `
        @keyframes pulse {
            0% { transform: scale(1); opacity: 0.8; box-shadow: 0 0 0 0 rgba(65, 105, 225, 0.7); }
            50% { transform: scale(1.2); opacity: 1; box-shadow: 0 0 0 10px rgba(65, 105, 225, 0); }
            100% { transform: scale(1); opacity: 0.8; box-shadow: 0 0 0 0 rgba(65, 105, 225, 0); }
        }
        
        .logo::after {
            animation: pulse 2s infinite;
        }
    `;
    document.head.appendChild(logoStyle);
    
    // Добавляем эффект 3D-поворота для карточек
    const cards = document.querySelectorAll('.benefit-card, .product-card, .contact-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const cardRect = this.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;
            const mouseX = e.clientX - cardCenterX;
            const mouseY = e.clientY - cardCenterY;
            
            // Ограничиваем угол поворота для более минималистичного эффекта
            const rotateX = mouseY / -15;
            const rotateY = mouseX / 15;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(5px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
    
    // Функция для проверки заполнения контактной информации
    function checkContactInfo() {
        const contactItems = document.querySelectorAll('.contact-item');
        contactItems.forEach(item => {
            const text = item.textContent.trim();
            if (text.includes('[') && text.includes(']')) {
                console.warn('Необходимо заполнить контактную информацию: ' + text);
                item.style.color = '#ff6b6b';
            }
        });
    }
    
    // Проверяем контактную информацию при загрузке
    checkContactInfo();
    
    // Добавляем эффект печатающегося текста для заголовка
    const mainTitle = document.querySelector('.hero h1');
    if (mainTitle) {
        const originalText = mainTitle.textContent;
        mainTitle.textContent = '';
        
        let i = 0;
        const typeWriter = function() {
            if (i < originalText.length) {
                mainTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 60);
            }
        };
        
        // Запускаем эффект печати через небольшую задержку после загрузки
        setTimeout(typeWriter, 800);
    }
    
    // Обработка клика по карточке с адресом
    const mapCard = document.querySelector('.contact-card:nth-child(4)');
    if (mapCard) {
        mapCard.style.cursor = 'pointer';
        
        mapCard.addEventListener('click', function(e) {
            // Если клик был не по ссылке, а по карточке
            if (!e.target.closest('.map-link')) {
                const mapLink = this.querySelector('.map-link');
                if (mapLink) {
                    window.open(mapLink.href, '_blank');
                }
            }
        });
        
        // Добавляем подсказку при наведении
        mapCard.setAttribute('title', 'Нажмите, чтобы построить маршрут');
        
        // Добавляем эффект при наведении
        mapCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
            
            // Добавляем анимацию для иконки карты
            const mapIcon = this.querySelector('.fa-map-marker-alt');
            if (mapIcon) {
                mapIcon.style.animation = 'bounce 0.8s ease infinite alternate';
            }
            
            // Добавляем стиль для анимации
            if (!document.querySelector('#map-animation')) {
                const mapStyle = document.createElement('style');
                mapStyle.id = 'map-animation';
                mapStyle.innerHTML = `
                    @keyframes bounce {
                        0% { transform: translateY(0); }
                        100% { transform: translateY(-10px); }
                    }
                `;
                document.head.appendChild(mapStyle);
            }
        });
        
        mapCard.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            
            const mapIcon = this.querySelector('.fa-map-marker-alt');
            if (mapIcon) {
                mapIcon.style.animation = '';
            }
        });
    }
    
    // Отслеживание клика по ссылке на карту для аналитики
    const mapLink = document.querySelector('.map-link');
    if (mapLink) {
        mapLink.addEventListener('click', function() {
            console.log('Переход на Яндекс Карты для построения маршрута');
            // Здесь можно добавить код для отслеживания конверсий
        });
    }
    
    // Анимация для карточек продуктов
    function animateProductCards() {
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach((card, index) => {
            // Изначально скрываем карточки
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            // Добавляем задержку для каждой карточки
            setTimeout(() => {
                card.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 * index); // Увеличиваем задержку для каждой следующей карточки
        });
    }

    // Анимация для карточек контактов
    function animateContactCards() {
        const contactCards = document.querySelectorAll('.contact-card');
        
        contactCards.forEach((card, index) => {
            // Изначально скрываем карточки
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            // Добавляем задержку для каждой карточки
            setTimeout(() => {
                card.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 * index); // Увеличиваем задержку для каждой следующей карточки
        });
    }

    // Функция для проверки, находится ли элемент в видимой области
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Функция для запуска анимаций при прокрутке
    function handleScrollAnimations() {
        const productsSection = document.querySelector('.products-section');
        const contactsSection = document.querySelector('.contacts-section');
        const locationSection = document.querySelector('.location-section');
        
        if (productsSection && isElementInViewport(productsSection) && !productsSection.classList.contains('animated')) {
            animateProductCards();
            productsSection.classList.add('animated');
        }
        
        if (contactsSection && isElementInViewport(contactsSection) && !contactsSection.classList.contains('animated')) {
            animateContactCards();
            contactsSection.classList.add('animated');
        }
        
        if (locationSection && isElementInViewport(locationSection) && !locationSection.classList.contains('animated')) {
            animateLocationSection();
            locationSection.classList.add('animated');
        }
    }
    
    // Анимация для секции местоположения
    function animateLocationSection() {
        const locationCard = document.querySelector('.location-card');
        const locationMap = document.querySelector('.location-map');
        
        if (locationCard && isElementInViewport(locationCard)) {
            locationCard.classList.add('animated');
        }
        
        if (locationMap && isElementInViewport(locationMap)) {
            locationMap.classList.add('animated');
        }
    }

    // Запускаем анимации при загрузке страницы и при прокрутке
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Запускаем проверку анимаций сразу после загрузки
    handleScrollAnimations();
    
    // Функционал фильтрации продуктов по категориям
    const categoryButtons = document.querySelectorAll('.category-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    // Функция для фильтрации продуктов
    function filterProducts(category) {
        productCards.forEach(card => {
            // Если выбрана категория "Все" или карточка соответствует выбранной категории
            if (category === 'all' || card.dataset.category === category) {
                // Показываем карточку с анимацией
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                // Скрываем карточку с анимацией
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }
    
    // Обработчик клика по кнопкам категорий
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Удаляем класс active у всех кнопок
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем класс active текущей кнопке
            this.classList.add('active');
            
            // Фильтруем продукты по выбранной категории
            filterProducts(category);
            
            // Добавляем эффект пульсации для активной кнопки
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'buttonPulse 2s infinite';
            }, 10);
        });
    });
    
    // Добавляем анимацию при наведении на кнопки категорий
    categoryButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-3px)';
                this.style.boxShadow = '0 8px 15px rgba(0, 71, 171, 0.15)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = '';
                this.style.boxShadow = '';
            }
        });
    });
    
    // Интерактивность для секции местоположения
    const locationCard = document.querySelector('.location-card');
    const locationMap = document.querySelector('.location-map');
    const locationBtn = document.querySelector('.location-btn');
    
    if (locationCard) {
        // Добавляем эффект при наведении на карточку местоположения
        locationCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.1)';
            
            // Анимация для иконки местоположения
            const locationIcon = this.querySelector('.location-icon i');
            if (locationIcon) {
                locationIcon.style.animation = 'bounce 0.8s ease infinite alternate';
            }
            
            // Добавляем стиль для анимации, если его еще нет
            if (!document.querySelector('#location-animation')) {
                const locationStyle = document.createElement('style');
                locationStyle.id = 'location-animation';
                locationStyle.innerHTML = `
                    @keyframes bounce {
                        0% { transform: translateY(0); }
                        100% { transform: translateY(-10px); }
                    }
                    
                    @keyframes pulse {
                        0% { transform: scale(1); }
                        50% { transform: scale(1.05); }
                        100% { transform: scale(1); }
                    }
                `;
                document.head.appendChild(locationStyle);
            }
        });
        
        locationCard.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            
            const locationIcon = this.querySelector('.location-icon i');
            if (locationIcon) {
                locationIcon.style.animation = '';
            }
        });
    }
    
    if (locationMap) {
        // Добавляем эффект при наведении на карту
        locationMap.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.1)';
        });
        
        locationMap.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    }
    
    if (locationBtn) {
        // Добавляем эффект при наведении на кнопку построения маршрута
        locationBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
            this.style.boxShadow = '0 15px 30px rgba(65, 105, 225, 0.5)';
            
            // Добавляем пульсацию для иконки в кнопке
            const btnIcon = this.querySelector('i');
            if (btnIcon) {
                btnIcon.style.animation = 'pulse 1s ease infinite';
            }
        });
        
        locationBtn.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            
            const btnIcon = this.querySelector('i');
            if (btnIcon) {
                btnIcon.style.animation = '';
            }
        });
        
        // Отслеживание клика по кнопке построения маршрута для аналитики
        locationBtn.addEventListener('click', function() {
            console.log('Переход на Яндекс Карты для построения маршрута');
            // Здесь можно добавить код для отслеживания конверсий
        });
    }

    // Region functionality
    initRegions();

    // Initialize main office map
    initMainOfficeMap();

    // Инициализация переключателя языков
    initLanguageSwitcher();
});

function initRegions() {
    const regionSearch = document.getElementById('region-search');
    const clearSearch = document.getElementById('clear-search');
    const regionTabs = document.querySelectorAll('.region-tab');
    const regionCards = document.querySelectorAll('.region-card');
    
    // Set "All regions" tab as active by default
    if (regionTabs.length > 0) {
        regionTabs[0].classList.add('active');
    }
    
    // Initialize animation for region cards
    animateRegionCards();
    
    // Initialize Yandex Map
    initYandexMap();
    
    // Add event listeners to region tabs
    regionTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            regionTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Filter regions based on selected area
            const selectedArea = this.getAttribute('data-region');
            filterRegions(selectedArea);
        });
    });
    
    // Add event listener to search input
    if (regionSearch) {
        regionSearch.addEventListener('input', function() {
            searchRegions(this.value);
        });
    }
    
    // Add event listener to clear search button
    if (clearSearch) {
        clearSearch.addEventListener('click', function() {
            if (regionSearch) {
                regionSearch.value = '';
                searchRegions('');
                
                // Set "All regions" tab as active
                regionTabs.forEach(t => t.classList.remove('active'));
                if (regionTabs.length > 0) {
                    regionTabs[0].classList.add('active');
                }
            }
        });
    }
}

// Initialize Yandex Map with region markers
function initYandexMap() {
    // Check if Yandex Maps API is loaded
    if (typeof ymaps === 'undefined') {
        // Load Yandex Maps API
        const script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/2.1/?apikey=your-api-key&lang=ru_RU';
        script.async = true;
        script.onload = function() {
            // Initialize map when API is loaded
            ymaps.ready(createMap);
        };
        document.head.appendChild(script);
    } else {
        // API already loaded, initialize map
        ymaps.ready(createMap);
    }
}

// Create Yandex Map with region markers
function createMap() {
    // Create map instance
    window.uzMap = new ymaps.Map('yandex-map', {
        center: [41.3775, 64.5853], // Center of Uzbekistan
        zoom: 6, // Slightly increased zoom level for smaller map
        controls: ['zoomControl', 'fullscreenControl']
    });
    
    // Define region data with coordinates and information
    window.regionData = [
        {
            id: 'tashkent',
            name: 'Ташкент',
            coordinates: [41.2995, 69.2401],
            address: 'г. Ташкент, ул. Малая кольцевая дорога, 1',
            phone: '+998 77 201-77-78',
            description: 'Главный офис и сервисный центр'
        },
        {
            id: 'samarkand',
            name: 'Самарканд',
            coordinates: [39.6547, 66.9597],
            address: 'г. Самарканд, ул. Амира Темура, 65',
            phone: '+998 91 234-56-78',
            description: 'Официальный дилер и сервисный центр'
        },
        {
            id: 'bukhara',
            name: 'Бухара',
            coordinates: [39.7756, 64.4286],
            address: 'г. Бухара, ул. Накшбанди, 12',
            phone: '+998 91 234-56-79',
            description: 'Авторизованный сервисный центр'
        },
        {
            id: 'andijan',
            name: 'Андижан',
            coordinates: [40.7827, 72.3442],
            address: 'г. Андижан, ул. Бабура, 42',
            phone: '+998 91 234-56-80',
            description: 'Дилерский центр и магазин запчастей'
        },
        {
            id: 'fergana',
            name: 'Фергана',
            coordinates: [40.3883, 71.7835],
            address: 'г. Фергана, ул. Аль-Фергани, 18',
            phone: '+998 91 234-56-81',
            description: 'Установочный центр и магазин'
        },
        {
            id: 'namangan',
            name: 'Наманган',
            coordinates: [41.0011, 71.6673],
            address: 'г. Наманган, ул. Навои, 27',
            phone: '+998 91 234-56-82',
            description: 'Сервисный центр и консультации'
        },
        {
            id: 'navoi',
            name: 'Навои',
            coordinates: [40.0844, 65.3792],
            address: 'г. Навои, ул. Галаба, 15',
            phone: '+998 91 234-56-83',
            description: 'Партнерский сервисный центр'
        },
        {
            id: 'kashkadarya',
            name: 'Кашкадарья',
            coordinates: [38.8403, 65.7889],
            address: 'г. Карши, ул. Мустакиллик, 32',
            phone: '+998 91 234-56-84',
            description: 'Установочный центр ГБО'
        },
        {
            id: 'surkhandarya',
            name: 'Сурхандарья',
            coordinates: [37.2242, 67.2783],
            address: 'г. Термез, ул. Ат-Термизи, 8',
            phone: '+998 91 234-56-85',
            description: 'Авторизованный сервисный центр'
        },
        {
            id: 'jizzakh',
            name: 'Джизак',
            coordinates: [40.1158, 67.8422],
            address: 'г. Джизак, ул. Ш. Рашидова, 45',
            phone: '+998 91 234-56-86',
            description: 'Дилерский пункт и консультации'
        },
        {
            id: 'syrdarya',
            name: 'Сырдарья',
            coordinates: [40.4897, 68.7747],
            address: 'г. Гулистан, ул. Истиклол, 23',
            phone: '+998 91 234-56-87',
            description: 'Партнерский установочный центр'
        },
        {
            id: 'karakalpakstan',
            name: 'Каракалпакстан',
            coordinates: [42.4628, 59.6166],
            address: 'г. Нукус, ул. Дослык гузары, 55',
            phone: '+998 91 234-56-88',
            description: 'Региональный представитель'
        },
        {
            id: 'khorezm',
            name: 'Хорезм',
            coordinates: [41.5526, 60.6371],
            address: 'г. Ургенч, ул. Аль-Хорезми, 37',
            phone: '+998 91 234-56-89',
            description: 'Сервисный центр и продажа оборудования'
        }
    ];
    
    // Create collection for markers
    window.regionMarkers = new ymaps.GeoObjectCollection();
    
    // Add markers for each region
    window.regionData.forEach(region => {
        const marker = new ymaps.Placemark(
            region.coordinates,
            {
                hintContent: region.name,
                balloonContent: `
                    <div class="custom-balloon">
                        <h4>${region.name}</h4>
                        <p>${region.description}</p>
                        <div class="balloon-address">
                            <i class="fas fa-map-marker-alt"></i>
                            ${region.address}
                        </div>
                        <p><a href="tel:${region.phone}">${region.phone}</a></p>
                        <a href="https://yandex.ru/maps/?rtext=~${region.address}" target="_blank" class="balloon-button">
                            Построить маршрут
                        </a>
                    </div>
                `,
                regionId: region.id
            },
            {
                preset: 'islands#blueDotIconWithCaption',
                iconColor: '#4169e1',
                iconCaptionMaxWidth: '200'
            }
        );
        
        // Add click event to highlight corresponding region card
        marker.events.add('click', function() {
            highlightRegionCard(region.id);
        });
        
        // Add marker to collection
        window.regionMarkers.add(marker);
    });
    
    // Add markers collection to map
    window.uzMap.geoObjects.add(window.regionMarkers);
    
    // Fit map to show all markers
    window.uzMap.setBounds(window.regionMarkers.getBounds(), {
        checkZoomRange: true,
        zoomMargin: 30
    });
}

// Highlight region card when marker is clicked
function highlightRegionCard(regionName) {
    // Remove highlight from all cards
    document.querySelectorAll('.region-card').forEach(card => {
        card.classList.remove('highlighted');
    });
    
    // Find and highlight the specific card
    const card = document.querySelector(`.region-card[data-region="${regionName}"]`);
    if (card) {
        card.classList.add('highlighted');
        
        // Scroll to the card with smooth animation
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Make sure the card is visible (in case it was filtered out)
        card.style.display = 'block';
        
        // Set the corresponding tab as active
        document.querySelectorAll('.region-tab').forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('data-region') === regionName) {
                tab.classList.add('active');
            }
        });
        
        // If "all" tab is not active and no specific tab is active, set "all" as active
        if (!document.querySelector('.region-tab.active')) {
            document.querySelector('.region-tab[data-region="all"]').classList.add('active');
        }
    }
}

// Animate region cards with a staggered effect
function animateRegionCards() {
    const regionCards = document.querySelectorAll('.region-card');
    
    regionCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + (index * 50));
    });
}

// Update function to filter regions and map markers
function filterRegions(region) {
    const regionCards = document.querySelectorAll('.region-card');
    const mapPoints = document.querySelectorAll('.map-point');
    const noResultsMessage = document.querySelector('.no-results-message');
    
    if (noResultsMessage) {
        noResultsMessage.remove();
    }
    
    // Update active tab
    document.querySelectorAll('.region-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-region') === region) {
            tab.classList.add('active');
        }
    });
    
    // Hide all cards first
    regionCards.forEach(card => {
        card.style.display = 'none';
    });
    
    // Show cards based on filter
    let visibleCount = 0;
    
    if (region === 'all') {
        // Show all cards
        regionCards.forEach(card => {
            card.style.display = 'block';
            visibleCount++;
        });
        
        // Show all map points
        if (window.uzMap) {
            window.uzMap.geoObjects.each(geoObject => {
                geoObject.options.set('visible', true);
            });
            
            // Reset map position and zoom
            window.uzMap.setCenter([41.3775, 64.5853], 6);
        }
    } else {
        // Show only cards matching the specific region
        regionCards.forEach(card => {
            if (card.getAttribute('data-region') === region) {
                card.style.display = 'block';
                visibleCount++;
                
                // Find coordinates for this region to center the map
                if (window.uzMap && window.regionData) {
                    const regionInfo = window.regionData.find(r => r.id === region);
                    if (regionInfo) {
                        window.uzMap.setCenter(regionInfo.coordinates, 10);
                        
                        // Hide all markers except this one
                        window.uzMap.geoObjects.each(geoObject => {
                            const objectRegion = geoObject.properties.get('regionId');
                            geoObject.options.set('visible', objectRegion === region);
                        });
                    }
                }
            }
        });
    }
    
    // If no cards are visible, show a message
    if (visibleCount === 0) {
        createNoResultsMessage();
    }
    
    // Animate the visible cards
    animateRegionCards();
}

// Update search function to filter map markers
function searchRegions(query) {
    const searchInput = document.getElementById('region-search');
    const clearButton = document.getElementById('clear-search');
    const regionCards = document.querySelectorAll('.region-card');
    const noResultsMessage = document.querySelector('.no-results-message');
    
    if (noResultsMessage) {
        noResultsMessage.remove();
    }
    
    // Clear active tab
    document.querySelectorAll('.region-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector('.region-tab[data-region="all"]').classList.add('active');
    
    // Normalize query
    query = query.toLowerCase().trim();
    
    // Show clear button if query exists
    if (query) {
        clearButton.style.display = 'block';
    } else {
        clearButton.style.display = 'none';
    }
    
    // If empty query, show all regions
    if (!query) {
        regionCards.forEach(card => {
            card.style.display = 'block';
        });
        
        // Show all markers
        if (window.uzMap && window.regionMarkers) {
            window.regionMarkers.each(marker => {
                marker.options.set('visible', true);
            });
            
            // Reset map view
            window.uzMap.setBounds(window.regionMarkers.getBounds(), {
                checkZoomRange: true,
                zoomMargin: 30
            });
        }
        
        animateRegionCards();
        return;
    }
    
    // Filter regions by query
    let visibleCount = 0;
    const visibleMarkers = new ymaps.GeoObjectCollection();
    
    regionCards.forEach(card => {
        const regionName = card.querySelector('h4').textContent.toLowerCase();
        const regionDesc = card.querySelector('p').textContent.toLowerCase();
        const regionAddress = card.querySelector('.region-address p').textContent.toLowerCase();
        const regionId = card.getAttribute('data-region');
        
        if (regionName.includes(query) || regionDesc.includes(query) || regionAddress.includes(query)) {
            card.style.display = 'block';
            visibleCount++;
            
            // Add corresponding marker to visible collection
            if (window.uzMap && window.regionMarkers) {
                window.regionMarkers.each(marker => {
                    if (marker.properties.get('regionId') === regionId) {
                        marker.options.set('visible', true);
                        visibleMarkers.add(marker);
                    }
                });
            }
        } else {
            card.style.display = 'none';
            
            // Hide corresponding marker
            if (window.uzMap && window.regionMarkers) {
                window.regionMarkers.each(marker => {
                    if (marker.properties.get('regionId') === regionId) {
                        marker.options.set('visible', false);
                    }
                });
            }
        }
    });
    
    // If no results found, show message
    if (visibleCount === 0) {
        createNoResultsMessage();
    } else {
        // Fit map to visible markers
        if (window.uzMap && visibleMarkers.getLength() > 0) {
            window.uzMap.setBounds(visibleMarkers.getBounds(), {
                checkZoomRange: true,
                zoomMargin: 30
            });
        }
    }
    
    // Animate visible cards
    animateRegionCards();
}

function createNoResultsMessage() {
    const regionsGrid = document.querySelector('.regions-grid');
    const noResultsMessage = document.createElement('div');
    noResultsMessage.className = 'no-results-message';
    noResultsMessage.textContent = 'Регионы не найдены';
    
    if (regionsGrid && regionsGrid.parentNode) {
        regionsGrid.parentNode.insertBefore(noResultsMessage, regionsGrid.nextSibling);
    }
    
    return noResultsMessage;
}

// Initialize main office map with Yandex Maps
function initMainOfficeMap() {
    // Check if Yandex Maps API is loaded
    if (typeof ymaps === 'undefined') {
        // Load Yandex Maps API if not already loaded by initYandexMap
        const script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/2.1/?apikey=your-api-key&lang=ru_RU';
        script.async = true;
        script.onload = function() {
            // Initialize map when API is loaded
            ymaps.ready(createMainOfficeMap);
        };
        document.head.appendChild(script);
    } else {
        // API already loaded, initialize map
        ymaps.ready(createMainOfficeMap);
    }
}

// Create main office map with marker
function createMainOfficeMap() {
    // Create map instance
    const map = new ymaps.Map('main-office-map', {
        center: [41.2995, 69.2401], // Tashkent coordinates
        zoom: 15, // Adjusted zoom level for smaller map
        controls: ['zoomControl', 'fullscreenControl']
    });
    
    // Create marker for main office
    const mainOfficeMarker = new ymaps.Placemark(
        [41.2995, 69.2401], 
        {
            // Balloon content
            balloonContentHeader: 'Главный офис EuropeGAS',
            balloonContentBody: `
                <div class="custom-balloon">
                    <h4>Главный офис</h4>
                    <p>Официальный дилер EuropeGAS в Узбекистане</p>
                    <div class="balloon-address">
                        <i class="fas fa-map-marker-alt"></i>
                        <p>г. Ташкент, ул. Малая кольцевая дорога, 1</p>
                    </div>
                    <p><i class="fas fa-phone"></i> <a href="tel:+998772017778">+998 77 201-77-78</a></p>
                    <p><i class="fas fa-clock"></i> Пн-Сб: 9:00 - 18:00, Вс: выходной</p>
                    <a href="https://yandex.ru/maps/?rtext=~город Ташкент, улица Малая кольцевая дорога 1" target="_blank" class="balloon-button">
                        <i class="fas fa-route"></i> Построить маршрут
                    </a>
                </div>
            `,
            hintContent: 'Главный офис EuropeGAS'
        }, 
        {
            // Marker options
            preset: 'islands#blueHomeCircleIcon',
            iconColor: '#4169e1',
            draggable: false,
            openBalloonOnClick: true
        }
    );
    
    // Add marker to map
    map.geoObjects.add(mainOfficeMarker);
    
    // Open balloon by default
    setTimeout(() => {
        mainOfficeMarker.balloon.open();
    }, 1000);
}

// Инициализация переключателя языков
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем активный класс со всех кнопок
            langButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем активный класс на нажатую кнопку
            this.classList.add('active');
            
            // Получаем выбранный язык
            const selectedLang = this.getAttribute('data-lang');
            
            // Здесь будет логика переключения языка
            // В будущем можно реализовать полноценный перевод
            console.log(`Выбран язык: ${selectedLang}`);
            
            // Сохраняем выбор пользователя в localStorage
            localStorage.setItem('selectedLanguage', selectedLang);
        });
    });
    
    // Проверяем, есть ли сохраненный выбор языка
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        // Находим кнопку с сохраненным языком и имитируем клик
        const savedLangButton = document.querySelector(`.lang-btn[data-lang="${savedLanguage}"]`);
        if (savedLangButton) {
            savedLangButton.click();
        }
    }
}