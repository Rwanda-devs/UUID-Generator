import React, { Fragment } from "react";
import { FaRegCopy, FaDownload } from "react-icons/fa";
const Form = (props) => {
  return (
    <Fragment>
      <div id="form">
        <div id="form_title">UUID {props.version}</div>
        <div id="form_copy">
          <b>{props.uuid}</b>
          <button>
            <FaRegCopy className="icon" />
            Copy
          </button>
        </div>
        <b id="form_subtitle">Bulk more UUIDs {props.version}</b>
        <form>
          <input type="text" placeholder="Max 500"></input>
          <button>Generate</button>
        </form>
        <button id="download">
          <FaDownload className="icon" />
          Download to a file
        </button>
      </div>
    </Fragment>
  );
};
export default Form;
