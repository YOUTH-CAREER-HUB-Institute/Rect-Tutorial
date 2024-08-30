function ButtonComponent(){
    return(
        <button className = 'bg-orange-400 p-5 rounded-md font-bold text-white mb-3'>Click</button>
    )
}

function ProductItem({singleProductItems,keyIndex}){
    return(
        <div key={keyIndex}>
            {/*static data*/}
            <p>{singleProductItems}</p>
            <ButtonComponent/>
        </div>
    )
}

export default ProductItem;