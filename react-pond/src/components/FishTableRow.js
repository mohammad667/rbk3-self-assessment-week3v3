class FishTableRow extends React.Component {
  constructor() {
    super();
    this.state = {
      showDescription: false
    };
  }

  // Currently, the image being displayed is hardcoded from tinyurl.com 
  render() {
    return (
      <div>
      <tr onClick={() => this.setState({showDescription: !this.state.showDescription})}>
        <td className="fish-name">Nemo</td>
        <td>
          <img src={this.fishData.image} />
        </td>
        {this.state.showDescription ? <td className="fish-description">Does anyone know where my dad is?</td> : null}
      </tr>
      </div>
    )
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTableRow.propTypes = {
  fish: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.FishTableRow = FishTableRow;
