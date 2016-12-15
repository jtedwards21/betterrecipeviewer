////Show a singe Recipes
///Should Implement Saving

var MockRecipe = {id:0, name:'dog', ingredients:['Hi']}





var Viewer = React.createClass({
　　getInitialState(){
	return{recipe: this.props.recipe}
  },
  render() {
    var ingredients = this.state.recipe.ingredients.slice();
    ingredients.map(function(i){
	return <div className="ingredient">{i}</div>
    })
    
    return(
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
	　　<div className="well well-lg">
	　　　　<div className="viewer">
	      <div className="">{this.state.recipe.name}</div>
              <div className="ingredients-title">Ingredients</div>
              {ingredients}
	    </div>
	　　</div>
	</div>
      </div>
    )
  }
})




ReactDOM.render(
  <Viewer recipe={MockRecipe} />,
  document.getElementById('container')
)
