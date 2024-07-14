// Back Button

let backArrow = document.querySelector('.name-bar-arrow')
backArrow.onclick = () => history.back();


let txtArea = document.getElementById('txt-area')
let para = document.querySelector('.reply-text > p')
let txtUsername = document.querySelector('.reply-options-content')
let replyDp = document.querySelector('.reply-dp').style
let txtAreaDiv = document.querySelector('.reply-input').style
let replyBtn = document.querySelector('.reply-btn > a')
txtArea.style.height = '26px'
replyDp.paddingTop = '14px'
txtAreaDiv.padding = '20px 0 20px 0';

txtAreaP = para.style
txtAreaUserName = txtUsername.style
txtAreaP.display = 'none' 
txtAreaUserName.display = 'none'

txtArea.addEventListener('click', () => {
    txtArea.style.height = 'auto'
    replyDp.paddingTop = '26px'
    txtAreaDiv.margin = '16px 0 25px 0'
    txtAreaDiv.padding = '0'
    txtAreaP.display = 'block'
    txtAreaP.marginBottom = '6px'
    txtAreaUserName.display = 'flex'
})

let repostBtn = document.getElementById('repost-button')
let repostOption = document.getElementById('repost-option-list')   

repostBtn.addEventListener('click', () => {
    repostOption.style.display = 'block';
})


let shareBtn = document.querySelector('.share-button');
let shareOption = document.querySelector('.share-option-list');


shareBtn.addEventListener('click', () => {
    shareOption.style.display = 'grid';
})


// Bookmark Button
let bookmark = document.querySelector('.bookmark-button');
let bookmarkBtn = document.querySelector('.bookmark-overlay-btn');
let bookmarkNotification = document.querySelector('.bookmark-notification');

var bookmarkCount = 0;
bookmark.addEventListener('click', () => {
    bookmarkCount++;
    let removeNotification = document.querySelector('.bookmark-notification > p');

    bookmarkNotification.style.display = 'flex';
    bookmarkBtn.style.display = 'block';
    if(bookmarkCount == 1) {
        removeNotification.innerHTML = 'Added to your Bookmarks'

        document.querySelector('#bookmarkViewBtn').style.display = 'block'
        setTimeout( () => {
            bookmarkNotification.style.display = 'none'; 
        },
        5000)
    }

    else if(bookmarkCount == 2) {
        removeNotification.innerHTML = 'Remove from your Bookmarks'
        document.querySelector('#bookmarkViewBtn').style.display = 'none'
        bookmarkBtn.style.display = 'none';
        bookmarkCount = 0;
    }
})

// Heart Icon
let likesCount = document.querySelector('.follow-count > p')
let likeBtn = document.getElementsByClassName('like-button')[0];

likesCount.style.display = 'none';

likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('like-button-active')
    likeBtn.classList.toggle('like-button-hover')
    if(likeBtn.classList.contains('like-button-active')) {
        likesCount.style.display = 'block';
    }
    else {
        likesCount.style.display = 'none';
    }
})

let searchBar = document.querySelector('.search')
let searchIcn = document.querySelector('.search > svg')
searchBar.addEventListener("click", function() {
    searchIcn.style.fill = '#1D9BF0';
})


tweetBtn = document.querySelector('.post-btn');
modalBox = document.querySelector('.modal');
modalBody = document.querySelector('.modal-body');

tweetBtn.addEventListener('click', () => {
    modalBox.style.display = 'grid';
})


// --------- For Closing Div -----------

document.addEventListener('keydown', (e) => {
    if(e.key === "Escape") {
        repostOption.style.display = 'none';
        shareOption.style.display = 'none';
        modalBox.style.display = 'none';
    }
})

document.addEventListener('click', (event) => {
    if(!repostBtn.contains(event.target)) 
        repostOption.style.display = 'none'; 
    
    if(!shareBtn.contains(event.target))
        shareOption.style.display = 'none'

    if(!searchBar.contains(event.target))
        searchIcn.style.fill = 'rgba(83,100,113,1.00)';
})