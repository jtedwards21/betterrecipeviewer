var MockRecipes = [{id:0, name:'dog', ingredients:[{name:"hi", id:3}, {name:"l", id: 5}]},{id:0, name:'dog', ingredients:[{name:"hi", id:3}, {name:"l", id: 5}]},{id:0, name:'dog', ingredients:[{name:"hi", id:3}, {name:"l", id: 5}]}];






var Controller = React.createClass({
　　getInitialState(){
	return{recipes:　this.props.recipes, view: "menu"}
  },
  changeView(view, recipe){
    console.log(view);
  },
  render(){
    var current;

    if(this.state.view == "menu"){ current = <Menu recipes={this.state.recipes} changeView={this.changeView} />}

    return(<div className="row"><div className="col-md-6 col-md-offset-3"><div className="well well-lg">{current}</div></div></div>)
  }
})




var Menu = React.createClass({
　　getInitialState(){
	return{recipes: this.props.recipes}
  },
  deleteRecipe(i){
    console.log(i);
  },
  viewRecipe(i){
    var recipes = this.state.recipes;
    this.props.changeView("view", recipes[i]);
  },
  addRecipe(){
    var recipes = this.state.recipes;
    this.props.changeView("add", null);
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
	        <div className="btn btn-large btn-default" onClick={this.addRecipe}>
	        Add a Recipe</div>
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
  <Controller recipes={MockRecipes} />,
  document.getElementById('container')
)
