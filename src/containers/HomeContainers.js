import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart } from "../services/actions/action";

const mapStateToPropes = state => ({
    cardData: state.cardItems
})

const mapDispachToPropes = dispach => ({
    addToCartHandler: data => dispach(addToCart(data))
})

export default connect(mapStateToPropes, mapDispachToPropes)(Home);