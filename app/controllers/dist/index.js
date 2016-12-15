var MockRecipe = {name: 'dog', id: 0, ingredients: [{name:'dog',　id:0}]};

var EditRecipe = React.createClass({
　　getInitialState(){
	return{recipe: this.props.recipe}
  },
  handleNameChange(e){
    var recipe = this.state.recipe;
    recipe.name = e.target.value;
    this.setState({recipe:  recipe})
  },
  addIngredient(){
    var recipe = this.state.recipe;
    var n = recipe.ingredients.length;
    recipe.ingredients.push({id:n, name:""})
    this.setState({recipe: recipe})
  },
  saveRecipe(){

  },
  render() {

    var that = this;

    var ingredients = this.state.recipe.ingredients.map(function(item, i){
      
       var handleChange = function(e){
         var recipe = that.state.recipe;
         recipe.ingredients[i].name = e.target.value;
         that.setState({recipe: recipe});
       };
      
       return <Ingredient key={item.id} id={item.id} value={item.name} handleChange={handleChange} />
     })


    return(
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
	<div className="well well-lg">
          <form className="form-horizontal">
	      <div className="form-group">
		<label className="col-md-2">Name</label>
	        <div className="col-md-10">
	          <input id="recipe-name" value={this.state.recipe.name} onChange={this.handleNameChange} className="form-control" placeholder="Name" type="text"/>
	        </div>
	      </div>
　　　　　　　　　　　　　　<div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Ingredients</h3>
                  </div>
                  <div className="panel-body">
                    {ingredients}
                  </div>
               　</div>
	      <div className="form-group">
		<div className="col-md-2 col-md-offset-4">
	          <div className="btn btn-default" onClick={this.saveRecipe}>Save</div>
		</div>
		<div className="col-md-2">
                  <div className="btn btn-default" onClick={this.addIngredient}>Add Ingredient</div>
		</div>
	      </div>
	    </form>
	</div>
	</div>
      </div>
    )
  }
})






var Ingredient = React.createClass({
  render() {
    return (
	<div className="form-group">
	  <label　className="col-md-3">Ingredient {this.props.id}</label>
	  <div className="col-md-9">
	    <input id="recipe-name" value={this.props.childValue} onChange={this.props.handleChange} className="form-control" placeholder="Ingredient" type="text" />
	  </div>
	</div>
    );
  }
})


ReactDOM.render(
  <EditRecipe recipe={MockRecipe} />,
  document.getElementById('container')
)
