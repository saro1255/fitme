let jsonData = {};
let stored_data = {};

(async function () {
    const front_whole_container = document.querySelector(".right-content");

    if (front_whole_container) {
        front_whole_container.addEventListener("click", function (e) {
            var target_container = e.target.closest('.front-img-card');
            var first_element = front_whole_container.firstElementChild;
            $('.front-img-card').removeClass("front-img-card-flipping");

            if (target_container === first_element) {
                target_container = null;
            }

            if (target_container) {
                Array.from(front_whole_container.children);
                $(first_element).addClass("front-img-card-flipping");
                front_whole_container.prepend(target_container);
            }
        });
    }

    jsonData = {}
    jsonData['day_Spl'] = { "Chicken": ["butter_chicken"], "Mutton": ["mutton_biryani"], "Burger": ["spicy_chicken_burger"], "South Indian": ["masala_dosa"] };
    jsonData['recom_dish'] = { "Chicken": ["chicken_tikka"], "Mutton": ["mutton_korma"], "Burger": ["paneer_burger"], "South Indian": ["rava_dosa"] };
    jsonData['dishes'] = { "Chicken": { "butter_chicken": { "name": "Butter Chicken", "preparation_time": 45, "amount": 250, "cuisine_type": "North Indian", "rating": 4.5, "offer": 455 }, "chicken_chettinad": { "name": "Chicken Chettinad", "preparation_time": 40, "amount": 280, "cuisine_type": "South Indian", "rating": 4.5, "offer": 515 }, "chicken_65": { "name": "Chicken 65", "preparation_time": 25, "amount": 220, "cuisine_type": "South Indian", "rating": 3.6, "offer": 395 }, "chicken_biryani": { "name": "Chicken Biryani", "preparation_time": 50, "amount": 300, "cuisine_type": "Indian", "rating": 4.8, "offer": 556 }, "grilled_chicken": { "name": "Grilled Chicken", "preparation_time": 35, "amount": 270, "cuisine_type": "Continental", "rating": 4.2, "offer": 481 }, "tandoori_chicken": { "name": "Tandoori Chicken", "preparation_time": 45, "amount": 320, "cuisine_type": "North Indian", "rating": 4.1, "offer": 589 }, "chicken_tikka": { "name": "Chicken Tikka", "preparation_time": 30, "amount": 260, "cuisine_type": "North Indian", "rating": 4.9, "offer": 463 }, "chicken_korma": { "name": "Chicken Korma", "preparation_time": 40, "amount": 290, "cuisine_type": "Mughlai", "rating": 4.4, "offer": 512 }, "chicken_curry": { "name": "Chicken Curry", "preparation_time": 35, "amount": 240, "cuisine_type": "Indian", "rating": 4.9, "offer": 434 }, "chicken_shawarma": { "name": "Chicken Shawarma", "preparation_time": 20, "amount": 180, "cuisine_type": "Middle Eastern", "rating": 4.0, "offer": 315 } }, "Mutton": { "mutton_rogan_josh": { "name": "Mutton Rogan Josh", "preparation_time": 60, "amount": 350, "cuisine_type": "North Indian", "rating": 3.9, "offer": 639 }, "mutton_biryani": { "name": "Mutton Biryani", "preparation_time": 60, "amount": 380, "cuisine_type": "Indian", "rating": 4.3, "offer": 702 }, "mutton_curry": { "name": "Mutton Curry", "preparation_time": 50, "amount": 330, "cuisine_type": "Indian", "rating": 4.0, "offer": 605 }, "mutton_korma": { "name": "Mutton Korma", "preparation_time": 55, "amount": 360, "cuisine_type": "Mughlai", "rating": 4.7, "offer": 680 }, "mutton_keema": { "name": "Mutton Keema", "preparation_time": 40, "amount": 300, "cuisine_type": "Indian", "rating": 4.4, "offer": 549 }, "mutton_fry": { "name": "Mutton Fry", "preparation_time": 45, "amount": 320, "cuisine_type": "South Indian", "rating": 3.7, "offer": 579 }, "mutton_chops": { "name": "Mutton Chops", "preparation_time": 50, "amount": 370, "cuisine_type": "Indian", "rating": 5.0, "offer": 692 }, "mutton_sukka": { "name": "Mutton Sukka", "preparation_time": 45, "amount": 340, "cuisine_type": "South Indian", "rating": 4.0, "offer": 622 }, "mutton_nihari": { "name": "Mutton Nihari", "preparation_time": 70, "amount": 390, "cuisine_type": "Mughlai", "rating": 3.7, "offer": 711 }, "mutton_stew": { "name": "Mutton Stew", "preparation_time": 50, "amount": 310, "cuisine_type": "South Indian", "rating": 5.0, "offer": 565 } }, "Burger": { "veg_burger": { "name": "Veg Burger", "preparation_time": 15, "amount": 100, "cuisine_type": "Western", "rating": 4.7, "offer": 159 }, "chicken_burger": { "name": "Chicken Burger", "preparation_time": 20, "amount": 130, "cuisine_type": "Western", "rating": 4.5, "offer": 201 }, "cheese_burger": { "name": "Cheese Burger", "preparation_time": 15, "amount": 120, "cuisine_type": "American", "rating": 4.3, "offer": 175 }, "double_patty_burger": { "name": "Double Patty Burger", "preparation_time": 20, "amount": 150, "cuisine_type": "American", "rating": 4.7, "offer": 247 }, "paneer_burger": { "name": "Paneer Burger", "preparation_time": 15, "amount": 110, "cuisine_type": "Indian", "rating": 3.9, "offer": 167 }, "fish_burger": { "name": "Fish Burger", "preparation_time": 20, "amount": 140, "cuisine_type": "Western", "rating": 4.7, "offer": 218 }, "mutton_burger": { "name": "Mutton Burger", "preparation_time": 25, "amount": 160, "cuisine_type": "Western", "rating": 4.6, "offer": 266 }, "egg_burger": { "name": "Egg Burger", "preparation_time": 15, "amount": 90, "cuisine_type": "Indian", "rating": 4.7, "offer": 140 }, "spicy_chicken_burger": { "name": "Spicy Chicken Burger", "preparation_time": 20, "amount": 135, "cuisine_type": "American", "rating": 4.4, "offer": 221 }, "grilled_veg_burger": { "name": "Grilled Veg Burger", "preparation_time": 20, "amount": 115, "cuisine_type": "Fusion", "rating": 3.8, "offer": 186 } }, "South Indian": { "masala_dosa": { "name": "Masala Dosa", "preparation_time": 30, "amount": 80, "cuisine_type": "South Indian", "rating": 4.3, "offer": 112 }, "idly_sambar": { "name": "Idli Sambar", "preparation_time": 20, "amount": 60, "cuisine_type": "South Indian", "rating": 4.9, "offer": 64 }, "vada": { "name": "Vada", "preparation_time": 25, "amount": 50, "cuisine_type": "South Indian", "rating": 4.5, "offer": 55 }, "uttapam": { "name": "Uttapam", "preparation_time": 25, "amount": 70, "cuisine_type": "South Indian", "rating": 3.9, "offer": 98 }, "pongal": { "name": "Pongal", "preparation_time": 30, "amount": 75, "cuisine_type": "South Indian", "rating": 4.5, "offer": 82 }, "rava_dosa": { "name": "Rava Dosa", "preparation_time": 35, "amount": 85, "cuisine_type": "South Indian", "rating": 4.1, "offer": 110 }, "appam_with_stew": { "name": "Appam with Stew", "preparation_time": 30, "amount": 90, "cuisine_type": "South Indian", "rating": 4.8, "offer": 139 }, "neer_dosa": { "name": "Neer Dosa", "preparation_time": 20, "amount": 70, "cuisine_type": "South Indian", "rating": 4.8, "offer": 73 }, "upma": { "name": "Upma", "preparation_time": 15, "amount": 50, "cuisine_type": "South Indian", "rating": 3.8, "offer": 41 }, "kuzhi_paniyaram": { "name": "Kuzhi Paniyaram", "preparation_time": 20, "amount": 60, "cuisine_type": "South Indian", "rating": 4.4, "offer": 72 } }, "Pizza": { "margherita_pizza": { "name": "Margherita Pizza", "preparation_time": 20, "amount": 180, "cuisine_type": "Italian", "rating": 4.5, "offer": 316 }, "farmhouse_pizza": { "name": "Farmhouse Pizza", "preparation_time": 25, "amount": 250, "cuisine_type": "Italian", "rating": 4.2, "offer": 450 }, "paneer_tikka_pizza": { "name": "Paneer Tikka Pizza", "preparation_time": 25, "amount": 270, "cuisine_type": "Indian-Italian", "rating": 4.7, "offer": 482 }, "pepperoni_pizza": { "name": "Pepperoni Pizza", "preparation_time": 30, "amount": 320, "cuisine_type": "Italian", "rating": 4.8, "offer": 582 }, "veggie_supreme_pizza": { "name": "Veggie Supreme Pizza", "preparation_time": 25, "amount": 260, "cuisine_type": "Italian", "rating": 4.3, "offer": 453 }, "chicken_sausage_pizza": { "name": "Chicken Sausage Pizza", "preparation_time": 30, "amount": 310, "cuisine_type": "Italian", "rating": 3.8, "offer": 564 }, "BBQ_Chicken_Pizza": { "name": "BBQ Chicken Pizza", "preparation_time": 30, "amount": 330, "cuisine_type": "Italian-American", "rating": 5.0, "offer": 597 }, "cheese_burst_pizza": { "name": "Cheese Burst Pizza", "preparation_time": 30, "amount": 290, "cuisine_type": "Italian", "rating": 4.6, "offer": 515 }, "Mexican_Green_Wave_Pizza": { "name": "Mexican Green Wave Pizza", "preparation_time": 25, "amount": 270, "cuisine_type": "Fusion", "rating": 4.4, "offer": 474 }, "four_cheese_pizza": { "name": "Four Cheese Pizza", "preparation_time": 30, "amount": 350, "cuisine_type": "Italian", "rating": 3.9, "offer": 635 } } };

    // using vscode live server
    // const fetchJson = async (url, label = "data") => {
    //     try {
    //         const response = await fetch(url);
    //         if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.status}`);
    //         const data = await response.json();
    //         jsonData[label] = data;
    //         return;
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    // await fetchJson('http://127.0.0.1:5500/json/dishes.json', 'dishes');
    // await fetchJson('http://127.0.0.1:5500/json/day-spl.json', 'day_Spl');
    // await fetchJson('http://127.0.0.1:5500/json/recom-dish.json', 'recom_dish');

    var show_day_spl = '';
    for (var i in jsonData.day_Spl) {
        for (var j in jsonData.day_Spl[i]) {
            var get_dish = jsonData.dishes[i][jsonData.day_Spl[i][j]];
            show_day_spl += `<div class="col-6 product-card-container" onclick="selected_meals('${i}','${jsonData.day_Spl[i][j]}')">
                                <div class='product-card'>
                                    <div class="product-img">
                                        <img class='show_pro_img' src="./images/products/${jsonData.day_Spl[i][j]}.jpg" alt="${jsonData.day_Spl[i][j]}">
                                    </div>
                                    <span class="product-name"></span>
                                    <div class="product-rating">
                                        <span class="product-cusine">${get_dish.cuisine_type}</span>
                                        <span class="product-add">
                                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.75" d="M20.323 7.04257L14.0445 6.1301L11.2379 0.440169C11.1612 0.284382 11.0351 0.158269 10.8793 0.0816118C10.4886 -0.111267 10.0139 0.0494653 9.81851 0.440169L7.01187 6.1301L0.733413 7.04257C0.560316 7.0673 0.402057 7.1489 0.280889 7.27254C0.134404 7.4231 0.053684 7.62566 0.0564661 7.8357C0.0592481 8.04575 0.145304 8.24609 0.295726 8.39272L4.83828 12.8215L3.76508 19.0753C3.73991 19.2207 3.75601 19.3704 3.81155 19.5071C3.86708 19.6439 3.95984 19.7624 4.07929 19.8492C4.19875 19.9359 4.34012 19.9875 4.48738 19.998C4.63465 20.0085 4.7819 19.9775 4.91246 19.9086L10.5282 16.9561L16.144 19.9086C16.2973 19.9902 16.4753 20.0174 16.6459 19.9877C17.0762 19.9135 17.3655 19.5055 17.2913 19.0753L16.2181 12.8215L20.7607 8.39272C20.8843 8.27156 20.9659 8.1133 20.9907 7.9402C21.0574 7.50746 20.7557 7.10686 20.323 7.04257Z" fill="#1AC84B"/>
                                            </svg>
                                            ${get_dish.rating}
                                        </span>
                                    </div>
                                    <div class="product-rating">
                                        <span class="product-add">
                                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.75">
                                                    <path d="M8.90123 13.4568L11.8642 14.4445C11.8642 14.4445 19.2716 12.963 20.2593 12.963C21.2469 12.963 21.2469 13.9506 20.2593 14.9383C19.2716 15.9259 15.8148 18.8889 12.8519 18.8889C9.88889 18.8889 7.91358 17.4074 5.93827 17.4074H1" stroke="#FC8019" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M1 11.4815C1.98765 10.4938 3.96296 9.01235 5.93827 9.01235C7.91358 9.01235 12.6049 10.9877 13.3457 11.9753C14.0864 12.963 11.8642 14.4444 11.8642 14.4444M6.92593 6.04939V2.09877C6.92593 1.83683 7.02998 1.58561 7.2152 1.40039C7.40042 1.21517 7.65164 1.11111 7.91358 1.11111H19.7654C20.0274 1.11111 20.2786 1.21517 20.4638 1.40039C20.649 1.58561 20.7531 1.83683 20.7531 2.09877V10" stroke="#FC8019" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M11.3701 1.11111H16.3084V5.55556H11.3701V1.11111Z" stroke="#FC8019" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                            </svg>
                                            ${get_dish.preparation_time} min
                                        </span>
                                        <span class="product-add">
                                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.75" d="M3.61446 3.90361C3.61446 3.20063 3.89372 2.52643 4.3908 2.02935C4.88789 1.53227 5.56208 1.25301 6.26506 1.25301C6.96804 1.25301 7.64224 1.53227 8.13932 2.02935C8.6364 2.52643 8.91566 3.20063 8.91566 3.90361C8.91566 4.60659 8.6364 5.28078 8.13932 5.77787C7.64224 6.27495 6.96804 6.55421 6.26506 6.55421C5.56208 6.55421 4.88789 6.27495 4.3908 5.77787C3.89372 5.28078 3.61446 4.60659 3.61446 3.90361ZM6.26506 0.0481873C5.24254 0.0481873 4.2619 0.454382 3.53887 1.17741C2.81583 1.90045 2.40964 2.88109 2.40964 3.90361C2.40964 4.92613 2.81583 5.90677 3.53887 6.6298C4.2619 7.35284 5.24254 7.75903 6.26506 7.75903C7.28758 7.75903 8.26822 7.35284 8.99126 6.6298C9.71429 5.90677 10.1205 4.92613 10.1205 3.90361C10.1205 2.88109 9.71429 1.90045 8.99126 1.17741C8.26822 0.454382 7.28758 0.0481873 6.26506 0.0481873ZM13.253 4.86746C13.253 4.42011 13.4307 3.99108 13.747 3.67475C14.0634 3.35843 14.4924 3.18072 14.9398 3.18072C15.3871 3.18072 15.8161 3.35843 16.1325 3.67475C16.4488 3.99108 16.6265 4.42011 16.6265 4.86746C16.6265 5.31482 16.4488 5.74385 16.1325 6.06017C15.8161 6.3765 15.3871 6.55421 14.9398 6.55421C14.4924 6.55421 14.0634 6.3765 13.747 6.06017C13.4307 5.74385 13.253 5.31482 13.253 4.86746ZM14.9398 1.9759C14.1729 1.9759 13.4374 2.28054 12.8951 2.82282C12.3528 3.36509 12.0482 4.10057 12.0482 4.86746C12.0482 5.63436 12.3528 6.36984 12.8951 6.91211C13.4374 7.45438 14.1729 7.75903 14.9398 7.75903C15.7067 7.75903 16.4421 7.45438 16.9844 6.91211C17.5267 6.36984 17.8313 5.63436 17.8313 4.86746C17.8313 4.10057 17.5267 3.36509 16.9844 2.82282C16.4421 2.28054 15.7067 1.9759 14.9398 1.9759ZM14.9398 14.9879C13.8911 14.9879 13.0496 14.8183 12.3778 14.5436L12.4675 14.4279C12.7055 14.1142 12.8882 13.8 13.028 13.5022C13.5195 13.6732 14.1441 13.7831 14.9393 13.7831C17 13.7831 17.9142 13.0443 18.3431 12.4188C18.5874 12.0594 18.7404 11.6458 18.7889 11.214C18.7917 11.1858 18.7936 11.1575 18.7947 11.1292V11.012C18.7947 10.6795 18.5248 10.4096 18.1923 10.4096H13.428C13.329 9.96423 13.1212 9.55029 12.8231 9.20481H18.1928C18.6721 9.20481 19.1318 9.39522 19.4707 9.73414C19.8096 10.0731 20 10.5327 20 11.012V11.1552L19.9986 11.1966C19.9966 11.2304 19.9937 11.2757 19.9889 11.3311C19.9206 11.9652 19.6969 12.5727 19.3378 13.0998C18.6511 14.0998 17.3364 14.9879 14.9388 14.9879H14.9398ZM1.80723 9.20481C1.32792 9.20481 0.868246 9.39522 0.529325 9.73414C0.190404 10.0731 0 10.5327 0 11.012V11.64L0.00192769 11.6867C0.0038554 11.7253 0.00771083 11.7764 0.0144578 11.84C0.0284337 11.9663 0.0549397 12.1398 0.106988 12.346C0.245103 12.8893 0.490928 13.3993 0.82988 13.8458C1.67663 14.9619 3.28964 15.9518 6.26506 15.9518C9.24096 15.9518 10.854 14.9619 11.6998 13.8458C12.0389 13.3992 12.2849 12.889 12.4231 12.3455C12.4752 12.1398 12.5017 11.9663 12.5157 11.8395C12.523 11.7732 12.5278 11.7067 12.5301 11.64V11.012C12.5301 10.7747 12.4834 10.5397 12.3926 10.3204C12.3017 10.1012 12.1686 9.90195 12.0008 9.73414C11.833 9.56632 11.6338 9.4332 11.4145 9.34238C11.1952 9.25156 10.9602 9.20481 10.7229 9.20481H1.80723ZM1.2053 11.626L1.20482 11.6106V11.012C1.20482 10.6795 1.4747 10.4096 1.80723 10.4096H10.7229C11.0554 10.4096 11.3253 10.6795 11.3253 11.012V11.6106L11.3248 11.626C11.3139 11.7691 11.2907 11.911 11.2554 12.0501C11.1568 12.437 10.9814 12.8002 10.7398 13.1181C10.1701 13.8699 8.95181 14.747 6.26506 14.747C3.57831 14.747 2.36 13.8699 1.79036 13.1181C1.54875 12.8004 1.37339 12.4374 1.2747 12.0506C1.23944 11.9113 1.21622 11.7693 1.2053 11.626Z" fill="#FC8019"/>
                                            </svg>
                                            Two for ₹${get_dish.offer}
                                        </span>
                                    </div>
                                </div>
                            </div>`
        }
    }
    $('#today_spl').html(show_day_spl);

    var show_recom = '';
    for (var i in jsonData.recom_dish) {
        for (var j in jsonData.recom_dish[i]) {
            var get_dish = jsonData.dishes[i][jsonData.recom_dish[i][j]];
            show_recom += `<div class="col-6 product-card-container" onclick="selected_meals('${i}','${jsonData.recom_dish[i][j]}')">
                                <div class='product-card'>
                                    <div class="product-img">
                                        <img class='show_pro_img' src="./images/products/${jsonData.recom_dish[i][j]}.jpg" alt="${jsonData.day_Spl[i][j]}">
                                    </div>
                                    <span class="product-name"></span>
                                    <div class="product-rating">
                                        <span class="product-cusine">${get_dish.cuisine_type}</span>
                                        <span class="product-add">
                                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.75" d="M20.323 7.04257L14.0445 6.1301L11.2379 0.440169C11.1612 0.284382 11.0351 0.158269 10.8793 0.0816118C10.4886 -0.111267 10.0139 0.0494653 9.81851 0.440169L7.01187 6.1301L0.733413 7.04257C0.560316 7.0673 0.402057 7.1489 0.280889 7.27254C0.134404 7.4231 0.053684 7.62566 0.0564661 7.8357C0.0592481 8.04575 0.145304 8.24609 0.295726 8.39272L4.83828 12.8215L3.76508 19.0753C3.73991 19.2207 3.75601 19.3704 3.81155 19.5071C3.86708 19.6439 3.95984 19.7624 4.07929 19.8492C4.19875 19.9359 4.34012 19.9875 4.48738 19.998C4.63465 20.0085 4.7819 19.9775 4.91246 19.9086L10.5282 16.9561L16.144 19.9086C16.2973 19.9902 16.4753 20.0174 16.6459 19.9877C17.0762 19.9135 17.3655 19.5055 17.2913 19.0753L16.2181 12.8215L20.7607 8.39272C20.8843 8.27156 20.9659 8.1133 20.9907 7.9402C21.0574 7.50746 20.7557 7.10686 20.323 7.04257Z" fill="#1AC84B"/>
                                            </svg>
                                            ${get_dish.rating}
                                        </span>
                                    </div>
                                    <div class="product-rating">
                                        <span class="product-add">
                                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.75">
                                                    <path d="M8.90123 13.4568L11.8642 14.4445C11.8642 14.4445 19.2716 12.963 20.2593 12.963C21.2469 12.963 21.2469 13.9506 20.2593 14.9383C19.2716 15.9259 15.8148 18.8889 12.8519 18.8889C9.88889 18.8889 7.91358 17.4074 5.93827 17.4074H1" stroke="#FC8019" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M1 11.4815C1.98765 10.4938 3.96296 9.01235 5.93827 9.01235C7.91358 9.01235 12.6049 10.9877 13.3457 11.9753C14.0864 12.963 11.8642 14.4444 11.8642 14.4444M6.92593 6.04939V2.09877C6.92593 1.83683 7.02998 1.58561 7.2152 1.40039C7.40042 1.21517 7.65164 1.11111 7.91358 1.11111H19.7654C20.0274 1.11111 20.2786 1.21517 20.4638 1.40039C20.649 1.58561 20.7531 1.83683 20.7531 2.09877V10" stroke="#FC8019" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M11.3701 1.11111H16.3084V5.55556H11.3701V1.11111Z" stroke="#FC8019" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                            </svg>
                                            ${get_dish.preparation_time} min
                                        </span>
                                        <span class="product-add">
                                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.75" d="M3.61446 3.90361C3.61446 3.20063 3.89372 2.52643 4.3908 2.02935C4.88789 1.53227 5.56208 1.25301 6.26506 1.25301C6.96804 1.25301 7.64224 1.53227 8.13932 2.02935C8.6364 2.52643 8.91566 3.20063 8.91566 3.90361C8.91566 4.60659 8.6364 5.28078 8.13932 5.77787C7.64224 6.27495 6.96804 6.55421 6.26506 6.55421C5.56208 6.55421 4.88789 6.27495 4.3908 5.77787C3.89372 5.28078 3.61446 4.60659 3.61446 3.90361ZM6.26506 0.0481873C5.24254 0.0481873 4.2619 0.454382 3.53887 1.17741C2.81583 1.90045 2.40964 2.88109 2.40964 3.90361C2.40964 4.92613 2.81583 5.90677 3.53887 6.6298C4.2619 7.35284 5.24254 7.75903 6.26506 7.75903C7.28758 7.75903 8.26822 7.35284 8.99126 6.6298C9.71429 5.90677 10.1205 4.92613 10.1205 3.90361C10.1205 2.88109 9.71429 1.90045 8.99126 1.17741C8.26822 0.454382 7.28758 0.0481873 6.26506 0.0481873ZM13.253 4.86746C13.253 4.42011 13.4307 3.99108 13.747 3.67475C14.0634 3.35843 14.4924 3.18072 14.9398 3.18072C15.3871 3.18072 15.8161 3.35843 16.1325 3.67475C16.4488 3.99108 16.6265 4.42011 16.6265 4.86746C16.6265 5.31482 16.4488 5.74385 16.1325 6.06017C15.8161 6.3765 15.3871 6.55421 14.9398 6.55421C14.4924 6.55421 14.0634 6.3765 13.747 6.06017C13.4307 5.74385 13.253 5.31482 13.253 4.86746ZM14.9398 1.9759C14.1729 1.9759 13.4374 2.28054 12.8951 2.82282C12.3528 3.36509 12.0482 4.10057 12.0482 4.86746C12.0482 5.63436 12.3528 6.36984 12.8951 6.91211C13.4374 7.45438 14.1729 7.75903 14.9398 7.75903C15.7067 7.75903 16.4421 7.45438 16.9844 6.91211C17.5267 6.36984 17.8313 5.63436 17.8313 4.86746C17.8313 4.10057 17.5267 3.36509 16.9844 2.82282C16.4421 2.28054 15.7067 1.9759 14.9398 1.9759ZM14.9398 14.9879C13.8911 14.9879 13.0496 14.8183 12.3778 14.5436L12.4675 14.4279C12.7055 14.1142 12.8882 13.8 13.028 13.5022C13.5195 13.6732 14.1441 13.7831 14.9393 13.7831C17 13.7831 17.9142 13.0443 18.3431 12.4188C18.5874 12.0594 18.7404 11.6458 18.7889 11.214C18.7917 11.1858 18.7936 11.1575 18.7947 11.1292V11.012C18.7947 10.6795 18.5248 10.4096 18.1923 10.4096H13.428C13.329 9.96423 13.1212 9.55029 12.8231 9.20481H18.1928C18.6721 9.20481 19.1318 9.39522 19.4707 9.73414C19.8096 10.0731 20 10.5327 20 11.012V11.1552L19.9986 11.1966C19.9966 11.2304 19.9937 11.2757 19.9889 11.3311C19.9206 11.9652 19.6969 12.5727 19.3378 13.0998C18.6511 14.0998 17.3364 14.9879 14.9388 14.9879H14.9398ZM1.80723 9.20481C1.32792 9.20481 0.868246 9.39522 0.529325 9.73414C0.190404 10.0731 0 10.5327 0 11.012V11.64L0.00192769 11.6867C0.0038554 11.7253 0.00771083 11.7764 0.0144578 11.84C0.0284337 11.9663 0.0549397 12.1398 0.106988 12.346C0.245103 12.8893 0.490928 13.3993 0.82988 13.8458C1.67663 14.9619 3.28964 15.9518 6.26506 15.9518C9.24096 15.9518 10.854 14.9619 11.6998 13.8458C12.0389 13.3992 12.2849 12.889 12.4231 12.3455C12.4752 12.1398 12.5017 11.9663 12.5157 11.8395C12.523 11.7732 12.5278 11.7067 12.5301 11.64V11.012C12.5301 10.7747 12.4834 10.5397 12.3926 10.3204C12.3017 10.1012 12.1686 9.90195 12.0008 9.73414C11.833 9.56632 11.6338 9.4332 11.4145 9.34238C11.1952 9.25156 10.9602 9.20481 10.7229 9.20481H1.80723ZM1.2053 11.626L1.20482 11.6106V11.012C1.20482 10.6795 1.4747 10.4096 1.80723 10.4096H10.7229C11.0554 10.4096 11.3253 10.6795 11.3253 11.012V11.6106L11.3248 11.626C11.3139 11.7691 11.2907 11.911 11.2554 12.0501C11.1568 12.437 10.9814 12.8002 10.7398 13.1181C10.1701 13.8699 8.95181 14.747 6.26506 14.747C3.57831 14.747 2.36 13.8699 1.79036 13.1181C1.54875 12.8004 1.37339 12.4374 1.2747 12.0506C1.23944 11.9113 1.21622 11.7693 1.2053 11.626Z" fill="#FC8019"/>
                                            </svg>
                                            Two for ₹${get_dish.offer}
                                        </span>
                                    </div>
                                </div>
                            </div>`
        }
    }
    $('#res_recom').html(show_recom);

    var show_categ = ''
    for (var i in jsonData.dishes) {
        show_categ += ` <div class='mind_show_categ' onclick="search_dish('${i}')">
                            <img class='mind_pro_img' src="./images/products/${i}.jpg" alt="${i}">
                            <span class='food_name'>${i}</span>
                        </div>`
    }
    $("#mind_food").html(show_categ)
})();

