import React from 'react'

import PreferedContact from '~layout/PreferedContact'
import Input from '~layout/Input'

export default class Newsletter extends React.PureComponent {
  state = {
    name: '',
    project: '',
    email: '',
    phone: '',
    preferedContact: '',
  }

  onChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  }

  onChangeProject = (event) => {
    this.setState({
      project: event.target.value,
    });
  }

  onChangePhone = (event) => {
    this.setState({
      phone: event.target.value,
    });
  }

  onChangePreferedContact = (event) => {
    this.setState({
      preferedContact: event.target.value,
    })
  }

  render() {
    const {
      name,
      project,
      email,
      phone,
      preferedContact,
    } = this.state

    const projects = [
      {
        label: 'project1',
        value: 1,
      },
      {
        label: 'project2',
        value: 2,
      },
    ]

    return (
      <React.Fragment>
        <Input type="text" value={name} placeholder="Name" onChange={this.onChangeName} />
        <Input type="select" value={project} placeholder="Where is your project at?" onChange={this.onChangeProject} options={projects} />
        <Input type="email" value={email} placeholder="Email Address" onChange={this.onChangeEmail} />
        <Input type="tel" value={phone} placeholder="Phone Number" onChange={this.onChangePhone} />
        <PreferedContact onChange={this.onChangePreferedContact} value={preferedContact} />
        <Input type="button" value="Send" />
      </React.Fragment>
    )
  }
}
