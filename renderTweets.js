function renderTweets(tweets) {
    tweetHtml = tweets.map(renderTweet).join("");
    return `
        <div class="text-center mt-5">
            ${tweetHtml}
        </div>
    `
}


function renderTweet(tweet) {
    return `
       <img src ="${tweet.user.profilePic}https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg" height="42" width="42">
        ${tweet.user.handle}
        ${tweet.user.username}
        ${tweet.user.isverified == 'true'
         ? true : ''}
        <h4>${tweet.text}</h4>
        <hr/>
        <div>
        <img src="${tweet.likes}>${tweet.retweets}${tweet.replies}
        
        
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