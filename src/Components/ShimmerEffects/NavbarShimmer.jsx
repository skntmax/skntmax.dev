"use client";
import React from "react";
import { ShimmerTitle } from "react-shimmer-effects";

class NavbarShimmer extends React.Component {
  render() {
    return <ShimmerTitle line={2} gap={10} variant="primary" />;
  }
}

export default NavbarShimmer;
