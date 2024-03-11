/* eslint-disable react/prop-types */
function Temp({value, handleChange, type, dets}){
return(
    <div className="box">
        <input 
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={dets}
         />
    </div>
);
}

export default Temp;