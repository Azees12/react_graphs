import useSalesStore from "../../store/SalesStore";
import { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';



export function RetriveSales (){
    const fetch = useSalesStore(state => state.fetch)
    const setisLoading = useSalesStore(state => state.setisLoading)
    useEffect(() => { 
        fetch(urlSales)
        setTimeout(() => {
        setisLoading()
        }, 1000)
      },[]);
    
}

export function getTotal(data,prop){
    const total = data.reduce((accumulator, object) => {
        return accumulator + object[prop];},0)
     return parseFloat(total).toFixed(2)
}

function groupBy(arr, property) {
    return arr.reduce(function(memo, x) {
      if (!memo[x[property]]) { memo[x[property]] = []; }
      memo[x[property]].push(x);
      return memo;
    }, {});
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

export function ProductSales(data) {
   const products = groupBy(data,'product')
   const productSales = []
   Object.entries(products).map(item => {
    productSales.push({
        product:item[0],
        total_sales:getTotal(item[1],"total_price"),
        total_quantity: getTotal(item[1],"quantity"),
        price_average: (getTotal(item[1],"total_price")/getTotal(item[1],"quantity")).toFixed(2)
    })
  })
  console.log(productSales)
    return productSales;
}

export function HighestEarningCity(data){
   const city = {}

    return city;
}

export function HighestEarningCategory(data){
   const category = {}

    return category;
}

export function PieChart(data, prop){
    var o = groupBy(data,prop)
    const totals = []
    const hprop = prop.charAt(0).toUpperCase() + prop.slice(1);
    
    Object.entries(o).map(item => {
        totals.push(getTotal(item[1],"total_price"))
      })
    const piedata = {
        labels: getDistinct(data, prop),
        revenue: totals,
        header:"Sales By "+hprop
        }
    return piedata;   
}

export function TableData(data){
    let columns = Object.keys(data[0])
    let dataId = data.map((x, i) => {
        x.id = i + 1
        x.date = new Date(x.date)
        x.total_price =  parseFloat(x.total_price).toFixed(2)
        x.unit_price = parseFloat(x.unit_price).toFixed(2)
        return x})


    columns = columns.map((x) => {
        let b =  x.replace(/_/g," ")
        return b.charAt(0).toUpperCase() + b.slice(1);
    })
    const tabledata = {
        data:data,
        columns: [
              {field:"category", headerName: "Category",flex: 1},
              {field:"city", headerName: "City",flex: 1},
              {field:"date", headerName: "Date of Sale",flex: 1, type: 'dateTime',},
              {field:"product", headerName: "Product",flex: 1},
              {field:"region", headerName: "Region",flex: 1},
              {field:"total_price", headerName: "Total Price",flex: 1},
              {field:"unit_price", headerName: "Unit Price",flex: 1}
        ]
          
    }
    return tabledata
}

export function lineData(data){
    data = groupBy(data,"product")
    return data
}





    






export const urlSales = 'http://127.0.0.1:5000/PythonGraph/food_sales';


