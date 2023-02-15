import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
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
        <figure class="wd-margin-fix-image">
            <img src="../../images/starship_center.jpg" alt="SpaceX's Starship" class="img-fluid"/>
            <figcaption class="wd-image-text my-0">
                <h2>SpaceX's Starship</h2>
            </figcaption>
        </figure>

    ${PostSummaryList()}
    `);
}
export default ExploreComponent;

$('#wd-test').append(ExploreComponent())