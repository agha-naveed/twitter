    let link = document.querySelector('.info-third > a')
    link.setAttribute('href', `http://${link.innerHTML}`)

    let repostBtn = document.querySelector('.repost')
    let repostOverlay = document.querySelector('.repost-btn-overlay')
    repostBtn.addEventListener('click', () => {
        repostOverlay.style.display = 'block';
    })
    

    let shareBtn = document.querySelector('.share');
    let shareOverlay = document.querySelector('.share-btn-overlay');
    shareBtn.addEventListener('click', () => {
        shareOverlay.style.display = 'block';
    })

    
    // Bookmarks
    let bookmark = document.querySelector('.bookmark-div-icon');
    let bookmarkBtn = document.getElementById('bookmark-blue-icn');
    let bookmarkNotification = document.querySelector('.added-notification');
    var bookmarkCount = 0;
    bookmark.addEventListener('click', () => {
        bookmarkCount++;
        let notificationTexts = document.querySelector('.added-notification > .texts');
        let removeNotification = document.querySelector('.added-notification > .texts > p');
        let removeNotificationLink = document.querySelector('.added-notification > .texts > a');

        bookmarkNotification.style.display = 'flex';
        bookmarkBtn.style.display = 'block';
        
        removeNotification.innerHTML = 'Added to your Bookmarks'

        removeNotificationLink.style.display = 'block'
        setTimeout( () => {
            bookmarkNotification.style.display = 'none'; 
        },
        5000)
    })

    bookmarkBtn.addEventListener('click', () => {
        let notificationTexts = document.querySelector('.added-notification > .texts');
        let removeNotification = document.querySelector('.added-notification > .texts > p');
        let removeNotificationLink = document.querySelector('.added-notification > .texts > a');

        bookmarkNotification.style.display = 'flex';
        bookmarkBtn.style.display = 'block';
            notificationTexts.style.placeContent = 'center'
            removeNotification.innerHTML = 'Remove from your Bookmarks'
            removeNotificationLink.style.display = 'none';
            
            bookmarkBtn.style.display = 'none';
            bookmarkCount = 0;
    })

document.getElementById('caption-p').onclick = (e) => e.stopPropagation()


// Likes Heart
let likesCount = document.querySelector('.follow-count > p')
let likeBtn = document.getElementsByClassName('likes')[0];

likesCount.style.display = 'none';

    likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('likes-button-active')
    likeBtn.classList.toggle('likes-button-hover')

    if(likeBtn.classList.contains('likes-button-active')) {
        likesCount.style.display = 'block';
    }
    else {
        likesCount.style.display = 'none';
    }
})


let username = document.querySelector('.info > .info-name > p');
let moreBtn = document.querySelector('.more-btn');
let moreBtnOverlay = document.querySelector('.more-btn .more-btn-overlay');
let moreBtnUsername = document.querySelector('.more-btn-overlay > .add-or-remove > p > span');
let postUsername = document.querySelector('.user-grid-part > .username > p');
postUsername.innerHTML = username.innerHTML;
moreBtnUsername.innerHTML = username.innerHTML;


let popupNotifications = document.querySelector('.pop-up-notifications')
let deleteNotification = document.querySelector('.delete-confirmation');
let deleteBtn = document.querySelector('.delete-btn');
let notificationBg = document.querySelector('.notification-bg');

let cancelBtn = document.querySelector('#cancel-notification');
let deletePost = document.querySelector('#delete-post');
let postSection = document.querySelector('.posts-section');
let whoToFollow = document.querySelector('.who-to-follow');


moreBtn.addEventListener('click', () => {
    moreBtnOverlay.style.display = 'block';
})

deleteBtn.addEventListener('click', () => {
        moreBtnOverlay.style.display = 'none';

        popupNotifications.style.display = "block";
        deleteNotification.style.display = "block";
        notificationBg.style.display = "block";
});

deletePost.onclick = () => {
    postSection.remove();
    notificationBg.style.display = "none";

}
cancelBtn.onclick = () => {
    moreBtnOverlay.style.display = 'none';
    popupNotifications.style.display = 'none';
    notificationBg.style.display = 'none';
}



