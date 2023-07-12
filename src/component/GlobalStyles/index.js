import "./GlobalStyle.scss";
import PropTypes from 'prop-types';

function GlobalStyle({ children }) {
    return children
}
GlobalStyle.prototype = {
    children: PropTypes.node.isRequired
}
export default GlobalStyle;