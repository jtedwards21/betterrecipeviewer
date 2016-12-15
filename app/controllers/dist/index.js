

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
	        <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title text-center">Recipe Box</h3>
                  </div>
                  <div className="panel-body">
                    <table className="table table-hover">
	        <thead>
		　　<tr>
		    <th>#</th>
		    <th>Name</th>
		    <th>View</th>
		    <th>Delete</th>
		  </tr>
		</thead>
	        <tbody>
                  {recipes}
	        </tbody>
	      </table>
                  </div>
                 </div>
	      
	      <div className="text-center">
	        <div className="btn btn-large btn-default" onClick={this.toggle}>
	        Add a Recipe</div>
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
	<th>{this.props.id + 1}</th>
	<td>{this.props.name}</td>
        <td><div className="btn btn-primary" onClick={this.props.handleView} >View</div></td>
	<td><div className="btn btn-danger" onClick={this.props.handleDelete} >Delete</div></td>
      </tr>
    );
  }
})









ReactDOM.render(
  <Menu recipes={MockRecipes} />,
  document.getElementById('container')
)
