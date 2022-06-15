import useSalesStore from "../../store/SalesStore";
import { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

export function RetriveSales (){
    const fetch = useSalesStore(state => state.fetch)
    useEffect(() => { 
        fetch(urlSales)
      },[console.log("Retrieved Successfully")]);
}

export function getTotal(data){
    const total = data.reduce((accumulator, object) => {
        return accumulator + object.total_price;},0)
     return total.toFixed(2)
}

export function groupBy(array, property) {

    var hash = {};
    for (var i = 0; i < array.length; i++) {
        if (!hash[array[i][property]]) hash[array[i][property]] = [];
        hash[array[i][property]].push(array[i]);
    }
    return hash;
}


function getDistinct(arr, arr_property){
    var distinct = []
    distinct = arr.map(item => item[arr_property] ).filter((value, index, self) => self.indexOf(value) === index)
    return distinct
}

export function HighestSellingCity(data){
    const city = {}
    var cities = getDistinct(data,'city')



    return city;
}

export function HighestSellingCategory(data){
    const category = {}
    return category;
}

export function HighestSellingProduct(data){
    const product = {}
    return product;
}

export function SalesByCity(data){
   const sales = []

    return sales;
}   

export function SalesByCategorySales(data){
   const category = []

    return category;
}

export function SalesByProducts(data){
   const products =[]

    return products;
}

export function HighestEarnProduct(data){
   const products = {}

    return products;
}

export function HighestEarningCity(data){
   const city = {}

    return city;
}

export function HighestEarningCategory(data){
   const category = {}

    return category;
}

export function PieChart1(data){
    console.log(data)
    var o = groupBy(data,"category")

    console.log(o)
    const piedata = {
        labels: getDistinct(data, "category"),
        revenue: [
                getTotal(o.Bars),
                getTotal(o.Cookies),
                getTotal(o.Crackers),
                getTotal(o.Snacks)
        ]
        }
   return piedata;     
}

export function piedata(
    
)


    






export const urlSales = 'http://127.0.0.1:5000/PythonGraph/food_sales';


