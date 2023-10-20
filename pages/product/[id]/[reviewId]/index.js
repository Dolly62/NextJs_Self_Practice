const { useRouter } = require("next/router");

function Review(){
    const router =  useRouter()
    const { id, reviewId } = router.query;

    return <h1>{reviewId} for product {id}</h1>
}

export default Review;