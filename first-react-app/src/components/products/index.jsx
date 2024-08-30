import ProductItem from "./components/productItem";

function ProductList({ listOfProduct }) {
    return (
        <div>
            <h3 className = ' bg-red-500 text-white p-4 rounded-xl font-bold mb-10 mt-10'>Ecommerce Project</h3>


            {/*<ul>
                {
                    dummyProductData.map((items,index)=>(
                        <li key={index}>{items}</li>
                    ))
                }
            </ul>*/}
            <ul>
                {
                    listOfProduct.map((items,index)=>(
                        <ProductItem singleProductItems={items} keyIndex={index} /> 
                    ))
                }
            </ul>
    
        </div>
    )
}

export default ProductList;