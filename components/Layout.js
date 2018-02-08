import Header from '../components/Head'

const Layout = (props) => (
    <div>
        <Header />
        <div className="container">
            {props.children}
        </div>
    </div>
)

export default Layout