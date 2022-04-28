import React from 'react';

class Form extends React.Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };

  handelChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handelSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };
  handelLicenceChange = e => {
    console.log(e.currentTarget.checked);
    this.setState({ licence: e.currentTarget.checked });
  };

  reset = () => {
    this.setState({ name: '', tag: '', experience: 'junior', licence: false });
  };

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <label>
          ім'я{' '}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handelChange}
          />
        </label>
        <label>
          {' '}
          Кличка{' '}
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handelChange}
          />
        </label>

        <p>Ваш рівень:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handelChange}
            checked={this.state.experience === 'junior'}
          ></input>
          junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="meddle"
            onChange={this.handelChange}
            checked={this.state.experience === 'meddle'}
          ></input>
          meddle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handelChange}
            checked={this.state.experience === 'senior'}
          ></input>
          senior
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handelLicenceChange}
          ></input>
          Згоден з умовою
        </label>
        <button type="submit" disabled={!this.state.licence}>
          Відправити
        </button>
      </form>
    );
  }
}

export default Form;
