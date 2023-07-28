import Image from "next/image";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-ppc-cream">
      <div className="flex flex-col max-w-2xl m-4 dt:flex-row">
        <Image
          src={
            process.env.NODE_ENV === "production"
              ? "/frontend-mentor-challenges/product-preview-card-component/image-product-desktop.jpg"
              : "/product-preview-card-component/image-product-desktop.jpg"
          }
          alt="desktop product image"
          width={500}
          height={500}
          className="hidden object-contain rounded-l-xl dt:block"
        />
        <Image
          src={
            process.env.NODE_ENV === "production"
              ? "/frontend-mentor-challenges/product-preview-card-component/image-product-mobile.jpg"
              : "/product-preview-card-component/image-product-mobile.jpg"
          }
          alt="mobile product image"
          width={1000}
          height={250}
          className="block object-contain dt:hidden rounded-t-3xl"
        />
        <div className="w-full bg-white rounded-b-3xl shadow-xl dt:max-w-[20rem] dt:rounded-r-xl dt:rounded-bl-none dt:shadow-none">
          <div className="flex flex-col justify-between h-full px-8 py-6 space-y-4 dt:py-10">
            <p className="text-dark-grayish-blue font-montserrat text-xs tracking-[0.4rem] uppercase">
              perfume
            </p>
            <p className="text-3xl font-fraunces text-ppc-very-dark-blue dt:text-4xl">
              Gabrielle Essence Eau De Parfum
            </p>
            <p className="text-sm text-ppc-dark-grayish-blue font-montserrat">
              A floral, solar and voluptuous interpretation composed by Oliver
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="flex items-center space-x-5">
              <p className="text-3xl font-fraunces text-ppc-dark-cyan dt:text-4xl">
                $149.99
              </p>
              <p className="line-through font-montserrat text-ppc-dark-grayish-blue">
                $169.99
              </p>
            </div>
            <button className="flex items-center justify-center w-full py-4 space-x-3 font-bold text-white bg-ppc-dark-cyan rounded-xl font-montserrat focus:outline-none hover:bg-ppc-dark-cyan-dark">
              <Image
                src={
                  process.env.NODE_ENV === "production"
                    ? "/frontend-mentor-challenges/product-preview-card-component/icon-cart.svg"
                    : "/product-preview-card-component/icon-cart.svg"
                }
                alt="cart icon"
                width={50}
                height={50}
              />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
