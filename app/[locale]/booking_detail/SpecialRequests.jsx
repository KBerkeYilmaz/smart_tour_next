const SpecialRequest = () => {
  return (
    <div className="bg-white">
      <div>
        <h5 className="font-semibold py-4">Special Requests</h5>
      </div>
      <div className="py-4">
        <h6>
          If there is anything that we need to know about you or your
          co-travelers, such as allergies or physical limitations, please let us
          know and our team will do its best to address your needs. You can also
          make a special request after your booking is finalized!
        </h6>
      </div>
      <div>
        <input
          type="text-area"
          className="w-full h-[20rem] bg-[#f2f2f2]"
        />
      </div>
    </div>
  );
};

export default SpecialRequest;
