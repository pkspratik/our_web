// import {useEffect,useState} from "react";
// import axios from "axios";


// animation new look
import { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


export function WatherAPIdata(){

//   //const [category, setCategory] =useState([]);
//   const [product, setProduct]= useState([{id:0,category:'', title:'',discription:'',image:'',price:0,rating:{rate:0,count:0}}]);

//   //  function LoadCategory() {
//   //    axios.get(/*'https://fakestoreapi.com/products/categories'*/`https://api.jsonbin.io/v3/b/68f1a874d0ea881f40a737dd`)
//   //    .then(response=>{
//   //      // if you want to add any now elemrnt
//   //     response.data.unshift('all');
//   //     setCategory(response.data);
//   //    })
    
//   //    }

//      function LoadProduct(url) {
//       axios.get(url).then(response=>{
//         //setProduct(response.data);
//         setProduct(response.data.record);
//       })
//      }
   

   

//   useEffect(() =>{
//       //LoadCategory();
//      //LoadProduct('https://fakestoreapi.com/products');
//     LoadProduct(`https://api.jsonbin.io/v3/b/68f880e1ae596e708f235505`); // my api 
//   },[])


//   return (
//   <div 
//     className="d-flex flex-column"
//     style={{
//       width: "100vw",
//       height: "100vh",
//       overflow: "hidden",
//       backgroundColor: "transparent",
//     }}
//   >
//     <section className="mt-3 row flex-grow-1 overflow-hidden">
//       <main 
//         className="col-12 d-flex flex-wrap overflow-auto justify-content-center align-items-start p-3"
//         style={{
//           height: "100%",
//           backgroundColor: "transparent",
//         }}
//       >
//         {product.map((prod, i) => (
//           <div 
//             key={i} 
//             className="card p-3 m-3"
//             style={{
//               width: "280px", // ✅ increased width
//               backgroundColor: "rgba(255, 255, 255, 0.1)", // ✅ transparent white tint
//               boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)", // ✅ smooth shadow
//               backdropFilter: "blur(10px)", // ✅ glass effect
//               border: "1px solid rgba(255, 255, 255, 0.2)",
//               borderRadius: "15px",
//               color: "white", // ✅ makes text visible if background is dark
//             }}
//           >
//             <img 
//               src={prod.image} 
//               className="card-img-top rounded"
//               height="150px" 
//               style={{ objectFit: "contain" }}
//             />
//             <div className="card-header border-0 bg-transparent" style={{ height: "100px" }}>
//               <div>{prod.title}</div>
//             </div>
//             <div className="card-body">
//               <dl>Price</dl>
//               <dd>{prod.price}</dd>
//               <dl>Rating</dl>
//               <dd>
//                 <span className="badge bg-success p-1 rounded">
//                   {prod.rating.rate}
//                   <span className="bi bi-star-fill ms-1"></span>
//                   <span className="text-secondary fw-bold ms-2">{prod.rating.count}</span>
//                 </span>
//               </dd>
//             </div>
//             <div className="card-footer border-0 bg-transparent">
//               <button className="btn btn-warning bi bi-cart-dash w-100">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </main>
//     </section>
//   </div>
// );




//new look


const [product, setProduct] = useState([
    { id: 0, category: "", title: "", discription: "", image: "", price: 0, rating: { rate: 0, count: 0 } },
  ]);

  function LoadProduct(url) {
    axios.get(url).then((response) => {
      setProduct(response.data.record);
    });
  }

  useEffect(() => {
    LoadProduct(`https://api.jsonbin.io/v3/b/68f880e1ae596e708f235505`);
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <div
      className="d-flex flex-column"
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "transparent",
        // background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
      }}
    >
      <section className="mt-3 row flex-grow-1 overflow-hidden">
        <main
          className="col-12 d-flex flex-wrap overflow-auto justify-content-center align-items-start p-3"
          style={{
            height: "100%",
            backgroundColor: "transparent",
          }}
        >
          {product.map((prod, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="card p-3 m-3 text-center"
              style={{
                width: "260px",
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "18px",
                color: "white",
                transition: "transform 0.4s ease, box-shadow 0.4s ease, background-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 255, 100, 0.3)";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.4)";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)";
              }}
            >
              <img
                src={prod.image}
                className="card-img-top rounded"
                height="160px"
                style={{
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 8px rgba(255,255,255,0.2))",
                }}
                alt={prod.title}
              />
              <div className="card-header border-0 bg-transparent" style={{ height: "100px" }}>
                <h6 className="fw-bold text-light" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {prod.title.length > 50 ? prod.title.slice(0, 50) + "..." : prod.title}
                </h6>
              </div>
              <div className="card-body">
                <dl className="mb-1">💰 Price</dl>
                <dd className="mb-2 fw-semibold text-success">₹ {prod.price}</dd>
                <dl className="mb-1">⭐ Rating</dl>
                <dd>
                  <span className="badge bg-success p-2 rounded-pill">
                    {prod.rating.rate}
                    <span className="bi bi-star-fill ms-1"></span>
                    <span className="text-light fw-bold ms-2">{prod.rating.count}</span>
                  </span>
                </dd>
              </div>
              <div className="card-footer border-0 bg-transparent">
                <button className="btn btn-success fw-semibold bi bi-cart-plus w-100">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </main>
      </section>
    </div>
  );





}