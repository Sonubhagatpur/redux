const Home = (propes) => {

    console.log(propes, 'propes')

    return (
        <div>
            <div>
                <h1>Home</h1>
                <img src="https://fastly.picsum.photos/id/996/200/300.jpg?hmac=vjpTROwvLRamauR7RHTF21dxsN351pnM44SxoByue5c" />
            </div>
            <div>
                <button onClick={() => { propes.addToCartHandler({ price: 1000, name: "Sapna" }) }}>Add Cart</button>
            </div>
        </div>
    )
}

export default Home;