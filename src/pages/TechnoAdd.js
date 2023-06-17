export default function TechnoAdd() {
  return(
    <div className="techno-add">
      <h1>Add a techno</h1>
      <div>
        <form>
          <label htmlFor="techno-name">Name:</label>
          <br />
          <input type="text" name="" id="techno-name"></input>
          <br />
          <input type="submit" value ="Add Techno" />
        </form>
      </div>

    </div>
  )
}
