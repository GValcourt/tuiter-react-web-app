import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./posts.js"
const PostSummaryList = () => {
        const lineitems = [];
        for (let i=0; i<exploreItems.length; i++){
                lineitems.push(`<li>${PostSummaryItem(exploreItems[i])}</li>`)
        }
   return (`
           <ul class="wd-no-bullet-list">
           ${lineitems.join("")}
           <!-- continue here -->
           </ul>
`); }

        export default PostSummaryList;

$('#wd-test-list').append(PostSummaryList())