/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


//URL for blue border
const blueBorder = "https://media.discordapp.net/attachments/909369387063083038/1226844137463222302/image.png?ex=66263ea4&is=6613c9a4&hm=cc56c0c934a5fea07f40007237c65abc898543049e4c8085b25e25a2ff6c54d1&=&format=webp&quality=lossless&width=403&height=13";

// Array of song titles
let titles = [
    "Get You", "Best Part", "Hold Me Down", "Loose", "We Find Love", "Blessed", "Take Me Away", "Transform", "Freudian", "ENTROPY", "CYANIDE",
    "LOVE AGAIN","FRONTAL LOBE MUZIK", "OPEN UP", "RESTORE THE FEELING", "SUPERPOSITION", "TOO DEEP TO TURN BACK", "COMPLEXITIES", "ARE YOU OK?",
    "Ocho Ricos", "Valentina", "Toronto 2014", "Let Me Go", "Do You Like Me?", "Always", "Cool", "Disillusioned", "Buyer's Remorse", "Shot My Baby",
    "Pain is Inevitable", "Homiesexual", "Vince Van Gogh", "Superpowers", "Unstoppable"
];

//Array of song durations
let durations =[
    "4:38", "3:29", "3:51", "3:05",  "4:14", "4:01", "3:46", "4:40", "10:02", "4:21", "3:14", "3:34", "3:49",  "4:26", "3:34", "4:23",  "5:18", "3:50",
    "6:32", "2:33", "2:34", "4:37", "3:36", "3:47",  "3:45", "4:04", "4:01", "2:32",  "4:28",  "4:55", "3:50", "2:44",  "2:54", "4:07"
];

//Array of albums
let albums = [
    "Freudian", "Freudian", "Freudian", "Freudian", "Freudian", "Freudian", "Freudian", "Freudian", "Freudian", "Freudian", "Freudian",
    "Case Study 01", "Case Study 01", "Case Study 01", "Case Study 01", "Case Study 01", "Case Study 01", "Case Study 01", "Case Study 01", "Case Study 01", "Case Study 01",
    "NEVER ENOUGH", "NEVER ENOUGH", "NEVER ENOUGH", "NEVER ENOUGH", "NEVER ENOUGH", "NEVER ENOUGH", "NEVER ENOUGH", "NEVER ENOUGH", "NEVER ENOUGH", "NEVER ENOUGH",
    "NEVER ENOUGH", "NEVER ENOUGH", "NEVER ENOUGH", "NEVER ENOUGH", "NEVER ENOUGH"
];

//Array of number of streams
let streams = [
    "972,144,151", "1,291,728,989", "152,799,923", "40,952,338", "179,950,035", "141,244,505", "71,953,848", "49,774,027", "34,18,511",
    "41,546,614", "202,182,356", "95,564,536", "27,588,582", "33,324,546", "17,139,410", "62,350,807", "32,946,198", "16,302,193", "37,069,470",
    "20,769,836", "60,483,304", "25,467,533", "75,399,179", "71,531,074", "247,590,707", "16,506,172", "25,327,016", "14,023,649", "11,377,153",
    "10,843,130", "14,976,527", "8,890,997", "84,140,762", "11,761,021"
];

// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    //Loop that goes to next title, duration, stream, and album in the array
    for (let i = 0; i < titles.length; i++) {
        let title = titles[i];
        let duration = durations[i];
        let stream = streams[i];
        let album = albums[i];

        //Adds blue border to every card
        let imageURL = blueBorder;
        
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        nextCard.setAttribute("album", album); // Set the album attribute
        editCardContent(nextCard, title, imageURL, duration, stream, album); // Edit title, duration, album, and streams
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

//Function that changes the next's card title, duration, stream, and album
function editCardContent(card, newTitle, newImageURL, newDuration, newStream, newAlbum) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardDuration = card.querySelector(".card-duration");
    cardDuration.textContent = newDuration;

    const cardStream = card.querySelector(".card-stream")
    cardStream.textContent = newStream;

    const cardAlbum = card.querySelector(".card-album")
    cardAlbum.textContent = newAlbum;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    //Button that functions to remove the card if clicked on
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
        card.remove();
    });
    card.appendChild(removeButton);

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

//Function that outputs random lyric when user presses "Get Lyric" button
function quoteAlert() {
    console.log("Button Clicked!")

    var quotes = [
    "'If life is a movie, oh you're the best part' - Best Part",
    "'Lift your head to the sky' - Superpowers",
    "'I don't want things to change, I hope they stay the same, always' - Always",
    "'If you love me baby let me hear you say it, I know I'm your favorite' - Hold Me Down",
    "I can hear the bells ringin', remindin' us why, we're still here singin' it's for the time' - Toronto 2014"
    ]

    var randomIndex = Math.floor(Math.random() * quotes.length);
    alert(quotes[randomIndex]);
}

//Calls the function to change based off option chosen
document.getElementById("filterDropdown").addEventListener("change", filterByAlbum);

// Function for filter by album
function filterByAlbum() {
    const selectedAlbum = document.getElementById("filterDropdown").value;
    const cards = document.querySelectorAll(".card");
    
    cards.forEach(card => {
        const album = card.getAttribute("album");

        if ((selectedAlbum === "all" || album === selectedAlbum) && 
        (album === "Freudian" || album === "Case Study 01" || album === "NEVER ENOUGH")) {
                card.style.display = "block";
        } else {
                card.style.display = "none";
        }
    });
}


