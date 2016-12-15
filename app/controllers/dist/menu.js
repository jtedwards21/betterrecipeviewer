

var MockRecipes = [{id:0, name:'dog'},{id:1, name:'dog'},{id:2, name:'dog'}]





var Menu = React.createClass({
　　getInitialState(){
	return{recipeName: "", ingredients: [{id:0, name:""}], recipes: this.props.recipes, currentRecipe: {}, display: false}
  },
  toggle(){
    this.props.toggle();
  },
  deleteRecipe(i){
    console.log(i);
  },
  viewRecipe(i){
    console.log(i);
  },
  render() {
    var recipes = this.state.recipes.slice();
    var that = this;

    recipes = recipes.map(function(r,i){
       var handleView = function(){
	 that.viewRecipe(i);
       }
　　　　　　　var handleDelete = function(){
	 that.deleteRecipe(i)
       }

      return <Recipe handleView={handleView} handleDelete={handleDelete} id={r.id} name={r.name} ingredients={'Hi'}/>
    })  

    return(
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
	　　<div className="well well-lg">
      　　    <div　className="menu">
	      <table className="table">
	        <thead></thead>
	        <tbody>
                  {recipes}
	        </tbody>
	      </table>
	      <div className="btn btn-large btn-default" onClick={this.toggle}>
	        Add a Recipe
	      </div>
	    </div>
	　　</div>
	</div>
      </div>
    )
  }
})

var Recipe = React.createClass({
  getInitialState(){
    return {}
  },
  render(){
    return (
      <tr>
	<th>{this.props.id}</th>
	<td>{this.props.name}</td>
        <td><span className="view-button"onClick={this.props.handleView} >u</span></td>
	<td><span className="delete-button" onClick={this.props.handleDelete} >x</span></td>
	<td>{this.props.ingredients}</td>
      </tr>
    );
  }
})









ReactDOM.render(
  <Menu recipes={MockRecipes} />,
  document.getElementById('container')
)
