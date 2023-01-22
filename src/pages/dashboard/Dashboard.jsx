import "./dashboard.css"
import Navbar from "../../components/navbar/Navbar"
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
    const navigate = useNavigate()
  const handaleclick = (e) => {
    e.preventDefault()
    const name = e.target.name.value 
    const price = e.target.price.value 
    const image = e.target.image.files[0];
    console.log(name, price, image)

    const formData = new FormData();
    formData.append("image", image);
    const url =
      "https://api.imgbb.com/1/upload?key=cfdf6b052709dd278427a89a5cbb7e1d";

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData);
        if (imageData.success) {
          const products = {
            
            name: name,
            price: price,
            image: imageData.data.url,
           
          };
          fetch(`https://uptech-server-takdirhossain.vercel.app/newcarservice`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(products),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.acknowledged) {
              
                navigate("/");
              }
            });
        }
      })

      .catch((error) => console.error(error.messge));

  };
  return (
    <div >
        <Navbar></Navbar>
     <div className="dashboard">
     <h2>Add A New Service</h2>
      <form onSubmit={handaleclick}>
      <label htmlFor="" className="servicesinfo">Service Name</label> <br />
       
        <input type="text" name="name" placeholder="Enter Service Name" /><br />
        <label htmlFor="" className="servicesinfo">Service Price</label> <br />
       
        <input type="text" name="price" placeholder="Enter Service Price" /><br />
        <label htmlFor="" className="servicesinfo">Service Image</label> <br />
       
        <input type="file" id="image" name="image" accept="image/*" /><br />
        <button  className="addservice" type="submit">
          Add Service
        </button>
      </form>
     </div>
    </div>
  );
};

export default Dashboard;
