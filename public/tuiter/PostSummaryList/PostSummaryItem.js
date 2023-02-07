const PostSummaryItem = (post) => {
    //post is an array consisting of:
    //topic
    //userName
    //time
    //title
    //image

    return(`
    <div class="row justify-content-center wd-background-grey">
        <div class="col width-70 wd-text-color-white">
            <span class="wd-flavor-text">${post.topic}</span>
                <br>
                <b>${post.userName} </b><i class="fas fa-check-circle"></i><span class="wd-flavor-text"> - ${post.time}</span>
                <br>
                <b>${post.title}</b>
        </div>
            <img src="../../images/${post.image}" alt="" class="wd-article-image float-right m-3 p-0 text-center">
    </div>
        `);
   }
   export default PostSummaryItem;
const test = {
    "topic": "Web Development",
    "userName": "ReactJS",
    "time": "2h",
    "image": "react.jpg",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
}
$('#wd-test-item').append(PostSummaryItem(test))
//console.log(WhoToFollowListItem())