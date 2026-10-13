import { Link } from "react-router-dom";

const Header = ({isLoggedIn, onLogout, username}) => {

    return(
        <div className="header">
            <Link to='/'>Home</Link>
            <Link to='/products'>상품 목록</Link>
            <Link to='/add-product'>상품 등록</Link>
            {isLoggedIn ? (
                <div className="header-user">
                    <span>{username}님</span>
                <button
                    className="logout-btn"
                    onClick={() => {onLogout(); navigate('/')}}
                >
                    로그아웃
                </button>
                </div>
            ) : (
             <Link to='/signin'>로그인</Link>
            )}
        </div>
    )
}

export default Header;