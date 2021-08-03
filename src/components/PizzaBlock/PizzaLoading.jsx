import React from 'react';
import ContentLoader from "react-content-loader";

const PizzaLoading = () => {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={400}
            viewBox="0 0 280 400"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="212" rx="3" ry="3" width="222" height="20" />
            <rect x="0" y="248" rx="3" ry="3" width="222" height="71" />
            <rect x="0" y="332" rx="7" ry="7" width="70" height="29" />
            <rect x="123" y="330" rx="10" ry="10" width="100" height="29" />
            <circle cx="107" cy="99" r="96" />
        </ContentLoader>
    )
}


export default PizzaLoading;