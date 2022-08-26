function OverseasButtons({ favArray, setFavArray, country, temp, overseasW }) {
  const handleRemove = () => {
    console.log(typeof country);
    console.log(typeof favArray);
    favArray.includes(country)
      ? setFavArray(favArray.filter((array) => array !== country))
      : console.log("don't remove");
  };

  return (
    <div>
      {favArray.map((place) => (
        <div>
          <label for='my-modal' class='btn modal-button glass'>
            {place}
          </label>
          <input type='checkbox' id='my-modal' class='modal-toggle' />
          <div class='modal'>
            <div class='modal-box'>
              <div className='text-2xl mb-5 font-serif'>
                Status... {overseasW?.weather?.[0]?.description}
              </div>
              <div className='text-2xl mb-5 font-serif'>
                It's {overseasW?.main?.temp}&#8451; in {country} now, but feels
                like {overseasW?.main?.feels_like} &#8451;.
              </div>
              <div className='text-2xl mb-5 font-serif'>
                The humidity there is now {overseasW?.main?.humidity}%.
              </div>
              <div class='modal-action'>
                <button class='btn gap-2' onClick={handleRemove}>
                  Remove from Favs
                </button>{" "}
                <label for='my-modal' class='btn btn-success'>
                  Got it!
                </label>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OverseasButtons;