function search_dish(categ) {
    var get_search_input = categ ? categ : $("#food_search").val()
    get_search_input = get_search_input.toLowerCase()
    var generate_search = ''
    $("#search_span").html(`<span class='span_heading_1'>Search results for “${get_search_input}”</span>`)
    if (get_search_input.length > 0) {
        for (var i in jsonData.dishes) {
            for (var j in jsonData.dishes[i]) {
                var search_name = jsonData.dishes[i][j]['name'].toLowerCase()
                if (search_name.includes(get_search_input)) {
                    generate_search += `<div class='search_res_container' onclick="selected_meals('${i}','${j}')">
                                            <img src="./images/products/${j}.jpg" alt="${j}" class='search_res_img'>
                                            <div class='search_con_r'>
                                                <span class='food_name'>${jsonData.dishes[i][j]['name']}</span>
                                                <span class='food_name_g'>${jsonData.dishes[i][j]['cuisine_type']}</span>
                                                <div class='search_con_rate'>
                                                    <span class='food_name'>
                                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.75" d="M20.4194 1.58928C20.2343 1.40207 20.0138 1.25355 19.7708 1.15238C19.5278 1.05122 19.267 0.999418 19.0038 1H13.516C13.156 1.00068 12.8108 1.14328 12.5553 1.39687L1.58458 12.3654C1.21024 12.7405 1 13.2488 1 13.7787C1 14.3087 1.21024 14.817 1.58458 15.1921L6.80767 20.4152C7.18288 20.7897 7.69135 21 8.22147 21C8.7516 21 9.26007 20.7897 9.63528 20.4152L20.6015 9.45114C20.8556 9.19604 20.9987 8.85095 20.9997 8.49089V2.99996C21.0014 2.73809 20.9509 2.47851 20.8513 2.23633C20.7516 1.99414 20.6048 1.77419 20.4194 1.58928ZM16.7141 6.71415C16.4316 6.71415 16.1554 6.63037 15.9205 6.4734C15.6855 6.31643 15.5025 6.09332 15.3943 5.83229C15.2862 5.57126 15.2579 5.28403 15.313 5.00692C15.3682 4.72981 15.5042 4.47527 15.704 4.27549C15.9038 4.0757 16.1583 3.93965 16.4354 3.88453C16.7125 3.82941 16.9998 3.8577 17.2608 3.96582C17.5218 4.07394 17.7449 4.25704 17.9019 4.49196C18.0589 4.72688 18.1427 5.00308 18.1427 5.28561C18.1427 5.66449 17.9922 6.02784 17.7243 6.29574C17.4563 6.56364 17.093 6.71415 16.7141 6.71415Z" stroke="#FC8019" stroke-width="1.5"/>
                                                        </svg>
                                                        ₹${jsonData.dishes[i][j]['amount']}
                                                    </span>
                                                    <span class='food_name'>
                                                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g opacity="0.75">
                                                                <path d="M8.90123 13.4567L11.8642 14.4444C11.8642 14.4444 19.2716 12.9629 20.2593 12.9629C21.2469 12.9629 21.2469 13.9505 20.2593 14.9382C19.2716 15.9259 15.8148 18.8888 12.8519 18.8888C9.88889 18.8888 7.91358 17.4073 5.93827 17.4073H1" stroke="#FC8019" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M1 11.4815C1.98765 10.4938 3.96296 9.01232 5.93827 9.01232C7.91358 9.01232 12.6049 10.9876 13.3457 11.9753C14.0864 12.9629 11.8642 14.4444 11.8642 14.4444M6.92593 6.04936V2.09874C6.92593 1.8368 7.02998 1.58558 7.2152 1.40036C7.40042 1.21514 7.65164 1.11108 7.91358 1.11108H19.7654C20.0274 1.11108 20.2786 1.21514 20.4638 1.40036C20.649 1.58558 20.7531 1.8368 20.7531 2.09874V9.99997" stroke="#FC8019" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M11.3702 1.11108H16.3085V5.55553H11.3702V1.11108Z" stroke="#FC8019" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </g>
                                                        </svg>
                                                        ${jsonData.dishes[i][j]['preparation_time']} mins
                                                    </span>
                                                </div>
                                            </div>
                                        </div>`
                }
            }
        }
    }
    $("#show_res_id").html(generate_search)
}

