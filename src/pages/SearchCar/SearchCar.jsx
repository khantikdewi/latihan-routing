import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchCar = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get("https://bootcamp-rent-car.herokuapp.com/admin/car")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }, []);
    console.log("data",data);

    return(
        <div>
            
                {data.map((item) => (
                    <div>
                        <img src={item.image}/>
                        <h1>{item.name}</h1>
                        <Link to={`/detail/${item.id}`}>
                            <button>Pilih Mobil</button>
                        </Link>
                    </div>
                ))}
            
            <h1>Ini SearchCar Page</h1>
        </div>
    );
};

export default SearchCar;