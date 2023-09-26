import React, { useState } from 'react';
import "./Meals.css";
import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';
import Dinner from '../Dinner/Dinner';

const Meals = () => {

    const [breakfast, setBreakfast] = useState(true);
    const [lunch, setLunch] = useState(false);
    const [dinner, setDinner] = useState(false);

    const handleMeals = (seletor) => {
        if (seletor === "b") {
            setBreakfast(true);
            setLunch(false);
            setDinner(false);
        }
        if (seletor === "l") {
            setBreakfast(false);
            setLunch(true);
            setDinner(false);
        }
        if (seletor === "d") {
            setBreakfast(false);
            setLunch(false);
            setDinner(true);
        }
    };

    return (


        <section>
            meals
            <div id="meals-nav">
                <button onClick={() => handleMeals("b")} className='text-red-600 font-semibold p-3 m-5' type="submit">Breakfast</button>
                <button onClick={() => handleMeals("l")} className='text-red-600 font-semibold p-3 m-5' type="submit">Lunch</button>
                <button onClick={() => handleMeals("d")} className='text-red-600 font-semibold p-3 m-5' type="submit">Dinner</button>
            </div>
            <div id="meals-main">
                {
                    breakfast && <Breakfast></Breakfast>
                }
                {
                    lunch && <Lunch></Lunch>
                }
                {
                    dinner && <Dinner></Dinner>
                }

            </div>
        </section>
    );
};

export default Meals;