function div_functionality(div_id){
    var div_id_array = ['main_div','checkout_div','show_cart']
    for(var i in div_id_array){
        if(div_id_array[i] != div_id){
            $(`#${div_id_array[i]}`).removeClass('show_div')
            $(`#${div_id_array[i]}`).addClass('hide_div')
        }
    }
    $(`#${div_id}`).addClass('show_div')
    $(`#${div_id}`).removeClass('hide_div')
}

function show_main(){
    div_functionality('main_div')
}

function selected_meals(meal_categ, meal){
    div_functionality('checkout_div')
    var selected_meal_obj = jsonData && jsonData.dishes && jsonData.dishes[meal_categ] && jsonData.dishes[meal_categ][meal] ? jsonData.dishes[meal_categ][meal] : {};
    var checkout_div = `<div class="checkout_container">
                            <div class="checkout_main row">
                                <div class="col-3 checkout_left">
                                <span class='checkout_goback' onclick='show_main()'>
                                    <svg width="20px" height="20px" viewBox="0 -2 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                                            <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-412.000000, -933.000000)" fill="#FC8019">
                                                <path d="M438,957 C438,958.104 437.104,959 436,959 L416,959 C414.896,959 414,958.104 414,957 L414,937 C414,935.896 414.896,935 416,935 L436,935 C437.104,935 438,935.896 438,937 L438,940 L440,940 L440,937 C440,934.791 438.209,933 436,933 L416,933 C413.791,933 412,934.791 412,937 L412,957 C412,959.209 413.791,961 416,961 L436,961 C438.209,961 440,959.209 440,957 L440,954 L438,954 L438,957 L438,957 Z M443,946 L421.414,946 L426.657,940.757 C427.048,940.367 427.048,939.733 426.657,939.343 C426.267,938.952 425.633,938.952 425.242,939.343 L418.343,946.242 C418.135,946.451 418.046,946.728 418.06,947 C418.046,947.272 418.135,947.549 418.343,947.758 L425.242,954.657 C425.633,955.048 426.267,955.048 426.657,954.657 C427.048,954.267 427.048,953.633 426.657,953.242 L421.414,948 L443,948 C443.553,948 444,947.553 444,947 C444,946.448 443.553,946 443,946 L443,946 Z" id="arrow-left" sketch:type="MSShapeGroup">
                                                </path>
                                            </g>
                                        </g>
                                    </svg>
                                    Go Back
                                </span>
                                    <img class="checkout_img" src="./images/products/${meal}.jpg" alt="${meal}">
                                </div>
                                <div class="col-5 checkout_content">
                                    <span class="checkout_m_show">${selected_meal_obj.name ? selected_meal_obj.name : ''}</span>
                                    <span class="checkout_c_show">${selected_meal_obj.cuisine_type ? selected_meal_obj.cuisine_type : ''}</span>
                                    <div class="checkout_others">
                                        <div class="info-container">
                                            <div class="info-block">
                                                <span class="star">★</span>
                                                <span class="rating">${selected_meal_obj.rating ? selected_meal_obj.rating : ''}</span>
                                                <div class="subtext">100+ ratings</div>
                                            </div>
                                            <div class="divider"></div>
                                            <div class="info-block">
                                                <span class="rating">${selected_meal_obj.preparation_time ? selected_meal_obj.preparation_time : ''} Mins</span>
                                                <div class="subtext">Delivery Time</div>
                                            </div>
                                            <div class="divider"></div>
                                            <div class="info-block">
                                                <span class="rating">₹${selected_meal_obj.offer ? selected_meal_obj.offer : ''}</span>
                                                <div class="subtext">Cost for two</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="checkout_offer_c">
                                        <span>Offers</span>
                                        <span>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.7609 9.99999L19.8663 8.08969C19.9991 7.85986 20.0352 7.58667 19.9667 7.33021C19.8982 7.07374 19.7306 6.85499 19.5008 6.72205L17.5885 5.61672V3.41407C17.5885 3.14854 17.483 2.89388 17.2953 2.70612C17.1075 2.51835 16.8529 2.41287 16.5873 2.41287H14.3857L13.2813 0.501575C13.148 0.272216 12.9296 0.104604 12.6736 0.0350146C12.5466 0.000589099 12.4141 -0.00828766 12.2836 0.00889877C12.1532 0.0260852 12.0274 0.0689931 11.9137 0.135135L10.0014 1.24046L8.08911 0.134134C7.85915 0.00137182 7.58588 -0.034606 7.3294 0.0341144C7.07292 0.102835 6.85424 0.270625 6.72146 0.500574L5.61614 2.41287H3.41449C3.14896 2.41287 2.8943 2.51835 2.70654 2.70612C2.51877 2.89388 2.41329 3.14854 2.41329 3.41407V5.61572L0.500992 6.72105C0.386887 6.78668 0.286876 6.87421 0.206703 6.97862C0.126531 7.08302 0.0677781 7.20224 0.0338202 7.32942C-0.000137755 7.4566 -0.00863139 7.58923 0.00882726 7.71971C0.0262859 7.85018 0.0693526 7.97591 0.135553 8.08969L1.24088 9.99999L0.135553 11.9103C0.00338332 12.1403 -0.0324765 12.4133 0.0357919 12.6697C0.10406 12.9261 0.27092 13.1451 0.499991 13.2789L2.41229 14.3843V16.5859C2.41229 16.8514 2.51777 17.1061 2.70553 17.2939C2.8933 17.4816 3.14796 17.5871 3.41349 17.5871H5.61614L6.72146 19.4994C6.8101 19.6509 6.93666 19.7768 7.08868 19.8645C7.24071 19.9523 7.41296 19.999 7.58851 20C7.76272 20 7.93592 19.9539 8.09011 19.8648L10.0004 18.7595L11.9127 19.8648C12.1426 19.9974 12.4157 20.0334 12.6721 19.9649C12.9285 19.8964 13.1472 19.729 13.2803 19.4994L14.3847 17.5871H16.5863C16.8519 17.5871 17.1065 17.4816 17.2943 17.2939C17.482 17.1061 17.5875 16.8514 17.5875 16.5859V14.3843L19.4998 13.2789C19.6137 13.2131 19.7135 13.1255 19.7936 13.021C19.8736 12.9166 19.9322 12.7974 19.9662 12.6703C20.0001 12.5432 20.0087 12.4107 19.9914 12.2803C19.974 12.1498 19.9312 12.0241 19.8653 11.9103L18.7609 9.99999ZM7.4974 4.98396C7.89583 4.98409 8.2779 5.1425 8.55954 5.42433C8.84118 5.70616 8.99933 6.08833 8.9992 6.48677C8.99907 6.8852 8.84066 7.26727 8.55883 7.54891C8.277 7.83055 7.89483 7.9887 7.4964 7.98857C7.09796 7.98844 6.7159 7.83003 6.43425 7.5482C6.15261 7.26637 5.99446 6.8842 5.99459 6.48576C5.99472 6.08733 6.15313 5.70526 6.43496 5.42362C6.71679 5.14198 7.09896 4.98383 7.4974 4.98396ZM7.79776 14.5955L6.19583 13.3951L12.203 5.38544L13.805 6.58589L7.79776 14.5955ZM12.5034 14.996C12.3061 14.9959 12.1108 14.957 11.9285 14.8814C11.7463 14.8059 11.5807 14.6952 11.4413 14.5556C11.3018 14.4161 11.1912 14.2504 11.1158 14.0681C11.0403 13.8858 11.0015 13.6905 11.0016 13.4932C11.0017 13.2959 11.0406 13.1006 11.1162 12.9183C11.1917 12.7361 11.3024 12.5705 11.442 12.431C11.5815 12.2916 11.7472 12.181 11.9295 12.1055C12.1118 12.0301 12.3071 11.9913 12.5044 11.9914C12.9028 11.9915 13.2849 12.1499 13.5666 12.4317C13.8482 12.7136 14.0063 13.0957 14.0062 13.4942C14.0061 13.8926 13.8477 14.2747 13.5658 14.5563C13.284 14.838 12.9018 14.9961 12.5034 14.996Z" fill="#FC8019"/>
                                            </svg>
                                            <span class="checkout_o_span">50% off up to ₹100 | Use code TRYNEW</span>
                                        </span>
                                        <span>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.7609 9.99999L19.8663 8.08969C19.9991 7.85986 20.0352 7.58667 19.9667 7.33021C19.8982 7.07374 19.7306 6.85499 19.5008 6.72205L17.5885 5.61672V3.41407C17.5885 3.14854 17.483 2.89388 17.2953 2.70612C17.1075 2.51835 16.8529 2.41287 16.5873 2.41287H14.3857L13.2813 0.501575C13.148 0.272216 12.9296 0.104604 12.6736 0.0350146C12.5466 0.000589099 12.4141 -0.00828766 12.2836 0.00889877C12.1532 0.0260852 12.0274 0.0689931 11.9137 0.135135L10.0014 1.24046L8.08911 0.134134C7.85915 0.00137182 7.58588 -0.034606 7.3294 0.0341144C7.07292 0.102835 6.85424 0.270625 6.72146 0.500574L5.61614 2.41287H3.41449C3.14896 2.41287 2.8943 2.51835 2.70654 2.70612C2.51877 2.89388 2.41329 3.14854 2.41329 3.41407V5.61572L0.500992 6.72105C0.386887 6.78668 0.286876 6.87421 0.206703 6.97862C0.126531 7.08302 0.0677781 7.20224 0.0338202 7.32942C-0.000137755 7.4566 -0.00863139 7.58923 0.00882726 7.71971C0.0262859 7.85018 0.0693526 7.97591 0.135553 8.08969L1.24088 9.99999L0.135553 11.9103C0.00338332 12.1403 -0.0324765 12.4133 0.0357919 12.6697C0.10406 12.9261 0.27092 13.1451 0.499991 13.2789L2.41229 14.3843V16.5859C2.41229 16.8514 2.51777 17.1061 2.70553 17.2939C2.8933 17.4816 3.14796 17.5871 3.41349 17.5871H5.61614L6.72146 19.4994C6.8101 19.6509 6.93666 19.7768 7.08868 19.8645C7.24071 19.9523 7.41296 19.999 7.58851 20C7.76272 20 7.93592 19.9539 8.09011 19.8648L10.0004 18.7595L11.9127 19.8648C12.1426 19.9974 12.4157 20.0334 12.6721 19.9649C12.9285 19.8964 13.1472 19.729 13.2803 19.4994L14.3847 17.5871H16.5863C16.8519 17.5871 17.1065 17.4816 17.2943 17.2939C17.482 17.1061 17.5875 16.8514 17.5875 16.5859V14.3843L19.4998 13.2789C19.6137 13.2131 19.7135 13.1255 19.7936 13.021C19.8736 12.9166 19.9322 12.7974 19.9662 12.6703C20.0001 12.5432 20.0087 12.4107 19.9914 12.2803C19.974 12.1498 19.9312 12.0241 19.8653 11.9103L18.7609 9.99999ZM7.4974 4.98396C7.89583 4.98409 8.2779 5.1425 8.55954 5.42433C8.84118 5.70616 8.99933 6.08833 8.9992 6.48677C8.99907 6.8852 8.84066 7.26727 8.55883 7.54891C8.277 7.83055 7.89483 7.9887 7.4964 7.98857C7.09796 7.98844 6.7159 7.83003 6.43425 7.5482C6.15261 7.26637 5.99446 6.8842 5.99459 6.48576C5.99472 6.08733 6.15313 5.70526 6.43496 5.42362C6.71679 5.14198 7.09896 4.98383 7.4974 4.98396ZM7.79776 14.5955L6.19583 13.3951L12.203 5.38544L13.805 6.58589L7.79776 14.5955ZM12.5034 14.996C12.3061 14.9959 12.1108 14.957 11.9285 14.8814C11.7463 14.8059 11.5807 14.6952 11.4413 14.5556C11.3018 14.4161 11.1912 14.2504 11.1158 14.0681C11.0403 13.8858 11.0015 13.6905 11.0016 13.4932C11.0017 13.2959 11.0406 13.1006 11.1162 12.9183C11.1917 12.7361 11.3024 12.5705 11.442 12.431C11.5815 12.2916 11.7472 12.181 11.9295 12.1055C12.1118 12.0301 12.3071 11.9913 12.5044 11.9914C12.9028 11.9915 13.2849 12.1499 13.5666 12.4317C13.8482 12.7136 14.0063 13.0957 14.0062 13.4942C14.0061 13.8926 13.8477 14.2747 13.5658 14.5563C13.284 14.838 12.9018 14.9961 12.5034 14.996Z" fill="#FC8019"/>
                                            </svg>
                                            <span class="checkout_o_span">20% off | Use code PARTY</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row checkout_container_bottom">
                            <div class="col-8 row checkout_d_left">
                                <div class="col-8 checkout_d_insideL">
                                    <span class="checkout_d_span1">${selected_meal_obj.name ? selected_meal_obj.name : ''}</span>
                                    <span class="checkout_d_span1">₹${selected_meal_obj.amount ? selected_meal_obj.amount : ''}</span>
                                    <span class="checkout_d_span2">Brunch: One meal to rule them all! Grab this mega saver combo with your choice of 2 veg wraps, Aloo Paratha (2 pcs), chole and Curd lunchbox and 2 choco lava cakes. This is just bliss on a plate!</span>
                                </div>
                                <div class="col-4 checkout_d_insideR">
                                    <img class="checkout_d_insideR_img" src="./images/products/${meal}.jpg" alt="${meal}">
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="cart_container">
                                    <span class="cart_head">Cart</span>
                                    <span class="cart_company_name">form <span class="cart_highlight">FitMe</span></span>
                                    <div class="card_categ cert_padding">
                                    
                                    </div>
                                    <div class="cart_sub cert_padding">
                                        <div class="card_categ">
                                            <span class="cart_food_container">Brunch for 2 - Veg<span class="cart_food_amt"></span></span>
                                            <div class="cart_qty">
                                                <span class="cart_qty_container" onclick='ctrl_qty("deg", "${meal_categ}", "${meal}")'>-</span>
                                                <span class="cart_show_qty" id='show_checkout_qty'>1</span>
                                                <span class="cart_qty_container" onclick='ctrl_qty("inc", "${meal_categ}", "${meal}")'>+</span>
                                            </div>
                                        </div>
                                        <span class="cart_desc">₹${selected_meal_obj.amount ? selected_meal_obj.amount : ''}</span>
                                    </div>
                                    <div class="cart_sub cert_padding">
                                        <div class="card_categ cart_subtot">
                                            <span>Subtotal</span>
                                            <span>₹<span id='show_checkout_subtot'>${selected_meal_obj.amount ? selected_meal_obj.amount : ''}</span></span>
                                        </div>
                                        <span class="cart_desc">Extra charges may apply</span>
                                    </div>
                                    <button class="cart_btn" onclick='add_to_backet("${meal_categ}", "${meal}")'>
                                        <svg width="30px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#ffffffCCCCCC" stroke-width="0.096"/>
                                            <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14 2C14 1.44772 13.5523 1 13 1C12.4477 1 12 1.44772 12 2V8.58579L9.70711 6.29289C9.31658 5.90237 8.68342 5.90237 8.29289 6.29289C7.90237 6.68342 7.90237 7.31658 8.29289 7.70711L12.2929 11.7071C12.6834 12.0976 13.3166 12.0976 13.7071 11.7071L17.7071 7.70711C18.0976 7.31658 18.0976 6.68342 17.7071 6.29289C17.3166 5.90237 16.6834 5.90237 16.2929 6.29289L14 8.58579V2ZM1 3C1 2.44772 1.44772 2 2 2H2.47241C3.82526 2 5.01074 2.90547 5.3667 4.21065L5.78295 5.73688L7.7638 13H18.236L20.2152 5.73709C20.3604 5.20423 20.9101 4.88998 21.4429 5.03518C21.9758 5.18038 22.29 5.73006 22.1448 6.26291L20.1657 13.5258C19.9285 14.3962 19.1381 15 18.236 15H8V16C8 16.5523 8.44772 17 9 17H16.5H18C18.5523 17 19 17.4477 19 18C19 18.212 18.934 18.4086 18.8215 18.5704C18.9366 18.8578 19 19.1715 19 19.5C19 20.8807 17.8807 22 16.5 22C15.1193 22 14 20.8807 14 19.5C14 19.3288 14.0172 19.1616 14.05 19H10.95C10.9828 19.1616 11 19.3288 11 19.5C11 20.8807 9.88071 22 8.5 22C7.11929 22 6 20.8807 6 19.5C6 18.863 6.23824 18.2816 6.63048 17.8402C6.23533 17.3321 6 16.6935 6 16V14.1339L3.85342 6.26312L3.43717 4.73688C3.31852 4.30182 2.92336 4 2.47241 4H2C1.44772 4 1 3.55228 1 3ZM16 19.5C16 19.2239 16.2239 19 16.5 19C16.7761 19 17 19.2239 17 19.5C17 19.7761 16.7761 20 16.5 20C16.2239 20 16 19.7761 16 19.5ZM8 19.5C8 19.2239 8.22386 19 8.5 19C8.77614 19 9 19.2239 9 19.5C9 19.7761 8.77614 20 8.5 20C8.22386 20 8 19.7761 8 19.5Z" fill="#ffffff"/> </g>
                                        </svg>
                                        Add to Basket
                                    </button>
                                </div>
                            </div>
                        </div>`
    $("#checkout_div").html(checkout_div)
}

