
//top bar  search button:
document.querySelector('.fa-magnifying-glass').addEventListener('click', () => {
    alert('Search functionality coming soon!');
});

// top bar seeting button 
const settingsIcon = document.getElementById('settingsIcon');
const popupCard = document.getElementById('popupCard');
const closePopup = document.getElementById('closePopup');

// Show the popup only when the settings icon is clicked
settingsIcon.addEventListener('click', () => {
  popupCard.style.display = 'block';
});

// Close the popup when the close button is clicked
closePopup.addEventListener('click', () => {
  popupCard.style.display = 'none';
});

// search button 
// Search Button Functionality
document.getElementById('search-btn').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const recipes = document.querySelectorAll('.menu-card');
    const resultsContainer = document.getElementById('recipe-results');
    const notification = document.getElementById('notification');
    const closeButton = document.getElementById('close-btn');
    
    // Clear previous results
    resultsContainer.innerHTML = '';
    let found = false;

    recipes.forEach(recipe => {
        const cardText = recipe.innerText.toLowerCase();

        if (cardText.includes(query)) {
            found = true;
            // Clone recipe card and append to results
            const clone = recipe.cloneNode(true);
            resultsContainer.appendChild(clone);
        }
    });

    // Show or hide notification based on search results
    if (!found) {
        notification.style.display = 'block';
    } else {
        notification.style.display = 'none';
    }

    // Show the close button after search is triggered
    closeButton.style.display = 'inline-block';
});

// Close Button Functionality
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('search-bar').style.display = 'flex'; // Reset search bar layout
    document.getElementById('search-input').value = ''; // Clear the input field
    document.getElementById('recipe-results').innerHTML = ''; // Clear search results
    document.getElementById('notification').style.display = 'none'; // Hide notification
    this.style.display = 'none'; // Hide the close button
});


// hero section language change 

// Define text translations
const translations = [
    {
        title: "Discover Delicious Recipes for Every Occasion",
        heading: "Find Your Next Favorite Dish",
        subtext: "Explore a variety of mouth-watering recipes, from quick breakfasts to gourmet dinners. Whether you're a beginner or a seasoned chef, we've got something for you."
    },
    {
        title: "ನಿಮ್ಮ ಎಲ್ಲಾ ಸಂದರ್ಭಗಳಿಗೆ ರುಚಿಕರ ರೆಸಿಪಿಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
        heading: "ನಿಮ್ಮ ಮುಂದಿನ ಮೆಚ್ಚಿನ ವಾಂದಿ ಹುಡುಕಿ",
        subtext: "ವೇಗವಾದ ಉಪಾಹಾರದಿಂದ ಅದ್ಭುತ ಔತಣದವರೆಗೆ ರುಚಿಕರ ರೆಸಿಪಿಗಳ ವಿವಿಧತೆಯನ್ನು ಅನ್ವೇಷಿಸಿ. ನೀವು ಆರಂಭಿಕರಾಗಿರಲಿ ಅಥವಾ ಪರಿಣಿತ ಅಡುಗೆಯವರಾಗಿರಲಿ, ನಿಮ್ಮಿಗಾಗಿ ಏನಾದರೂ ಇದೆ."
    },
    {
        title: "अपने हर अवसर के लिए स्वादिष्ट व्यंजनों की खोज करें",
        heading: "अपना अगला पसंदीदा व्यंजन ढूंढें",
        subtext: "जल्दी नाश्ते से लेकर बेहतरीन डिनर तक, मुँह में पानी लाने वाले व्यंजनों की विविधता का अन्वेषण करें। चाहे आप एक नौसिखिया हों या अनुभवी शेफ, हमारे पास आपके लिए कुछ न कुछ है।"
    },
    {
        title: "আপনার প্রত্যেক অনুষ্ঠানের জন্য সুস্বাদু রেসিপি আবিষ্কার করুন",
        heading: "আপনার পরবর্তী প্রিয় খাবারটি খুঁজুন",
        subtext: "ঝটপট ব্রেকফাস্ট থেকে শুরু করে গুরমে ডিনার পর্যন্ত, সুস্বাদু রেসিপির একটি বৈচিত্র অন্বেষণ করুন। আপনি একজন নবীন হোন বা একজন দক্ষ শেফ, আমাদের কাছে আপনার জন্য কিছু রয়েছে।"
    },
    {
        title: "اكتشف وصفات لذيذة لكل مناسبة",
        heading: "اعثر على وصفتك المفضلة التالية",
        subtext: "استكشف مجموعة متنوعة من الوصفات الشهية، من وجبات الإفطار السريعة إلى العشاء الفاخر. سواء كنت مبتدئاً أو طاهياً محترفاً، لدينا ما يناسبك."
    },
    {
        title: "Откройте вкусные рецепты для любого случая",
        heading: "Найдите ваше следующее любимое блюдо",
        subtext: "Изучите разнообразные аппетитные рецепты, от быстрых завтраков до изысканных ужинов. Будь вы новичком или опытным поваром, у нас есть что-то для вас."
    },
    {
        title: "探索适合各种场合的美味食谱",
        heading: "寻找您下一个最爱的菜肴",
        subtext: "从快捷早餐到高端晚餐，探索各种令人垂涎的食谱。无论您是初学者还是经验丰富的大厨，我们都能满足您的需求。"
    },
    {
        title: "あらゆる場面で使える美味しいレシピを見つけよう",
        heading: "次のお気に入りの料理を見つけよう",
        subtext: "簡単な朝食から本格的なディナーまで、口の中でとろけるレシピを幅広く探求しよう。初心者でも経験豊富なシェフでも、ぴったりのものが見つかります。"
    },
    {
        title: "Scopri Ricette Deliziose per Ogni Occasione",
        heading: "Trova il tuo prossimo piatto preferito",
        subtext: "Esplora una varietà di ricette deliziose, dalle colazioni rapide alle cene gourmet. Che tu sia un principiante o uno chef esperto, abbiamo qualcosa per te."
    },
    {
        title: "Entdecken Sie köstliche Rezepte für jede Gelegenheit",
        heading: "Finden Sie Ihr nächstes Lieblingsgericht",
        subtext: "Entdecken Sie eine Vielzahl von köstlichen Rezepten, von schnellen Frühstücken bis hin zu Gourmet-Dinnern. Egal, ob Sie ein Anfänger oder ein erfahrener Koch sind, wir haben etwas für Sie."
    },
    {
        title: "Descubre Recetas Deliciosas para Cada Ocasión",
        heading: "Encuentra Tu Siguiente Plato Favorito",
        subtext: "Explora una variedad de recetas deliciosas, desde desayunos rápidos hasta cenas gourmet. Ya seas un principiante o un chef experimentado, tenemos algo para ti."
    }
];


