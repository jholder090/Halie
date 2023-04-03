import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, selectAllProducts } from '../slices/allProductsSlice';
import { addToCart } from "../slices/visitorCartSlice";
import './allProducts.css'



const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const [isHover, setHover] = useState(false);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  // let buttons = document.getElementsByTagName('button')
  // for (let i = 0; i < buttons.length; i++) {
  //   buttons[i].onmouseover = function (event) {
  //     handleHover(event);
  //   }
  //   buttons[i].onmouseout = function (event) {
  //     handleHover(event);
  //   }
  // }
  // const handleHover = (event) => {
  //   setHover(!isHover);
  //   console.log(event)
  // }
  const handleButtonHover = (e) => {
    const product = products.filter((product) => {
      return product.id == e.target.id;
    });
    const hiddenDiv = document.querySelector(`.product${e.target.id}`);
    // hiddenDiv.style.backgroundColor = 'green';
    hiddenDiv.style.opacity = 1;
    // hiddenDiv.style.display = 'block';
    hiddenDiv.style.transform = 'translate(0, -8%)'
    hiddenDiv.style.pointerEvents = 'auto';
    // console.log("STYLE!", hiddenDiv.style)
  }

  const handleButtonLeave = (e) => {
    const hiddenDiv = document.querySelector(`.product${e.target.id}`);
    // hiddenDiv.style.backgroundColor = 'red';
    hiddenDiv.style.opacity = 0;
    // hiddenDiv.style.display = 'hidden'
    hiddenDiv.style.transform = 'translate(0, 100%)'
    hiddenDiv.style.pointerEvents = 'none';
  }

  return (
    <>

      {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src="https://i.postimg.cc/9Mw08wks/lotion.png" alt="Blah" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
        </div>
      </div> */}
      {/* ************************************************ */}
      <div className='allProducts h-full flex justify-center flex-wrap'>
        {products.map(product => {
          return (
            <div className='allProducts-productContainer max-w-sm h-100 flex-col bg-white border border-gray-200 m-4 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700' key={product.id}>
              <div className='allProducts-productImageUrl'>
                <a href="#">
                  <img className="rounded-t-lg" src="https://i.postimg.cc/9Mw08wks/lotion.png" alt="Blah" />
                </a>
              </div>
              <div className="p-5">
                <div className='allProducts-productName'>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                  </a>
                </div>
                <div className='allProducts-productDescription '>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                </div>
                <div className='allProducts-productPrice'>${product.price}
                </div>
              </div>
              <div className='allProducts-cartInteractions'>
                <>
                  {/* ............................... */}
                  <div id={product.id} onMouseEnter={(e) => handleButtonHover(e)} onMouseLeave={(e) => handleButtonLeave(e)} className={`allProducts-cartActions product${product.id} w-85 h-9 z-40 flex justify-between translate-y-full opacity-0 transition-all duration-500 ease-in-out text-black`}>
                    <div>HELLO!</div>
                    <button onClick={() => console.log("CLICKED!")}className="bg-blue-500 hover:bg-blue-700 text-white z-40 font-bold py-2 px-4 rounded pointer-events-none">
                      Button
                    </button>
                  </div>
                  <button id={product.id} onMouseEnter={(e) => handleButtonHover(e)} onMouseLeave={(e) => handleButtonLeave(e)} onClick={() => dispatch(addToCart(product))} href="#" className="allProducts-buyButton inline-flex items-center w-85 px-3 py-2 z-50 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Buy now
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" ><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </button>
                </>
              </div>
            </div>

          )
        })}
      </div>
      {/* *********************************************** */}
      {/* <div className='allProducts h-full flex justify-center flex-wrap'>
      {products.map(product => {
        return (
          <div className='allProducts-productContainer h-auto w-60 border-solid border-2 border-black mx-2 my-2 flex-col' key={product.id}>
            <div className='allProducts-productName border-solid border-2 border-black '>{product.name}</div>
            <div className='allProducts-productImageUrl border-solid border-2 border-black '>
              <img src={product.imageUrl} />
            </div>
            <div className='allProducts-productDescription h-20 overflow-hidden border-solid border-2 border-black '>{product.description}</div>
            <div className='allProducts-productPrice border-solid border-2 border-black '>${product.price}</div>
          </div>

        )
      })}
    </div> */}

    </>

  );
};

export default AllProducts;