function ctrl_qty(mode, meal_categ, meal){
    var selected_meal_obj = jsonData && jsonData.dishes && jsonData.dishes[meal_categ] && jsonData.dishes[meal_categ][meal] ? jsonData.dishes[meal_categ][meal] : {};    
    var current_qty = $("#show_checkout_qty").text()

    if(mode == 'deg'){
        current_qty = parseInt(current_qty) - 1
    }else if(mode == 'inc'){
        current_qty = parseInt(current_qty) + 1
    }else{
        current_qty = current_qty
    }

    if(current_qty < 0){
        current_qty = 0
    }

    $("#show_checkout_qty").text(current_qty)
    var get_pro_amt = selected_meal_obj && selected_meal_obj['amount'] ? selected_meal_obj['amount'] : 0
    var get_offer = selected_meal_obj && selected_meal_obj['offer'] ? selected_meal_obj['offer'] : 0
    var show_subtot = 0
    if(parseInt(current_qty) %2 == 1){
        var count_meals = parseInt(current_qty) - 1
        show_subtot = ((parseInt(count_meals)/2) * parseFloat(get_offer)) + get_pro_amt
    }else{
        show_subtot = ((parseInt(current_qty)/2) * parseFloat(get_offer))
    }   
    $('#show_checkout_subtot').text(show_subtot)
}

