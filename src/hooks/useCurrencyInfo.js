import {useEffect, useState} from "react";

function useCurrencyInfo(currency){
    const apiKey="b042ceaa232ed33e815073b9"
    const[data, setData]= useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`)
        .then((res)=>res.json())
        .then((res) => {
            setData({
                base_code: res.base_code, // ✅ Base currency
                conversion_rates: res.conversion_rates // ✅ Exchange rates
            });
            console.log("Updated currency data:", res.base_code, res.conversion_rates);
        })
        .catch((error) => console.error("Error fetching exchange rates:", error));
    },
    [currency])
    console.log(data)
    return data

}

export default useCurrencyInfo;