// Current language index
let currentLanguage = 0;

function changeLanguage() {
    // Play click sound
    document.getElementById("click-sound").play();

    // Change to next language
    currentLanguage = (currentLanguage + 1) % translations.length;

    // Update text
    document.getElementById("hero-title").innerHTML = translations[currentLanguage].title;
    document.getElementById("hero-subtext").innerText = translations[currentLanguage].subtext;
}


// Features Implemented
// ✔ Wand Icon → Click to activate font-changing mode. Click on any text to change its font.
// ✔ Logo & Navbar Links → When hovered, the logo changes, and links get a new color and font.
// ✔ Smooth Hover & Click Effects for a polished user experience.

document.addEventListener("DOMContentLoaded", function () {
    const wandIcon = document.getElementById("wand-icon");
    const settingsIcon = document.getElementById("settings-icon");
    const logo = document.getElementById("logo-img");
    const navLinks = document.querySelectorAll(".nav-links a");
    const bgMenu = document.getElementById("bg-menu");

    const fonts = ["Arial", "Georgia", "Verdana", "Courier New", "Tahoma", "Trebuchet MS", "Times New Roman", "Comic Sans MS"];
    let wandActive = false;

    // Click the wand to activate font-changing mode
    wandIcon.addEventListener("click", () => {
        console.log("Wand icon clicked!"); 
        wandActive = !wandActive; // Toggle mode
    });
    

    // Click on any text to change its font (if wand mode is active)
    document.body.addEventListener("click", (event) => {
        if (wandActive && event.target !== wandIcon) {
            let randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            event.target.style.fontFamily = randomFont;
        }
    });

    // Logo Click - Change Logo
    let logoImages = ["images/chef-with-mustache-hat.jpg","images/logo.png", "images/logo-alt.png", "images/noodles.jpg", "images/menu-1.png", "images/menu-4.png", "images/chicken.jpg", "images/menu-3.png", "images/menu-2k.png"];
    let logoIndex = 0;

    logo.addEventListener("click", () => {
        logoIndex = (logoIndex + 1) % logoImages.length;
        logo.src = logoImages[logoIndex];
    });

    // Navbar Hover Effects (Only Color Change)
    const colors = ['pink', 'yellow', 'red', 'blue', 'green', 'purple', 'orange'];

    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            link.style.color = randomColor;
        });
    
        link.addEventListener("mouseout", () => {
            link.style.color = "white";
        });
    });
    

       

    // Navbar Hover & Click Sounds
    function playClickSound() {
        const clickSound = new Audio("images/effects/cork-pop-35952.mp3");
        clickSound.currentTime = 0;
        clickSound.play();
    }

    function playHoverSound() {
        const hoverSound = new Audio("images/effects/pop-39222.mp3");
        hoverSound.currentTime = 0;
        hoverSound.play();
    }

    // Assign sound functions to navbar links
    navLinks.forEach(link => {
        link.addEventListener("mouseover", playHoverSound);
        link.addEventListener("click", playClickSound);
    });

   
});