function add_to_backet(meal_categ, meal){
    var current_qty = $("#show_checkout_qty").text()
    var current_amount = $('#show_checkout_subtot').text()
    if(!stored_data[meal_categ])
        stored_data[meal_categ] = {}
    if(!stored_data[meal_categ][meal])
        stored_data[meal_categ][meal] = {}

    stored_data[meal_categ][meal] = {
        qty : current_qty,
        amt : current_amount
    }

    show_notify('success', meal, `Food successfully added to the Basket`);
}

function show_notify(alert,title,text){
    Swal.fire({
        icon: alert,
        title: title,
        text: text,
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
    });
}

function show_cart(){
    div_functionality('show_cart')
    var show_cart_div = `<div class="show_cart_delivery">
                            <label class="span_heading_1 set_label_width">Delivery Information</label>
                            <div class="sc_container">
                                <div class="sc_grid">
                                    <div class="sc_group">
                                        <label class="sc_label" for="name">Name</label>
                                        <input class="sc_input" type="text" id="name" placeholder="Bryan Cranston" />
                                    </div>
                                    <div class="sc_group">
                                        <label class="sc_label" for="mobile">Mobile Number</label>
                                        <input class="sc_input" type="tel" id="mobile" placeholder="+1 424-236-3574" />
                                    </div>
                                    <div class="sc_group sc_group_full">
                                        <label class="sc_label" for="email">Email</label>
                                        <input class="sc_input" type="email" id="email" placeholder="thejon |" />
                                    </div>
                                    <div class="sc_group">
                                        <label class="sc_label" for="city">City</label>
                                        <input class="sc_input" type="text" id="city" placeholder="Hawthorne" disabled />
                                    </div>
                                    <div class="sc_group">
                                        <label class="sc_label" for="state">State</label>
                                        <input class="sc_input" type="text" id="state" placeholder="California" disabled />
                                    </div>
                                    <div class="sc_group">
                                        <label class="sc_label" for="zip">ZIP</label>
                                        <input class="sc_input" type="text" id="zip" placeholder="90250" />
                                    </div>
                                    <div class="sc_group">
                                        <label class="sc_label" for="state-abbr">State</label>
                                        <select class="sc_select" id="state-abbr">
                                            <option selected>CA</option>
                                            <option>NY</option>
                                            <option>TX</option>
                                            <option>FL</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sc_order_sum">
                            <label class="span_heading_1 set_label_width">Order Summary</label>
                            <div class="show_cart_main">
                                <div class="show_cart_left">
                                    <img src="" alt="" class='search_res_img'>
                                    <div class='search_con_r'>
                                        <span class='food_name'>demo</span>
                                        <span class='food_name_g'>demo</span>
                                        <div class='search_con_rate'>
                                            <span class='food_name'>
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.75"
                                                        d="M20.4194 1.58928C20.2343 1.40207 20.0138 1.25355 19.7708 1.15238C19.5278 1.05122 19.267 0.999418 19.0038 1H13.516C13.156 1.00068 12.8108 1.14328 12.5553 1.39687L1.58458 12.3654C1.21024 12.7405 1 13.2488 1 13.7787C1 14.3087 1.21024 14.817 1.58458 15.1921L6.80767 20.4152C7.18288 20.7897 7.69135 21 8.22147 21C8.7516 21 9.26007 20.7897 9.63528 20.4152L20.6015 9.45114C20.8556 9.19604 20.9987 8.85095 20.9997 8.49089V2.99996C21.0014 2.73809 20.9509 2.47851 20.8513 2.23633C20.7516 1.99414 20.6048 1.77419 20.4194 1.58928ZM16.7141 6.71415C16.4316 6.71415 16.1554 6.63037 15.9205 6.4734C15.6855 6.31643 15.5025 6.09332 15.3943 5.83229C15.2862 5.57126 15.2579 5.28403 15.313 5.00692C15.3682 4.72981 15.5042 4.47527 15.704 4.27549C15.9038 4.0757 16.1583 3.93965 16.4354 3.88453C16.7125 3.82941 16.9998 3.8577 17.2608 3.96582C17.5218 4.07394 17.7449 4.25704 17.9019 4.49196C18.0589 4.72688 18.1427 5.00308 18.1427 5.28561C18.1427 5.66449 17.9922 6.02784 17.7243 6.29574C17.4563 6.56364 17.093 6.71415 16.7141 6.71415Z"
                                                        stroke="#FC8019" stroke-width="1.5" />
                                                </svg>
                                                ₹000
                                            </span>
                                            <span class='food_name'>
                                                <svg width="22" height="20" viewBox="0 0 22 20" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.75">
                                                        <path
                                                            d="M8.90123 13.4567L11.8642 14.4444C11.8642 14.4444 19.2716 12.9629 20.2593 12.9629C21.2469 12.9629 21.2469 13.9505 20.2593 14.9382C19.2716 15.9259 15.8148 18.8888 12.8519 18.8888C9.88889 18.8888 7.91358 17.4073 5.93827 17.4073H1"
                                                            stroke="#FC8019" stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path
                                                            d="M1 11.4815C1.98765 10.4938 3.96296 9.01232 5.93827 9.01232C7.91358 9.01232 12.6049 10.9876 13.3457 11.9753C14.0864 12.9629 11.8642 14.4444 11.8642 14.4444M6.92593 6.04936V2.09874C6.92593 1.8368 7.02998 1.58558 7.2152 1.40036C7.40042 1.21514 7.65164 1.11108 7.91358 1.11108H19.7654C20.0274 1.11108 20.2786 1.21514 20.4638 1.40036C20.649 1.58558 20.7531 1.8368 20.7531 2.09874V9.99997"
                                                            stroke="#FC8019" stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path d="M11.3702 1.11108H16.3085V5.55553H11.3702V1.11108Z" stroke="#FC8019"
                                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </g>
                                                </svg>
                                                0 mins
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="show_cart_right">
                                    <div class="cart_qty cart_border">
                                        <span class="cart_qty_container">-</span>
                                        <span class="cart_show_qty" id='show_checkout_qty'>1</span>
                                        <span class="cart_qty_container">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>`
    $("#show_cart").html(show_cart_div)
}