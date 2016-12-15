////Show a singe Recipes
///Should Implement Saving

var MockRecipe = {id:0, name:'dog', ingredients:[{name:"hi", id:3}, {name:"l", id: 5}]}





var Viewer = React.createClass({
　　getInitialState(){
	return{recipe: this.props.recipe}
  },
  render() {
    var ingredients = this.state.recipe.ingredients.slice();
    ingredients = ingredients.map(function(item){
	return <ShowIngredient key={item.id} id={item.id} value={item.name} />
    })
    
    return(
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
	　　<div className="well well-lg">
	　　　　<div className="viewer text-center">
              <div className="dis-cont">
	      <div className="display-header">
	      </div>
	      </div>
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">{this.state.recipe.name}</h3>
                </div>
                <div className="panel-body">
                  {ingredients}
	          <div className="btn btn-primary">Edit</div>
                </div>
              </div>
	    </div>
	　　</div>
	</div>
      </div>
    )
  }
})



var ShowIngredient = React.createClass({
  render() {
    return (
	<div　className="show-ingredient">
	  <label　className="title col-md-6">Ingredient {this.props.id}</label>
	  <div className="col-md-6">
	    {this.props.value}
	  </div>
	</div>
    );
  }
})





ReactDOM.render(
  <Viewer recipe={MockRecipe} />,
  document.getElementById('container')
)
