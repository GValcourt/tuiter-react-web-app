import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
        const lineitems = [];
        for (let i=0; i<who.length; i++){
                lineitems.push(`<li>${WhoToFollowListItem(who[i])}</li>`)
        }
   return (`
        <div class="wd-background-grey list-group-line-item p-1">
           <ul class="wd-no-bullet-list wd-text-color-white wd-no-text-wrap">
                <li class="row justify-content-center px-0 mx-0"><b>Who to Follow</b></li>
                ${lineitems.join("")}
           </ul>
        </div>
`); }

        export default WhoToFollowList;

$('#wd-test-list').append(WhoToFollowList())