function renderTweets(tweets) {
    tweetHtml = tweets.map(renderTweet).join("");
    return `
        <div>
            ${tweetHtml}
        </div>
    `
}

function renderTweet(tweet) {
    likeImage = '<img src="cards/chatIcon.jpg" height="20" width="20">';
    tweetImage = '<img src="cards/Retweet.png" height="20" width="20">';
    likeImage = '<img src="cards/like.png" height="20" width="20">';
    mailImage = '<img src="cards/mail.jpg" height="20" width="20">';
    verifiedImage = '<img src="cards/verified.png" height="20" width="20" >'
    return `
    <div>
       <img src="${tweet.user.profilePic}https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg" height="42" width="42">
       <h4>${tweet.user.username} <span>${tweet.user.isVerified ? verifiedImage : ''}</span></h4>
       ${tweet.user.handle}
        </div>
        <h4>${tweet.text}</h4>
        <hr/>
        <div>
        <span>${likeImage}${tweet.likes}</span>
        <span>${tweetImage}${tweet.retweets}</span>
        <span>${likeImage}${tweet.replies}</span>
        <span>${mailImage}</span>
            </div>
            </div>`
}

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [{
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}