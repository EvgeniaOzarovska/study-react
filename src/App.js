//import logo from './logo.svg';
import './App.css';

const HeaderLogo =({url="https://img.icons8.com/plasticine/2x/homer-simpson.png"})=>
    <a className="logo" href={url}>
        <img className="logo_img" src="https://img.icons8.com/nolan/2x/puzzle.png" alt="logo"/>
    </a>

const NavMenuItem = ({url="#", children, className="list-link"}) =>
    <li style={{}}>
        <a href={url} class={`list-link ${className}`}>{children}</a>
    </li>

const UserNav = ({url="#", children, className = ""})=>
    <a href={url} class={`user-nav_link ${className}`}>{children}</a>

const Header =()=>
    <header className="header-block">
        <div className="container">
            <div className="header_inner">
                    <HeaderLogo/>
                <div className="header_menu">
                    <nav className="menu">
                        <ul className="menu_list">
                            <NavMenuItem>Product</NavMenuItem>
                            <NavMenuItem>Customers</NavMenuItem>
                            <NavMenuItem>Pricing</NavMenuItem>
                            <NavMenuItem>Resources</NavMenuItem>
                        </ul>
                    </nav>
                </div>
                <div className="user-nav">
                    <UserNav>Sign In</UserNav>
                    <UserNav>Sign Up</UserNav>
                </div>
            </div>
            </div>
    </header>


const FirstToolImg = ({url="https://img.icons8.com/doodle/2x/repository.png"}) =>
    <img src={url} alt="pic" className="tool_img" />

const ToolTitle = ({ children}) =>
    <h6 className="tool_title">{children}</h6>

const ToolText = ({children}) =>
    <p className="tool_text">{children}</p>

const Markup =() =>
    <div className="second_tools">
            <h2 className="second_title">We design tools to unveil your superpowers</h2>
            <div className="first_tool">
                <div className="blocks">
                    <FirstToolImg/>
                    <ToolTitle>First click tests</ToolTitle>
                    <ToolText>While most people enjoy casino gambling.</ToolText>
                </div>
                <div className="blocks">
                    <FirstToolImg/>
                    <ToolTitle>Design surveys</ToolTitle>
                    <ToolText>Sports betting, lottery and bingo playing for the fun.</ToolText>
                </div>
                <div className="blocks">
                    <FirstToolImg/>
                    <ToolTitle>Preference tests</ToolTitle>
                    <ToolText>The Myspace page defines the individual.</ToolText>
                </div>
                <div className="blocks">
                    <FirstToolImg/>
                    <ToolTitle>Five second tests</ToolTitle>
                    <ToolText>Personal choices and the overall personality of the person. </ToolText>
                </div>
            </div>
            </div>

        const App = () =>
        <div className="App">
            <Header/>
            <Markup />
        </div>


export default App;