//.........................................................................................................
//.........................................................................................................
//.........................................................................................................
//.........................................................................................................

document.addEventListener("DOMContentLoaded", function () {
    const settingsIcon = document.getElementById("settings-icon");
    const bgMenu = document.getElementById("bg-menu");
    const closeBgMenu = document.getElementById("close-bg-menu");

    // Show background selection popup when settings icon is clicked
    settingsIcon.addEventListener("click", () => {
        bgMenu.classList.add("show");
    });

    // Hide popup when close button is clicked
    closeBgMenu.addEventListener("click", () => {
        bgMenu.classList.remove("show");
    });

    // Change background image on selection (WITHOUT changing hero section style)
    document.querySelectorAll(".bg-option").forEach(option => {
        option.addEventListener("click", function () {
            let bgImage = this.getAttribute("data-bg");
            document.querySelector(".hero").style.backgroundImage = `url('images/${bgImage}')`;
            bgMenu.classList.remove("show"); // Hide menu after selection
        });
    });
});


// .......................................................................................................................................
//.....................................................................................................................................................................
//.........................................................................................................
//about section card animation
function showDishDetails(title, description) {
    document.getElementById("dish-title").innerText = title;
    document.getElementById("dish-description").innerText = description;
    document.getElementById("dish-detail-card").classList.add("show");
}

function hideDishDetails() {
    document.getElementById("dish-detail-card").classList.remove("show");
}

// .........................................................................................................
//.........................................................................................................
//.........................................................................................................

// Hero section img animation 

document.addEventListener("DOMContentLoaded", function () {
    const heroImg = document.querySelector(".hero-img");
    const clickSound = document.getElementById("click-sound");

    // Array of image sources
    const images = [
        "images/Spiralized_Sweet_Potato_Noodle_Stir-Fry-removebg-preview.png"
       ,
        "images/hover-1.png",
        "images/loading-img-removebg-preview.png",
        "images/play-music-removebg-preview.png",
        "images/Blackberry_Thyme_Lemonade__25_Minutes_-removebg-preview.png",
        "images/Delicious-Spicy-Tandoori-Chicken-Recipe.jpeg",
        "images/24_Stunning_50th_Birthday_Cake_Ideas_to_Celebrate_in_Style-removebg-preview.png",
        "images/cooking-removebg-preview.png",
        "images/chef-character-with-volumetric-lighting-detailed-shading-precision-painting_899449-520393-removebg-preview.png",
        "images/Spiralized_Sweet_Potato_Noodle_Stir-Fry-removebg-preview.png",
         "images/Delicious_Pizza-removebg-preview.png"
    ];

    let currentImgIndex = 0;

    // Ensure the image has the same width and height to prevent layout shifts
    heroImg.style.width = "300px";
    heroImg.style.height = "380px";
    heroImg.style.objectFit = "cover";

    // Set initial image
    heroImg.src = images[currentImgIndex];

    // Toggle image on click and play sound
    heroImg.addEventListener("click", function () {
        currentImgIndex = (currentImgIndex + 1) % images.length; // Cycle through images
        heroImg.src = images[currentImgIndex];
        
        // Play the click sound
        clickSound.play();
    });
});



// .......................................................................................................................................
//.....................................................................................................................................................................
//.........................................................................................................
//.........................................................................................................
//.........................................................................................................
//.........................................................................................................

// contact page image animation




// .......................................................................................................................................
//.....................................................................................................................................................................

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


document.addEventListener("DOMContentLoaded", () => {
    const orderBtn = document.querySelector(".order-btn");
    const scrollBtn = document.querySelector(".scroll-btn");

    orderBtn.addEventListener("click", () => {
        alert("Redirecting to Order Page...");
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    });
});


//.........................................................................................................
//.........................................................................................................
//.........................................................................................................
//.........................................................................................................

