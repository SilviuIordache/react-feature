import { Component } from 'react';

class RCC extends Component {
  // simulate constructor
  constructor(props) {
    super(props);
    this.state = {
      dark: false,
    };
  }

  // simulate componentDidMount (useLayoutEffect in RFC)
  componentDidMount() {
    console.log('RCC: Before render');
  }

  // simulate componentDidUpdate (useEffect with dark dependency)
  componentDidUpdate(prevProps, prevState) {
    if (prevState.dark !== this.state.dark) {
      console.log('RCC: After render'); // This is logged after dark state changes
    }
  }

  // simulate componentWillUnmount (cleanup in useEffect)
  componentWillUnmount() {
    console.log('RCC: Before unmount'); // This is logged before the component is removed from the DOM
  }

  // simulate render
  toggleDarkMode = () => {
    this.setState((prevState) => ({ dark: !prevState.dark }));
  };

  render() {
    const { dark } = this.state;
    const theme = {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    };

    return (
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={this.toggleDarkMode}
        style={theme}
      >
        RCC
      </button>
    );
  }
}

export default RCC;
