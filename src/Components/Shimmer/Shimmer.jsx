import React from "react";
import { ShimmerPostList } from "react-shimmer-effects";

function HomePageShimmer() {
  return (
    <>
      <div className="row">
        <div className="d-flex gap-2">
          <div className="col-sm-12 col-md-12 col-xl-6 col-6 h-25">
            <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />
          </div>

          <div className="col-sm-12  col-md-12 col-xl-6 col-6 h-25">
            <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePageShimmer;
