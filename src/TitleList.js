import React, { Component } from 'react';

class TitleList extends Component {

  constructor() {
    super()
    this.state = {
      titles: []
    }
  }

  componentDidMount() {
    fetch(`http://poetrydb.org/author/${this.props.author}/title`)
    .then(response => response.json())
    .then((json) => {
      console.log(json)
      this.setState({titles: json});
    })
    .catch(error=>{
      console.log('ERROR!', error);
    })
  }

  render() {
    const titleList = this.state.titles.map(obj=><p>{obj.title}</p>);
    return (
        <div>
          <h2>{this.props.author.charAt(0).toUpperCase()+this.props.author.slice(1)} Poems</h2>
          {titleList}
        </div>
    )
  }
}

export default TitleList;
