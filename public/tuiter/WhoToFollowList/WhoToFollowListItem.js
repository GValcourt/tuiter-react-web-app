const WhoToFollowListItem = (who) => {
    //who is an array consisting of:
    //avatarIcon
    //userName
    //handle

    return(`
    <div class="row justify-content-center p-0">
        <div class="ms-3 p-2" style="width: fit-content">
            <img src="../../images/${who.avatarIcon}" alt="" class="wd-avatar-image float-left">
        </div>
        <div class="col text-left justify-content-center my-2 ms-0 me-0 px-0">
            <b>${who.userName}</b> <i class="fas fa-check-circle"></i>
            <br>
            @${who.handle}
        </div>
        <div class="float-right ps-0 py-3 pe-3" style="width: fit-content">
            <button class="btn btn-primary btn-block rounded-pill"> Follow</button>
            
        </div>
    </div>
        `);
   }
   export default WhoToFollowListItem;
const test = {
    avatarIcon: 'virgin.png',
    userName: 'Virgin Galactic',
    handle: 'virgingalactic',
}
  
$('#wd-test-item').append(WhoToFollowListItem(test))
//console.log(WhoToFollowListItem())