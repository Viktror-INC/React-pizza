import React from 'react';
import propTypes from "prop-types";

const SortPopup = React.memo(function SortPopup({ items, activeSort, onClickSortBy }) {

    const [visibleList, setVisibleList] = React.useState(false);

    const sortUrl = React.useRef();
    const activeNameList = items.find((obj) => obj.type === activeSort).name;
    const toogleVisibleList = () => {
        setVisibleList(!visibleList);
    };

    const clickOutside = (e) => {
        if (!e.path.includes(sortUrl.current)) {
            setVisibleList(false);
            // console.log('false');
        }
    };

    const onYourClick = (index) => {
        if(onClickSortBy) {
            onClickSortBy(index);
        }
        setVisibleList(false);
    }

    React.useEffect (() => {
       document.querySelector("body").addEventListener('click', clickOutside);
        // console.log(sortUrl.current);
    },[])

    return (
        <div ref={sortUrl} className="sort">
            <div className="sort__label">
                <svg className={visibleList === false ? 'rotated' : ''}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={toogleVisibleList}>{activeNameList}</span>
            </div>
            {visibleList && (
            <div className="sort__popup">
                <ul>
                    {items &&
                        items.map((objItems, index) => (
                        <li
                            onClick={() => {onYourClick(objItems)}}
                            className={activeSort === objItems.type ? 'active' : ''}
                            key={`${objItems.type}_${index}`}>
                            {objItems.name}
                        </li>
                    ))}
                </ul>
            </div>
            )}
        </div>
    );
})

SortPopup.propTypes = {
    activeSort      : propTypes.string.isRequired,
    items           : propTypes.arrayOf(propTypes.object).isRequired,
    onClickSortBy   : propTypes.func.isRequired
};

SortPopup.defaultProps = {
    items: [],
};

export default SortPopup;