import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

const CarDetail = () => {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios
        .get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }, []);
    console.log("data",data);

    return(
        <div>
            <Link to="/">
                <h1>logo</h1>
            </Link>
            <div>
                <img src={data.image}/>
                <h1>{data.name}</h1>
            </div>
        </div>
    );
};

export default CarDetail;