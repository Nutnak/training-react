import { useState } from "react";
export default function TechnoAdd(props) {
const [techno, setTechno] = useState({
  technoname: '',
  technocategory: '',
  technodescription: '',
});

  const { handleAddTechno } = props;

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddTechno(techno)
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setTechno({...techno, [name]: value});
  }

  return (
    <div className="techno-add">
      <h1>Add a techno</h1>
      <div>
        <form onSubmit={(evt) => handleSubmit(evt)}>
          <label htmlFor="technoname">Name:</label>
          <br />
          <input type="text" name="technoname" id="technoname" value={techno.technoname} onChange={(evt) => handleChange(evt)}></input>
          <br />
          <label htmlFor="technocategory">Category:</label>
          <br />
          <select name="technocategory" id="technocategory" value={techno.technocategory} onChange={(evt) => handleChange(evt)}>
            <option value="">Selectionnez une techno</option>
            <option value="front">Front</option>
            <option value="back">Back</option>
            <option value="fullstack">Fullstack</option>
            <option value="other">other</option>
          </select>
          <br />
          <label htmlFor="technodescription">Description:</label>
          <br />
          <textarea name="technodescription" id="technodescription" col="30" row="10" value={techno.technodescription} onChange={(evt) => handleChange(evt)}></textarea>
          <br />
          <input type="submit" value="Add Techno"/>
        </form>
      </div>

    </div>
  )
}
