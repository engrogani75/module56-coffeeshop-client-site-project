import logo from '../../../public/images/icons/1.png'


const Header = () => {
    return (
        <div className="flex justify-center items-center object-cover h-20" style={{ backgroundImage: 'url("images/more/15.jpg")' }}>
            <img src={logo} alt="coffee shop logo" />
            <h2 className="text-4xl ml-3 text-white">Espresso Emporium</h2>
        </div>
    );
};

export default Header;