import { useState } from "react";


export const MeasurementForm = ({productDetails, showSizeModal, setShowSizeModal, mssrmntSbmtConfrm, setMssrmntSbmtConfrm}) => {
    const [activeGuide, setActiveGuide] = useState(null);
    const [showTabs, setShowTabs] = useState(false);


    const handleGuideClick = (item) => {
        setActiveGuide(activeGuide === item ? null : item);
    }


    const handleSizeModalClose = () => {   
        showTabs && setShowTabs(false);

        activeGuide && setActiveGuide(null);       

        setShowSizeModal(false);    
    }


    const guides = {
        aroundBust: {
          label: "Around Bust",
          img: "/images/around-bust.jpg",
          text: "Take this measurement over the fullest part of the bust and across the widest part of the back. The measuring tape should go horizontally all around your body",
        },
        shoulder: {
          label: "Shoulder",
          img: "/images/around-bust.jpg",
          text: "Measure from one shoulder point to the other across the back.",
        },
        aroundArm: {
          label: "Around Arm",
          img: "/images/around-bust.jpg",
          text: "Wrap the tape measure around the fullest part of your upper arm.",
        },
        frontNeckDepth: {
          label: "Front Neck Depth",
          img: "/images/around-bust.jpg",
          text: "Measure the depth from the shoulder down to the desired neckline point.",
        },
        backNeckDepth: {
          label: "Back Neck Depth",
          img: "/images/around-bust.jpg",
          text: "Measure the depth from the shoulder down the back neckline point.",
        },
        sleeveLength: {
          label: "Sleeve Length",
          img: "/images/around-bust.jpg",
          text: "Measure from shoulder tip to the desired sleeve end.",
        },
        sleeveStyle: {
          label: "Sleeve Style",
          img: "/images/around-bust.jpg",
          text: "Choose the sleeve style (full, half, puff, etc.).",
        },
        aroundAboveWaist: {
          label: "Around Above Waist",
          img: "/images/around-bust.jpg",
          text: "Wrap the tape measure around just above your waist.",
        },
        aroundHip: {
          label: "Around Hip",
          img: "/images/around-bust.jpg",
          text: "Wrap the tape measure around the fullest part of your hip.",
        },
        kurtaLength: {
          label: "Kurta Length",
          img: "/images/around-bust.jpg",
          text: "Measure from the shoulder to the desired length of the kurta.",
        },
        kurtaClosingSide: {
          label: "Kurta Closing Side",
          img: "/images/around-bust.jpg",
          text: "Specify the closing side for your kurta (left or right).",
        },
        kurtaClosingWith: {
          label: "Kurta Closing With",
          img: "/images/around-bust.jpg",
          text: "Specify what type of closing (zipper, hooks, buttons, etc.).",
        },
        aroundWaist: {
          label: "Around Waist",
          img: "/images/around-bust.jpg",
          text: "Wrap the tape measure around the narrowest part of your waist.",
        },
        aroundThigh: {
          label: "Around Thigh",
          img: "/images/around-bust.jpg",
          text: "Wrap the tape measure around the fullest part of your thigh.",
        },
        aroundKnee: {
          label: "Around Knee",
          img: "/images/around-bust.jpg",
          text: "Wrap the tape measure around your knee.",
        },
        aroundCalf: {
          label: "Around Calf",
          img: "/images/around-bust.jpg",
          text: "Wrap the tape measure around the fullest part of your calf.",
        },
        bottomLength: {
          label: "Bottom Length",
          img: "/images/around-bust.jpg",
          text: "Measure from the waist to the desired length of the bottom wear.",
        },
        bottomStyle: {
          label: "Bottom Style",
          img: "/images/around-bust.jpg",
          text: "Specify the style of the bottom wear (straight, flared, churidar, etc.).",
        },
        bottomClosingSide: {
          label: "Bottom Closing Side",
          img: "/images/around-bust.jpg",
          text: "Specify the closing side of your bottom wear.",
        },
        bottomClosingWith: {
          label: "Bottom Closing With",
          img: "/images/around-bust.jpg",
          text: "Specify what type of closing (zipper, hooks, drawstring, etc.).",
        },
    };

  return (
    <div>
      {showSizeModal && (
        <div className="customize-modal-backdrop position-fixed w-100 h-100"></div>
      )}

      {showSizeModal && (
        <div
          className={
            activeGuide
              ? "customize-modal customize-modal-msrmnt-img-expand overflow-hidden position-fixed bg-white"
              : "customize-modal overflow-hidden position-fixed bg-white"
          }
        >
          <div className="okdjeiwirwejrwerwer bg-white px-4 pt-4 mb-3">
            <h4>Customize Options</h4>

            <i
              className="bi position-absolute bi-x"
              id="co-close-btn"
              onClick={handleSizeModalClose}
            ></i>
          </div>

          <div className="row gx-0">
            <div className={activeGuide ? "col-lg-6" : "col-lg-12"}>
              <div className="dhwekrwerwer px-4 py-4">
                {/* <p className="mb-3">For further assistance, Chat with us <button className="btn btn-main"><i className="bi me-1 bi-whatsapp"></i> Chat With Us</button></p> */}

                <div className="idnjuigkjiwerwer">
                  <div className="ojaskmduihiwerwer mb-4 pb-2">
                    <div className="ihjnugherewr">
                      <img
                        src={
                          productDetails?.data?.product_image
                            ?.encoded_image_url_1
                        }
                        alt=""
                      />
                    </div>

                    <p>
                      {productDetails?.data?.product_name} -{" "}
                      {productDetails?.data?.PID}
                    </p>

                    <div className="mojdowemewr d-flex align-items-center">
                      <div className="vfeerwrwer me-2">
                        <label className="form-label mb-0">
                          Measurement Name*
                        </label>
                      </div>

                      <div className="qwererwerrr flex-grow-1">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>

                  <div className="dihwemoirjwerwer mb-5">
                    <h5 className="text-center mb-3">Select Measurement Fit</h5>

                    <div className="dowehrinwejikhriwer">
                      <div className="row align-items-center">
                        <div className="col-lg-5 doiwejrwer text-center">
                          <div className="radio-wrapper-5 justify-content-center">
                            <label htmlFor="example-5" className="forCircle">
                              <input
                                id="example-5"
                                type="radio"
                                name="radio-examples"
                              />

                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3.5 w-3.5"
                                  viewBox="0 0 16 16"
                                  fill="currentColor"
                                >
                                  <circle
                                    data-name="ellipse"
                                    cx={8}
                                    cy={8}
                                    r={8}
                                  />
                                </svg>
                              </span>
                            </label>

                            <label
                              htmlFor="example-5"
                              className="sdvwedeertweerr"
                            >
                              Body Fit
                            </label>
                          </div>

                          <p className="mb-0">
                            Garments will be tailored with 1-2 inch loosening
                          </p>
                        </div>

                        <div className="col-lg-2">
                          <span className="djknakknewrr mx-auto d-block position-relative bg-white">
                            OR
                          </span>
                        </div>

                        <div className="col-lg-5 doiwejrwer text-center">
                          <div className="radio-wrapper-5 justify-content-center">
                            <label htmlFor="example-5" className="forCircle">
                              <input
                                id="example-234"
                                type="radio"
                                name="radio-examples"
                              />

                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3.5 w-3.5"
                                  viewBox="0 0 16 16"
                                  fill="currentColor"
                                >
                                  <circle
                                    data-name="ellipse"
                                    cx={8}
                                    cy={8}
                                    r={8}
                                  />
                                </svg>
                              </span>
                            </label>

                            <label
                              htmlFor="example-234"
                              className="sdvwedeertweerr"
                            >
                              Garment Fit
                            </label>
                          </div>

                          <p className="mb-0">
                            Garments will be tailored exactly as per provided
                            measurements
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mb-3">Choose a size to be customized:</p>

                <div className="okemlkwnjrirwer mb-3 d-flex align-items-center">
                  {productDetails?.data?.product_inventory?.map(
                    (productSizeVal) => (
                      <div className="doeiwjrkweirwe">
                        <input
                          id="s1"
                          name="s-optns"
                          type="radio"
                          className="d-none position-absolute"
                        />
                        <label htmlFor="s1" className="text-center p-2">
                          <span className="mb-1">
                            {productSizeVal.selling_price}
                          </span>{" "}
                          <br /> {productSizeVal.size_name}
                        </label>
                      </div>
                    )
                  )}

                  {/* <div className="doeiwjrkweirwe">
                  <input id="s2" name="s-optns" type="radio" className="d-none position-absolute" />

                  <label htmlFor="s2" className="text-center p-2"><span className="mb-1">31,500</span> <br /> S</label>
                </div>

                <div className="doeiwjrkweirwe">
                  <input id="s3" name="s-optns" type="radio" className="d-none position-absolute" />

                  <label htmlFor="s3" className="text-center p-2"><span className="mb-1">31,500</span> <br /> L</label>
                </div>

                <div className="doeiwjrkweirwe">
                  <input id="s4" name="s-optns" type="radio" className="d-none position-absolute" />

                  <label htmlFor="s4" className="text-center p-2"><span className="mb-1">31,500</span> <br /> XL</label>
                </div>

                <div className="doeiwjrkweirwe">
                  <input id="s5" name="s-optns" type="radio" className="d-none position-absolute" />

                  <label htmlFor="s5" className="text-center p-2"><span className="mb-1">31,500</span> <br /> XXL</label>
                </div>

                <div className="doeiwjrkweirwe">
                  <input id="s6" name="s-optns" type="radio" className="d-none position-absolute" />

                  <label htmlFor="s6" className="text-center p-2"><span className="mb-1">36,225</span> <br /> 3XL</label>
                </div>

                <div className="doeiwjrkweirwe">
                  <input id="s7" name="s-optns" type="radio" className="d-none position-absolute" />

                  <label htmlFor="s7" className="text-center p-2"><span className="mb-1">36,225</span> <br /> 4XL</label>
                </div>

                <div className="doeiwjrkweirwe">
                  <input id="s8" name="s-optns" type="radio" className="d-none position-absolute" />

                  <label htmlFor="s8" className="text-center p-2"><span className="mb-1">36,225</span> <br /> 5XL</label>
                </div>

                <div className="doeiwjrkweirwe">
                  <input id="s9" name="s-optns" type="radio" className="d-none position-absolute" />

                  <label htmlFor="s9" className="text-center p-2"><span className="mb-1">36,225</span> <br /> 6XL</label>
                </div> */}
                </div>

                <p>Customized orders can take minimum 7 extra working days</p>

                <div className="idjnejwhrewrwerwer mt-4">
                  <h5 className="d-flex align-items-center justify-content-between">
                    <span>
                      <i className="bi me-1 bi-arrows-expand-vertical"></i> Do
                      you want to enter your measurements?
                    </span>

                    <div className="checkbox-wrapper-5 d-flex align-items-center">
                      <span>Yes</span>

                      <div className="check ms-2">
                        <input
                          id="check-5"
                          type="checkbox"
                          onChange={(e) => setShowTabs(e.target.checked)}
                        />

                        <label for="check-5"></label>
                      </div>
                    </div>
                  </h5>

                  {showTabs && (
                    <div className="doiewnjkrhwerwerwer mt-3">
                      <div className="dkewnjkhriwer">
                        <div className="d-flex align-items-center justify-content-between">
                          <h5 className="mb-0 px-3 py-2">Measurement Form</h5>

                          <div className="dlwenoijwelkjrwer">
                            <div className="radio-wrapper-7">
                              <label
                                className="radio-wrapper-7"
                                htmlFor="example-7"
                              >
                                <input
                                  id="example-7"
                                  type="radio"
                                  name="radio-examplessda"
                                  defaultChecked
                                />

                                <span>Inches</span>
                              </label>

                              <label
                                className="radio-wrapper-7"
                                htmlFor="example-fde"
                              >
                                <input
                                  id="example-fde"
                                  type="radio"
                                  name="radio-examplessda"
                                />

                                <span>Cm</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="asdasdaswwee mt-2">
                        <h5 className="text-center text-white py-2 mb-3">
                          Measurement
                        </h5>

                        <div className="ihkjnjdewrwer">
                          <form className="row">
                            <div className="col-lg-6 mb-3">
                              <label className="form-label">
                                Around Bust
                                <span
                                  className="enqury-guide"
                                  onClick={() => handleGuideClick("aroundBust")}
                                >
                                  <i className="fa-solid fa-info"></i>
                                </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter value"
                              />
                            </div>

                            <div className="col-lg-6 mb-3">
                              <label className="form-label">
                                Shoulder
                                <span
                                  className="enqury-guide"
                                  onClick={() => handleGuideClick("shoulder")}
                                >
                                  <i className="fa-solid fa-info"></i>
                                </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter value"
                              />
                            </div>

                            <div className="col-lg-6 mb-3">
                              <label className="form-label">
                                Around Arm
                                <span
                                  className="enqury-guide"
                                  onClick={() => handleGuideClick("aroundArm")}
                                >
                                  <i className="fa-solid fa-info"></i>
                                </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter value"
                              />
                            </div>

                            <div className="col-lg-6 mb-3">
                              <label className="form-label">
                                Front Neck Depth
                                <span
                                  className="enqury-guide"
                                  onClick={() =>
                                    handleGuideClick("frontNeckDepth")
                                  }
                                >
                                  <i className="fa-solid fa-info"></i>
                                </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter value"
                              />
                            </div>

                            <div className="col-lg-6 mb-3">
                              <label className="form-label">
                                Back Neck Depth
                                <span
                                  className="enqury-guide"
                                  onClick={() =>
                                    handleGuideClick("backNeckDepth")
                                  }
                                >
                                  <i className="fa-solid fa-info"></i>
                                </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter value"
                              />
                            </div>

                            <div className="col-lg-6 mb-3">
                              <label className="form-label">
                                Sleeve Length
                                <span
                                  className="enqury-guide"
                                  onClick={() =>
                                    handleGuideClick("sleeveLength")
                                  }
                                >
                                  <i className="fa-solid fa-info"></i>
                                </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter value"
                              />
                            </div>

                            <div className="col-lg-6 mb-3">
                              <label className="form-label">
                                Sleeve Style
                                <span
                                  className="enqury-guide"
                                  onClick={() =>
                                    handleGuideClick("sleeveStyle")
                                  }
                                >
                                  <i className="fa-solid fa-info"></i>
                                </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter value"
                              />
                            </div>

                            <div className="col-lg-6 mb-3">
                              <label className="form-label">
                                Around Above Waist
                                <span
                                  className="enqury-guide"
                                  onClick={() =>
                                    handleGuideClick("aroundAboveWaist")
                                  }
                                >
                                  <i className="fa-solid fa-info"></i>
                                </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter value"
                              />
                            </div>

                            <div className="col-lg-6 mb-3">
                              <label className="form-label">
                                Around Hip
                                <span
                                  className="enqury-guide"
                                  onClick={() => handleGuideClick("aroundHip")}
                                >
                                  <i className="fa-solid fa-info"></i>
                                </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter value"
                              />
                            </div>

                            <div className="col-lg-6 mb-3">
                              <label className="form-label">
                                Kurta Length
                                <span
                                  className="enqury-guide"
                                  onClick={() =>
                                    handleGuideClick("kurtaLength")
                                  }
                                >
                                  <i className="fa-solid fa-info"></i>
                                </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter value"
                              />
                            </div>

                            <div className="col-lg-6 mb-3">
                              <label className="form-label">
                                Kurta Closing Side
                                <span
                                  className="enqury-guide"
                                  onClick={() =>
                                    handleGuideClick("kurtaClosingSide")
                                  }
                                >
                                  <i className="fa-solid fa-info"></i>
                                </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter value"
                              />
                            </div>

                            <div className="col-lg-6 mb-3">
                              <label className="form-label">
                                Kurta Closing With
                                <span
                                  className="enqury-guide"
                                  onClick={() =>
                                    handleGuideClick("kurtaClosingWith")
                                  }
                                >
                                  <i className="fa-solid fa-info"></i>
                                </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter value"
                              />
                            </div>
                          </form>
                        </div>
                      </div>

                      <div className="asdasdaswwee mt-2">
                        <h5 className="text-center text-white py-2 mb-3">
                          Bottom Measurement
                        </h5>

                        <div className="ihkjnjdewrwer">
                          <form className="row">
                            <div className="col-lg-6 mb-3">
                              <label className="form-label">
                                Around Waist
                                <span
                                  className="enqury-guide"
                                  onClick={() =>
                                    handleGuideClick("aroundWaist")
                                  }
                                >
                                  <i className="fa-solid fa-info"></i>
                                </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter value"
                              />
                            </div>

                            <div className="col-lg-6 mb-3">
                              <label className="form-label">
                                Around Thigh
                                <span
                                  className="enqury-guide"
                                  onClick={() =>
                                    handleGuideClick("aroundThigh")
                                  }
                                >
                                  <i className="fa-solid fa-info"></i>
                                </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter value"
                              />
                            </div>

                            <div className="col-lg-6 mb-3">
                              <label className="form-label">
                                Around Knee
                                <span
                                  className="enqury-guide"
                                  onClick={() => handleGuideClick("aroundKnee")}
                                >
                                  <i className="fa-solid fa-info"></i>
                                </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter value"
                              />
                            </div>

                            <div className="col-lg-6 mb-3">
                              <label className="form-label">
                                Around Calf
                                <span
                                  className="enqury-guide"
                                  onClick={() => handleGuideClick("aroundCalf")}
                                >
                                  <i className="fa-solid fa-info"></i>
                                </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter value"
                              />
                            </div>

                            <div className="col-lg-6 mb-3">
                              <label className="form-label">
                                Bottom Length
                                <span
                                  className="enqury-guide"
                                  onClick={() =>
                                    handleGuideClick("bottomLength")
                                  }
                                >
                                  <i className="fa-solid fa-info"></i>
                                </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter value"
                              />
                            </div>

                            <div className="col-lg-6 mb-3">
                              <label className="form-label">
                                Bottom Style
                                <span
                                  className="enqury-guide"
                                  onClick={() =>
                                    handleGuideClick("bottomStyle")
                                  }
                                >
                                  <i className="fa-solid fa-info"></i>
                                </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter value"
                              />
                            </div>

                            <div className="col-lg-6 mb-3">
                              <label className="form-label">
                                Bottom Closing Side
                                <span
                                  className="enqury-guide"
                                  onClick={() =>
                                    handleGuideClick("bottomClosingSide")
                                  }
                                >
                                  <i className="fa-solid fa-info"></i>
                                </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter value"
                              />
                            </div>

                            <div className="col-lg-6 mb-3">
                              <label className="form-label">
                                Bottom Closing With
                                <span
                                  className="enqury-guide"
                                  onClick={() =>
                                    handleGuideClick("bottomClosingWith")
                                  }
                                >
                                  <i className="fa-solid fa-info"></i>
                                </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter value"
                              />
                            </div>
                          </form>
                        </div>
                      </div>

                      <div className="col-lg-12 mb-3">
                        <label className="form-label">
                          Additional customization requests here.
                        </label>

                        <textarea
                          name=""
                          className="form-control"
                          placeholder="Please specify any additional customization requests here."
                          style={{ height: "150px" }}
                        ></textarea>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {activeGuide && (
              <div className="col-lg-6">
                <div className="doienkwjrewewr p-5 pt-2">
                  <span
                    className="bck-form"
                    onClick={() => setActiveGuide(null)}
                  >
                    <i class="fa-solid me-1 fa-arrow-left-long"></i> Back To The
                    Form
                  </span>

                  <div className="dewnrkhwerwe">
                    <div className="text-center">
                      <img
                        src={guides[activeGuide]?.img}
                        className="img-fluid mb-3"
                        alt={activeGuide}
                      />
                    </div>

                    <p className="mb-0">{guides[activeGuide]?.text || ""}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="doiewnjkrhwerwerwer d-flex align-items-center justify-content-end px-4 pt-2 pb-3">
            <button
              onClick={() => setMssrmntSbmtConfrm(!mssrmntSbmtConfrm)}
              className="btn btn-main w-100"
            >
              Review & Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
