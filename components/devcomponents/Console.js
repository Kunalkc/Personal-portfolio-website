import React from "react";

export default function Console(props){
  return(
    <div className="Console">
      <form>
        <textarea
            name="console"
            placeholder="cd <file_name>"
            className="consolebox"
            value = {props.consoleText}
            onChange = {props.textareachange}
            onKeyDown={props.handleKeyDown}
             />
      </form>
    </div>
  )
}