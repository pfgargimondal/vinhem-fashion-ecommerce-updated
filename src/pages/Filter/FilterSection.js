import { useState } from "react";
import { useFilter } from "../../context/FilterContext";

export default function FilterSection({ allFilterMappingdata, filterCategories }) {
  const { setColor, setFabric, setDesigner, setSize, setOccasion } = useFilter();
  const [selectedTheme, setSelectedTheme] = useState("");

  console.log(allFilterMappingdata);

  const toTitleCase = (str) =>
    str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

  const handleSelect = (filterType, value) => {
    switch (filterType.toLowerCase()) {
      case "color":
        setColor(value);
        break;
      
      case "fabric":
        setFabric(value);
        break;

      case "designer":
        setDesigner(value);
        break;

      case "size":
        setSize(value);
        break;

      case "occasion":
        setOccasion(value);
        break;

      default:
        break;
    }
  }

  return (
    <>
      <div className="dkewjriwehrnjhweijrwer mb-4">
        <div className="disenihrenjr mb-3 py-4 d-flex align-items-center justify-content-between">
          <h5 className="mb-0">Categories</h5>
          <i className="bi bi-chevron-down"></i>
        </div>

        <div className="deowjnkrwere bdfgsdfseewewrr">
          {filterCategories.map(filterCategory => (
            <div key={filterCategory.id} className="doewjkrnhweiurwer mb-2">
              <div class="main-catgry-filter radio-wrapper-5 pe-3">
                <div className="oijdmeiojewrer d-flex justify-content-between w-100 align-items-center">
                  <label htmlFor="doeklwrwer">{filterCategory.mainCategory_name}</label>

                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>

              <div className="sub-catgry-filter indiewjrwerewr">
                {filterCategory.sub_categories.map(sub_category => (
                  <div className="doewjroijwerwer">
                    <div key={sub_category.id} class="radio-wrapper-5 ps-2 pe-3 justify-content-between align-items-center">
                      <div className="doiwejirwer d-flex align-items-center">
                        <label htmlFor="cdsedfe" className="forCircle">
                          <input id="cdsedfe" type="radio" name="dasfe" />

                          <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                            >
                                <circle data-name="ellipse" cx={8} cy={8} r={8} />
                            </svg>
                          </span>
                        </label>

                        <label htmlFor="doeklwrwer">{sub_category.subCategories_name.replace(/\s*\(Boys\)|\s*\(Girls\)/gi, "")}</label>
                      </div>

                      <div className="oijdmeiojewrer">
                        <i class="fa-solid fa-plus"></i>
                      </div>
                    </div>

                    <div className="inside-sub-catgry-filter">
                      {sub_category.filter_categories.map(filter_category => (
                        <div key={filter_category.id} class="radio-wrapper-5 px-3 justify-content-between align-items-center">
                          <div className="doiwejirwer d-flex align-items-center">
                            <label htmlFor="cdsedfe" className="forCircle">
                              <input id="cdsedfe" type="radio" name="dasfe" />

                              <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3.5 w-3.5"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                >
                                    <circle data-name="ellipse" cx={8} cy={8} r={8} />
                                </svg>
                              </span>
                            </label>

                            <label htmlFor="doeklwrwer">{filter_category.filterCategories_name}</label>
                          </div>

                          <div className="oijdmeiojewrer">
                            <i class="fa-solid fa-plus"></i>
                          </div>
                        </div>
                      ))}                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>     

      {allFilterMappingdata?.map((FilterMappingdata, dvbfbxdfbg) => (
        <div key={FilterMappingdata.id} className="dkewjriwehrnjhweijrwer mb-4">
          <div className="disenihrenjr mb-3 py-4 d-flex align-items-center justify-content-between">
            <h5 className="mb-0">{toTitleCase(FilterMappingdata.filter_option)}</h5>
            <i className="bi bi-chevron-down"></i>
          </div>

          <div className="doewjkrnhweiurwer">
            {FilterMappingdata.filter_option.toLowerCase() === "color" ? (
              FilterMappingdata.colors?.map((colorObj, index) => {
                const colorValue = colorObj.color_name;
                const colorCode = colorObj.color_code;

                return (
                <div className="doewjkrnhweiurwer clor-fltr-optn osdmcfosjrserr sdfvgdfvrgrert">
                    <div id="content">
                        <label key={index} htmlFor={colorValue} className={`${(selectedTheme === colorCode) ? "clr-label" : ""} me-3 px-2 py-1`}>
                          <input
                              type="radio"
                              name={FilterMappingdata.filter_option}
                              id={colorValue}
                              className="colored-radio"
                              data-color={colorValue}
                              checked={selectedTheme === colorCode}
                              onChange={() => {
                                setSelectedTheme(colorCode);
                                handleSelect("color", colorValue);
                              }}
                              style={{
                                  backgroundColor: colorCode,
                                  border: `1px solid #b0bec5;`,
                                  width: "30px",
                                  height: "30px",
                                  borderRadius: "50%",
                                  cursor: "pointer",
                              }}
                          />

                          <span>{colorValue}</span>
                        </label>
                    </div>
                </div>
                );
              })
            ) : (
              FilterMappingdata.filter_values.split(",").map((item, indexdsvd) => (
                <div key={`${dvbfbxdfbg}-${indexdsvd}`} class="radio-wrapper-5">
                    <label htmlFor={`${dvbfbxdfbg}-${indexdsvd}`} className="forCircle">
                        <input
                        id={`${dvbfbxdfbg}-${indexdsvd}`}
                        type="radio"
                        name={FilterMappingdata.filter_option}
                        onChange={() => handleSelect(FilterMappingdata.filter_option, item.trim())}
                        />
                        <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                        >
                            <circle data-name="ellipse" cx={8} cy={8} r={8} />
                        </svg>
                        </span>
                    </label>
                    <label htmlFor={`${dvbfbxdfbg}-${indexdsvd}`}>{item.trim()}</label>
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </>
  );
}
