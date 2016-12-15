




var Box = React.createClass({
　　getInitialState(){
	return{recipeName: "", ingredients: [{id:0, name:""}]}
  },
  handleNameChange(e){
    this.setState({recipeName:  e.target.value})
  },
  addRecipe(){

  },
  addIngredient(){
    var ingredients = this.state.ingredients.slice();
    var n = ingredients.length;
    ingredients.push({id:n, name:""})
    this.setState({ingredients: ingredients})
  },
  render() {

    var that = this;

    var ingredients = this.state.ingredients.map(function(item, i){
      
       var handleChange = function(e){
	console.log(that.state.ingredients[i]);
　　　　　　　　　var ingredients = that.state.ingredients;
         ingredients[i].name = e.target.value;
         that.setState({ingredients: ingredients});
       };
      
       return <Ingredient key={item.id} id={item.id} value={item.name} handleChange={handleChange} />
     })


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
                {ingredients}
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






var Ingredient = React.createClass({
  render() {
    return (
	<div className="form-group">
	  <label　className="col-md-2">Ingredient {this.props.id}</label>
	  <div className="col-md-10">
	    <input id="recipe-name" value={this.props.childValue} onChange={this.props.handleChange} className="form-control" placeholder="Ingredient" type="text" />
	  </div>
	</div>
    );
  }
})


ReactDOM.render(
  <Box />,
  document.getElementById('container')
)
