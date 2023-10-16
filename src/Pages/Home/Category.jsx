import icon1 from '../../../public/images/icons/1.png'
import icon2 from '../../../public/images/icons/2.png'
import icon3 from '../../../public/images/icons/3.png'
import icon4 from '../../../public/images/icons/4.png'

const Category = () => {
    return (
      <div className='grid grid-cols-4 bg-[#ECEAE3]'>
        <div className="card  shadow-xl">
          <figure className="px-10 pt-10">
            <img src={icon1} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Awesome Aroma!</h2>
            <p>
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
        </div>

        <div className="card  shadow-xl">
          <figure className="px-10 pt-10">
            <img src={icon2} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Awesome Aroma!</h2>
            <p>
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
        </div>

        <div className="card  shadow-xl">
          <figure className="px-10 pt-10">
            <img src={icon3} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Awesome Aroma!</h2>
            <p>
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
        </div>

        <div className="card shadow-xl">
          <figure className="px-10 pt-10">
            <img src={icon4} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Awesome Aroma!</h2>
            <p>
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
        </div>

      </div>
    );
};

export default Category;