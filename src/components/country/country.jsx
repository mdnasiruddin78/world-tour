import './country.css'

const country = ({max}) => {
    const {name,flags} = max;
    return (
        <div className="country">
            <h3>names: {name.common}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default country;