let searchBar = document.querySelector('.search')
let searchIcn = document.querySelector('.search > svg')
searchBar.addEventListener("click", function() {
    searchIcn.style.fill = '#1D9BF0';
})




let postButton = document.querySelector('#post-section')
let postButtonActive = document.querySelector('#post-section > div');

let repliesButton = document.querySelector('#replies-section')
let repliesButtonActive = document.querySelector('#replies-section > div');

let highlightButton = document.querySelector('#highlight-section')
let highlightButtonActive = document.querySelector('#highlight-section > div');

let mediaButton = document.querySelector('#media-section')  
let mediaButtonActive = document.querySelector('#media-section > div');

let likesButton = document.querySelector('#likes-section')
let likesButtonActive = document.querySelector('#likes-section > div');

var highlightSection = document.querySelector('.posts-section-highlight');


highlightSection.style.display = 'none';

highlightButton.addEventListener('click', (evt) => {
    evt.preventDefault();

    postButtonActive.classList.remove('active-button')
    repliesButtonActive.classList.remove('active-button')

    highlightButtonActive.classList.add('active-button');
    mediaButtonActive.classList.remove('active-button');
    likesButtonActive.classList.remove('active-button');
    
    postSection.style.display = 'none';
    whoToFollow.style.display = 'none';
    
    highlightSection.style.display = 'block';
})

postButton.addEventListener('click', (evt) => {
    evt.preventDefault();

    postButtonActive.classList.add('active-button')
    repliesButtonActive.classList.remove('active-button')

    highlightButtonActive.classList.remove('active-button');
    mediaButtonActive.classList.remove('active-button');
    likesButtonActive.classList.remove('active-button');
    
    // <----- Post Section
    postSection.style.display = 'block';
    whoToFollow.style.display = 'block';
    // ----->

    highlightSection.style.display = 'none';
})


// Stop Bubbling
document.querySelector('.post-caption').onclick = (e) => e.stopPropagation()
document.querySelector('.user-info').onclick = (e) => e.stopPropagation()
document.querySelector('.reactions').onclick = (e) => e.stopPropagation()



let postView = document.querySelector('.post-view');
postView.onclick = () => {
    window.open('./postt.html')
    // window.location.href('./postt.html')
}



let modalBox = document.querySelector('.modal');
let modalBody = document.querySelector('.modal-body');
let closeBtn = document.querySelector('.close-btn');


let tweetBtn = document.querySelectorAll('.post-btn')
tweetBtn.forEach( elem => {
    elem.addEventListener('click', () => {
        modalBox.style.display = 'grid';
    })
})

closeBtn.onclick = () => {
    modalBox.style.display = 'none';
}

let postMedia = document.querySelector('.post-browse-pic > img')
let mediaInput = document.querySelector('#file')
let crossBtn = document.getElementById('cross-icn');

mediaInput.onchange = () => {
    postMedia.src = URL.createObjectURL(mediaInput.files[0])
    console.log(postMedia.src)

    if(postMedia.src)
        crossBtn.style.display = 'inline'

    else
        crossBtn.style.display = 'none'
}
crossBtn.onclick = () => {
    console.log(postMedia.src)
    
    postMedia.src = '#'
    console.log(postMedia.src)
    
    crossBtn.style.display = 'none'
}

//  ------- For Closing Div -------
document.addEventListener('keydown', (evt) => {
    if(evt.code == 'Escape') {
        repostOverlay.style.display = 'none';
        shareOverlay.style.display = 'none';
        moreBtnOverlay.style.display = 'none';
        popupNotifications.style.display = 'none';
        notificationBg.style.display = 'none';
        modalBox.style.display = 'none';
    }
})



document.addEventListener('click', (event) => {
        if(!repostBtn.contains(event.target)) 
            repostOverlay.style.display = 'none'; 
        
        if(!shareBtn.contains(event.target))
            shareOverlay.style.display = 'none'

        if(!searchBar.contains(event.target))
            searchIcn.style.fill = 'rgba(83,100,113,1.00)';
    })

