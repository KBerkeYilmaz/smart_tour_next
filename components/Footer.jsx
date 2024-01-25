const Footer = () => {
  return (
    <footer>
      <section className="bg-[#200E3A] w-screen justify-start items-stretch desktop:px-[13.875rem] desktop:py-[5rem] desktop:flex hidden">
        <div className="flex flex-col gap-[19px] text-white desktop:w-1/4 px-[1rem]">
          <h5 className="font-poppins text-[1.5rem] font-semibold">About Us</h5>
          <article>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </article>
          <article>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </article>
          <div className="flex gap-8">
            <img
              src="public/facebook-f-logo.svg"
              alt=""
            />
            <img
              src="public/twitter-logo.svg"
              alt=""
            />
            <img
              src="public/linkedin-logo.svg"
              alt=""
            />
            <img
              src="public/instagram-logo.svg"
              alt=""
            />
          </div>
        </div>

        <div className=" flex-col gap-[19px] text-white desktop:flex hidden desktop:w-1/4 px-[1rem]">
          <h5 className="font-poppins text-[1.5rem] font-semibold">
            Quick Links
          </h5>
          <ul className="flex flex-col gap-[5px] font-roboto">
            <li>- Home</li>
            <li>- Packages</li>
            <li>- Tours</li>
            <li>- Shore Excursiones</li>
            <li>- Transfer</li>
            <li>- Blog</li>
            <li>- Contact Us</li>
          </ul>
        </div>

        <div className=" flex-col gap-[19px] text-white desktop:flex hidden desktop:w-1/4 px-[1rem]">
          <h5 className="font-poppins text-[1.5rem] font-semibold">
            Instagram
          </h5>
          <ul className="grid grid-rows-3 grid-cols-3">
            <img
              src="blog-preview.png"
              alt=""
            />
            <img
              src="blog-preview.png"
              alt=""
            />
            <img
              src="blog-preview.png"
              alt=""
            />
            <img
              src="blog-preview.png"
              alt=""
            />
            <img
              src="blog-preview.png"
              alt=""
            />
            <img
              src="blog-preview.png"
              alt=""
            />
            <img
              src="blog-preview.png"
              alt=""
            />
            <img
              src="blog-preview.png"
              alt=""
            />
            <img
              src="blog-preview.png"
              alt=""
            />
          </ul>
        </div>

        <form className="flex flex-col gap-[19px] text-white desktop:w-1/4 px-[1rem]">
          {" "}
          <h5 className="font-poppins text-[1.5rem] font-semibold">
            Newsletter
          </h5>
          <article>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </article>
          <input type="text" />
          <button>Subscribe</button>{" "}
        </form>
      </section>

      <section className="bg-[#200E3A] w-screen flex flex-col justify-center items-center desktop:hidden text-white gap-[35px] pb-[35px] ">
        <div className="flex w-full justify-center items-center font-poppins font-semibold py-[20px] text-[15px] gap-4">
          <h6 role="button">About Us</h6>
          <h6 role="button">Contact</h6>
          <button className="px-4 py-2 text-[12] font-normal border-1 border-primary rounded-[4px]">
            Subscribe
          </button>
        </div>
        <span className="text-white font-roboto text-center w-full">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...
        </span>
        <div className="flex gap-4 justify-center items-center w-full">
          <img
            src="public/facebook-f-logo.svg"
            alt=""
            className="border-2 border-white rounded-full px-[9px] py-[7px]"
          />
          <img
            src="public/twitter-logo.svg"
            alt=""
            className="border-2 border-white rounded-full px-[9px] py-[7px]"
          />
          <img
            src="public/linkedin-logo.svg"
            alt=""
            className="border-2 border-white rounded-full px-[9px] py-[7px]"
          />
          <img
            src="public/instagram-logo.svg"
            alt=""
            className="border-2 border-white rounded-full px-[9px] py-[7px]"
          />
        </div>
      </section>

      <div className="w-screen bg-[#38419D] mobile:h-[35px] desktop:h-[57px] flex justify-center items-center py-2">
        <span className="text-white font-roboto shrink text-[8px] tablet:text-lg">
          © Website - 2024 | All Right Reserved. Designed By Medusa Global
        </span>
      </div>
    </footer>
  );
};

export default Footer;
