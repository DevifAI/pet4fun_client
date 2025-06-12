import React from "react";
import ProfileHeader from "./ProfileHeader";
import QuickAction from "./QuickAction";
import AccountSettings from "./AccountSettings";
import Activity from "./Activity";
import LogOut from "./LogOut";

const AccountContainer = () => {
  return (
    <div className="account-container">
      <div className="container">
        <ProfileHeader />
        <QuickAction />
        <AccountSettings />
        <Activity />
        <LogOut />
      </div>
    </div>
  );
};

export default AccountContainer;
