import PostItem from "./PostItem.js";


const posts = [
    {
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
        "content_image":"Inspiration4.avif",
    },
    {
        "userName": "New York Post",
        "handle": "@nypost",
        "time": "23h",
        "tuit_text": "Grimes seen reading Karl Marx following split with world's richest man Elon Musk <a href=https://nypost.com/2021/10/02/grimes-reads-karl-marx-after-split-with-worlds-richest-man-elon-musk/>trib.al/nx2Gfaq</a>",
        "avatar_image": "react.jpg",
        "comments":"4.2K",
        "retuits":"3.5K",
        "saves":"37.5K",
        "content_image":"grimes-marx.webp",
    }
]

const PostList = () => {
    return(`
    <div class="row">
        <!-- search field and cog -->
        <div class=" wd-border-radius-50 wd-search wd-border-1px-solid wd-no-text-wrap m-2" style="background-color:white">
            <i class="fas fa-search"></i>
            <form class="wd-search internal">
                <input class="form-control" type="search" placeholder="Search Tuiter">
            </form>
        </div>
        <a class="col m-2" href="explore-settings.html">
            <i class="fas fa-cog fa-2x"></i>
        </a>
    </div>
    <ul class="nav mb-2 nav-tabs">
        <li class="nav-item">
            <a class="nav-link active wd-no-text-wrap" href="for-you.html">For you</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wd-no-text-wrap" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wd-no-text-wrap" href="news.html">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wd-no-text-wrap" href="sports.html">Sports</a>
        </li>
        <li class="nav-item d-none d-sm-none d-md-block wd-no-text-wrap">
            <a class="nav-link" href="Entertainment">Entertainment</a>
        </li>
    </ul>
    ${PostItem(posts[0])}
    ${PostItem(posts[1])}
    `);
}
export default PostList;

$('#wd-test-list').append(PostList())