// menu card animatin
function showDish(dish) {
    // Change the main dish to the clicked dish
    let mainDish = document.getElementById("mainDish");
    mainDish.src = dish.src;

    // Hide other dishes
    document.querySelectorAll('.dish').forEach(d => {
        if (d !== dish) {
            d.classList.add('hidden');
        }
    });

    // Stop rotation
    document.querySelector('.dish-container').style.animation = "none";
}

//.........................................................................................................
//.........................................................................................................
//.........................................................................................................
//.........................................................................................................


//popup menu for dish
// sound for read more buttons
// Play sound when hovering over "Read More"
document.querySelectorAll(".read-more").forEach(item => {
    item.addEventListener("mouseenter", () => {
        let sound = new Audio("images/effects/1-ovejita-parpadeowav-98918.mp3");
        sound.play();
    });
});


//.........................................................................................................
//.........................................................................................................
//.........................................................................................................
//.........................................................................................................


// menu section 
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Stop observing once shown
            }
        });
    }, { threshold: 0.5 });

    menuItems.forEach(item => {
        observer.observe(item);
    });

    // Force a reflow to ensure animations trigger
    setTimeout(() => {
        menuItems.forEach(item => item.classList.add("show"));
    }, 100);
});





//.........................................................................................................
//.........................................................................................................
//.........................................................................................................
//menu card 

document.addEventListener("DOMContentLoaded", function () {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    document.querySelectorAll(".favorite-icon").forEach(icon => {
        let name = icon.getAttribute("data-name");

        // If already liked, make it red
        if (favorites.some(recipe => recipe.name === name)) {
            icon.classList.add("liked");
            icon.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>';
        }
    });
});

function toggleFavorite(element, name, image) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let isLiked = favorites.some(recipe => recipe.name === name);

    if (isLiked) {
        // Remove from favorites
        favorites = favorites.filter(recipe => recipe.name !== name);
        element.classList.remove("liked");
        element.innerHTML = '<i class="fa-regular fa-thumbs-up"></i>'; // Unliked icon
    } else {
        // Add to favorites
        favorites.push({ name, image });
        element.classList.add("liked");
        element.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>'; // Liked icon
    }

    // Save back to localStorage
    localStorage.setItem("favorites", JSON.stringify(favorites));
}




//.........................................................................................................//.........................................................................................................
//.........................................................................................................
//.........................................................................................................
//.........................................................................................................


//contact section 
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("nameInput");
    const phoneInput = document.getElementById("phoneInput");
    const dateInput = document.getElementById("dateInput");
    const timeInput = document.getElementById("timeInput");
    const messageInput = document.getElementById("messageInput");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        
        let isValid = true;
        let errorMessage = "";

        // **1. Check if all fields are filled**
        if (!nameInput.value.trim() || !phoneInput.value.trim() || !dateInput.value.trim() || !timeInput.value.trim() || !messageInput.value.trim()) {
            isValid = false;
            errorMessage = "Please fill in all details.";
        }

        // **2. Phone Number Validation (+91 and 10 digits)**
        if (!isValidIndianPhone(phoneInput.value)) {
            isValid = false;
            errorMessage = "Invalid phone number. If not from India, please select your country.";
        }

        if (!isValid) {
            alert(errorMessage);
            return;
        }

        // **Show success notification**
        showPopup("Your form has been submitted successfully!");

        // **Clear form fields**
        form.reset();
    });

    // **Function to validate Indian Phone Number (+91 and 10 digits)**
    function isValidIndianPhone(phone) {
        const indianPhoneRegex = /^\+91[6-9]\d{9}$/; // Starts with +91 and has 10 digits (valid Indian numbers)
        return indianPhoneRegex.test(phone);
    }

    // **Function to show pop-up notification**
    function showPopup(message) {
        const popup = document.createElement("div");
        popup.innerText = message;
        popup.style.position = "fixed";
        popup.style.bottom = "20px";
        popup.style.right = "20px";
        popup.style.background = "yellow";
        popup.style.color = "black";
        popup.style.padding = "15px 25px";
        popup.style.borderRadius = "8px";
        popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
        popup.style.fontSize = "1.2rem";
        popup.style.fontWeight = "bold";
        popup.style.zIndex = "1000";
        document.body.appendChild(popup);

        // Remove popup after 3 seconds
        setTimeout(() => {
            popup.remove();
        }, 3000);
    }
});


//Footer section

window.addEventListener("scroll", function() {
    let footerImage = document.querySelector(".footer-image");
    let footer = document.querySelector("footer");

    let footerPosition = footer.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (footerPosition < windowHeight) {
        footerImage.style.bottom = "100px"; // Visible in footer
    } else {
        footerImage.style.bottom = "-100px"; // Hides inside waves
    }
});


