




var Box = React.createClass({
　　getInitialState(){
	return{recipeName: ""}
  },
  handleNameChange(e){
    this.setState({recipeName:  e.target.value})
  },
  addRecipe(){

  },
  addIngredient(){

  },
  render() {
    return(
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <form className="form-horizontal">
	      <div className="form-group">
		<label className="col-md-2">Name</label>
	        <div className="col-md-10">
	          <input id="recipe-name" value={this.state.recipeName} onChange={this.handleNameChange} className="form-control" placeholder="Name" type="text"/>
	        </div>
	      </div>
	      <div className="form-group">
		<div className="col-md-2 col-md-offset-4">
	          <div className="btn btn-default" onClick={this.addRecipe}>Add</div>
		</div>
		<div className="col-md-2">
                  <div className="btn btn-default" onClick={this.addIngredient}>Add Ingredient</div>
		</div>
	      </div>
	    </form>
	</div>
      </div>
    )
  }
})




ReactDOM.render(
  <Box />,
  document.getElementById('container')
)
