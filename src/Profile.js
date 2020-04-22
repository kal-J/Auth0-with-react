import React, { Component } from "react";
import "./css/profile.css";

export default class Profile extends Component {
  state = {
    profile: null,
    error: "",
  };
  componentDidMount() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.props.auth.getProfile((profile, error) => {
      this.setState({ profile, error });
    });
  }
  render() {
    const { profile } = this.state;
    if (!profile) return null;
    return (
      <div className="profile">
        <h1>Profile</h1>
        <img src={profile.picture} alt="profile pic" />
        <div className="list-info">
          <div className="list">
            <span className="property">Name</span>
            <span>{profile.name}</span>
          </div>
          <div className="list">
            <span className="property">Given Name</span>
            <span>{profile.given_name}</span>
          </div>
          <div className="list">
            <span className="property">Family Name</span>
            <span>{profile.family_name}</span>
          </div>
          <div className="list">
            <span className="property">Nick Name</span>
            <span>{profile.nickname}</span>
          </div>
          <div className="list">
            <span className="property">Email</span>
            <span>{profile.email}</span>
          </div>
        </div>

      </div>
    );
  }
}
