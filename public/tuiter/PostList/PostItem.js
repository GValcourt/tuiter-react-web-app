const PostItem = (post) => {

    const posthandle = (post) =>{
        if ((post.title === undefined) && (post.text === undefined) && (post.link === undefined)){
            return(`
            <div class="container my-2 p-0">
                    <img src="../../images/${post.content_image}" alt="" class="wd-content-image-no-text wd-border-1px-solid">
                </div>
            `)
        }
        else{
            return(`
            <div class="container my-2 p-0">
                    <img src="../../images/${post.content_image}" alt="" class="wd-content-image wd-border-1px-solid">
                    <div class="wd-border-1px-solid wd-border-bottom-rounded">
                        <p class="m-2">${post.title}</p>
                        <p class="wd-flavor-text m-2" style="font-size:1rem">${post.text}</p>
                        <p class="wd-flavor-text m-2"><i class="fas fa-link"></i> ${post.link}</p>
                    </div>
                </div>
            `)
        }
    }

    return(`
    <div class="container  justify-content-center wd-text-color-white wd-background-grey wd-border-1px-solid">
        <div class="row mt-2">
            <div class="col-1" style="min-width:fit-content">
            <img src="../../images/${post.avatar_image}" alt="" class="wd-avatar-image">
            </div>
            <div class=col>
                <b>${post.userName} </b>
                <i class="fas fa-check-circle"></i>
                <span class="wd-flavor-text"> ${post.handle} - ${post.time}</span>
                <br>
                ${post.tuit_text}
                ${posthandle(post)}
                <div class="container row wd-flavor-text text-center m-2">
                    <div class="col">
                    <i class="far fa-comment"></i>&emsp;${post.comments}
                    </div>
                    <div class="col">
                    <i class="fas fa-retweet"></i>&emsp;${post.retuits}
                    </div>
                    <div class="col">
                    <i class="fas fa-heart"></i>&emsp;${post.saves}
                    </div>
                    <div class="col">
                    <i class="fas fa-upload"></i>
                    </div>
                </div>
            </div>
            <div class="col-1 float-right wd-flavor-text">
            ...
            </div>
        </div>
    </div>
        `);
   }
   export default PostItem;
const test = {
    "userName": "Elon Musk",
    "handle": "@elonmusk",
    "time": "23h",
    "tuit_text": "Amazing show about <a href=#>@Inspiration4x</a> mission!",
    "avatar_image": "react.jpg",
    "comments":"4.2K",
    "retuits":"3.5K",
    "saves":"37.5K",
    "title":"Countdown: Inspiration4 Mission to Space | Netflix Official Site",
    "text":"From training to launch to landing, this all access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space &#8230",
    "link":"netflix.com",
    "content_image":"starship.jpg",
}
$('#wd-test-item').append(PostItem(test))
//console.log(WhoToFollowListItem())