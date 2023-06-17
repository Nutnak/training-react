export default function TechnoAdd() {
  return (
    <div className="techno-add">
      <h1>Add a techno</h1>
      <div>
        <form>
          <label htmlFor="techno-name">Name:</label>
          <br />
          <input type="text" name="" id="techno-name"></input>
          <br />
          <label htmlFor="techno-category">Category:</label>
          <br />
          <select name="techno-category" id="techno-category">
            <option value="">Selectionnez une techno</option>
            <option value="front">Front</option>
            <option value="back">Back</option>
            <option value="fullstack">Fullstack</option>
            <option value="other">other</option>
          </select>
          <br />
          <label htmlFor="techno-description">Description:</label>
          <br />
          <textarea name="techno-descrition" id="techno-description" col="30" row="10"></textarea>
          <br />
          <input type="submit" value="Add Techno"/>
        </form>
      </div>

    </div>
  )
}
