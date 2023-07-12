import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={192}
        height={270}
        viewBox="0 0 192 270"
        backgroundColor="#191919"
        foregroundColor="#212121"
    >
        <rect x="15" y="15" rx="5" ry="5" width="160" height="160" />
        <rect x="15" y="200" rx="5" ry="5" width="140" height="20" />
        <rect x="15" y="230" rx="5" ry="5" width="100" height="15" />
    </ContentLoader>
);

export default Skeleton;
