import React from 'react';
import {Categories, SortPopup, PizzaBlock, PizzaLoading} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory,setSortBy} from "../redux/action/filter";
import {fetchPizzas} from "../redux/action/pizzas";

const categoryItems =  ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',];
const sortItems = [
    { name: 'популярности', type: 'rating', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавиту', type: 'name', order: 'asc' },
]

const Home = () => {
    const dispatch = useDispatch();
    const items  = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({filters}) => filters);

    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));
    }, [sortBy, category, dispatch]);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [dispatch]) // один раз зберігає нашу функці., щоб не було ререндера, силка на цю функцію завжди буде залишатись. Повертає ту функцію яку ми вказали

    const onSelectSortBy = React.useCallback((type) => {
        dispatch(setSortBy(type))
    }, [dispatch])

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory = {category} onClickCategory={onSelectCategory} items={categoryItems}/>
                <SortPopup items ={sortItems} activeSort ={sortBy.type} onClickSortBy={onSelectSortBy}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((pizzas) => {return(<PizzaBlock key ={pizzas.id} isLoading={true} {...pizzas}/>)})
                    : Array(12)
                        .fill(0)
                        .map((_, index) => (<PizzaLoading key ={index} />))}
            </div>
        </div>
    );
}

export default Home;
